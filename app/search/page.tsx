"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/lib/sample-data";
import { ProductCard } from "@/components/ProductCard";

function SearchContent() {
  const searchParams = useSearchParams();
  const q = (searchParams.get("q") || "").toLowerCase().trim();
  const category = (searchParams.get("category") || "").toLowerCase().trim();
  const discountOnly = searchParams.get("discount") === "true";

  const filtered = PRODUCTS.filter((p) => {
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q);
    const matchesCategory = !category || p.category.toLowerCase() === category;
    const matchesDiscount = !discountOnly || Boolean(p.discountPercent && p.discountPercent > 0);
    return matchesQuery && matchesCategory && matchesDiscount;
  });

  return (
    <div className="my-6">
      <h1 className="text-xl font-bold text-slate-900 mb-1">
        {q ? `"${q}" এর ফলাফল` : category ? category : "পণ্যসমূহ"}
      </h1>
      <p className="text-xs text-slate-500 mb-4">{filtered.length}টি পণ্য পাওয়া গেছে</p>

      {filtered.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-xl p-6 text-center text-sm text-slate-500">
          কোনো পণ্য পাওয়া যায়নি। অন্য শব্দ দিয়ে খুঁজে দেখুন।
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="my-6 text-sm text-slate-500">লোড হচ্ছে...</div>}>
      <SearchContent />
    </Suspense>
  );
}
