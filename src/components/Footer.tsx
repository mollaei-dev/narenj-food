import logo from "@/assets/icons/logo.jpg";
import { FaInstagram, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="relative w-full">
      <svg
        className="-mb-1 block h-30 w-full sm:h-50"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#a94b02"
          fillOpacity="1"
          d="M0,96L34.3,122.7C68.6,149,137,203,206,213.3C274.3,224,343,192,411,170.7C480,149,549,139,617,149.3C685.7,160,754,192,823,186.7C891.4,181,960,139,1029,149.3C1097.1,160,1166,224,1234,234.7C1302.9,245,1371,203,1406,181.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className="flex flex-col bg-[#a94b02] text-black">
        <div className="flex flex-col items-center justify-around gap-2 lg:flex-row">
          <div className="flex flex-col items-center gap-1">
            <img
              className="h-13 w-13 rounded-full md:h-15 md:w-15"
              src={logo}
              alt="لوگوی نارنج"
            />
            <p className="text-lg font-bold sm:text-2xl">
              طعم اصیل، تجربه‌ای به‌یادماندنی
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <h3 className="text-md border-t pt-3 font-bold sm:border-none sm:text-xl">
              راه های ارتباطی
            </h3>
            <div className="flex flex-col items-center sm:flex-row sm:gap-10">
              <a
                href="tel:+985138295909"
                className="flex items-center gap-1 hover:font-bold"
              >
                <span> 051-38295909</span>
                <FaPhone size={13} className="-translate-y-1" />
              </a>
              <a
                href="tel:+989151234569"
                className="flex items-center gap-1 hover:font-bold"
              >
                <span>09151234569</span>
                <FaPhone size={13} className="-translate-y-1" />{" "}
              </a>
              <a
                href="https://www.instagram.com/narenj-food/"
                className="flex items-center gap-1 hover:font-bold"
                target="_blank"
                rel="noreferrer"
              >
                <span>narenj-food</span>
                <FaInstagram className="-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-md mt-3 w-full border-t border-black py-3 text-center font-medium">
          © تمامی حقوق برای مجموعه غذایی نارنج محفوظ است.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
