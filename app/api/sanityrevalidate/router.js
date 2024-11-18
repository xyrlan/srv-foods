import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req) {
  try {
    // Parseia o corpo da requisição e valida a assinatura
    const { body, isValidSignature } = await parseBody(
      req,
      process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET
    );

    // Verifica se a assinatura é válida
    if (!isValidSignature) {
      return NextResponse.json({ error: "Invalid Signature" }, { status: 401 });
    }

    // Verifica se o tipo do documento foi enviado no corpo
    if (!body?._type) {
      return NextResponse.json({ error: "Bad Request: Missing _type" }, { status: 400 });
    }

    // Revalida a tag correspondente ao tipo de documento
    revalidateTag(body._type);

    // Retorna uma resposta de sucesso
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error) {
    // Captura e retorna erros inesperados
    console.error("Webhook processing error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export const GET = () => NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
