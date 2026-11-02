import CartSummary from "@/components/CartSummary";
import FoodCard from "@/components/FoodCard";
import { FaCartShopping } from "react-icons/fa6";
import { foods } from "@/data/foods";

function CartPage() {
  return (
    <div className="mt-10 xl:mt-20">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <FaCartShopping className="text-4xl text-[#FF6D00] xl:text-5xl" />
          <h1 className="text-4xl font-bold xl:text-5xl">سبد خرید </h1>
        </div>
        {/* <p className="text-lg text-[#A7A7B0]">سبد خرید شما خالی است </p> */}
        <div className="mt-7 flex w-full min-w-0 flex-col items-center gap-5 pl-0 sm:items-stretch lg:pl-101 xl:pl-110 2xl:pl-130">
          {foods
            .filter((food) => food.id < 4)
            .map((food) => (
              <div
                key={food.id}
                className="flex min-h-47 w-full justify-center sm:justify-stretch"
              >
                <FoodCard
                  title={food.name}
                  description={food.description}
                  price={food.price}
                  image={food.image}
                  variant="horizontal"
                />
              </div>
            ))}
        </div>
        <aside className="lg:fixed lg:top-52 lg:left-10 lg:w-97 xl:top-64 xl:left-15 xl:w-105 2xl:left-20 2xl:w-120">
          <CartSummary variant="large" />
        </aside>
      </div>
    </div>
  );
}
export default CartPage;
