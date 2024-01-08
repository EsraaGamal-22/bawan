import { useContext, useState } from "react";

import { navbarInfo } from "./navbar-constants";
import { PageActive } from "./nabar.module";
import { NavigationContext } from "./store/context-navigation";

export const Navbar = ({ pageName }: PageActive) => {
  const { isMenuShown, setIsMenuShown } = useContext(NavigationContext);
  const toggleMenuHandler = () => setIsMenuShown((currentVal) => !currentVal);
  return (
    <>
      <nav
        className="
    flex flex-wrap
    md:flex-row-reverse
    items-center
    justify-between
   w-[90%]
   py-2
   md:py-0
     text-white
    bg-transparent
    absolute
    top-0
    z-[3]
    right-[50%]
    translate-x-[50%]"
      >
        {/* MENU */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleMenuHandler}
          className="h-4 w-4 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {/* LOGO */}
        <div className="w-[10%] w-max-[9.8rem]">
          <a href="/">
            <img src="/assets/logo.png" alt="imag-logo" />
          </a>
        </div>
        {/* MENU  ITEMS */}
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isMenuShown ? "" : "hidden"
          }`}
          id="menu"
        >
          <ul
            className="
            pt-4
        text-1.4
        lg:text-2.4
        md:bg-transparent
        md:flex
        md:justify-between
        md:pt-0
        z-[5]"
          >
            {navbarInfo.map((item) => {
              return (
                <>
                  <li className="block mx-auto w-fit">
                    <a
                      className={
                        item.name === pageName
                          ? "px-2 py-1 md:mt-3 block border border-solid border-primary-900 rounded-5 bg-primary-900"
                          : "md:p-4 py-2 block "
                      }
                      href={item.navLink}
                    >
                      {item.name}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};
