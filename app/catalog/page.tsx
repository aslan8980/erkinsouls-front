import Link from "next/link";

export default function CatalogPage() {
  return (
    <div className="space-y-12">
      
      {/* HEADER */}
      <section>
        <h1 className="text-3xl font-semibold mb-2">Shop</h1>
        <p className="text-gray-600">
          Explore our collection of modern menswear.
        </p>
      </section>

      {/* FILTERS (UI ONLY) */}
      <section className="flex gap-6 text-sm border-b pb-6">
        <button className="hover:opacity-60 transition">All</button>
        <button className="hover:opacity-60 transition">Jackets</button>
        <button className="hover:opacity-60 transition">Shirts</button>
        <button className="hover:opacity-60 transition">Trousers</button>
      </section>

      {/* PRODUCTS GRID */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <Link
            key={i}
            href={`/product/${i + 1}`}
            className="group block"
          >
            <div className="aspect-[3/4] bg-gray-100 mb-4"></div>

            <div className="flex justify-between text-sm">
              <span className="group-hover:underline">
                Product name
              </span>
              <span className="text-gray-500">$99</span>
            </div>
          </Link>
        ))}
      </section>

    </div>
  );
}