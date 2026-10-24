import { FaShoppingCart } from "react-icons/fa";
type FoodCardProps  = {
  title: string;
  description: string;
  price: number;
  image: string;
};
function FoodCard({ title, description, price, image }: FoodCardProps ) {
  return (
    <article className="flex flex-col gap-4  overflow-hidden hover:-translate-y-1 rounded-4xl border-3 border-[#47474a] pb-4 duration-200 hover:border-[#6e3b14]">
      <img alt={title} src={image} className="h-50 w-70 object-cover"
 />
      <div className="flex flex-col gap-3 px-4">
        <div className="h-15">
          <h3 className="text-lg mt-1 mb-2 font-bold text-[#F5F1EB]">{title}</h3>
          <p className="text-sm text-[#A7A7B0]">{description} </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button
            className="h-8 w-8 cursor-pointer rounded-full bg-[#FF6D00] px-2 text-black transition-transform duration-200 hover:scale-135"
            type="button"
            aria-label={`افزودن ${title} به سبد خرید`}
          >
            <FaShoppingCart />
          </button>
          <div className="flex gap-1 font-bold text-[#FF6D00]">
            <span>{price.toLocaleString("fa-IR")}</span>
            <span>تومان</span>
          </div>
        </div>
      </div>
    </article>
  );
}
export default FoodCard;
