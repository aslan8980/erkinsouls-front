import Link from "next/link";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-16">
      
      {/* IMAGE */}
      <div className="aspect-[3/4] bg-gray-100"></div>

      {/* INFO */}
      <div className="space-y-8">
        
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500">
          <Link href="/catalog" className="hover:underline">
            Shop
          </Link>{" "}
          / Product {params.id}
        </nav>

        {/* Title & Price */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">
            Product name
          </h1>
          <p className="text-lg">$99</p>
        </div>

        {/* Description */}
        <p className="text-gray-600 max-w-md">
          Minimal essential piece designed for everyday wear.
          Crafted with attention to detail and premium materials.
        </p>

        {/* Sizes */}
        <div>
          <p className="text-sm mb-3">Size</p>
          <div className="flex gap-3">
            {["S", "M", "L", "XL"].map((size) => (
              <button
  key={size}
  className="border px-4 py-2 text-sm min-w-[44px] hover:bg-black hover:text-white transition"
>
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <button className="w-full border border-black py-4 hover:bg-black hover:text-white transition">
            Add to cart
          </button>

          <button className="text-sm underline hover:opacity-60 transition">
            Add to wishlist
          </button>
        </div>

        {/* Details */}
        <div className="pt-8 border-t text-sm text-gray-600 space-y-2">
          <p>• Regular fit</p>
          <p>• Premium fabric</p>
          <p>• Made for everyday comfort</p>
        </div>

      </div>
    </div>
  );
}