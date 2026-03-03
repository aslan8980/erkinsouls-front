"use client";

import { useRouter } from "next/navigation";
import { createOrder } from "@/lib/api";

export default function CheckoutPage() {
  const router = useRouter();

  async function handleCheckout() {
    try {
      await createOrder();
      router.push("/success");
    } catch (error) {
      alert("Checkout failed");
    }
  }

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-semibold">Checkout</h1>

      <p className="text-gray-500">
        Review your order and confirm purchase.
      </p>

      <button
        onClick={handleCheckout}
        className="w-full border border-black py-4 hover:bg-black hover:text-white transition"
      >
        Place Order
      </button>
    </div>
  );
}