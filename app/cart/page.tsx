"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatBDT } from "@/lib/format";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const deliveryCharge = cart.length > 0 ? 60 : 0;
  const grandTotal = subtotal + deliveryCharge;

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    let message = `*Dorkari Shopping — নতুন অর্ডার*\n\n`;
    message += `*গ্রাহকের নাম:* ${customerName}\n`;
    message += `*মোবাইল নম্বর:* ${phone}\n`;
    message += `*ঠিকানা:* ${address}\n\n`;
    message += `*অর্ডারকৃত পণ্যসমূহ:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.product.title} x ${item.quantity} = ${formatBDT(
        item.product.price * item.quantity
      )}\n`;
    });

    message += `\n*সাবটোটাল:* ${formatBDT(subtotal)}`;
    message += `\n*ডেলিভারি চার্জ:* ${formatBDT(deliveryCharge)}`;
    message += `\n*সর্বমোট:* ${formatBDT(grandTotal)}\n\n`;
    message += `দয়া করে অর্ডারটি কনফার্ম করুন।`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/8801690111182?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="my-10 bg-white border border-slate-200 rounded-2xl p-8 text-center max-w-lg mx-auto">
        <h1 className="text-xl font-bold text-slate-900 mb-2">আপনার কার্ট খালি</h1>
        <p className="text-sm text-slate-500 mb-6">
          কার্টে এখনো কোনো পণ্য যোগ করা হয়নি।
        </p>
        <Link
          href="/"
          className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors"
        >
          পণ্য কিনুন
        </Link>
      </div>
    );
  }

  return (
    <div className="my-6 max-w-4xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6">
        আপনার শপিং কার্ট
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 divide-y divide-slate-100">
            {cart.map((item) => (
              <div
                key={item.product.id}
                className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-sm leading-snug">
                    {item.product.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1">
                    একক মূল্য: {formatBDT(item.product.price)}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-slate-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-xs font-bold text-slate-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="px-2.5 py-1 text-slate-600 hover:bg-slate-100 font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-xs text-rose-600 font-semibold hover:underline"
                  >
                    মুছুন
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={clearCart}
              className="text-xs text-slate-500 hover:text-rose-600 font-medium"
            >
              সব খালি করুন
            </button>
            <Link
              href="/"
              className="text-xs text-emerald-700 font-bold hover:underline"
            >
              + আরও পণ্য যোগ করুন
            </Link>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 h-fit space-y-5">
          <h2 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-3">
            অর্ডার সামারি
          </h2>

          <div className="space-y-2 text-sm text-slate-600">
            <div className="flex justify-between">
              <span>পণ্য মূল্য</span>
              <span className="font-semibold text-slate-900">
                {formatBDT(subtotal)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>ডেলিভারি চার্জ</span>
              <span className="font-semibold text-slate-900">
                {formatBDT(deliveryCharge)}
              </span>
            </div>
            <div className="border-t border-slate-100 pt-2 flex justify-between font-extrabold text-slate-900 text-base">
              <span>সর্বমোট</span>
              <span className="text-emerald-700">{formatBDT(grandTotal)}</span>
            </div>
          </div>

          <form onSubmit={handleWhatsAppOrder} className="space-y-3 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                আপনার নাম *
              </label>
              <input
                type="text"
                required
                placeholder="যেমন: আব্দুর রহমান"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                মোবাইল নম্বর *
              </label>
              <input
                type="tel"
                required
                placeholder="01XXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                পূর্ণাঙ্গ ঠিকানা *
              </label>
              <textarea
                required
                rows={2}
                placeholder="বাসা/রোড নম্বর, এলাকা, থানা, জেলা"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold py-3 rounded-xl transition-colors shadow-sm"
            >
              WhatsApp-এ অর্ডার কনফার্ম করুন
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
