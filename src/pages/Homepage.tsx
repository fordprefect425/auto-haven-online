
import { HeroSection } from "@/components/HeroSection";
import { FeaturedSlots } from "@/components/FeaturedSlots";
import { ArticlesPreview } from "@/components/ArticlesPreview";
import { TokenPromotion } from "@/components/TokenPromotion";

export default function Homepage() {
  return (
    <div>
      <HeroSection />
      <FeaturedSlots />
      <TokenPromotion />
      <ArticlesPreview />
    </div>
  );
}
