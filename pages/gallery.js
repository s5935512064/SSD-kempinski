import Layout from "../components/Layout";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Script from 'next/script'
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import FlexMasonry from '../node_modules/flexmasonry/src/flexmasonry'

const images = [
    {
        id: 1,
        src: "https://media.kempinski.com/34400639/sindhorn-kempinski-hotel-bangkok_hotel_main_entrance.jpg",
        width: "400px",
        height: "300px"
    },
    {
        id: 2,
        src: "https://media.kempinski.com/34394060/sindhorn-kempinski-hotel-bangkok_lobby_angle_3_final_high-res_16980.jpg",
        width: "200px",
        height: "200px"
    },
    {
        id: 3,
        src: "https://media.kempinski.com/34394053/sindhorn-kempinski-hotel-bangkok_detail_lobby_01_high-res_16960.jpg",
        width: 300,
        height: 400
    },
    {
        id: 4,
        src: "https://media.kempinski.com/34394919/sindhorn-kempinski-hotel-bangkok_flourish_restaurant_angle_2_final_original_17887.jpg",
        width: 300,
        height: 400
    },
    {
        id: 5,
        src: "https://media.kempinski.com/34398972/sindhorn-kempinski-hotel-bangkok_grand_deluxe_king_room_angle_1920.jpg",
        width: 200,
        height: 200
    },
    {
        id: 6,
        src: "https://media.kempinski.com/34393848/sindhorn-kempinski-hotel-bangkok_premier_residence_living_room_angle_1_final_high-res_16988.jpg",
        width: 400,
        height: 300
    },
    {
        id: 7,
        src: "https://media.kempinski.com/34393876/sindhorn-kempinski-hotel-bangkok_2_bedroom_residence_suite_living_room_final_high-res_16957.jpg",
        width: 300,
        height: 400
    },
    {
        id: 8,
        src: "https://media.kempinski.com/34393877/sindhorn-kempinski-hotel-bangkok_2_bedroom_residence_suite_king_bedroom_final_batch_2_high-res_17014.jpg",
        width: 400,
        height: 300
    },
    {
        id: 9,
        src: "https://media.kempinski.com/34393835/sindhorn-kempinski-hotel-bangkok_grand_deluxe_bathroom_angle_2_final_high-res_16969.jpg",
        width: 400,
        height: 300
    }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Gallery = () => {
    useEffect(() => {
        FlexMasonry.init('.grid2', {
            responsive: true,
            breakpointCols: {
                'min-width: 1500px': 4,
                'min-width: 1200px': 3,
                'min-width: 992px': 3,
                'min-width: 768px': 2,
                'min-width: 390px': 2,
            },
            numCols: 6
        })

    }, []);
    // useEffect(() => {
    //     const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
    //         Dots: false,
    //     })

    //     const thumbCarousel = new Carousel(document.querySelector("#thumbCarousel"), {
    //         Sync: {
    //             target: mainCarousel,
    //             friction: 0,
    //         },

    //         Dots: false,
    //         Navigation: false,
    //         infinite: false,
    //         center: true,
    //         slidesPerPage: 1,
    //     });

    // })



    // useEffect(() => {
    //     Fancybox.bind('[data-fancybox="gallery"]', {
    //         Toolbar: {
    //             display: [
    //                 { id: "prev", position: "center" },
    //                 { id: "counter", position: "center" },
    //                 { id: "next", position: "center" },
    //                 "zoom",
    //                 "slideshow",
    //                 "fullscreen",
    //                 "download",
    //                 "thumbs",
    //                 "close",
    //             ],
    //         },
    //         Carousel: {
    //             on: {
    //                 change: (that) => {
    //                     mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
    //                         friction: 0,
    //                     });
    //                 },
    //             },
    //         },

    //     });
    // })



    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {
            Thumbs: false,
            Toolbar: {
                display: [
                    { id: "prev", position: "center" },
                    { id: "counter", position: "center" },
                    { id: "next", position: "center" },
                    "zoom",
                    "slideshow",
                    "fullscreen",
                    "download",
                    "thumbs",
                    "close",
                ],
            },

            Image: {
                zoom: false,
                click: false,
                wheel: "slide",
            },
        });

    }, []);

    return (
        <Layout>
            <Script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js" />
            <Head>
                <title>Gallery - Residences Sindhorn Kempinski</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-full w-full bg-white flex justify-center">
                <div className="min-h-screen w-full h-full  max-w-7xl  py-10 relative mt-14 ">

                    <section className="flex w-full flex-col justify-center items-center px-4 lg:px-10">
                        <p className="text-center font-Libre text-3xl">Photo Gallery</p>
                        <fieldset className="md:w-[600px] border-t border-[#B5A191] text-center mb-5">
                            <legend className="px-4">Explore The Residence at Sindhorn Kempinski</legend>
                        </fieldset>

                        {/* <div id="mainCarousel" className="max-w-[800px] carousel  mx-auto">
                            <div
                                className="carousel__slide"
                                data-src="https://lipsum.app/id/1/900x600"
                                data-fancybox="gallery"
                                data-caption="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis ultricies ipsum, a maximus ligula dignissim in. Sed consectetur tellus egestas, consequat dolor at, tempus augue. Morbi quis ipsum quis velit."
                            >
                                <img src="https://lipsum.app/id/1/600x400" alt="slide" className="object-cover w-full h-full" />
                            </div>
                            <div
                                className="carousel__slide"
                                data-src="https://lipsum.app/id/2/900x600"
                                data-fancybox="gallery"
                                data-caption="Ut semper, justo eget vehicula vestibulum, enim enim suscipit lectus, et sagittis nibh risus vel metus. Quisque eu ornare ante, et gravida mauris"
                            >
                                <img src="https://lipsum.app/id/2/600x400" alt="slide" className="object-cover w-full h-full" />
                            </div>
                            <div
                                className="carousel__slide"
                                data-src="https://lipsum.app/id/3/900x600"
                                data-fancybox="gallery"
                                data-caption="Hello 🖐"
                            >
                                <img src="https://lipsum.app/id/3/600x400" alt="slide" className="object-cover w-full h-full" />
                            </div>
                            <div
                                className="carousel__slide"
                                data-src="https://lipsum.app/id/4/900x600"
                                data-fancybox="gallery"
                                data-caption="Another caption"
                            >
                                <img src="https://lipsum.app/id/4/600x400" alt="slide" className="object-cover w-full h-full" />
                            </div>
                            <div
                                className="carousel__slide"
                                data-src="https://lipsum.app/id/5/900x600"
                                data-fancybox="gallery"
                            >
                                <img data-lazy-src="https://lipsum.app/id/5/600x400" alt="slide" className="object-cover w-full h-full" />
                            </div>
                            <div
                                className="carousel__slide"
                                data-src="https://lipsum.app/id/6/900x600"
                                data-fancybox="gallery"
                            >
                                <img src="https://lipsum.app/id/6/600x400" alt="slide" className="object-cover w-full h-full" />
                            </div>
                            <div
                                className="carousel__slide"
                                data-src="https://lipsum.app/id/7/900x600"
                                data-fancybox="gallery"
                            >
                                <img src="https://lipsum.app/id/7/600x400" alt="slide" className="object-cover w-full h-full" />
                            </div>
                        </div>

                        <div id="thumbCarousel" className=" mt-5 carousel flex flex-wrap mx-auto overflow-hidden">
                            <div className="carousel__slide">
                                <img className="panzoom__content" src="https://lipsum.app/id/1/100x100" alt="thumb" />
                            </div>
                            <div className="carousel__slide">
                                <img className="panzoom__content" src="https://lipsum.app/id/2/100x100" alt="thumb" />
                            </div>
                            <div className="carousel__slide">
                                <img className="panzoom__content" src="https://lipsum.app/id/3/100x100" alt="thumb" />
                            </div>
                            <div className="carousel__slide">
                                <img className="panzoom__content" src="https://lipsum.app/id/4/100x100" alt="thumb" />
                            </div>
                            <div className="carousel__slide">
                                <img className="panzoom__content" src="https://lipsum.app/id/5/100x100" alt="thumb" />
                            </div>
                            <div className="carousel__slide">
                                <img className="panzoom__content" src="https://lipsum.app/id/6/100x100" alt="thumb" />
                            </div>
                            <div className="carousel__slide">
                                <img className="panzoom__content" src="https://lipsum.app/id/7/100x100" alt="thumb" />
                            </div>
                        </div> */}
                    </section>

                    <div className="w-full relative flex justify-center mx-4 md:mx-8 h-full">
                        <div className='overflow-hidden'>
                            <div className="grid2">
                                {images.map((item) => (
                                    <div key={item.id} className="overflow-hidden relative w-full">
                                        <div
                                            className="p-1 cursor-pointer"
                                            // onClick={() => openLightboxOnSlide(item.id)}
                                            data-caption=""
                                            data-fancybox="gallery"
                                            href={item.src}
                                            style={{ width: item.width, height: item.height }}
                                        >

                                            <div className="w-full h-full overflow-hidden absolute">

                                                <img
                                                    className="object-cover w-full h-full transition-transform duration-100 absolute hover:scale-110"
                                                    src={item.src}
                                                    alt={item.id}
                                                />
                                            </div>


                                        </div>

                                    </div>


                                ))}

                                {/* <FsLightbox
                                    toggler={lightboxController.toggler}
                                    sources={images.map((item) => (
                                        item.src
                                    ))}
                                    slide={lightboxController.slide}
                                /> */}
                            </div>


                        </div>
                    </div>

                </div>



            </div>
        </Layout>
    );
}

export default Gallery;