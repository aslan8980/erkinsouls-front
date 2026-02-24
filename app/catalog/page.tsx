// app/catalog/page.tsx
import Link from "next/link";

export default function CatalogPage() {
  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl mb-6">Catalog</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(12)].map((_, i) => (
          <Link
            key={i}
            href={`/product/${i + 1}`}
            className="border p-4"
          >
            Product {i + 1}
          </Link>
        ))}
      </div>
    </div>
  );
}