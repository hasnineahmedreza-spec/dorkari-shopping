"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { HomeIcon, GridIcon, CartIcon, UserIcon } from "./icons";

export function BottomNav() {
  const pathname = usePathname();
  const { totalItems } = useCart();

  const navs = [
    { label: "হোম", href: "/", icon: HomeIcon },
    { label: "ক্যাটাগরি", href: "/categories", icon: GridIcon },
    { label: "কার্ট", href: "/cart", icon: CartIcon, badge: totalItems },
    { label: "প্রোফাইল", href: "/account", icon: UserIcon },
  ];

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 px-2 py-1 flex justify-around items-center">
      {navs.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center py-1 px-3 text-[10px] relative ${
              isActive ? "text-emerald-700 font-bold" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <div className="relative">
              <Icon className="w-5 h-5 mb-0.5" />
              {!!item.badge && item.badge > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-emerald-700 text-white text-[9px] font-bold min-w-4 h-4 px-0.5 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </div>
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
