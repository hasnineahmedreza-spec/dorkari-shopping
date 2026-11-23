export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewCount: number;
  soldCount: number;
  image: string;
  badge?: string;
  shortDesc: string;
  specs: string[];
  inStock: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  itemCountLabel: string;
}

export const CATEGORIES: CategoryItem[] = [
  { id: "1", name: "TWS Earbuds", slug: "tws-earbuds", itemCountLabel: "প্রিমিয়াম অডিও" },
  { id: "2", name: "Cables & Chargers", slug: "cables-chargers", itemCountLabel: "ফাস্ট চার্জিং" },
  { id: "3", name: "Smart Gadgets", slug: "smart-gadgets", itemCountLabel: "ডেইলি স্মার্ট" },
  { id: "4", name: "Home & Cleaning", slug: "home-cleaning", itemCountLabel: "সহজ সমাধান" },
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    slug: "hoco-eq34-plus-tws-earbuds",
    title: "HOCO EQ34 Plus TWS Wireless Earbuds — Crystal Sound & Low Latency",
    category: "TWS Earbuds",
    price: 1150,
    originalPrice: 1490,
    discountPercent: 23,
    rating: 4.9,
    reviewCount: 86,
    soldCount: 240,
    image: "/sample/hoco-eq34-plus.jpg",
    badge: "Best Seller",
    shortDesc: "দৈনন্দিন কল, গান ও মিউজিক শোনার জন্য স্পষ্ট সাউন্ড, আরামদায়ক ফিট এবং দীর্ঘ ব্যাটারি ব্যাকআপ।",
    specs: [
      "Bluetooth 5.3 স্থিতিশীল কানেকশন",
      "স্পষ্ট ভয়েস কল ও ব্যালেন্সড সাউন্ড",
      "পকেট-ফ্রেন্ডলি চার্জিং কেস",
      "Android ও iOS উভয় ফোনে সহজে কানেক্ট হয়",
    ],
    inStock: true,
  },
  {
    id: "prod-2",
    slug: "4-in-1-fast-charging-data-cable",
    title: "4-in-1 Multi Fast Charging & Data Cable — Heavy Duty Braided",
    category: "Cables & Chargers",
    price: 490,
    originalPrice: 650,
    discountPercent: 25,
    rating: 4.8,
    reviewCount: 64,
    soldCount: 195,
    image: "/sample/cable-4in1.jpg",
    badge: "Flash Deal",
    shortDesc: "একাধিক পোর্টের সুবিধা সহ টেকসই ব্রেইডেড কেবল—ভ্রমণ ও দৈনন্দিন চার্জিংয়ের ঝামেলা কমায়।",
    specs: [
      "এক কেবলে একাধিক ডিভাইস সাপোর্ট",
      "টেকসই ব্রেইডেড আউটার লেয়ার",
      "ফাস্ট চার্জিং ও ডেটা ট্রান্সফার সাপোর্ট",
      "বাড়ি, অফিস বা ট্রাভেলের জন্য পারফেক্ট",
    ],
    inStock: true,
  },
  {
    id: "prod-3",
    slug: "111-inch-extendable-microfiber-duster",
    title: "111\" Extendable Microfiber Duster — High Reach Ceiling & Fan Cleaner",
    category: "Home & Cleaning",
    price: 690,
    originalPrice: 890,
    discountPercent: 22,
    rating: 4.9,
    reviewCount: 52,
    soldCount: 160,
    image: "/sample/microfiber-duster.jpg",
    badge: "Top Pick",
    shortDesc: "উঁচু সিলিং ফ্যান, আলমারির কোণা ও জানালার ধুলো মই ছাড়াই সহজে পরিষ্কার করার এক্সটেন্ডেবল ডাস্টার।",
    specs: [
      "১১১ ইঞ্চি পর্যন্ত লম্বা করা যায়",
      "সূক্ষ্ম ধুলো আটকে রাখার মাইক্রোফাইবার হেড",
      "হালকা ও সহজে গ্রিপ করার হ্যান্ডেল",
      "ঘরের দৈনন্দিন পরিচ্ছন্নতার সহজ সমাধান",
    ],
    inStock: true,
  },
  {
    id: "prod-4",
    slug: "magnetic-desk-phone-stand-holder",
    title: "Foldable Desk Phone Stand Holder — Ergonomic Angle for Work & Video",
    category: "Smart Gadgets",
    price: 450,
    originalPrice: 590,
    discountPercent: 24,
    rating: 4.7,
    reviewCount: 39,
    soldCount: 118,
    image: "/sample/desk-stand.jpg",
    shortDesc: "কাজ, ক্লাস বা ভিডিও দেখার সময় ফোন সুবিধাজনক অ্যাঙ্গেলে রাখার ফোল্ডেবল ডেস্ক হোল্ডার।",
    specs: [
      "অ্যাডজাস্টেবল ভিউয়িং অ্যাঙ্গেল",
      "ফোল্ড করে সহজে ব্যাগে রাখা যায়",
      "অ্যান্টি-স্লিপ প্যাড সুরক্ষা",
      "স্মার্টফোন ও হালকা ট্যাবলেটের উপযোগী",
    ],
    inStock: true,
  },
];
