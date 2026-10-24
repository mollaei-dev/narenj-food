import { Link } from "react-router";
const navLinks = [
  { title: "صفحه اصلی", to: "/" },
  { title: "منو", to: "/menu" },
  { title: "درباره نارنج", to: "/#about" },
  { title: "تماس با ما", to: "/#contact" },
];

function MainNavigation() {
  return (
    <nav>
      <ul className="flex flex-col gap-4 text-[18px] md:flex-row">
        {navLinks.map((link) => (
          <li>
            <Link to={link.to} className="hover:text-[#FF6D00]">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default MainNavigation;
