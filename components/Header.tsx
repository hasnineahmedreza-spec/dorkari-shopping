"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { CartIcon, SearchIcon } from "./icons";

export function Header() {
  const { totalItems } = useCart();
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search");
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-3 py-2.5 flex items-center gap-3">
        <Link href="/" className="shrink-0 flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-sm">
            DS
          </div>
          <div className="leading-tight">
            <span className="font-bold text-slate-900 text-sm sm:text-base block">
              Dorkari Shopping
            </span>
            <span className="text-[11px] text-emerald-700 hidden sm:block">
              প্রয়োজনের পণ্য, সহজ সমাধান
            </span>
          </div>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="পণ্য খুঁজুন..."
              className="w-full pl-3.5 pr-10 py-2 text-sm rounded-lg border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-emerald-600"
            />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 text-slate-600 hover:text-emerald-700"
            >
              <SearchIcon className="w-4 h-4" />
            </button>
          </div>
        </form>

        <Link
          href="/cart"
          className="relative shrink-0 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-800"
          aria-label="Cart"
        >
          <CartIcon className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-emerald-700 text-white text-[11px] font-bold min-w-5 h-5 px-1 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
