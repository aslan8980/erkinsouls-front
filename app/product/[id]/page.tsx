// app/product/[id]/page.tsx
"use client";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="px-6 py-10 grid md:grid-cols-2 gap-10">
      <div className="h-[400px] bg-gray-200 flex items-center justify-center">
        IMAGE
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl">Product {params.id}</h1>
        <p>$99.00</p>

        <div className="flex gap-2">
          {["S", "M", "L", "XL"].map((s) => (
            <button key={s} className="border px-4 py-2">
              {s}
            </button>
          ))}
        </div>

        <button className="border px-6 py-3 w-full">
          Add to cart
        </button>

        <button className="underline">
          Add to wishlist
        </button>
      </div>
    </div>
  );
}