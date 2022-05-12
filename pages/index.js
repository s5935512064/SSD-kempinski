<<<<<<< HEAD
import Head from 'next/head'
import Layout from "../components/Layout"
import Image from 'next/image'
import Link from 'next/link'
=======
import Head from "next/head";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Link from 'next/link';
import Image from "next/image";
>>>>>>> dev
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
        className="snap-start w-full h-screen relative flex justify-center items-center overflow-hidden"
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
<<<<<<< HEAD
        {/* Header */}
        <section id="hero" className="lg:p-10 max-w-7xl w-full top-20 relative max-h-[700px] flex flex-col  items-center mt-20">
          <p className="text-center text-white w-3/5"> The Residences at Sindhorn Kempinski Hotel Bangkok is an integral part of the inspired Sindhorn Village development, creates a new benchmark for unique cosmopolitan living in the heart of Bangkok. Situated on charismatic Langsuan Road, it harmonizes environmental-friendliness, peacefulness and verdant green surroundings with exceptional amenities.</p>
          <fieldset className="w-[300px] border-t border-[#B5A191]  text-lg font-medium ">
            <legend className="pl-4 font-Libre text-3xl text-white text-right">Stay Classy</legend>
          </fieldset>

          <div className="w-full max-h-[500px] mt-20 relative z-10  ">
            <video
              loop
              autoPlay
              muted
              className="!h-full !w-full aspect-video shadow-2xl "
            >
              <source
                src="https://baansindhorn.com/video-sdk/SDK-Stay-Classy-th.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
        {/* End Header */}

        {  /* Concept */}
        <section className="min-h-[600px] w-full bg-[#f3f2f2] relative flex justify-center items-center md:p-10">
          <div className="max-w-7xl w-full h-full  !overflow-hidden px-4 md:m-10 z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full mt-24 md:mt-56 gap-3 items-center ">
              <div className="md:mr-10 text-center md:text-left">
                <fieldset className="border-t-2 border-solid border-[#B5A191]  w-full">
                  <legend className="text-3xl inline-flex items-center font-Libre pr-2 ">

                    Concept
                  </legend>
                  <p className="mb-5">Connecting nature and the city, Sindhorn Village is a new community that integrates modern architecture with an extension to Lumphini Park, the enormous leafy-green expanse in the centre of Bangkok. Under the concept Living in the Park, Sindhorn Village incorporates large areas of park and gardens, providing a living, breathing natural environment. Sindhorn Kempinski Hotel Bangkok is in the centre of this community, a place where guests can seek and find splendour and refinement, an ease of living and comfort for body and soul.</p>
                  <Link href="/concept">
                    <button className="w-fit px-3 py-2 bg-[#B5A191] text-white shadow ">Discover</button>
                  </Link>
                </fieldset>
=======
      </section>

      <section id="sylabus" className="snap-start h-screen w-full bg-[url('/assets/paper.jpg')] bg-cover bg-no-repeat bg-fixed relative ">
        <div className="w-full h-full bg-[#F5F1EA]/50 absolute bg-[url('/assets/manifestobg-f.png')] bg-contain bg-right bg-no-repeat flex flex-col justify-between items-center ">
          <div className="max-w-7xl w-full flex flex-col justify-center items-center">

            <Link href="/residence">
>>>>>>> dev

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

