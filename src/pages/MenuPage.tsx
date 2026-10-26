import { Link } from "react-router";
import { categories } from "@/data/categories";
import FoodCard from "@/components/FoodCard";
import { foods } from "@/data/foods";

function MenuPage() {
  return (
    <div className="mt-2">
      <nav className="fixed z-50 flex gap-4 bg-[#1A1919] h-24 py-4 mt-1 border-t border-[#6c6c6c] w-full">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`#${category.id}`}
            className="mb-15 flex h-15 w-30 items-center justify-center rounded-full bg-[#353537a8] hover:bg-[#FF6D00] hover:text-[#000000]"
          >
            {category.title}
          </Link>
        ))}
      </nav>
      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="w-full scroll-mt-24 py-6"
        >
          <h2 className="mb-10 mt-20 w-45 border-r-4 border-[#FF6D00] py-2 pr-4 text-right text-2xl font-bold text-[#F5F1EB]">
            {category.title}
          </h2>
          <div className="grid grid-cols-1 justify-items-center gap-4 min-[570px]:grid-cols-2 min-[900px]:grid-cols-3 xl:gap-6 2xl:grid-cols-6">
            {foods
              .filter((food) => food.category === category.id)
              .map((food) => (
                <FoodCard
                  key={food.id}
                  title={food.name}
                  description={food.description}
                  price={food.price}
                  image={food.image}
                />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
export default MenuPage;
