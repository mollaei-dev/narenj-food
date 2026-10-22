import FoodCard from "./FoodCard";
import classicBurger from "@/assets/images/menu/fast-food/classic-burger.jpg";
import specialPizza from "@/assets/images/menu/fast-food/special-pizza.jpg";
import koobideh from "@/assets/images/menu/iranian-food/koobideh-kebab.jpg";
import zereshkPolo from "@/assets/images/menu/iranian-food/zereshk-polo.jpg";
import tahchin from "@/assets/images/menu/iranian-food/tahchin-chicken.jpg";
import ghormeSabzi from "@/assets/images/menu/iranian-food/ghorme-sabzi.jpg";
const popularFoods = [
  {
    id: 1,
    name: "کباب کوبیده",
    description: "گوشت چرخ‌کرده، برنج زعفرانی، گوجه کبابی",
    price: 320000,
    image: koobideh,
  },
  {
    id: 2,
    name: "زرشک‌پلو با مرغ",
    description: "برنج زعفرانی، زرشک، مرغ و زعفران",
    price: 300000,
    image: zereshkPolo,
  },
  {
    id: 3,
    name: "قرمه‌سبزی",
    description: "سبزی خورشتی، گوشت، لوبیا قرمز و لیموعمانی",
    price: 280000,
    image: ghormeSabzi,
  },
  {
    id: 4,
    name: "ته‌چین مرغ",
    description: "برنج زعفرانی، مرغ، ماست و زرده تخم‌مرغ",
    price: 260000,
    image: tahchin,
  },
  {
    id: 5,
    name: "پیتزا مخصوص نارنج",
    description: "گوشت، قارچ، فلفل دلمه‌ای، پنیر",
    price: 450000,
    image: specialPizza,
  },
  {
    id: 6,
    name: "برگر کلاسیک نارنج",
    description: "گوشت گریل شده، کاهو، گوجه، سس مخصوص",
    price: 360000,
    image: classicBurger,
  },
];

function PopularFoods() {
  return (
    <section className="w-full py-14">
      <h2 className="mb-10 w-45 border-r-4 border-[#FF6D00] py-2 pr-4 text-right text-2xl font-bold text-[#F5F1EB]">
        غذاهای محبوب
      </h2>
      <div className="grid grid-cols-1 justify-items-center gap-4 min-[570px]:grid-cols-2 min-[900px]:grid-cols-3 xl:gap-6 2xl:grid-cols-6">
        {popularFoods.map((food) => (
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
