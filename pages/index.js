import Head from 'next/head'
import Layout from "../components/Layout"
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import { Autoplay } from "@fancyapps/ui/dist/carousel.autoplay.esm.js";
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

Carousel.Plugins.Autoplay = Autoplay;
Fancybox.defaults.ScrollLock = false;

const juice = "Enjoy an instant health kick with a freshly blended juice delivered by the Juice Butler, power-packed with superfoods and full of nutritious ingredients to make sure that the body gets all the vital greens to thrive. Every day, we offer for our guests to sample a different refreshing blend, designed with specific health benefits in mind."

const gym = "Maintain a workout routine without the hassle of planning for it. We have created a solution of providing the essential workout gear for guests who want to continue their fitness regime but might not have the right attire. Guests can request the entire set of shorts, T-shirt, sports shoes and new socks or just individual items. After use, with the exception of the socks as guests can keep them, all items undergo an intensive hot-water washing process, and shoes go through disinfection. Now there is no more excuse to skip a workout."

const yoka = "Your wellness is at the heart of what we do. A pre-arrival wellness consultation is conducted by our highly trained Wellness Concierge team and takes place via email or over the phone. During the consultation, you will be asked a number of questions to better understand and identify your lifestyle and wellbeing areas that may need additional attention and support. After the assessment and review of your health goals, we will create a personalised, goal-oriented wellness plan based on your particular needs. During your stay at the hotel, our professional team will assist and empower you to achieve those goals."

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
        friction: 0.96,
        center: true,
        Autoplay: {
          timeout: 1000,
          hoverPause: true,
        },
      }, 2000);
    })
  });
  return (
    <Layout>
      <div className="h-full w-full relative flex flex-col justify-center items-center !overflow-hidden">
        <div id="logo" className="hidden lg:flex max-w-7xl w-full h-full absolute  p-5">
          <img src="/assets/logo.svg" alt="logo" className="w-24 h-24 object-contain !z-50" />
        </div>
        {/* Header */}
        <section id="hero" className="lg:p-10 max-w-7xl w-full top-20 relative max-h-[700px] flex flex-col  items-center mt-20">
          <p className="text-center text-white w-4/5"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quae quo sit iure ratione corrupti minus nisi dolore nulla animi quisquam a quos ipsum tenetur ipsam unde, quod doloremque velit?</p>
          <p className="text-white text-3xl font-semibold">Stay Classy</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full mt-24 md:mt-56 gap-3 ">
              <div className="md:mr-10 text-center md:text-left">
                <fieldset className="border-t-2 border-solid border-[#B5A191]  w-full">
                  <legend className="text-3xl inline-flex items-center font-Libre pr-2 ">

                    Concept
                  </legend>
                  <p className="mb-5">Connecting nature and the city, Sindhorn Village is a new community that integrates modern architecture with an extension to Lumphini Park, the enormous leafy-green expanse in the centre of Bangkok. Under the concept Living in the Park, Sindhorn Village incorporates large areas of park and gardens, providing a living, breathing natural environment. Sindhorn Kempinski Hotel Bangkok is in the centre of this community, a place where guests can seek and find splendour and refinement, an ease of living and comfort for body and soul.</p>
                  <button className="w-fit px-3 py-2 bg-[#B5A191] text-white shadow ">Discover</button>
                </fieldset>

              </div>

              <div className="w-full h-full">
                <Image
                  src="/assets/facilities1.png"
                  alt="concept"
                  width="500"
                  height="350"
                  objectFit="contain"
                  layout="responsive"

                />
              </div>

            </div>
          </div>
          <div className="absolute w-full h-full bg-[url('/assets/manifestobg.png')]  bg-contain bg-no-repeat bg-fixed opacity-50" />

        </section>
        {/* End Concept */}

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
                <button className="w-fit px-3 py-2 bg-[#B5A191] text-white shadow ">Discover</button>
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
                      <button className="w-fit px-3 py-2 bg-[#B5A191] text-white shadow ">Discover</button>
                    </div>
                  </div>
                  <div className="w-full h-96 bg-white  relative overflow-hidden">
                    <img src="/assets/no-gear-no-excuse.jpg" alt="gym" className="object-cover object-left-top w-full h-full absolute" />
                    <div className=" w-full h-full bg-black  opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-70 duration-200 absolute text-white p-5 pt-10">
                      <p className="font-Libre font-medium ">WORKOUT TIME</p>
                      <p className="text-center flex items-center h-2/3 ">
                        {gym.slice(0, 160).concat('...')}
                      </p>
                      <button className="w-fit px-3 py-2 bg-[#B5A191] text-white shadow ">Discover</button>
                    </div>
                  </div>
                  <div className="w-full h-96 bg-white  relative overflow-hidden">
                    <img src="/assets/sindhorn-wellness-by-resense_2-16.jpg" alt="yoka" className="object-cover object-left-top w-full h-full absolute" />
                    <div className=" w-full h-full bg-black  opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-70 duration-200 absolute text-white p-5 pt-10">
                      <p className="font-Libre font-medium ">YOUR PRE-ARRIVAL WELLNESS CONSULTATION</p>
                      <p className="text-center flex items-center h-2/3 ">
                        {yoka.slice(0, 160).concat('...')}
                      </p>
                      <button className="w-fit px-3 py-2 bg-[#B5A191] text-white shadow ">Discover</button>
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

          </div>


        </section>

        {/* end Galler */}

        {/* Contact */}
        <section className="max-h-[600px] w-full  bg-[#f3f2f2] relative flex justify-center items-center p-4 md:p-10 ">
          <div className="max-w-7xl w-full h-full relative p-4 md:p-10 z-10">
            <div className="grid w-full h-full grid-cols-2 gap-3">
              <div className="w-full h-full relative ">
                <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.710909883244!2d100.5413388153292!3d13.735944301360343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed9a7ecb2ad%3A0x30c6a65f0f9ed6ab!2sThe%20Residences%20at%20Sindhorn%20Kempinski%20Hotel%20Bangkok!5e0!3m2!1sth!2sth!4v1651562244653!5m2!1sth!2sth" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="ml-5">
                <div className="w-full h-[250px] mb-5">
                  <img src="/assets/facilities2.png" alt="mapp" className="object-cover w-full h-full object-center" />
                </div>
                <p className="font-Libre text-3xl ">Location</p>
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi similique non pariatur deserunt quod totam voluptatem sequi, eum eligendi voluptate iure repellendus placeat accusamus saepe amet odit! Quam, voluptatibus.</p>
                <button className="w-fit px-3 py-2 bg-[#B5A191] text-white shadow ">Discover</button>
              </div>

            </div>
          </div>
          <div className="absolute w-full h-full bg-[url('/assets/manifestobg.png')]  bg-contain bg-no-repeat bg-fixed  opacity-50" />

        </section>

        {/* End Contact */}


      </div >
    </Layout >
  )
}
