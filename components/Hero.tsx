"use client";

import React from "react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900 text-white rounded-2xl p-6 sm:p-10 my-4 shadow-md overflow-hidden relative">
      <div className="relative z-10 max-w-xl">
        <span className="inline-block bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          বিশ্বস্ত অনলাইন শপিং
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-3">
          প্রয়োজনের সেরা গ্যাজেট ও হোম প্রডাক্টস এক ঠিকানায়
        </h1>
        <p className="text-sm sm:text-base text-slate-200 mb-6 leading-relaxed">
          সেরা কোয়ালিটির HOCO Earbuds, ফাস্ট চার্জিং কেবল ও নিত্যপ্রয়োজনীয় হাউজহোল্ড আইটেম কিনুন আকর্ষণীয় ডিসকাউন্টে।
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/search"
            className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors shadow"
          >
            শপ করুন এখনই
          </Link>
          <a
            href="https://wa.me/8801690111182"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-2.5 rounded-lg text-sm border border-white/20 transition-colors"
          >
            হোয়াটসঅ্যাপে অর্ডার
          </a>
        </div>
      </div>
    </section>
  );
}
