import Layout from "../components/Layout";
import Head from "next/head";
import React, { useState, useEffect } from "react";
const Residence = () => {
    const [openTab, setOpenTab] = useState(1);
    return (
        <Layout>
<<<<<<< HEAD
            <Head>
                <title>Residence - Residences Sindhorn Kempinski</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-[800px] w-full flex flex-col justify-center items-center relative">
                <img src="/assets/facilitiess2.png" alt="facilities" className="object-cover w-full h-full" />
                <div className="bg-white md:w-1/2  md:h-1/5 absolute bg-opacity-80 p-10 flex justify-center flex-col shadow mx-4">
                    <p className="text-[#B5A191] font-semibold text-xl">RESIDENCE LOBBY</p>
                    <p className="">An indulgence in luxurious marble complemented by breathtaking contemporary interior design, the spectacular Grand Lobby welcomes residents and their guests with 7.5-meter high ceilings. State-of-the-art elevators whisk residents to the ultimate in privacy and security due to advanced keycard access on every floor.</p>
                </div>

            </div>
            <div className="h-full w-full bg-white flex justify-center">
                <div className="min-h-screen w-full h-full  max-w-7xl  pb-10 relative px-4 md:px-10  ">

                    <div className="my-5 text-black text-center ">
                        <p className="text-3xl font-Libre text-[#B5A191]"> Lorem</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sed sapiente beatae earum itaque, quasi harum nostrum iusto velit amet aperiam deleniti quod dolorum. Asperiores incidunt ab officiis facere explicabo!
                        </p>
                    </div>

                    <div className="my-5 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 max-h-[500px] overflow-hidden ">
                            <img src="/assets/gallery13.png" alt="penhouse" className="object-cover w-full h-full object-center shadow hover:scale-110 duration-200" />

                        </div>
                        <div className="mx-4 md:w-2/5 max-h-[350px] bg-[#f8f8f8] -translate-y-11 md:translate-y-0  md:-translate-x-11 shadow-xl p-5">
                            <p className="font-semibold text-[#B5A191] text-lg">Penthouse</p>
                            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, eius!</p>
                            <ul className="ml-5 mt-2 ">
                                <li>51/F and 52/F</li>
                                <li>707.28 sqm (7,613.10 sqft)</li>
                                <li>4 car parking spaces</li>
                                <li>4 bedrooms</li>
                                <li>See floor plan</li>
                            </ul>

                            <button className="w-full p-2 bg-[#B5A191] mt-5 text-white">REGISTER</button>
                        </div>
                    </div>

                    <div className="my-5 flex flex-col-reverse md:flex-row items-center">

                        <div className="mx-4 md:w-2/5 max-h-[350px] bg-[#f8f8f8] -translate-y-11 md:translate-y-0 md:translate-x-11 shadow-xl p-5 z-10">
                            <p className="font-semibold text-[#B5A191] text-lg">Four-Bedroom Residence</p>
                            <p className="">The Four-Bedroom Residence presents a tasteful interior composed by the most premium materials and a rich, sumptuous colour palette.
                            </p>
                            <ul className="ml-5 mt-2 ">
                                <li>51/F and 52/F</li>
                                <li>707.28 sqm (7,613.10 sqft)</li>
                                <li>4 car parking spaces</li>
                                <li>4 bedrooms</li>
                                <li>See floor plan</li>
                            </ul>

                            <button className="w-full p-2 bg-[#B5A191] mt-5 text-white">REGISTER</button>
                        </div>
                        <div className="md:w-1/2 max-h-[500px] bg-red-500 overflow-hidden">
                            <img src="/assets/gallery14.png" alt="4beds" className="object-cover w-full h-full object-center shadow hover:scale-110 duration-200" />

                        </div>
                    </div>

                    <div className="my-5 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 max-h-[500px] overflow-hidden ">
                            <img src="/assets/gallery13.png" alt="penhouse" className="object-cover w-full h-full object-center shadow hover:scale-110 duration-200" />

                        </div>
                        <div className="mx-4 md:w-2/5 max-h-[350px] bg-[#f8f8f8] -translate-y-11 md:translate-y-0  md:-translate-x-11 shadow-xl p-5">
                            <p className="font-semibold text-[#B5A191] text-lg">Three-Bedroom Residence</p>
                            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, eius!</p>
                            <ul className="ml-5 mt-2 ">
                                <li>51/F and 52/F</li>
                                <li>707.28 sqm (7,613.10 sqft)</li>
                                <li>4 car parking spaces</li>
                                <li>4 bedrooms</li>
                                <li>See floor plan</li>
                            </ul>

                            <button className="w-full p-2 bg-[#B5A191] mt-5 text-white">REGISTER</button>
                        </div>
                    </div>

                    <div className="my-5 flex flex-col-reverse md:flex-row items-center">

                        <div className="mx-4 md:w-2/5 max-h-[350px] bg-[#f8f8f8] -translate-y-11 md:translate-y-0 md:translate-x-11 shadow-xl p-5 z-10">
                            <p className="font-semibold text-[#B5A191] text-lg">Two-Bedroom Residence</p>
                            <p className="">The Four-Bedroom Residence presents a tasteful interior composed by the most premium materials and a rich, sumptuous colour palette.
                            </p>
                            <ul className="ml-5 mt-2 ">
                                <li>51/F and 52/F</li>
                                <li>707.28 sqm (7,613.10 sqft)</li>
                                <li>4 car parking spaces</li>
                                <li>4 bedrooms</li>
                                <li>See floor plan</li>
                            </ul>

                            <button className="w-full p-2 bg-[#B5A191] mt-5 text-white">REGISTER</button>
                        </div>
                        <div className="md:w-1/2 max-h-[500px] bg-red-500 overflow-hidden">
                            <img src="/assets/gallery14.png" alt="4beds" className="object-cover w-full h-full object-center shadow hover:scale-110 duration-200" />

                        </div>
                    </div>

                    <div className="my-5 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 max-h-[500px] overflow-hidden ">
                            <img src="/assets/gallery13.png" alt="penhouse" className="object-cover w-full h-full object-center shadow hover:scale-110 duration-200" />

                        </div>
                        <div className="mx-4 md:w-2/5 max-h-[350px] bg-[#f8f8f8] -translate-y-11 md:translate-y-0  md:-translate-x-11 shadow-xl p-5">
                            <p className="font-semibold text-[#B5A191] text-lg">One-Bedroom Residence</p>
                            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, eius!</p>
                            <ul className="ml-5 mt-2 ">
                                <li>51/F and 52/F</li>
                                <li>707.28 sqm (7,613.10 sqft)</li>
                                <li>4 car parking spaces</li>
                                <li>4 bedrooms</li>
                                <li>See floor plan</li>
                            </ul>

                            <button className="w-full p-2 bg-[#B5A191] mt-5 text-white">REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="min-h-[400px] md:min-h-[600px] h-full w-full relative    flex  justify-center pt-5">
                <div className="max-w-7xl w-full h-full flex justify-center">
                    <div className="w-full relative  mx-4 md:mx-8 h-full text-white">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <ul
                                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                                    role="tablist"
                                >
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs md:text-base font-medium uppercase px-5 py-3  block leading-normal " +
                                                (openTab === 1
                                                    ? "text-white border-b-2"
                                                    : "text-gray-500")
                                            }
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(1);
                                            }}
                                            data-toggle="tab"
                                            href="#link1"
                                            role="tablist"
                                        >
                                            General Specification
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs md:text-base font-medium uppercase px-5 py-3  block leading-normal " +
                                                (openTab === 2
                                                    ? "text-white border-b-2"
                                                    : "text-gray-500")
                                            }
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(2);
                                            }}
                                            data-toggle="tab"
                                            href="#link2"
                                            role="tablist"
                                        >
                                            Project Details
                                        </a>
                                    </li>
                                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                        <a
                                            className={
                                                "text-xs md:text-base font-medium uppercase px-5 py-3  block leading-normal " +
                                                (openTab === 3
                                                    ? "text-white border-b-2"
                                                    : "text-gray-500")
                                            }
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(3);
                                            }}
                                            data-toggle="tab"
                                            href="#link3"
                                            role="tablist"
                                        >
                                            Project Development Team
                                        </a>
                                    </li>
                                </ul>
                                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="tab-content tab-space">
                                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                                <p>
                                                    Collaboratively administrate empowered markets via
                                                    plug-and-play networks. Dynamically procrastinate B2C users
                                                    after installed base benefits.
                                                    <br />
                                                    <br /> Dramatically visualize customer directed convergence
                                                    without revolutionary ROI.
                                                </p>
                                            </div>
                                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                                <p>
                                                    Completely synergize resource taxing relationships via
                                                    premier niche markets. Professionally cultivate one-to-one
                                                    customer service with robust ideas.
                                                    <br />
                                                    <br />
                                                    Dynamically innovate resource-leveling customer service for
                                                    state of the art customer service.
                                                </p>
                                            </div>
                                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                                <p>
                                                    Efficiently unleash cross-media information without
                                                    cross-media value. Quickly maximize timely deliverables for
                                                    real-time schemas.
                                                    <br />
                                                    <br /> Dramatically maintain clicks-and-mortar solutions
                                                    without functional solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

=======
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
>>>>>>> dev
                </div>
            </section>
        </Layout>
    );
}

export default Residence;