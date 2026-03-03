"use client";

import { useRouter } from "next/navigation";
import { removeFromCart } from "@/lib/api";

export default function RemoveButton({
  productId,
}: {
  productId: number;
}) {
  const router = useRouter();

  async function handleRemove() {
    await removeFromCart(productId);
    router.refresh();
  }

  return (
    <button
      onClick={handleRemove}
      className="text-sm underline hover:opacity-60 transition"
    >
      Remove
    </button>
  );
}