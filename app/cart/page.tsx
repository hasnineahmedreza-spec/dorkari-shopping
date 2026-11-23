"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatBDT } from "@/lib/format";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (orderPlaced) {
    return (
      <div className="my-10 bg-white border border-emerald-200 rounded-2xl p-6 text-center max-w-lg mx-auto">
        <h1 className="text-xl font-bold text-emerald-800 mb-2">অর্ডার রিকোয়েস্ট গ্রহণ করা হয়েছে!</h1>
        <p className="text-sm text-slate-600 mb-5">
          Dorkari Shopping থেকে আপনার সাথে দ্রুত যোগাযোগ করা হবে।
        </p>
        <Link
          href="/"
          className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold px-5 py-2.5 rounded-lg"
        >
          হোমে ফিরে যান
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="my-10 bg-white border border-slate-200 rounded-2xl p-6 text-center max-w-lg mx-auto">
        <h1 className="text-lg font-bold text-slate-900 mb-2">আপনার কার্ট খালি</h1>
        <p className="text-sm text-slate-500 mb-5">
          পছন্দের পণ্য কার্টে যোগ করে এখান থেকে অর্ডার করতে পারবেন।
        </p>
        <Link
          href="/search"
          className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold px-5 py-2.5 rounded-lg"
        >
          পণ্য দেখুন
        </Link>
      </div>
    );
  }

  return (
    <div className="my-6 max-w-3xl mx-auto">
      <h1 className="text-xl font-bold text-slate-900 mb-4">শপিং কার্ট</h1>

      <div className="space-y-3 mb-6">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center justify-between gap-3"
          >
            <div>
              <h2 className="font-bold text-sm text-slate-900">{product.title}</h2>
              <p className="text-xs text-emerald-700 font-semibold mt-0.5">
                {formatBDT(product.price)} × {quantity} = {formatBDT(product.price * quantity)}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="w-7 h-7 rounded border border-slate-300 font-bold text-slate-700"
              >
                -
              </button>
              <span className="text-xs font-bold w-5 text-center">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="w-7 h-7 rounded border border-slate-300 font-bold text-slate-700"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-xs text-red-600 font-semibold ml-1"
              >
                বাতিল
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-500 block">মোট মূল্য (Subtotal)</span>
          <span className="text-lg font-extrabold text-slate-900">{formatBDT(subtotal)}</span>
        </div>
        <button
          onClick={() => {
            clearCart();
            setOrderPlaced(true);
          }}
          className="bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold px-5 py-2.5 rounded-lg"
        >
          অর্ডার কনফার্ম করুন
        </button>
      </div>
    </div>
  );
}
