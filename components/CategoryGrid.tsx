"use client";

import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/lib/sample-data";

export function CategoryGrid() {
  return (
    <section className="my-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-slate-900">ক্যাটাগরি সমূহ</h2>
        <Link href="/categories" className="text-xs font-semibold text-emerald-700 hover:underline">
          সব দেখুন &rarr;
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/search?category=${encodeURIComponent(cat.name)}`}
            className="group p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-600 hover:shadow-sm transition-all text-center"
          >
            <h3 className="font-bold text-slate-800 text-sm group-hover:text-emerald-700 transition-colors">
              {cat.name}
            </h3>
            <p className="text-xs text-slate-500 mt-1">{cat.itemCountLabel}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
