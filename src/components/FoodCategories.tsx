import CategoryCard from "./CategoryCard";
import iranianFood from "@/assets/images/iranian-food.jpg";
import traditionalFood from "@/assets/images/traditional-food.jpg";
import fastFood from "@/assets/images/fast-food.jpg";
import drink from "@/assets/images/drink.jpg";
import healthyFood from "@/assets/images/healthy-food.jpg";
import dessert from "@/assets/images/dessert.jpg";

const categories = [
  {
    title: "غذاهای ایرانی",
    description: "طعمی اصیل باعطر برنج ایرانی",
    image: iranianFood,
  },
  {
    title: "فست‌ فود",
    description: "انتخابی خوشمزه برای وقت‌هایی که هوسش را داری",
    image: fastFood,
  },
  {
    title: "غذاهای سنتی",
    description: "مزه‌های سنتی و محلی، گرم و دلچسب",
    image: traditionalFood,
  },

  {
    title: "نوشیدنی‌ها",
    description: "یک انتخاب خنک و دلچسب",
    image: drink,
  },
  {
    title: "غذاهای رژیمی",
    description: "انتخابی سبک و سالم برای روزهایی که به فکر تغذیه‌ات هستی",
    image: healthyFood,
  },
  {
    title: "دسر و پیش غذا",
    description: "شروع و پایانی خوشمزه",
    image: dessert,
  },
];

function FoodCategories() {
  return (
    <section className="w-full py-14">
      <h2 className="mb-10 w-45 border-r-4 border-[#FF6D00] py-2 pr-4 text-right text-2xl font-bold text-[#F5F1EB]">
        چی میل داری ؟
      </h2>
      <div className="grid grid-cols-1 justify-items-center gap-4 min-[370px]:grid-cols-2 md:gap-4 min-[870px]:grid-cols-3 lg:gap-4 xl:gap-6 2xl:grid-cols-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            description={category.description}
            image={category.image}
            reverse={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
}

export default FoodCategories;
