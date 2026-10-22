import HeroSection from "@/components/HeroSection";
import FoodCategories from "@/components/FoodCategories";
import AboutSection from "@/components/AboutSection";
import PopularFoods from "@/components/PopularFoods";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <FoodCategories />
      <AboutSection />
      <PopularFoods />
    </div>
  );
}

export default HomePage;
