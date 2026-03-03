import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">
        Order Confirmed 🎉
      </h1>

      <p className="text-gray-500">
        Thank you for your purchase.
      </p>

      <Link
        href="/catalog"
        className="underline hover:opacity-60 transition"
      >
        Continue shopping
      </Link>
    </div>
  );
}