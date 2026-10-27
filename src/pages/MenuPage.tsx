import { Link } from "react-router";
import { categories } from "@/data/categories";
import FoodCard from "@/components/FoodCard";
import { foods } from "@/data/foods";
import CartSummary from "@/components/CartSummary";

function MenuPage() {
  return (
    <div>
      <nav className="fixed top-22 right-3 sm:right-7 md:right-10  xl:right-15 2xl:right-20 z-49 flex h-24 w-full gap-1 md:gap-4 bg-[#1A1919] py-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`#${category.id}`}
            className="mb-15 flex h-15 min-[890px]: w-30 min-[890px]:w-30 items-center justify-center rounded-full bg-[#353537a8] hover:bg-[#FF6D00] hover:text-[#000000]"
          >
            {category.title}
          </Link>
        ))}
      </nav>
      <div className="mt-15 gap-6">
        <aside className="fixed top-82 left-10 hidden w-80 min-[950px]:block xl:left-15 2xl:left-20">
          <CartSummary />
        </aside>
        <div className="w-full min-w-0 pl-0 min-[950px]:pl-84 min-[1200px]:pl-84">
          {categories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="w-full scroll-mt-24 py-6"
            >
              <h2 className="mt-20 mb-10 w-45 border-r-4 border-[#FF6D00] py-2 pr-4 text-right text-2xl font-bold text-[#F5F1EB]">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 justify-items-center gap-4 min-[480px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1600px]:grid-cols-4 xl:gap-4">
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
      </div>
    </div>
  );
}
export default MenuPage;
