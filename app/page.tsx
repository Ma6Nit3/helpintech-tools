import Hero from "@/components/layout/Hero";
import FeaturedCategories from "@/components/layout/FeaturedCategories";
import PopularTools from "@/components/layout/PopularTools";
import PlatformStats from "@/components/home/PlatformStats";
import WhyHelpInTech from "@/components/home/WhyHelpInTech";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      <Hero />

      <PlatformStats />

      <PopularTools />

      <FeaturedCategories />

      <WhyHelpInTech />

    </main>
  );
}