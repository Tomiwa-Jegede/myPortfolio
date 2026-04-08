import Button from "./button";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
export default function ProjectPage() {
  const navigate = useNavigate();
  return (
    <section className="grid grid-rows-2 py-[32px] flex items-center justify-center">
      <div className="top-section flex items-center justify-center gap-[32px]">
        <img src="../public/imageContainer/projectImage.png" alt="" />
        <img src="../public/imageContainer/projectImage2.png" alt="" />
      </div>
      <div className="bottom-section flex items-center justify-center gap-[32px]">
        <img src="../public/imageContainer/projectImage3.png" alt="" />
        <div className="p-[16px]">
          <h1 className="text-[101px] font-bold flex items-center justify-center flex-col text-secondary100">
            <span className="block">MY</span>PROJECT
          </h1>
          <div className="flex justify-end">
            <Button
              Textcolor="text-secondary100"
              Bgcolor="bg-none"
              onClick={() => navigate("/")}
            >
              View More <ArrowRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
