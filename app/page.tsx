import Hero from "@/components/layout/Hero";
import FeaturedCategories from "@/components/layout/FeaturedCategories";
import PopularTools from "@/components/layout/PopularTools";
import PlatformStats from "@/components/home/PlatformStats";
import WhyHelpInTech from "@/components/home/WhyHelpInTech";
import FeaturedTools from "@/components/home/FeaturedTools";
import RecentlyAddedTools from "@/components/home/RecentlyAddedTools";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">

      <Hero />

      <FeaturedTools />

      <RecentlyAddedTools />

      <FeaturedCategories />

      <PopularTools />
      
      <PlatformStats />
      
      <WhyHelpInTech />
    
    </main>
  );
}