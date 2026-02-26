import Link from "next/link";

export default function CartPage() {
  return (
    <div className="grid gap-12 md:grid-cols-3">
      
      {/* ITEMS */}
      <div className="md:col-span-2 space-y-8">
        <h1 className="text-2xl font-semibold">Cart</h1>

        {[1, 2].map((id) => (
          <div
            key={id}
            className="flex gap-6 border-b pb-6"
          >
            {/* Image */}
            <div className="w-24 aspect-[3/4] bg-gray-100"></div>

            {/* Info */}
            <div className="flex-1 space-y-2">
              <p className="font-medium">Product name</p>
              <p className="text-sm text-gray-500">$99</p>

              {/* Quantity */}
              <div className="flex items-center gap-3 text-sm">
                <button className="border px-2 py-1">−</button>
                <span>1</span>
                <button className="border px-2 py-1">+</button>
              </div>
            </div>

            {/* Remove */}
            <button className="text-sm text-gray-400 hover:underline">
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="border p-4 sm:p-6 space-y-6 h-fit">
        <h2 className="text-lg font-medium">Summary</h2>

        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>$198</span>
        </div>

        <Link
          href="/checkout"
          className="block text-center border border-black py-3 hover:bg-black hover:text-white transition"
        >
          Checkout
        </Link>
      </div>

    </div>
  );
}