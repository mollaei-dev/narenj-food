import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories";

function FoodCategories() {
  return (
    <section className="w-full py-14">
      <h2 className="mb-10 w-45 border-r-4 border-[#FF6D00] py-2 pr-4 text-right text-2xl font-bold text-[#F5F1EB]">
        چی میل داری ؟
      </h2>
      <div className="grid grid-cols-1 justify-items-center gap-4 min-[370px]:grid-cols-2 min-[870px]:grid-cols-3 md:gap-4 lg:gap-4 xl:gap-6 2xl:grid-cols-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            description={category.description}
            image={category.image}
            reverse={index % 2 === 0}
            categoryId={category.id}
          />
        ))}
      </div>
    </section>
  );
}

export default FoodCategories;
