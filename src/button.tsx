type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  Textcolor?: string;
  Bgcolor?: string;
  Width?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};
export default function Button({
  children,
  Textcolor,
  Bgcolor,
  Width,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`lg:h-[60px] rounded-[10px] ${Width} ${Textcolor} ${Bgcolor} text-[18px] font-bold gap-[16px] flex items-center justify-center shadow-[0px_10px_25px_rgba(0,0,0,0.25)]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
