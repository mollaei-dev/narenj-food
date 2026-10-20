import banner1 from "@/assets/images/banner1.jpg";
import banner2 from "@/assets/images/banner2.jpg";
import banner3 from "@/assets/images/banner3.jpg";
import { useEffect, useState } from "react";

const bannerImages = [banner1, banner2, banner3];

function HeroSection() {
  const categories = ["غذاهای ایرانی", "غذاهای سنتی", "فست‌ فود"];

  const [currentBanner, setCurrentBanner] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((current) => (current + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex gap-12 flex-col-reverse min-[870px]:flex-row min-[870px]:gap-1 items-center px-0 py-10">
      <div className="flex w-full md:w-1/2 flex-col items-center gap-7 text-center">
        <h1 className="text-3xl min-[520px]:text-4xl xl:text-5xl  font-bold text-[#FF6A00]">
          مجموعه غذایی نارنج
        </h1>

        <p className="text- lg:text-lg xl:text-xl leading-9 text-[#F5F1EB]">
          از عطر غذاهای اصیل ایرانی و سنتی تا طعم‌های جذاب فست‌ فود
          <br />
          برای هر سلیقه، یک انتخاب خوشمزه !
        </p>

        <div className="flex justify-center gap-3 text-sm text-[#A7A7B0]">
          {categories.map((item) => (
            <span
              key={item}
              className="rounded-full border-2 border-[#FF6A00]/50 px-4 py-2 shadow-md shadow-[#FF6A00]/10"
            >
              {item}
            </span>
          ))}
        </div>

        <button className="cursor-pointer rounded-xl bg-[#FF6A00]  px-4 py-2 sm:px-6 sm:py-3 font-bold text-[#F5F1EB] shadow-lg shadow-[#FF6A00]/20 transition-all duration-300 hover:-translate-x-1 hover:bg-[#FF6A00]/70">
          مشاهده منو ←
        </button>
      </div>

      <div className=" w-full  min-[870px]:w-1/2">
        <img
          className="h-80  w-full lg:h-110 rounded-[30px] object-cover"
          src={bannerImages[currentBanner]}
          alt="غذاهای مجموعه غذایی نارنج"
        />
      </div>
    </section>
  );
}

export default HeroSection;
