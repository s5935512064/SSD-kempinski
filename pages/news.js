import Layout from "../components/Layout";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll, scroller } from 'react-scroll'
import Slider from "react-slick";

const News = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 728,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

    const checkClick = () => {
        console.log("Clicked");
    }


    useEffect(() => {
        const btn = document.getElementById("button");
        setTimeout(() => {
            if (window.scrollY <= 500) {
                btn.click();
            }
        }, 5000)
    })

    return (
        <Layout>
            <section
                id="news"
                className="snap-start w-full h-[120vh] relative flex justify-center items-center overflow-hidden bg-[url('/assets/news/news.jpg')] bg-no-repeat bg-cover bg-center"
            >
                <div className="w-full h-full bg-gradient-to-b from-black absolute opacity-75" />
                <div className="max-w-7xl h-full w-full relative mx-4 md:mx-10 flex justify-center  ">
                    <div className="mt-20 flex w-full absolute top-0">
                        <img
                            src="/assets/logo.svg"
                            alt="logo"
                            className="object-contain w-28 h-28"
                        />
                    </div>
                    <p className="text-[150px] font-Heleness  text-[#F5F1EA] drop-shadow pt-44">
                        N<span className="text-[90px] align-text-top">E</span>
                        WS

                    </p>

                </div>
                <Link
                    activeClass="active"
                    to="newsContent"
                    spy={true}
                    offset={-64}
                    smooth={true}
                    duration={1000}
                >

                    <button id="button" onClick={checkClick} className="arrow  cursor-pointer z-40 -translate-y-36">
                        <svg height="25" width="50" className="animate-bounce">

                            <polygon
                                points="0,0 25,10 50,0 25,25"
                                fill="#fff"
                                strokeWidth="0"
                                stroke="rgba(255,255,255,.3)"
                            />
                        </svg>

                        {/* <div className="progress-1 -translate-x-9 mt-5"></div> */}
                    </button>
                </Link>
            </section>

            <section id="newsContent" className="scroll-mt-16 snap-start w-full h-screen relative flex justify-center items-center  bg-[#F5F1EA] bg-fixed ">
                <div className="max-w-7xl w-full h-full p-10 flex items-center flex-col ">

                    <div className="grid grid-cols-4 grid-rows-2 w-full h-1/2 gap-3">
                        <div className="row-span-2 col-span-2 w-full h-full bg-black">
                            1
                        </div>
                        <div className="w-full h-full bg-green-400">
                            2
                        </div>
                        <div className="w-full h-full bg-blue-400">
                            3
                        </div>
                        <div className="w-full h-full bg-red-400">
                            2
                        </div>
                        <div className="w-full h-full bg-purple-400">
                            3
                        </div>
                    </div>
                    <div className="w-full mt-10">

                        <fieldset className="md:w-[300px] border-t border-[#B5A191] text-left mb-5">
                            <legend className="pr-4 font-Libre">News Update</legend>
                        </fieldset>
                        <div className="w-full ">
                            <Slider {...settings}>
                                <div className="w-60 h-60  p-2">
                                    <div className="w-full h-full bg-black">
                                        1
                                    </div>
                                </div>
                                <div className="w-60 h-60  p-2">

                                    <div className="w-full h-full bg-red-400">
                                        2
                                    </div>
                                </div>

                                <div className="w-60 h-60  p-2">

                                    <div className="w-full h-full bg-blue-400">
                                        3
                                    </div>
                                </div>

                                <div className="w-60 h-60  p-2">
                                    <div className="w-full h-full bg-green-400">
                                        4
                                    </div>
                                </div>

                                <div className="w-60 h-60  p-2">

                                    <div className="w-full h-full bg-yellow-400">
                                        5
                                    </div>
                                </div>

                                <div className="w-60 h-60  p-2">

                                    <div className="w-full h-full bg-purple-400">
                                        6
                                    </div>
                                </div>

                            </Slider>
                        </div>


                    </div>


                </div>

            </section>

            <div className="bg-[#F5F1EA] w-full h-full pt-52">
                <Footer />
            </div>
        </Layout>
    );
}

export default News;