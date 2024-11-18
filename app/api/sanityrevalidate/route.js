import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { webhookSecret } from "@/sanity/env";

export async function handler(req) {
  // Verifica se o método da requisição é POST
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
  }
  try {
    // Parseia o corpo da requisição e valida a assinatura
    const { body, isValidSignature } = await parseBody(
      req,
      webhookSecret
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

