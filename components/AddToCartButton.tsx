"use client";

import { addToCart } from "@/lib/api";

export default function AddToCartButton({
  productId,
}: {
  productId: number;
}) {
  return (
    <button
      onClick={() => addToCart(productId, 1)}
      className="w-full border border-black py-4 hover:bg-black hover:text-white transition"
    >
      Add to cart
    </button>
  );
}