import logo from "@/assets/icons/logo.jpg";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 flex items-center justify-between px-8 py-4">
      <img className="h-15 w-15 rounded-full" src={logo} alt="لوگوی نارنج" />
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#">صفحه اصلی</a>
          </li>
          <li>
            <a href="#">منو</a>
          </li>
          <li>
            <a href="#">درباره نارنج</a>
          </li>
          <li>
            <a href="#">تماس با ما</a>
          </li>
        </ul>
      </nav>

      <div className="flex gap-4">
        <button className="flex h-10 w-20 cursor-pointer items-center justify-center rounded-lg bg-[#FF6D00]">
          ثبت نام
        </button>
        <button className="flex h-10 w-20 cursor-pointer items-center justify-center rounded-lg border border-[#FF6D00]">
          ورود
        </button>
      </div>
    </header>
  );
}

export default Header;
