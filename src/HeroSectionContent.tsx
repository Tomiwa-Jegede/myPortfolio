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
    <div className=" px-8">
      <div className="bodyContent lg:grid lg:grid-cols-2 flex items-center justify-start ">
        <div className="frontendText text-[clamp(40px,calc(40px+72*((100vw-375px)/905)),112px)] font-space font-bold text-black100 lg:h-27 flex items-center justify-end">
          FRONTEND
        </div>
      </div>
      <div className="bodyContent flex items-center justify-end opacity-50 lg:hidden">
        <div className="borderfrontendText text-[clamp(40px,calc(40px+72*((100vw-375px)/905)),112px)] font-space font-bold text-black100 lg:h-27 flex items-center justify-end">
          DEVELOPER
        </div>
      </div>
      <div className="bodyContent  grid lg:grid-cols-2 ">
        <div className="leftContent w-[clamp(282px,calc(282px+310*((100vw-375px)/905)),592px)] flex items-center justify-self-center">
          <img
            src="../public/imageContainer/heroSectionImage.png"
            alt="landing page image"
          />
        </div>
        <div className="rightContent">
          <div className="frontendText hidden lg:text-[85px] font-bold text-black100 lg:mb-6.5 opacity-[0.5] lg:h-27 lg:flex  items-center justify-start ">
            DEVELOPER
          </div>
          <div className="title h-[clamp(28px,calc(28px+32*((100vw-375px)/905)),60px)] lg:mr-12.5 flex items-center justify-center rounded-[10px] bg-black75 mb-4 text-black5 w-full text-[clamp(13px,calc(13px+23*((100vw-375px)/905)),36px)] lg:text-[clamp(20px,calc(20px+4*((100vw-1024px)/256)),24px)] font-space font-bold lg:mb-6.5">
            I design and build fast, modern web experiences
          </div>
          <div className="body text-black100 text-[clamp(18px,calc(18px+6*((100vw-375px)/905)),24px)] lg:w-fit lg:h-10 mb-8 lg:mb-20">
            Front-end developer specializing in clean UI, scalable code, and
            responsive websites that actually convert
          </div>
          <div className="buttonContainer flex flex-wrap gap-3.75 mb-29">
            <Button
              Width="w-[clamp(147px,calc(147px+81*((100vw-375px)/905)),228px)]"
              Textcolor="text-primary05"
              Bgcolor="bg-primary100"
              onClick={() => navigate("/projects")}
            >
              View Projects{" "}
              <ArrowRightIcon className="h-[clamp(20px,calc(20px+10*((100vw-375px)/905)),30px)] w-[clamp(20px,calc(20px+10*((100vw-375px)/905)),30px)]" />
            </Button>
            <Button
              Width="w-[clamp(147px,calc(147px+81*((100vw-375px)/905)),228px)]"
              Textcolor="text-black100"
              Bgcolor="bg-primary5"
              onClick={() => navigate("/contact")}
            >
              Contact Me{" "}
              <PhoneIcon className="h-[clamp(20px,calc(20px+10*((100vw-375px)/905)),30px)] w-[clamp(20px,calc(20px+10*((100vw-375px)/905)),30px)]" />
            </Button>
            <Button
              Width="w-[clamp(147px,calc(147px+81*((100vw-375px)/905)),228px)]"
              Textcolor="text-black100"
              Bgcolor="bg-primary5"
              onClick={() => navigate("/download-cv")}
            >
              <ArrowDownTrayIcon className="h-[clamp(20px,calc(20px+10*((100vw-375px)/905)),30px)] w-[clamp(20px,calc(20px+10*((100vw-375px)/905)),30px)]" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
