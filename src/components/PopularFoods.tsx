import FoodCard from "./FoodCard";
import { foods } from "@/data/foods";

function PopularFoods() {
  return (
    <section className="w-full py-14">
      <h2 className="mb-10 w-45 border-r-4 border-[#FF6D00] py-2 pr-4 text-right text-2xl font-bold text-[#F5F1EB]">
        غذاهای محبوب
      </h2>
      <div className="grid grid-cols-1 justify-items-center gap-4 min-[610px]:grid-cols-2 min-[935px]:grid-cols-3 xl:gap-6 min-[1875px]:grid-cols-6">
        {foods
          .filter((food) => food.isPopular)
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
  );
}
export default PopularFoods;
