import classicBurger from "@/assets/images/menu/fast-food/classic-burger.jpg";
import { FaShoppingCart } from "react-icons/fa";

function FoodCard() {
  return (
    <article className="flex flex-col gap-4 overflow-hidden rounded-4xl border-3 border-[#47474a] pb-4 hover:border-[#6e3b14]  transition-border duration-200">
      <img alt="برگر کلاسیک نارنج" src={classicBurger} />
      <div className="flex flex-col gap-3 px-4">
        <h3 className="text-lg font-bold text-[#F5F1EB]">برگر کلاسیک نارنج</h3>
        <p className="text-sm text-[#A7A7B0]">
          گوشت گریل شده ، کاهو ، گوجه ، سس مخصوص
        </p>
        <div className="flex justify-between items-center mt-3">
          <button
            className="h-8 w-8 cursor-pointer rounded-full bg-[#FF6D00] px-2 text-black hover:scale-135 transition-transform duration-200"
            type="button"
            aria-label="افزودن برگر کلاسیک نارنج به سبد خرید"
          >
            <FaShoppingCart />
          </button>
          <div className="flex gap-1 font-bold text-[#FF6D00]">
            <span>360,000</span>
            <span>تومان</span>
          </div>
        </div>
      </div>
    </article>
  );
}
export default FoodCard;
