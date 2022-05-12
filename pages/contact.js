import Layout from "../components/Layout";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <Layout>
            <section
                id="contact"
                className="snap-start w-full h-screen relative flex justify-center items-center overflow-hidden bg-[url('/assets/contact/contact.jpg')] bg-no-repeat bg-cover bg-top"
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
                    <div></div>
                </div>
            </section>




            <section id="contact" className="snap-start h-screen w-full  bg-[url('/assets/background.jpg')] bg-cover bg-no-repeat bg-fixed relative">
                <div className="w-full h-full  absolute bg-[url('/assets/background.jpg')] bg-cover bg-no-repeat" />
                <div className="w-full h-full  absolute bg-[url('/assets/manifestobg.png')] bg-contain  bg-no-repeat opacity-20 " />

                <div className="w-full h-full  absolute  flex flex-col justify-between items-center ">
                    <div className="max-w-7xl w-full h-full">

                    </div>
                    <div className=" w-full  flex justify-end items-end">
                        <Footer />
                    </div>
                </div>
            </section>

        </Layout>
    );
}

export default Contact;