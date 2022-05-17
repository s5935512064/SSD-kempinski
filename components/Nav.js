import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const listMenu = [
  { name: "Home", href: "/" },
  { name: "Concept", href: "/concept" },
  { name: "Residence", href: "/residence" },
  { name: "Gallery", href: "/gallery" },
  { name: "Service", href: "/service" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

const Nav = () => {
  const router = useRouter();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  // const handleMouseOut = () => setTimeout(() => setHover(false), 2000);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };


  return (
    <>
      <div className="fixed top-0 h-16  w-full  !z-50 flex justify-center i ">
        <div className="max-w-7xl w-full hidden md:flex items-center relative  h-full ml-5">
          <div className="menu scale-125  absolute translate-y-1 z-30">
            <button
              // onMouseOver={handleMouseIn}
              // onMouseOut={handleMouseOut}
              id="hamburgerBtn2"
              className="menu-link"
            // onClick={handleToggle}
            >
              <span className="menu-icon">
                <span className="menu-line menu-line-1 !bg-[#B6A694]"></span>
                <span className="menu-line menu-line-2 !bg-[#B6A694]"></span>
                <span className="menu-line menu-line-3 !bg-[#B6A694]"></span>
              </span>
            </button>
          </div>
        </div>

        <div
          className={classNames(
            hover ? "opacity-100" : "opacity-100",
            " w-full h-16 bg-[#010F2A] flex items-center justify-center absolute duration-200  z-20"
          )}
        >
          {listMenu.map((item, index) => (
            <Link key={index} href={item.href} scroll={false}>
              <p
                className={
                  router.pathname === item.href
                    ? "h-full px-4 items-center grid cursor-pointer uppercase text-[#B6A694] underline underline-offset-4  decoration-4"
                    : "grid h-full px-4 items-center cursor-pointer uppercase text-[#B6A694]"
                }
              >
                {item.name}
              </p>
            </Link>
          ))}

          <Link href="/register">
            <p
              className={
                router.pathname === "/register"
                  ? "h-full px-4 items-center grid cursor-pointer uppercase text-red-700 font-semibold"
                  : "grid h-full px-4 items-center cursor-pointer uppercase text-red-700 font-semibold"
              }
            >
              ENQUIRY
            </p>
          </Link>
        </div>

        {/* <div
          className={
            hover
              ? "max-w-7xl w-full bg-[#010F2A] duration-200 opacity-100 flex items-center justify-center absolute h-10 z-10 "
              : "max-w-7xl w-full bg-[#010F2A] opacity-0 duration-200 items-center justify-center absolute h-10 z-10"
          }
        >
          {listMenu.map((item, index) => (
            <Link key={index} href={item.href}>
              <p
                className={
                  router.pathname === item.href
                    ? "font-medium bg-[#B5A191] h-full px-4 items-center grid cursor-pointer uppercase"
                    : "grid h-full px-4 items-center cursor-pointer uppercase"
                }
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div> */}

        {/* <div className="max-w-7xl w-full hidden md:flex items-center justify-center absolute h-full z-10 ">
          {listMenu.map((item, index) => (
            <Link key={index} href={item.href}>
              <p
                className={
                  router.pathname === item.href
                    ? "font-medium bg-[#B5A191] h-full px-4 items-center grid cursor-pointer"
                    : "grid h-full px-4 items-center cursor-pointer"
                }
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div> */}

        {/* <div className="max-w-7xl w-full flex items-center justify-end absolute h-full px-4">
          <Link href="/register">
            <button className="border border-[#B5A191] px-3 my-1 w-fit py-1 text-sm z-20">
              REGISTER
            </button>
          </Link>
        </div> */}

        <div
          id="menu"
          className={navbarOpen ? "menu open md:hidden " : "menu md:hidden "}
        >
          <span className="menu-circle"></span>
          <button
            id="hamburgerBtn"
            className="menu-link"
            onClick={handleToggle}
          >
            <span className="menu-icon">
              <span className="menu-line menu-line-1"></span>
              <span className="menu-line menu-line-2"></span>
              <span className="menu-line menu-line-3"></span>
            </span>
          </button>
        </div>

        <div
          id="mobile-menu"
          className={
            navbarOpen
              ? "menu-overlay open md:hidden"
              : "menu-overlay md:hidden"
          }
        >
          <div className="absolute bg-[url('/assets/manifestobg.png')]  bg-left-bottom w-full bg-no-repeat h-full bg-contain opacity-10 -translate-x-20 " />
          <div className="overlay-info ">
            {/* <img src="/assets/logo.svg" alt="logo" className="w-32 h-32 object-contain !z-50" /> */}

            <div className="space-y-1 flex h-full justify-center flex-col ">
              <div className=" justify-items-center grid pb-10">
                <img
                  src="/assets/logo.svg"
                  alt="logo"
                  className="w-32 h-32 object-contain !z-50"
                />
              </div>
              {listMenu.map((item) => (
                <Link href={item.href} key={item.name}>
                  <button
                    className={
                      router.pathname == item.href
                        ? "text-white hover:text-white block px-3 py-2  text-base text-center font-semibold"
                        : "text-gray-400 hover:text-white block px-3 py-2  text-base text-center"
                    }
                  >
                    {item.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
