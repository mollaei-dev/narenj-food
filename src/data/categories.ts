import iranianFood from "@/assets/images/food-categories/iranian-food.jpg";
import traditionalFood from "@/assets/images/food-categories/traditional-food.jpg";
import fastFood from "@/assets/images/food-categories/fast-food.jpg";
import drink from "@/assets/images/food-categories/drink.jpg";
import healthyFood from "@/assets/images/food-categories/healthy-food.jpg";
import dessert from "@/assets/images/food-categories/dessert.jpg";

export const categories = [
  {
    id: "iranian-food",
    title: "غذاهای ایرانی",
    description: "طعمی اصیل باعطر برنج ایرانی",
    image: iranianFood,
  },
  {
    id: "traditional-food",
    title: "غذاهای سنتی",
    description: "مزه‌های سنتی و محلی، گرم و دلچسب",
    image: traditionalFood,
  },
  {
    id: "healthy-food",
    title: "غذاهای رژیمی",
    description: "انتخابی سبک و سالم برای روزهایی که به فکر تغذیه‌ات هستی",
    image: healthyFood,
  },
  {
    id: "fast-food",
    title: "فست‌ فود",
    description: "انتخابی خوشمزه برای وقت‌هایی که هوسش را داری",
    image: fastFood,
  },
  {
    id: "dessert",
    title: "دسر و پیش غذا",
    description: "شروع و پایانی خوشمزه",
    image: dessert,
  },
  {
    id: "drinks",
    title: "نوشیدنی‌ها",
    description: "یک انتخاب خنک و دلچسب",
    image: drink,
  },
];
