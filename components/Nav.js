import { useRouter } from "next/router";
import Link from 'next/link';
import React, { useState, useEffect } from "react";

const listMenu = [
    { name: "Home", href: "/" },
    { name: "Concept", href: "/concept" },
    { name: "Residence", href: "/residence" },
    { name: "Gallery", href: "/gallery" },
    { name: "News", href: "/news" },
    { name: "Service", href: "/service" },
    { name: "Contact", href: "/contact" },
]

const Nav = () => {
    const router = useRouter();

    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };



    return (
        <>
            <div className="fixed top-0 h-14 md:bg-[#010F2A] md:bg-opacity-70 w-full text-center text-white flex items-center justify-center !z-50 ">

                <div className="max-w-7xl w-full hidden md:flex items-center justify-center absolute h-full z-10 " >

                    {listMenu.map((item, index) => (
                        <Link key={index} href={item.href}>

                            <p className={router.pathname === item.href ? "font-medium bg-[#B5A191] h-full px-4 items-center grid cursor-pointer" : "grid h-full px-4 items-center cursor-pointer"}>

                                {item.name}


                            </p>
                        </Link>
                    ))

                    }
                </div>

                <div className="max-w-7xl w-full flex items-center justify-end absolute h-full px-4">
                    <Link href="/register">

                        <button className="bg-[#B5A191] px-4 py-2 w-fit font-medium z-20">REGISTER</button>
                    </Link>

                </div>

                <div id="menu" className={navbarOpen ? "menu open md:hidden" : "menu md:hidden"}>
                    <span className="menu-circle"></span>
                    <button id="hamburgerBtn" className="menu-link" onClick={handleToggle}>
                        <span className="menu-icon">
                            <span className="menu-line menu-line-1"></span>
                            <span className="menu-line menu-line-2"></span>
                            <span className="menu-line menu-line-3"></span>
                        </span>
                    </button>
                </div>

                <div id="mobile-menu" className={navbarOpen ? "menu-overlay open md:hidden" : "menu-overlay md:hidden"} >
                    <div className="absolute bg-[url('/assets/manifestobg.png')]  bg-left-bottom w-full bg-no-repeat h-full bg-contain opacity-10 -translate-x-20 translate-y-[450px]" />
                    <div className="overlay-info mt-56">
                        {/* <img src="/assets/logo.svg" alt="logo" className="w-32 h-32 object-contain !z-50" /> */}

                        <div className="space-y-1 flex h-full justify-center flex-col mt-56">
                            <div className=" justify-items-center grid pb-10">
                                <img src="/assets/logo.svg" alt="logo" className="w-32 h-32 object-contain !z-50" />
                            </div>
                            {listMenu
                                .map((item) => (

                                    <Link href={item.href} key={item.name} >
                                        <button

                                            className={router.pathname == item.href ? "text-white hover:text-white block px-3 py-2  text-base text-center font-semibold" : "text-gray-400 hover:text-white block px-3 py-2  text-base text-center"}

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
}

export default Nav;