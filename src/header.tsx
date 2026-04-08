type HeaderProps = { BgColor: string; TextColor: string; logoColor: string };
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
export default function Header({ BgColor, TextColor, logoColor }: HeaderProps) {
  return (
    <div className="header grid grid-cols-2 items-center p-8 mb-29 lg:py-6 ">
      <div
        className={`logo text-[clamp(16px,calc(16px+16*((100vw-375px)/905)),32px)] font-bold ${logoColor}`}
      >
        FrontendIQ
      </div>
      <div className="navbar hidden lg:block">
        <ul
          className={`flex ${BgColor} ${TextColor} lg:h-15 lg:max-w-152.25 lg:py-4 lg:px-8 flex items-center justify-between max-mr-[138px] rounded-[10px] font-bold`}
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
        <Bars3Icon className="h-[clamp(20px,calc(20px+20*((100vw-375px)/905)),40px)] w-[clamp(20px,calc(20px+20*((100vw-375px)/905)),40px)]" />
      </div>
    </div>
  );
}
