type HeaderProps = { BgColor: string; TextColor: string; logoColor: string };
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
export default function Header({ BgColor, TextColor, logoColor }: HeaderProps) {
  return (
    <div className="header grid grid-cols-2 items-center p-[32px] mb-[116px] lg:py-[24px] ">
      <div
        className={`logo sm:text-[16px] lg:text-[24px] font-bold ${logoColor}`}
      >
        FrontendIQ
      </div>
      <div className="navbar hidden lg:block">
        <ul
          className={`flex ${BgColor} ${TextColor} lg:h-[60px] lg:w-[609px] lg:py-[16px] lg:px-[32px] flex items-center justify-between mr-[138px] rounded-[10px] font-bold`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="mobileNavbar text-black flex justify-end lg:hidden">
        <Bars3Icon className="h-5 w-5 " />
      </div>
    </div>
  );
}
