"use client";
import Logo from "@/components/Helper/Logo";
import { Download, MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { NavLinks } from "@/Constant/Constant";
import ThemeToggler from "@/components/Helper/ThemeTogler";

const Nav = () => {
  
  return (
    <div className="transition-all duration-200 h-[12vh] z-100 fixed w-full">
      <div className="flex items-center justify-start gap-10 h-full w-[90%] xl:w-[80%] mx-auto">
        {/* Logo*/}
        <Logo />
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="dark:text-white text-black hover:text-yellow-500 dark:hover:text:yellow-200 font-semibold transition-all duration-200"
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </div>
        {/*buttons*/}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6 sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <span className="relative z-20 flex items-center space-x-2 text-sm">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </span>
          </a>
        </div>
        {/*Theme toggler*/}
        <ThemeToggler />
        {/* Burger menu */}
        <MenuIcon className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden" />
      </div>
    </div>
  );
};

export default Nav;
