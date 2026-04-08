import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Button from "./button";
import { useNavigate } from "react-router-dom";
export default function HeroSectionContent() {
  const navigate = useNavigate();
  return (
    <div className=" px-[32px]">
      <div className="bodyContent lg:grid lg:grid-cols-2 flex items-center justify-start ">
        <div className="frontendText text-[40px] lg:text-[112px] font-bold text-black100 lg:h-[108px] flex items-center justify-end">
          FRONTEND
        </div>
      </div>
      <div className="bodyContent flex items-center justify-end opacity-50 lg:hidden">
        <div className="borderfrontendText text-[40px]  lg:text-[112px] font-bold text-black100 lg:h-[108px] flex items-center justify-end">
          DEVELOPER
        </div>
      </div>
      <div className="bodyContent  grid lg:grid-cols-2 ">
        <div className="leftContent w-[282px] lg:w-[592px] flex items-center justify-self-center">
          <img
            src="../public/imageContainer/heroSectionImage.png"
            alt="landing page image"
          />
        </div>
        <div className="rightContent ">
          <div className="frontendText hidden lg:text-[109px] font-bold text-black100 lg:mb-[26px] opacity-[0.5] lg:h-[108px] flex items-center justify-start">
            DEVELOPER
          </div>
          <div className="title lg:mr-[50px] h-[28px] lg:w-[609px] lg:h-[36px] flex items-center justify-center justify-self-center rounded-[10px] bg-black75 mb-4 text-black5 w-full text-[12px] lg:text-[24px] font-bold lg:mb-[26px]">
            I design and build fast, modern web experiences
          </div>
          <div className="body text-black100 text-[18px] lg:w-fit lg:h-[40px] mb-[26px]">
            Front-end developer specializing in clean UI, scalable code, and
            responsive websites that actually convert
          </div>
          <div className="buttonContainer flex flex-wrap gap-[33px] lg:w-[491px]">
            <Button
              Width="w-[228px]"
              Textcolor="text-primary05"
              Bgcolor="bg-primary100"
              onClick={() => navigate("/projects")}
            >
              View Projects <ArrowRightIcon className="h-5 w-5" />
            </Button>
            <Button
              Width="w-[228px]"
              Textcolor="text-black100"
              Bgcolor="bg-primary5"
              onClick={() => navigate("/contact")}
            >
              Contact Me <PhoneIcon className="h-5 w-5" />
            </Button>
            <Button
              Width="w-[228px]"
              Textcolor="text-black100"
              Bgcolor="bg-primary5"
              onClick={() => navigate("/download-cv")}
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
