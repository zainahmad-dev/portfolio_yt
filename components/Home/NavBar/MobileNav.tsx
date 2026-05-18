import React from "react";
import Link from "next/link";
import { NavLinks } from "@/Constant/Constant";
import { X } from "lucide-react";
type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ showNav, closeNav }: Props) => {
  const sidebarOpenClass = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${sidebarOpenClass} inset-0 transform transition-all duration-500 z-1002 bg-black opacity-70 w-full h-screen`}
      ></div>
      {/*navlinks */}
      <div
        className={`text-white ${sidebarOpenClass} fixed justify-center flex flex-col h-full transform transition-all du1 delay-300 w-[80%] sm:w-[60%] bg-purple-700 space-y-6 z-1050`}
      >
        {NavLinks.map((link, index) => (
          <Link key={index} href={link.link}>
            <p className="text-white w-fit text-[20px] ml-12 border-b pb-1 border-white sm:text-[30px] ">
              {link.name}
            </p>
          </Link>
        ))}
        {/* close button */}
        <X
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
