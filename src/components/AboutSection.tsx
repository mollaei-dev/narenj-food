import restaurant from "@/assets/images/restaurant.jpg";
const circles = [
  { top: "4%", left: "18%", color: "bg-white", size: "size-1" },
  { top: "4%", left: "48%", color: "bg-black", size: "size-1" },
  { top: "4%", left: "56%", color: "bg-black", size: "size-1" },
  { top: "4%", left: "66%", color: "bg-black", size: "size-1" },
  { top: "4%", left: "70%", color: "bg-white", size: "size-1" },
  { top: "4%", left: "78%", color: "bg-white", size: "size-1" },
  { top: "8%", left: "85%", color: "bg-black", size: "size-1" },
  { top: "14%", left: "90%", color: "bg-black", size: "size-1" },
  { top: "20%", left: "93%", color: "bg-white", size: "size-1" },
  { top: "30%", left: "95%", color: "bg-black", size: "size-1" },
  { top: "40%", left: "98%", color: "bg-black", size: "size-1" },
  { top: "46%", left: "98%", color: "bg-white", size: "size-1" },
  { top: "55%", left: "97%", color: "bg-black", size: "size-1" },
  { top: "63%", left: "97%", color: "bg-white", size: "size-1" },
  { top: "73%", left: "94%", color: "bg-white", size: "size-1" },
  { top: "79%", left: "92%", color: "bg-black", size: "size-1" },
  { top: "86%", left: "88%", color: "bg-black", size: "size-1" },
  { top: "89%", left: "84%", color: "bg-white", size: "size-1" },
  { top: "93%", left: "80%", color: "bg-black", size: "size-1" },
  { top: "94%", left: "72%", color: "bg-white", size: "size-1" },
  { top: "96%", left: "68%", color: "bg-black", size: "size-1" },
  { top: "95%", left: "62%", color: "bg-black", size: "size-1" },
  { top: "96%", left: "53%", color: "bg-white", size: "size-1" },
  { top: "94%", left: "45%", color: "bg-black", size: "size-1" },
  { top: "8%", left: "28%", color: "bg-white", size: "size-1" },
  { top: "9%", left: "8%", color: "bg-black", size: "size-2" },
  { top: "10%", left: "40%", color: "bg-black", size: "size-1" },
  { top: "17%", left: "14%", color: "bg-white", size: "size-2" },
  { top: "20%", left: "20%", color: "bg-black", size: "size-1" },
  { top: "20%", left: "30%", color: "bg-black", size: "size-2" },
  { top: "23%", left: "4%", color: "bg-black", size: "size-2" },
  { top: "33%", left: "6%", color: "bg-black", size: "size-1" },
  { top: "33%", left: "15%", color: "bg-black", size: "size-2" },
  { top: "33%", left: "25%", color: "bg-black", size: "size-1" },
  { top: "47%", left: "8%", color: "bg-white", size: "size-2" },
  { top: "50%", left: "24%", color: "bg-white", size: "size-1" },
  { top: "48%", left: "15%", color: "bg-black", size: "size-1" },
  { top: "63%", left: "6%", color: "bg-white", size: "size-2" },
  { top: "63%", left: "28%", color: "bg-black", size: "size-2" },
  { top: "67%", left: "22%", color: "bg-white", size: "size-2" },
  { top: "70%", left: "36%", color: "bg-white", size: "size-1" },
  { top: "77%", left: "8%", color: "bg-black", size: "size-1" },
  { top: "80%", left: "14%", color: "bg-black", size: "size-2" },
  { top: "80%", left: "36%", color: "bg-black", size: "size-1" },
  { top: "88%", left: "28%", color: "bg-white", size: "size-1" },
  { top: "92%", left: "3%", color: "bg-white", size: "size-1" },
  { top: "92%", left: "16%", color: "bg-black", size: "size-1" },
  { top: "97%", left: "26%", color: "bg-white", size: "size-2" },
];
function AboutSection() {
  return (
    <div className="flex w-full flex-col-reverse gap-15 py-14 lg:flex-row lg:gap-3">
      <div className="flex h-full w-full flex-col lg:w-1/2 2xl:gap-10">
        <h2 className="mb-10 w-45 border-r-4 border-[#FF6D00] py-2 pr-4 text-right text-2xl font-bold text-[#F5F1EB]">
          درباره نارنج :
        </h2>
        <p className="my-auto px-5 text-justify text-2xl leading-11 text-[#d6d4ce]">
          مجموعه غذایی نارنج، با بیش از ۲۵ سال تجربه در صنعت غذا، به شما این
          امکان را می‌دهد که از طعم‌های بی‌نظیر و کیفیت بالای غذاهای ایرانی
          بهره‌مند شوید.
          <br />
          ما در نارنج به تهیه غذاهایی با استفاده از مواد اولیه باکیفیت، از جمله
          برنج ۱۰۰% ایرانی و گوشت تازه، متعهد هستیم. ویژگی‌های منحصر به فرد ما
          شامل بسته‌بندی‌های مجلسی، تحویل سریع و امکان سفارشی‌سازی منو است.
        </p>
      </div>
      <div className="relative w-full overflow-hidden rounded-r-full bg-[#a94b02] px-6 py-10 min-[375px]:pr-7 md:h-120 lg:w-1/2 xl:pr-10 2xl:h-140">
        {circles.map((item, index) => (
          <span
            key={index}
            className={`absolute rounded-full ${item.size} ${item.color}`}
            style={{ top: item.top, left: item.left }}
          />
        ))}
        <img
          className="relative z-10 size-63 rounded-full min-[375px]:size-75 md:size-100 2xl:size-120"
          src={restaurant}
          alt="فضای داخلی رستوران نارنج"
        />
      </div>
    </div>
  );
}
export default AboutSection;
