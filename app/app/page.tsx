import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FlashSale } from "@/components/FlashSale";
import { ProductSection } from "@/components/ProductSection";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <CategoryGrid />
      <FlashSale />
      <ProductSection />
    </div>
  );
}
