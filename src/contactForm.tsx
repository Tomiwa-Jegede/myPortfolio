import Button from "./button";

export default function ContactForm() {
  return (
    <section className="contactForm bg-primary5 h-screen flex items-center justify-center p-[32px] text-black100 text-[40px]">
      <div className="bg-white grid grid-cols-2 gap-[32px] p-[32px] w-full">
        <section className="p-[32px]">
          <form action="" className="text-[18px]">
            <label className="block w-full " htmlFor="FullName">
              Full Name
            </label>
            <input
              name="fullname"
              id="FullName"
              type="text"
              className="bg-black5 w-full h-[78px] mb-[10px] shadow-[var(--shadow-input)] rounded-[10px] p-[16px]"
            />
            <label className="block w-full " htmlFor="Email">
              Email
            </label>
            <input
              name="email"
              id="Email"
              type="text"
              className="bg-black5 w-full h-[78px] mb-[10px] shadow-[var(--shadow-input)] rounded-[10px] p-[16px]"
            />
            <label htmlFor="Message" className="block w-full ">
              Message
            </label>
            <textarea
              name="message"
              id="Message"
              placeholder="Tell me about your project"
              className="bg-black5 w-full h-[286px] mb-[10px] shadow-[var(--shadow-input)] rounded-[10px] p-[16px] placeholder:text-primary25 placeholder:font-bold "
            ></textarea>
            <Button
              Bgcolor="bg-primary100"
              Textcolor="text-primary5"
              type="submit"
              Width="w-full"
            >
              Submit
            </Button>
          </form>
        </section>
        <section className="p-[32px] text-black100 font-bold text-[40px]">
          <h1>Have A Project Idea In Mind? let’s Get Started</h1>
          <img
            src="../public/imageContainer/contactFormImage.png"
            alt="contact Form Image"
          />
        </section>
      </div>
    </section>
  );
}
