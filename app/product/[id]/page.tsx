export const dynamic = "force-dynamic";

import Link from "next/link";
import { getProduct } from "@/lib/api";
import AddToCartButton from "@/components/AddToCartButton";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-16">
      {/* IMAGE */}
      <div className="aspect-[3/4] bg-gray-100"></div>

      {/* INFO */}
      <div className="space-y-8">
        <nav className="text-sm text-gray-500">
          <Link href="/catalog" className="hover:underline">
            Shop
          </Link>{" "}
          / {product.title}
        </nav>

        <div>
          <h1 className="text-3xl font-semibold mb-2">
            {product.title}
          </h1>
          <p className="text-lg">${product.price}</p>
        </div>

        <p className="text-gray-600 max-w-md">
          {product.description}
        </p>

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

        <div className="space-y-4">
          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </div>
  );
}