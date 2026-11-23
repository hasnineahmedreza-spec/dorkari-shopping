"use client";

import React from "react";
import Link from "next/link";
import { PRODUCTS } from "@/lib/sample-data";
import { ProductCard } from "./ProductCard";

export function FlashSale() {
  const flashProducts = PRODUCTS.filter((p) => p.discountPercent && p.discountPercent > 0);

  return (
    <section className="my-6 bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>🔥</span> ফ্ল্যাশ সেল (সীমিত সময়)
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">সবচেয়ে জনপ্রিয় পণ্যে বিশেষ ছাড়</p>
        </div>
        <Link href="/search?discount=true" className="text-xs font-semibold text-emerald-700 hover:underline">
          সব অফার &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {flashProducts.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </section>
  );
}
