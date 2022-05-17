import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { Link, animateScroll as scroll, scroller } from 'react-scroll'

const Residence = () => {



    return (
        <Layout>
            <section
                id="gallery"
                className="snap-start w-full h-screen relative flex justify-center items-center overflow-hidden bg-[url('/assets/background.jpg')] bg-no-repeat bg-cover bg-top"
            >


                <div className="w-full h-full bg-[url('/assets/manifestobg-f.png')] bg-right bg-contain  bg-no-repeat absolute opacity-20 translate-y-28 " />
                <div className="w-full h-full bg-gradient-to-b from-black absolute opacity-30 " />
                <div className="max-w-7xl h-full w-full relative mx-4 md:mx-10 flex justify-center  ">
                    <div className="mt-20 flex w-full absolute top-0">
                        <img
                            src="/assets/logo.svg"
                            alt="logo"
                            className="object-contain w-28 h-28"
                        />
                    </div>
                    <p className="text-[150px] font-Heleness  text-[#F5F1EA] drop-shadow pt-44">
                        R<span className="text-[90px] align-text-top">E</span>
                        SID
                        <span className="text-[90px] align-text-top">E</span>NCE
                    </p>
                    <div></div>
                </div>
            </section>
        </Layout>
    );
}

export default Residence;