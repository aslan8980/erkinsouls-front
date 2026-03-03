"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-lg font-semibold tracking-wide">
          MENSTORE
        </Link>

        <nav className="flex gap-8 text-sm font-medium">
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
}