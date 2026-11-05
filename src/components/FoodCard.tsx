import { useCartStore } from "@/store/cartStore";
import { FaShoppingCart } from "react-icons/fa";
type FoodCardProps = {
  foodID: number;
  title: string;
  description: string;
  price: number;
  image: string;
  variant?: "default" | "horizontal";
};
function FoodCard({
  foodID,
  title,
  description,
  price,
  image,
  variant = "default",
}: FoodCardProps) {
  return (
    <article
      className={`flex w-full max-w-70 flex-col pb-4 ${
        variant === "horizontal"
          ? "rounded-2xl border border-[#3A3939] bg-[#222121] px-0 min-[577px]:max-w-full min-[577px]:flex-row min-[577px]:px-4 min-[577px]:py-8 2xl:px-8"
          : "rounded-4xl border-3 border-[#47474a] duration-200 hover:-translate-y-1 hover:border-[#6e3b14]"
      } gap-4 overflow-hidden`}
    >
      <img
        alt={title}
        src={`${import.meta.env.BASE_URL}${image}`}
        className={`max-h-50 ${
          variant === "horizontal"
            ? "rounded-2xl min-[577px]:h-35 min-[577px]:w-45 2xl:h-40 2xl:w-50"
            : "w-full min-[375px]:h-50"
        } object-cover object-center`}
      />
      <div
        className={`flex flex-col ${
          variant === "horizontal"
            ? "w-full items-center justify-between min-[577px]:flex-row 2xl:px-10"
            : ""
        } gap-3 px-4`}
      >
        <div className="h-15">
          <h3
            className={`mt-1 mb-2 ${
              variant === "horizontal" ? "text-xl 2xl:text-2xl" : "text-lg"
            } font-bold text-[#F5F1EB]`}
          >
            {title}
          </h3>
          <p
            className={`${
              variant === "horizontal" ? "lg:text-base 2xl:text-xl" : "text-sm"
            } text-[#A7A7B0]`}
          >
            {description}
          </p>
        </div>
        <div
          className={`flex items-center justify-between gap-5 ${
            variant === "horizontal"
              ? "mt-5 w-full min-[577px]:mt-0 min-[577px]:w-auto min-[577px]:flex-col-reverse"
              : "mt-4"
          } `}
        >
          <button
            className="h-8 w-8 cursor-pointer rounded-full bg-[#FF6D00] px-2 text-black transition-transform duration-200 hover:scale-135"
            type="button"
            aria-label={`افزودن ${title} به سبد خرید`}
          >
            <FaShoppingCart />
          </button>
          <div
            className={`flex gap-1 ${variant === "horizontal" ? "2xl:text-xl" : ""} font-bold text-[#FF6D00]`}
          >
            <span>{price.toLocaleString("fa-IR")}</span>
            <span>تومان</span>
          </div>
        </div>
      </div>
    </article>
  );
}
export default FoodCard;
