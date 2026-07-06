import { NextResponse } from "next/server";
import { products } from "../../../lib/products";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("product") || "pack-completo";
  const product = products.find((item) => item.id === productId) || products[0];

  return NextResponse.json({
    status: "pending_setup",
    message: "Falta conectar Mercado Pago.",
    product
  });
}
