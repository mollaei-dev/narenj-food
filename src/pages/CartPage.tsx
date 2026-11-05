import CartSummary from "@/components/CartSummary";
import FoodCard from "@/components/FoodCard";
import { FaCartShopping } from "react-icons/fa6";
import { useCartStore } from "@/store/cartStore";

function CartPage() {
  const cart = useCartStore((state) => state.cart);
  return (
    <div className="mt-10 xl:mt-20">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <FaCartShopping className="text-4xl text-[#FF6D00] xl:text-5xl" />
          <h1 className="text-4xl font-bold xl:text-5xl">سبد خرید </h1>
        </div>
        <div className="mt-7 flex w-full min-w-0 flex-col items-center gap-5 pl-0 sm:items-stretch lg:pl-101 xl:pl-110 2xl:pl-130">
          {cart.length === 0 ? (
            <div className="rounded-2xl w-full border border-[#3A3939] bg-[#222121] p-5">
              <p className="py-10 text-center text-xl sm:text-2xl font-bold text-[#FF6D00]">
                هنوز غذایی به سبد خرید اضافه نکرده‌اید !
              </p>
            </div>
          ) : (
            cart.map((food) => (
              <FoodCard
                key={food.id}
                foodID={food.id}
                title={food.name}
                description={food.description}
                price={food.price}
                image={food.image}
                variant="horizontal"
              />
            ))
          )}
        </div>
        <aside
          className={`${cart.length === 0 ? "pointer-events-none opacity-40" : ""} lg:fixed lg:top-52 lg:left-10 lg:w-97 xl:top-64 xl:left-15 xl:w-105 2xl:left-20 2xl:w-120`}
        >
          <CartSummary variant="large" />
        </aside>
      </div>
    </div>
  );
}
export default CartPage;
