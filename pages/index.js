import Head from 'next/head'
import Layout from "../components/Layout"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className="h-full w-full relative flex flex-col justify-center items-center !overflow-hidden">
        <div id="logo" className="hidden lg:flex max-w-7xl w-full h-full absolute  p-5">
          <img src="/assets/logo.svg" alt="logo" className="w-32 h-32 object-contain !z-50" />
        </div>
        /* Header */
        <section id="hero" className="lg:p-10 max-w-7xl w-full top-20 relative max-h-[700px] flex flex-col  items-center mt-20">
          <p className="text-center text-white w-4/5"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas quae quo sit iure ratione corrupti minus nisi dolore nulla animi quisquam a quos ipsum tenetur ipsam unde, quod doloremque velit?</p>
          <p className="text-white text-3xl font-semibold">Stay Classy</p>
          <div className="w-full max-h-[500px] mt-20 relative z-10 ">
            <video
              loop
              autoPlay
              muted
              className="!h-full !w-full aspect-video "
            >
              <source
                src="https://baansindhorn.com/video-sdk/SDK-Stay-Classy-th.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
        /* End Header */

        /* Concept */
        <section className="h-[800px] w-full bg-[#f3f2f2] relative flex justify-center items-center p-10">
          <div className="max-w-7xl w-full h-full  !overflow-hidden m-10">
            <div className="grid grid-cols-2 w-full h-full  mt-56 ">
              <div className="">
                <p>Concept</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio error modi, beatae earum in ad harum labore voluptate quia nostrum, mollitia incidunt quae repellat dicta quam eos magnam aliquam!</p>
                <button>Discover</button>
              </div>

              <div className="bg-red-500 w-full h-full">

              </div>

            </div>
          </div>

        </section>
        /* End Concept */

        /* Residence */
        <section className="h-[800px] w-full  relative flex justify-center items-center p-10">
          <div className="max-w-7xl w-full h-full bg-white shadow overflow-hidden p-10">
            <div className="grid grid-cols-2 w-full h-full  mt-56 ">
              <div className="">
                <p>Concept</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio error modi, beatae earum in ad harum labore voluptate quia nostrum, mollitia incidunt quae repellat dicta quam eos magnam aliquam!</p>
                <button>Discover</button>
              </div>

              <div className="bg-red-500 w-full h-full">

              </div>

            </div>
          </div>

        </section>
        /* End Residence */

      </div>
    </Layout>
  )
}
