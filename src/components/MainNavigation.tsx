import { Link } from "react-router";

function MainNavigation() {
  return (
    <nav>
      <ul className="hidden gap-4 text-[18px] md:flex">
        <li>
          <Link to="/">صفحه اصلی</Link>
        </li>
        <li>
          <Link to="/menu">منو</Link>
        </li>
        <li>
          <Link to="/#about">درباره نارنج</Link>
        </li>
        <li>
          <Link to="/#contact">تماس با ما</Link>
        </li>
      </ul>
    </nav>
  );
}
export default MainNavigation;
