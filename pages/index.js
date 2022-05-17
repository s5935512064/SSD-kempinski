import Head from "next/head";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Link from 'next/link';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Autoplay } from "@fancyapps/ui/dist/carousel.autoplay.esm.js";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

Carousel.Plugins.Autoplay = Autoplay;
Fancybox.defaults.ScrollLock = false;

export default function Home() {
  var settings = {
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     const mainCarousel = new Carousel(
  //       document.querySelector("#mainCarousel"),
  //       {
  //         friction: 0.96,
  //         center: true,
  //         Autoplay: {
  //           timeout: 1000,
  //           hoverPause: true,
  //         },
  //       },
  //       2000
  //     );
  //   });
  // });
  return (
    <Layout>
      <section
        id="hero"
        className="snap-start w-full h-[120vh] relative flex justify-center items-center overflow-hidden"
      >
        <Slider {...settings} className="!w-full !h-[120vh] overflow-hidden">
          <div>
            <img
              src="/assets/home/hero1.jpg"
              alt="hero1"
              className="object-cover w-full h-full object-center"
            />
          </div>
          <div>
            <img
              src="/assets/home/hero2.jpg"
              alt="hero2"
              className="object-cover w-full h-full object-bottom"
            />
          </div>
          <div>
            <img
              src="/assets/home/hero3.jpg"
              alt="hero3"
              className="object-cover w-full h-full object-center"
            />
          </div>
          {/* <div className="w-full h-screen bg-[url('/assets/home/hero2.jpg')] bg-cover bg-no-repeat bg-center  ">
            2
          </div>
          <div className="w-full h-screen bg-[url('/assets/home/hero3.jpg')] bg-cover bg-no-repeat bg-center ">
            3
          </div> */}
        </Slider>

        <div className="w-full h-full bg-gradient-to-b from-[#010F2A] absolute opacity-75 " />
        <div className="max-w-7xl h-full w-full flex flex-col items-center justify-center absolute ">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="object-contain w-44 h-44"
          />
          <p className="text-[150px] font-Heleness  text-white">
            CL<span className="text-[100px] align-text-top">A</span>SSY
          </p>
          <p className="text-white text-xl -translate-y-12 font-kingsCaslon">
            is luxury but humble
          </p>
          <p className="font-kingsCaslon text-center text-white text-2xl bg-[#D9CDC1]/10 backdrop-blur-sm p-5 w-full ">
            The Residences at Sindhorn Kempinski Hotel Bangkok <br />
            <span className="text-xl">
              creates a new benchmark for unique cosmopolitan living in the
              heart of Bangkok. <br />
              harmonizes environmental-friendliness,
              <br />
              peacefulness and verdant green surroundings with <br />
              exceptional amenities.
            </span>
          </p>
        </div>
      </section>

      <section id="sylabus" className="snap-start h-screen w-full bg-[url('/assets/paper.jpg')] bg-cover bg-no-repeat bg-fixed relative ">
        <div className="w-full h-full bg-[#F5F1EA]/50 absolute bg-[url('/assets/manifestobg-f.png')] bg-contain bg-right bg-no-repeat flex flex-col justify-between items-center ">
          <div className="max-w-7xl w-full flex flex-col justify-center items-center">

            <Link href="/residence">

              <p className="text-[150px] font-Heleness  text-[#B6A694] pt-32 cursor-pointer">
                R<span className="text-[90px] align-text-top">E</span>
                SID
                <span className="text-[90px] align-text-top">E</span>NCE
              </p>
            </Link>

            <Link href="/gallery">

              <p className="text-[150px] font-Heleness  text-[#B6A694] cursor-pointer">
                G<span className="text-[90px] align-text-top">A</span>
                LL
                <span className="text-[90px] align-text-top">E</span>RY
              </p>
            </Link>

            <Link href="/service">

              <p className="text-[150px] font-Heleness  text-[#B6A694] cursor-pointer">
                S<span className="text-[90px] align-text-top">E</span>
                RV
                <span className="text-[90px] align-text-top">I</span>CE
              </p>
            </Link>


          </div>
          <div className=" w-full  flex justify-end items-end">
            <Footer />
          </div>
        </div>
      </section>



    </Layout>
  );
}
