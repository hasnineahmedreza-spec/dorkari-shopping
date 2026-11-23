"use client";

import React from "react";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatBDT } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { StarIcon } from "./icons";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const imgSrc =
    product.images && product.images.length > 0
      ? product.images[0]
      : "/sample/product-placeholder.svg";

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="relative aspect-square bg-slate-100 flex items-center justify-center overflow-hidden">
          {product.badge && (
            <span className="absolute top-2 left-2 z-10 bg-emerald-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">
              {product.badge}
            </span>
          )}
          <img
            src={imgSrc}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-3">
          <div className="text-[11px] text-emerald-700 font-semibold mb-1">
            {product.category}
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="font-bold text-slate-900 text-xs sm:text-sm line-clamp-2 hover:text-emerald-700 transition-colors leading-snug"
          >
            {product.title}
          </Link>

          <div className="flex items-center gap-1 mt-1.5 mb-2">
            <StarIcon className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-slate-800">{product.rating}</span>
            <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-extrabold text-slate-900">
              {formatBDT(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                {formatBDT(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-3 pt-0">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold py-2 rounded-lg transition-colors"
        >
          কার্টে যোগ করুন
        </button>
      </div>
    </div>
  );
}
