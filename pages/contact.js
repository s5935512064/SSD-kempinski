import Layout from "../components/Layout";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import NextLink from 'next/link'
import { Link, animateScroll as scroll, scroller } from 'react-scroll'

const Contact = () => {
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

            <div className="bg-[url('/assets/background.jpg')] bg-cover bg-no-repeat relative bg-top">

                <section
                    id="contact"
                    className="snap-start w-full h-[120vh] relative flex justify-center items-center overflow-hidden bg-[url('/assets/contact/contact.jpg')] bg-no-repeat bg-cover bg-top"
                >
                    <div className="w-full h-full bg-gradient-to-b from-black absolute opacity-70 " />
                    <div className="max-w-7xl h-full w-full relative mx-4 md:mx-10 flex justify-center  ">
                        <div className="mt-20 flex w-full absolute top-0">
                            <img
                                src="/assets/logo.svg"
                                alt="logo"
                                className="object-contain w-28 h-28"
                            />
                        </div>
                        <p className="text-[150px] font-Heleness  text-[#F5F1EA] drop-shadow pt-44">
                            C<span className="text-[90px] align-text-top">O</span>
                            NT
                            <span className="text-[90px] align-text-top">A</span>CT
                        </p>

                    </div>
                    <Link
                        activeClass="active"
                        to="contactContent"
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

                <section id="contactContent" className="scroll-mt-16 snap-start w-full h-[150vh] relative flex justify-center items-center overflow-hidden ">

                    <div className="mt-20 w-1/2 h-full absolute bg-[url('/assets/manifestobg.png')] bg-cover bg-no-repeat opacity-20  left-0 bg-right-top" />

                    <div className="w-full h-full  absolute  flex flex-col justify-between items-center ">
                        <div className="max-w-7xl w-full h-full p-10 relative">
                            <div className="w-full h-[500px] ">
                                <div className="grid grid-cols-3 w-full h-full">
                                    <div className="col-span-2 py-5">
                                        <div className="w-full h-full">
                                            <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.710909883244!2d100.5413388153292!3d13.735944301360343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed9a7ecb2ad%3A0x30c6a65f0f9ed6ab!2sThe%20Residences%20at%20Sindhorn%20Kempinski%20Hotel%20Bangkok!5e0!3m2!1sth!2sth!4v1651562244653!5m2!1sth!2sth" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>

                                    <div className="grid grid-rows-2 p-5">
                                        <div className="w-full h-full ">
                                            <img src="/assets/contact/sindhornbuilding_6.jpg" alt="building" className="object-contain w-full h-full object-center" />
                                        </div>

                                        <div className="text-white pt-7">
                                            <p className="text-xl font-semibold">
                                                Sindhorn Building
                                            </p>
                                            <p className="text-sm font-light">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio aperiam iure, ex debitis in. Perferendis, eveniet deleniti ad obcaecati officiis explicabo voluptatum facilis. Dolor quas odio expedita ad harum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-[500px]  bg-white mb-4 ">
                                <img src="/assets/contact/map.jpg" alt="map" className="object-contain w-full h-full object-center" />

                            </div>

                            <div className="w-full ">
                                <div className="flex  flex-col justify-start items-center">
                                    <p className="text-[#B6A694] text-sm">
                                        More ways to contact us
                                    </p>
                                    <div className="flex items-center gap-3 pt-4 scale-150 ">
                                        <NextLink href="https://www.instagram.com/polo_football_park/">
                                            <a target="_blank" rel="noopener noreferrer">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="32.84"
                                                    height="32.84"
                                                    viewBox="0 0 32.84 32.84"
                                                >
                                                    <circle
                                                        id="Ellipse_9"
                                                        data-name="Ellipse 9"
                                                        cx="15.67"
                                                        cy="15.67"
                                                        r="15.67"
                                                        transform="translate(0.75 0.75)"
                                                        fill="none"
                                                        stroke="#B6A694"
                                                        strokeWidth="1.5"
                                                    />
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="26"
                                                        height="24"
                                                        viewBox="0 0 32.84 32.84"
                                                    >
                                                        <path
                                                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                                            fill="#B6A694"
                                                            transform="translate(9 10)"
                                                        />
                                                    </svg>
                                                </svg>
                                            </a>
                                        </NextLink>

                                        <NextLink href="https://www.facebook.com/PoloFootballPark">
                                            <a target="_blank" rel="noopener noreferrer">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="32.84"
                                                    height="32.84"
                                                    viewBox="0 0 32.84 32.84"
                                                    className="cursor-pointer"
                                                >
                                                    <circle
                                                        id="Ellipse_9"
                                                        data-name="Ellipse 9"
                                                        cx="15.67"
                                                        cy="15.67"
                                                        r="15.67"
                                                        transform="translate(0.75 0.75)"
                                                        fill="none"
                                                        stroke="#B6A694"
                                                        strokeWidth="1.5"
                                                    />
                                                    <path
                                                        id="Path_548020"
                                                        data-name="Path 548020"
                                                        d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
                                                        transform="translate(-71.834 -38.578)"
                                                        fill="#B6A694"
                                                    />
                                                </svg>
                                            </a>
                                        </NextLink>

                                        <a
                                            href="mailto:info@polofootballpark.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="34.408"
                                                height="32.84"
                                                viewBox="0 0 34.408 32.84"
                                            >
                                                <ellipse
                                                    id="Ellipse_7"
                                                    data-name="Ellipse 7"
                                                    cx="16.454"
                                                    cy="15.67"
                                                    rx="16.454"
                                                    ry="15.67"
                                                    transform="translate(0.75 0.75)"
                                                    fill="none"
                                                    stroke="#B6A694"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    id="Path_548016"
                                                    data-name="Path 548016"
                                                    d="M167.931,59.178a2.076,2.076,0,0,1-1.165-.358l.4-.441,3.771-4.09,1.423.969.068.023h.183l.047-.023,1.434-.975,3.761,4.084.4.431a2.175,2.175,0,0,1-1.225.377H167.94Zm-1.567-.775h0a2.434,2.434,0,0,1-.416-1.4v-4.69a2.513,2.513,0,0,1,.314-1.223l.47.326,3.714,2.536-3.683,4.013-.4.434Zm12.3,0h0l-.4-.439-3.676-4.021L178.3,51.42l.478-.326a2.4,2.4,0,0,1,.294,1.229v4.684a2.305,2.305,0,0,1-.4,1.393Zm-6.18-3.761h0l-1.41-.959a.294.294,0,0,0-.1-.064l-3.857-2.633-.507-.346a2.007,2.007,0,0,1,1.3-.486h9.136a2.149,2.149,0,0,1,1.349.486l-.511.349-5.4,3.648Z"
                                                    transform="translate(-155.217 -38.578)"
                                                    fill="#B6A694"
                                                />
                                            </svg>
                                        </a>

                                        <NextLink href="https://page.line.me/ewb3453i?openQrModal=true">
                                            <a target="_blank" rel="noopener noreferrer">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="33.492"
                                                    height="33.499"
                                                    viewBox="0 0 33.492 33.499"
                                                    className="cursor-pointer"
                                                >
                                                    <path
                                                        id="Path_548021"
                                                        data-name="Path 548021"
                                                        d="M214.5,70.99h0a16,16,0,1,1,16-16,16.2,16.2,0,0,1-6.251,12.693,30.624,30.624,0,0,1-4.459,2.436A26.441,26.441,0,0,1,214.5,71"
                                                        transform="translate(-197.758 -38.248)"
                                                        fill="none"
                                                        stroke="#B6A694"
                                                        strokeWidth="1.5"
                                                    />
                                                    <path
                                                        id="Path_548022"
                                                        data-name="Path 548022"
                                                        d="M213.915,65.158a.356.356,0,0,1-.288-.113.785.785,0,0,1-.054-.6v-.019l.157-.912a2.076,2.076,0,0,0-.034-.966c-.118-.293-.577-.448-.941-.526-5.171-.685-8.921-4.277-8.921-8.54,0-4.773,4.786-8.657,10.669-8.657s10.666,3.884,10.666,8.657a7.749,7.749,0,0,1-2.286,5.328,34.211,34.211,0,0,1-8.38,6.192,1.622,1.622,0,0,1-.588.151m4.7-13.978a.206.206,0,0,0-.2.2v4.651a.206.206,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.2.2,0,0,0,.2-.2v-.757a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.205.205,0,0,0,.2-.2v-.756a.206.206,0,0,0-.2-.2h-3Zm-4.19,2.1h0l2.129,2.876a.247.247,0,0,0,.052.05l.016.008.015.007h.032a.177.177,0,0,0,.056.008h.752a.206.206,0,0,0,.206-.2V51.367a.206.206,0,0,0-.206-.2h-.755a.2.2,0,0,0-.2.2v2.764l-2.131-2.876-.015-.022-.014-.014-.015-.014-.017-.009h-.852a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V53.291Zm-2.852-2.1a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V51.384a.2.2,0,0,0-.2-.2Zm-4.043,0a.2.2,0,0,0-.2.2v4.651a.2.2,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037V51.384a.206.206,0,0,0-.206-.2Z"
                                                        transform="translate(-197.758 -38.248)"
                                                        fill="#B6A694"
                                                    />
                                                </svg>
                                            </a>
                                        </NextLink>
                                    </div>
                                    <p className="text-[#B6A694] text-sm pt-8">

                                        88 Soi Tonson Lumpini, Pathumwan Bangkok 10330 Tel: 02-650-9899
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <div className=" w-full  relative flex items-end ">
                    <Footer />
                </div>

            </div>


        </Layout>
    );
}

export default Contact;