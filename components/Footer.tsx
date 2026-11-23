"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-12 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-7 h-7 rounded bg-emerald-600 text-white font-bold flex items-center justify-center text-xs">
              DS
            </div>
            <span className="font-bold text-white text-base">Dorkari Shopping</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            প্রয়োজনের পণ্য, সহজ সমাধান। আমাদের লক্ষ্য সঠিক দামে কোয়ালিটি গ্যাজেট ও হোম আইটেম গ্রাহকের কাছে দ্রুত পৌঁছে দেওয়া।
          </p>
        </div>

        <div>
          <h4 className="font-bold text-white mb-2">দ্রুত লিংক</h4>
          <ul className="space-y-1.5 text-slate-400 text-xs">
            <li><Link href="/" className="hover:text-emerald-400">হোম</Link></li>
            <li><Link href="/categories" className="hover:text-emerald-400">ক্যাটাগরি</Link></li>
            <li><Link href="/cart" className="hover:text-emerald-400">কার্ট</Link></li>
            <li><Link href="/info" className="hover:text-emerald-400">সম্পর্কে ও নীতি</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-2">যোগাযোগ ও সহায়তা</h4>
          <p className="text-slate-400 text-xs leading-relaxed mb-2">
            যেকোনো প্রশ্ন বা অর্ডারের সহায়তায় সরাসরি আমাদের কল বা হোয়াটসঅ্যাপ করুন।
          </p>
          <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-3 py-1.5 rounded text-xs"
          >
            WhatsApp Support
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-4 text-[11px] text-slate-500">
        © {new Date().getFullYear()} Dorkari Shopping. All rights reserved.
      </div>
    </footer>
  );
}
