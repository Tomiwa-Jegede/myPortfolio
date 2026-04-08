import Header from "./header";
import ProjectPage from "./projectPage";
import Button from "./button";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import ContactForm from "./contactForm";

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="p-[32px] border-0 border-b-2 border-b-black75">
        <Header
          BgColor="bg-black5"
          TextColor="text-black100"
          logoColor="text-secondary100"
        />
        <div className="bodyContent grid grid-cols-2 flex items-center">
          <div className="content font-[24px] w-[656px]">
            <span className="title text-[101px] font-bold block h-[147px">
              Hi I’m <span className="text-secondary100">Victor</span>
            </span>
            I build professional websites and web applications that don’t just
            look good — they actively move businesses forward. Using React, I
            design and develop fast, reliable, and scalable interfaces that work
            flawlessly across devices and feel solid from day one. A weak
            website costs attention, trust, and opportunities — I make sure that
            doesn’t happen.
            <span className="block font-bold my-[32px]">
              — Your website should work as hard as you do
            </span>
            <Button
              Textcolor="text-black100"
              Bgcolor="bg-primary5"
              onClick={() => navigate("/contact")}
              Width="w-[228px]"
            >
              Contact Me <PhoneIcon className="h-5 w-5" />
            </Button>
          </div>
          <div className="profilePicture w-[640px]">
            <img
              src="../public/imageContainer/profileImage.png"
              alt="profile Picture"
            />
          </div>
        </div>
      </section>
      <section>
        <ProjectPage />
      </section>
      <section>
        <ContactForm />
      </section>
    </>
  );
}
