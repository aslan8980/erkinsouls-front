"use client";

import { useRouter } from "next/navigation";
import { updateCartQuantity } from "@/lib/api";

export default function QuantityControl({
  productId,
  quantity,
}: {
  productId: number;
  quantity: number;
}) {
  const router = useRouter();

  async function increase() {
    await updateCartQuantity(productId, quantity + 1);
    router.refresh();
  }

  async function decrease() {
    await updateCartQuantity(productId, quantity - 1);
    router.refresh();
  }

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={decrease}
        className="border px-3 py-1 hover:bg-black hover:text-white transition"
      >
        -
      </button>

      <span className="min-w-[20px] text-center">
        {quantity}
      </span>

      <button
        onClick={increase}
        className="border px-3 py-1 hover:bg-black hover:text-white transition"
      >
        +
      </button>
    </div>
  );
}