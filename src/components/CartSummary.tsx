import { FaMotorcycle } from "react-icons/fa";

function CartSummary() {
  const totalPrice = 500000;
  const deliveryFee = totalPrice >= 1000000 ? 0 : 80000;
  const finalPrice = totalPrice + deliveryFee;

  return (
    <div className="flex min-h-150 w-full flex-col gap-5 rounded-2xl border border-[#3A3939] bg-[#222121] p-5">
      <h2 className="mb-5 border-b border-[#3A3939] py-6 text-xl font-bold text-[#FF6D00]">
        خلاصه سفارش
      </h2>
      <div>
        <div className="mb-4 flex items-center justify-between text-sm">
          <span className="text-[#B8B5B0]">جمع کل آیتم‌ها</span>
          <span className="font-medium">
            {totalPrice.toLocaleString("fa-IR")} تومان
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-[#B8B5B0]">هزینه ارسال</span>
          <span
            className={deliveryFee === 0 ? "text-[16px] text-[#FF6D00]" : ""}
          >
            {deliveryFee === 0
              ? "رایگان"
              : `${deliveryFee.toLocaleString("fa-IR")} تومان`}
          </span>
        </div>
        <p className="mt-8 text-[#B8B5B0]">
          🎉 با خرید ۱,۰۰۰,۰۰۰ تومان، از
          ارسال رایگان بهره‌مند شوید.
        </p>
      </div>

      <div>
        <div className="mb-5 flex items-center justify-between border-t border-[#3A3939] pt-5">
          <span className="font-bold">مبلغ نهایی</span>
          <span className="text-lg font-bold text-[#FF6D00]">
            {finalPrice.toLocaleString("fa-IR")} تومان
          </span>
        </div>

        <button
          type="button"
          className="mt-5 w-full rounded-xl cursor-pointer bg-[#FF6D00] py-3 font-bold text-black transition-colors duration-200 hover:bg-[#ff8126]"
        >
          ادامه خرید و پرداخت
        </button>
        <div className="mt-10 flex flex-col gap-2 rounded-2xl border border-[#3A3939] px-5 py-7">
          <h4 className="text-sm font-normal">ارسال سریع و مطمئن</h4>
          <p className="flex items-start gap-2">
            <FaMotorcycle className="text-2xl text-[#FF6D00]" />
            <span className="text-sm text-[#A7A7B0]">
              ارسال شما در کمترین زمان ممکن بدستتان می رسد
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
