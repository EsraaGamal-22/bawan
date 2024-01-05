import { useState } from "react"
import { pageActive } from "./nabar.module"
import { navbarInfo } from "./navbar-constants"

export const Navbar = ({ pageName }: pageActive) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <>
      <nav
        className="
    flex flex-wrap
    md:flex-row-reverse
    items-center
    justify-between
    w-[90%]
     text-white
    bg-transparent
    absolute
    top-0
    z-[3]
    right-[50%]
    translate-x-[50%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={handleToggle}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div>
          <a href="/">
            <img src="/assets/logo.png" alt="imag-logo" />
          </a>
        </div>
        <div
          className={
            toggleMenu ? "hidden" : "w-full md:flex md:items-center md:w-auto"
          }
          id="menu"
        >
          <ul
            className="
        pt-4
        text-1.4
        lg:text-2.4
        md:flex
        md:justify-between
        md:pt-0"
          >
            {navbarInfo.map((item) => {
              return (
                <>
                  <li>
                    <a
                      className={
                        item.name === pageName
                          ? "md:px-2 md:py-1 md:mt-3 block border border-solid border-primary-900 rounded-5 bg-primary-900"
                          : "md:p-4 py-2 block "
                      }
                      href={item.navLink}
                    >
                      {item.name}
                    </a>
                  </li>
                </>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}
