import Layout from "../components/Layout";
import Head from "next/head";

import Link from 'next/link';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const concept = () => {
    return (
        <Layout>
            <Head>
                <title>Corner - Polo Football Park</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <div className="h-full w-full  flex justify-center">
                <div className="min-h-screen w-full h-full bg-white md:rounded-tr-[100px]  max-w-7xl  py-10 relative ">

                    <section className="flex w-full flex-col justify-center items-center px-4 lg:px-10">
                        <p className="text-3xl font-medium">Polo Corner</p>

                    </section>

                </div>



            </div> */}
        </Layout>
    );
}

export default concept;