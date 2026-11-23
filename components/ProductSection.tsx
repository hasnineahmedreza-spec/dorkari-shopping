"use client";

import React from "react";
import { PRODUCTS } from "@/lib/sample-data";
import { ProductCard } from "./ProductCard";

export function ProductSection() {
  return (
    <section className="my-6">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-slate-900">সকল প্রয়োজনীয় পণ্য</h2>
        <p className="text-xs text-slate-600">আমাদের সেরা মানের প্রোডাক্ট কালেকশন</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {PRODUCTS.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </section>
  );
}
