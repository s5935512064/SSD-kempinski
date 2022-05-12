import Layout from "../components/Layout";
import Footer from "../components/Footer";
const News = () => {
    return (
        <Layout>
            <section
                id="news"
                className="snap-start w-full h-screen relative flex justify-center items-center overflow-hidden bg-[url('/assets/news/news.jpg')] bg-no-repeat bg-cover bg-center"
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
                    <div></div>
                </div>
            </section>

            <div className="bg-[#F5F1EA] w-full h-full pt-52">
                <Footer />
            </div>
        </Layout>
    );
}

export default News;