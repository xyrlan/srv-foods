import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req) {
  try {
    const { body, isValidSignature } = await parseBody(req, process.env.NEXT_PUBLIC_SANITY_HOOK_SECRET);

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    // Revalida a tag usando o tipo de documento
    revalidateTag(body._type);

    // // Se o tipo for 'produto' e houver um slug, revalida a tag do produto também
    // if (body._type === "produto" && body.slug) {
    //   revalidateTag(`${body.slug}`);
    // }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
