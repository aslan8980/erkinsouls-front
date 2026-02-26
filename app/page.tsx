import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-24">
      
      {/* HERO */}
      <section className="flex flex-col items-center text-center pt-16 sm:pt-24">
  <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
    Modern Menswear
  </h1>

  <p className="text-gray-600 max-w-xl mb-10 px-2">
    Timeless essentials designed for everyday style.
  </p>

        <Link
          href="/catalog"
          className="inline-block border border-black px-10 py-4 text-sm hover:bg-black hover:text-white transition"
        >
          Shop now
        </Link>
      </section>

      {/* FEATURED PRODUCTS */}
      <section>
        <h2 className="text-2xl font-medium mb-8">
          Featured products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <Link
              key={id}
              href={`/product/${id}`}
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
        </div>
      </section>

    </div>
  );
}