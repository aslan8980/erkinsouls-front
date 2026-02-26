"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold tracking-wide">
            MENSTORE
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/catalog" className="hover:opacity-60 transition">
              Shop
            </Link>
            <Link href="/wishlist" className="hover:opacity-60 transition">
              Wishlist
            </Link>
            <Link href="/account" className="hover:opacity-60 transition">
              Account
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4 text-sm">
            <Link href="/cart" className="hover:opacity-60 transition">
              Cart
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}