import Link from "next/link";
import { CATEGORIES } from "@/lib/sample-data";

export default function CategoriesPage() {
  return (
    <div className="my-6">
      <h1 className="text-xl font-bold text-slate-900 mb-4">সকল ক্যাটাগরি</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/search?category=${encodeURIComponent(cat.name)}`}
            className="p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-600 transition-colors"
          >
            <h2 className="font-bold text-sm text-slate-900">{cat.name}</h2>
            <p className="text-xs text-slate-500 mt-1">{cat.itemCountLabel}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