<<<<<<< HEAD
        {/* Residence */}
        <section className="max-h-[600px] w-full  relative flex justify-center items-center p-4 md:p-10 ">
          <div className="max-w-7xl w-full h-full bg-white shadow overflow-hidden p-4 md:p-10 z-10">
            <div className="grid w-full h-full grid-cols-1 md:grid-cols-2 gap-3">
              <div className="w-full h-full">
                <Image
                  src="/assets/gallery14.png"
                  alt="residence"
                  width="500"
                  height="350"
                  objectFit="cover"
                  layout="responsive"

                />
              </div>
              <div className="row-start-1 md:col-start-2 md:ml-10 flex flex-col justify-center items-center text-center md:text-left md:items-start">
                <p className="font-Libre text-3xl">Residence</p>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio error modi, beatae earum in ad harum labore voluptate quia nostrum, mollitia incidunt quae repellat dicta quam eos magnam aliquam!</p>
                <Link href="/residence">
                  <button className="w-fit px-3 py-2 bg-[#B5A191] text-white shadow ">Discover</button>
                </Link>
              </div>
            </div>
          </div>


        </section>
        {   /* End Residence */}

        {/* Services */}
        <section className="min-h-[600px] w-full  bg-[#f3f2f2] relative flex justify-center items-center p-4 md:p-10 ">
          <div className="max-w-7xl w-full h-full relative  z-10">
            <div className="grid w-full h-full grid-cols-1 gap-3 ">

              <div className="text-center">
                <p className="font-Libre text-3xl">Service</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quaerat magnam beatae porro, saepe accusantium libero necessitatibus unde placeat dolorem?</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-2 ">
                  <div className="w-full h-96 bg-white  relative overflow-hidden">
                    <img src="/assets/juice-of-the-day.jpg" alt="juiceofday" className="object-cover object-left-top w-full h-full absolute" />
                    <div className=" w-full h-full bg-black  opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-70 duration-200 absolute text-white p-5 pt-10">
                      <p className="font-Libre font-medium ">ENERGY-PACKED JUICES</p>
                      <p className="text-center flex items-center h-2/3 ">
                        {juice.slice(0, 160).concat('...')}
                      </p>
                      <Link href="/service">
                        <button className="w-fit px-3 py-2 bg-[#B5A191] text-white shadow ">Discover</button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full h-96 bg-white  relative overflow-hidden">
                    <img src="/assets/no-gear-no-excuse.jpg" alt="gym" className="object-cover object-left-top w-full h-full absolute" />
                    <div className=" w-full h-full bg-black  opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-70 duration-200 absolute text-white p-5 pt-10">
                      <p className="font-Libre font-medium ">WORKOUT TIME</p>
                      <p className="text-center flex items-center h-2/3 ">
                        {gym.slice(0, 160).concat('...')}
                      </p>
                      <Link href="/service">
                        <button className="w-fit px-3 py-2 bg-[#B5A191] text-white shadow ">Discover</button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-full h-96 bg-white  relative overflow-hidden">
                    <img src="/assets/sindhorn-wellness-by-resense_2-16.jpg" alt="yoka" className="object-cover object-left-top w-full h-full absolute" />
                    <div className=" w-full h-full bg-black  opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-70 duration-200 absolute text-white p-5 pt-10">
                      <p className="font-Libre font-medium ">YOUR PRE-ARRIVAL WELLNESS CONSULTATION</p>
                      <p className="text-center flex items-center h-2/3 ">
                        {yoka.slice(0, 160).concat('...')}
                      </p>
                      <Link href="/service">
                        <button className="w-fit px-3 py-2 bg-[#B5A191] text-white shadow ">Discover</button>
                      </Link>
                    </div>
                  </div>

                </div>


              </div>
            </div>
          </div>
          <div className="absolute w-full h-full bg-[url('/assets/manifestobg.png')]  bg-contain bg-no-repeat bg-fixed  opacity-50" />

        </section>

        {/* End Services */}

        {/* Gallery */}
        <section className="max-h-[600px] w-full  relative flex justify-center items-center p-4 md:p-10 ">
          <div className="max-w-7xl w-full h-full shadow overflow-hidden p-4 md:p-10 z-10 ">
            <p className="font-Libre text-3xl text-center text-white">Gallery</p>
            <div id="mainCarousel" className="carousel  mx-auto py-5 max-h-[300px] sm:max-h-[400px] overflow-hidden ">
              <div className="carousel__viewport">
                <div className="carousel__slide md:!w-[400px] min-h-[350px] sm:min-h-[350px] md:mx-4 rounded shadow">
                  <Image
                    loader="/assets/gallery12.png"
                    unoptimized={true}
                    src="/assets/gallery12.png"
                    layout="fill"
                    className="object-cover !w-full !relative !h-[unset] !py-0 px-4 "
                    quality={100}
                  />
                </div>
                <div className="carousel__slide md:!w-[400px] min-h-[250px] sm:min-h-[350px] md:mx-4 rounded shadow">
                  <Image
                    loader="/assets/gallery12.png"
                    unoptimized={true}
                    src="/assets/gallery12.png"
                    layout="fill"
                    className="object-cover !w-full !relative !h-[unset] !py-0 px-4 "
                    quality={100}
                  />
                </div>
                <div className="carousel__slide md:!w-[400px] min-h-[250px] sm:min-h-[350px] md:mx-4 rounded shadow">
                  <Image
                    loader="/assets/gallery12.png"
                    unoptimized={true}
                    src="/assets/gallery12.png"
                    layout="fill"
                    className="object-cover !w-full !relative !h-[unset] !py-0 px-4 "
                    quality={100}
                  />
                </div>
                <div className="carousel__slide md:!w-[400px] min-h-[250px] sm:min-h-[350px] md:mx-4 rounded shadow">
                  <Image
                    loader="/assets/gallery12.png"
                    unoptimized={true}
                    src="/assets/gallery12.png"
                    layout="fill"
                    className="object-cover !w-full !relative !h-[unset] !py-0 px-4 "
                    quality={100}
                  />
                </div>
                <div className="carousel__slide md:!w-[400px] min-h-[250px] sm:min-h-[350px] md:mx-4 rounded shadow">
                  <Image
                    loader="/assets/gallery12.png"
                    unoptimized={true}
                    src="/assets/gallery12.png"
                    layout="fill"
                    className="object-cover !w-full !relative !h-[unset] !py-0 px-4 "
                    quality={100}
                  />
                </div>

              </div>
            </div>
            <div className="text-center">

              <button className="w-fit px-3 py-2 bg-[#B5A191] text-white shadow ">Discover</button>
            </div>
=======
>>>>>>> dev

          </div>
          <div className=" w-full  flex justify-end items-end">
            <Footer />
          </div>
        </div>
      </section>


    </Layout>
  );
}
