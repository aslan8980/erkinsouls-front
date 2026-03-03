export const dynamic = "force-dynamic";

import Link from "next/link";
import { getCart } from "@/lib/api";

export default async function CartPage() {
  const cart = await getCart();

  if (!cart.length) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold">Your Cart</h1>
        <p className="text-gray-500">Your cart is empty.</p>
        <Link
          href="/catalog"
          className="underline hover:opacity-60 transition"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  const total = cart.reduce(
    (sum: number, item: any) =>
      sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-semibold">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item: any) => (
          <div
            key={item.product.id}
            className="flex justify-between border-b pb-6"
          >
            <div>
              <p className="font-medium">
                {item.product.title}
              </p>
              <p className="text-sm text-gray-500">
                ${item.product.price} × {item.quantity}
              </p>
            </div>

            <p className="font-medium">
              $
              {(item.product.price * item.quantity).toFixed(
                2
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-lg font-semibold pt-6 border-t">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <Link
        href="/checkout"
        className="block w-full text-center border border-black py-4 hover:bg-black hover:text-white transition"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}