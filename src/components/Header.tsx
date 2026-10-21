import logo from "@/assets/icons/logo.jpg";
import MainNavigation from "./MainNavigation";

function Header() {
  return (
    <header className="border-b border-[#6c6c6c] fixed inset-x-0 top-0 bg-[#1A1919] z-50 px-3 py-4 sm:px-7 md:px-10 xl:px-15 2xl:px-20">
      <div className="flex items-center justify-between">
        <img
          className="h-13 w-13 rounded-full md:h-15 md:w-15"
          src={logo}
          alt="لوگوی نارنج"
        />
        <MainNavigation />
        <div className="flex gap-4">
          <button className="flex h-8 w-20 cursor-pointer items-center justify-center rounded-lg bg-[#FF6D00] md:h-10">
            ثبت نام
          </button>
          <button className="flex h-8 w-20 cursor-pointer items-center justify-center rounded-lg border border-[#FF6D00] md:h-10">
            ورود
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
