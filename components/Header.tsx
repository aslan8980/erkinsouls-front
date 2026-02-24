// components/Header.tsx
"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/">MENSTORE</Link>

        <nav className="flex gap-6">
          <Link href="/catalog">Shop</Link>
          <Link href="/wishlist">Wishlist</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/account">Account</Link>
        </nav>
      </div>
    </header>
  );
}