import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Autoplay } from "@fancyapps/ui/dist/carousel.autoplay.esm.js";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

Carousel.Plugins.Autoplay = Autoplay;
Fancybox.defaults.ScrollLock = false;

export default function Home() {
  var settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
        className="w-full h-screen relative flex justify-center items-center overflow-hidden"
      >
        <Slider {...settings} className="!w-full !h-screen overflow-hidden">
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
        <div className="max-w-7xl h-full w-full flex flex-col items-center justify-center absolute translate-y-10">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="object-contain w-44 h-44"
          />
          <p className="text-[150px] font-Heleness  text-white">
            CL<span className="text-[100px] align-text-top">A</span>SSY
          </p>
          <p className="text-white text-xl -translate-y-12">
            is luxury but humble
          </p>
          <p className="text-center text-white text-2xl bg-[#D9CDC1]/10 backdrop-blur-sm p-5 w-full ">
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
    </Layout>
  );
}
