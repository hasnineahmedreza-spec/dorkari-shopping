"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { PRODUCTS } from "@/lib/sample-data";
import { formatBDT } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { StarIcon } from "@/components/icons";

export default function ProductDetailsPage() {
  const params = useParams<{ slug: string }>();
  const { addToCart } = useCart();

  const slug = params?.slug || "";
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="my-10 bg-white border border-slate-200 rounded-2xl p-6 text-center max-w-lg mx-auto">
        <h1 className="text-lg font-bold text-slate-900 mb-2">পণ্যটি খুঁজে পাওয়া যায়নি</h1>
        <p className="text-sm text-slate-500 mb-5">
          এই পণ্যটি হয়তো সরিয়ে ফেলা হয়েছে বা লিংকটি সঠিক নয়।
        </p>
        <Link
          href="/search"
          className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold px-5 py-2.5 rounded-lg"
        >
          সব পণ্য দেখুন
        </Link>
      </div>
    );
  }

  return (
    <div className="my-6 max-w-4xl mx-auto">
      <div className="mb-4 text-xs text-slate-500 flex items-center gap-1.5">
        <Link href="/" className="hover:text-emerald-700">
          হোম
        </Link>
        <span>/</span>
        <Link
          href={`/search?category=${encodeURIComponent(product.category)}`}
          className="hover:text-emerald-700"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-slate-800 font-semibold line-clamp-1">{product.title}</span>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative aspect-square bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 bg-emerald-700 text-white text-xs font-bold px-2.5 py-1 rounded">
              {product.badge}
            </span>
          )}
          <img
            src="/sample/product-placeholder.svg"
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <div className="text-xs font-semibold text-emerald-700 mb-1">
              {product.category}
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
              {product.title}
            </h1>

            <div className="flex items-center gap-1.5 mt-2 mb-4">
              <StarIcon className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-bold text-slate-800">{product.rating}</span>
              <span className="text-xs text-slate-500">({product.reviewCount} রিভিউ)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-2xl font-extrabold text-slate-900">
                {formatBDT(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  {formatBDT(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {product.shortDesc}
            </p>
          </div>

          <div className="space-y-2.5">
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold py-3 rounded-xl transition-colors"
            >
              কার্টে যোগ করুন
            </button>
            <Link
              href="/cart"
              className="block w-full text-center border border-emerald-700 text-emerald-800 hover:bg-emerald-50 text-sm font-bold py-2.5 rounded-xl transition-colors"
            >
              কার্টে যান ও অর্ডার করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
