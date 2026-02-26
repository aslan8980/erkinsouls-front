export default function CheckoutPage() {
  return (
    <div className="grid md:grid-cols-3 gap-12">
      
      {/* FORM */}
      <div className="md:col-span-2 space-y-10">
        <h1 className="text-2xl font-semibold">Checkout</h1>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Contact</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-3 text-sm"
          />
        </section>

        {/* Delivery */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Delivery</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              placeholder="First name"
              className="border px-4 py-3 text-sm"
            />
            <input
              placeholder="Last name"
              className="border px-4 py-3 text-sm"
            />
          </div>

          <input
            placeholder="Address"
            className="w-full border px-4 py-3 text-sm"
          />

          <div className="grid sm:grid-cols-3 gap-4">
            <input
              placeholder="City"
              className="border px-4 py-3 text-sm"
            />
            <input
              placeholder="Postal code"
              className="border px-4 py-3 text-sm"
            />
            <input
              placeholder="Country"
              className="border px-4 py-3 text-sm"
            />
          </div>
        </section>

        {/* Payment placeholder */}
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Payment</h2>

          <div className="border p-4 text-sm text-gray-500">
            Payment integration coming soon
          </div>
        </section>

        <button className="w-full border border-black py-4 hover:bg-black hover:text-white transition">
          Place order
        </button>
      </div>

      {/* SUMMARY */}
      <div className="border p-6 space-y-6 h-fit">
        <h2 className="text-lg font-medium">Order summary</h2>

        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>$198</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between font-medium pt-4 border-t">
          <span>Total</span>
          <span>$198</span>
        </div>
      </div>

    </div>
  );
}