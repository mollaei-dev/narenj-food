import logo from "@/assets/icons/logo.jpg";
import MainNavigation from "./MainNavigation";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#6c6c6c] bg-[#1A1919] px-3 py-4 sm:px-7 md:px-10 xl:px-15 2xl:px-20">
      <div className="flex items-center justify-between">
        <button
          className="cursor-pointer text-[#FF6D00] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FiMenu className="size-9" />
        </button>
        <img
          className="hidden size-15 rounded-full md:block"
          src={logo}
          alt="لوگوی نارنج"
        />
        {}
        <div className="hidden md:flex">
          <MainNavigation />
        </div>
        <div className="flex gap-4">
          <button className="flex h-8 w-20 cursor-pointer items-center justify-center rounded-lg bg-[#FF6D00] md:h-10">
            ثبت نام
          </button>
          <button className="flex h-8 w-20 cursor-pointer items-center justify-center rounded-lg border border-[#FF6D00] md:h-10">
            ورود
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className={`absolute top-4.25 -right-6 flex w-40 flex-col rounded-b-3xl bg-[#1A1919] p-7 transition-all duration-500 ease-in-out md:hidden ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-2 opacity-0"
          }`}
        >
          <MainNavigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
