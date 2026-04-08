type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  Textcolor?: string;
  Bgcolor?: string;
  DesktopWidth?: string;
  MobileWidth?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};
export default function Button({
  children,
  Textcolor,
  Bgcolor,
  DesktopWidth,
  MobileWidth,
  onClick,
  type,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`lg:h-[60px] gap-[16px] rounded-[10px] ${MobileWidth} ${DesktopWidth} ${Textcolor} ${Bgcolor} text-[13px] py-[16px] lg:text-[18px] font-bold flex items-center justify-center shadow-[0px_10px_25px_rgba(0,0,0,0.25)]`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
