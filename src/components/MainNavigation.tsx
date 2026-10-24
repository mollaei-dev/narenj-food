import { Link } from "react-router";

function MainNavigation() {
  return (
    <nav>
      <ul className="hidden gap-4 text-[18px] md:flex">
        <li>
          <Link to="/" className="hover:text-[#FF6D00]">
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link to="/menu" className="hover:text-[#FF6D00]">
            منو
          </Link>
        </li>
        <li>
          <Link to="/#about" className="hover:text-[#FF6D00]">
            درباره نارنج
          </Link>
        </li>
        <li>
          <Link to="/#contact" className="hover:text-[#FF6D00]">
            تماس با ما
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default MainNavigation;
