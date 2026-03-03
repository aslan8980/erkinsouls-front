import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full">
        <img
          src="https://images.unsplash.com/photo-1520975922325-6b8a0c49a8b4"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex flex-col justify-center ml-20 text-white">
          <h1 className="text-6xl font-semibold mb-6">
            Modern Menswear
          </h1>

          <p className="mb-8 text-lg">
            Timeless essentials for everyday confidence.
          </p>

          <Link
  href="/catalog"
  className="bg-white text-black px-8 py-3 inline-block"
>
  Shop Now
</Link>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="h-64 bg-neutral-200 rounded-lg mb-4"></div>
            <h3 className="font-medium">Black T-Shirt</h3>
            <p className="text-neutral-600">$29</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="h-64 bg-neutral-200 rounded-lg mb-4"></div>
            <h3 className="font-medium">Minimal Hoodie</h3>
            <p className="text-neutral-600">$59</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="h-64 bg-neutral-200 rounded-lg mb-4"></div>
            <h3 className="font-medium">Slim Fit Jeans</h3>
            <p className="text-neutral-600">$79</p>
          </div>
        </div>
      </section>
    </>
  );
}