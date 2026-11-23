import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="my-6 max-w-lg mx-auto bg-white border border-slate-200 rounded-2xl p-6">
      <h1 className="text-lg font-bold text-slate-900 mb-2">আমার অ্যাকাউন্ট</h1>
      <p className="text-sm text-slate-600 mb-4">
        Dorkari Shopping-এ স্বাগতম। অর্ডার বা প্রোডাক্ট সংক্রান্ত সহায়তার জন্য নিচের লিংকগুলো ব্যবহার করুন।
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/cart"
          className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2 rounded-lg"
        >
          কার্ট দেখুন
        </Link>
        <a
          href="https://wa.me/8801700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-slate-300 hover:bg-slate-50 text-slate-800 text-xs font-bold px-4 py-2 rounded-lg"
        >
          হোয়াটসঅ্যাপ সাপোর্ট
        </a>
      </div>
    </div>
  );
}
