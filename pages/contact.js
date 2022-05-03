import Layout from "../components/Layout";

const Contact = () => {
    return (
        <Layout>

            <div className="md:h-[700px] relative w-full overflow-hidden  ">
                <div className="absolute w-full h-2/3 bottom-0 bg-gradient-to-t from-[#010F2A] flex justify-center ">
                    <div className="absolute flex flex-col bottom-0 w-full justify-center max-w-7xl space-y-2">
                        <p className="font-Libre font-bold text-5xl text-[#B6A694] text-center">Contact us</p>
                        <p className="text-base md:text-xl text-white text-center "> Get in touch with us !</p>
                    </div>
                </div>
                <img src="/assets/_DSC6452.png" alt="header" className="object-cover w-full h-full object-top " />
            </div>

            <div className="h-full w-full relative flex  justify-center items-center pt-4">
                <div className="max-w-7xl w-full h-full flex flex-col py-4 text-white space-y-3 ">
                    <div className="grid w-full h-[350px] grid-cols-2 gap-3">
                        <div className="w-full h-full relative ">
                            <img src="/assets/facilities2.png" alt="mapp" className="object-cover w-full h-full object-center" />
                        </div>
                        <div className="ml-5 ">

                            <p className="font-Libre text-3xl ">Location</p>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi similique non pariatur deserunt quod totam voluptatem sequi, eum eligendi voluptate iure repellendus placeat accusamus saepe amet odit! Quam, voluptatibus.</p>

                        </div>

                    </div>

                    <div className="w-full h-full  ">
                        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.710909883244!2d100.5413388153292!3d13.735944301360343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed9a7ecb2ad%3A0x30c6a65f0f9ed6ab!2sThe%20Residences%20at%20Sindhorn%20Kempinski%20Hotel%20Bangkok!5e0!3m2!1sth!2sth!4v1651562244653!5m2!1sth!2sth" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>

            </div>

        </Layout>
    );
}

export default Contact;