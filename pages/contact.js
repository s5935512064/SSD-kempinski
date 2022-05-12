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
<<<<<<< HEAD
                <img src="/assets/_DSC6452.png" alt="header" className="object-cover w-full h-full object-top " />
            </div>

            <div className="h-full w-full relative flex  justify-center items-center pt-4 ">
                <div className="max-w-7xl w-full h-full flex flex-col py-4 text-white space-y-3 px-4 md:px-10 ">
                    <p className=""> <span className="font-Libre italic text-[#B6A694] pr-1">The Residence at Sindhorn Kempinski</span> is located in Langsuan, a prime area in Bangkok surrounded by multiple embassies. The hotel is an oasis in itself, set in a green residential extension of Lumpini Park. Close proximity to the park provides a uniquely luxurious dimension, offering guests a refreshing respite from the city and an immersive relaxing experience designed with comfort and wellbeing in mind. <br></br>

                        The hotel is easily accessible by car, taxis, the BTS Skytrain and other public transportation including the tuk-tuk, the three-wheeled open-sided taxi that has long been a symbol of Bangkok.</p>
                    <div className="grid w-full min-h-[350px] grid-cols-1 md:grid-cols-2 gap-3 items-center">
                        <div className="w-full h-full relative ">
                            <img src="/assets/facilities2.png" alt="mapp" className="object-cover w-full h-full object-center" />
                        </div>
                        <div className="md:ml-5">
                            <fieldset className="w-full border border-[#B5A191]  text-lg font-medium p-4 ">
                                <legend className="mx-4 px-4 font-Libre text-xl text-[#B6A694]">Suvarnabhumi Airport to hotel</legend>
                                <p className="mb-4 text-[15px]">After exiting the airport, go straight ahead on the motorway towards Rama 9 Road. Take the Rama 9 Expressway (25 baht toll fee at the first toll booth) and drive ahead to continue to Chalerm Mahanakorn Expressway (50 baht toll fee at the second toll booth), cash only. Exit from the expressway at Exit No 5 (South Ploenchit) and near Thailand Tobacco Monopoly turn left to Duangpitak Road. Keep going straight to the main road and turn left to Ploenchit Road. After passing the Wireless intersection turn left into Soi Tonson, stay on the road and keep left then turn right at the entrance of Sindhorn Kempinski Hotel Bangkok.</p>
                            </fieldset>




                        </div>

                    </div>

                    <div className="w-full h-full  ">
                        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.710909883244!2d100.5413388153292!3d13.735944301360343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed9a7ecb2ad%3A0x30c6a65f0f9ed6ab!2sThe%20Residences%20at%20Sindhorn%20Kempinski%20Hotel%20Bangkok!5e0!3m2!1sth!2sth!4v1651562244653!5m2!1sth!2sth" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="py-10">
                        <p className="text-[#B5A191] font-semibold ">WE ARE HAPPY</p>
                        <p className="text-2xl font-semibold mb-2">TO HEAR FROM YOU</p>
                        <p>The Residence at Sindhorn Kempinski Hotel Bangkok</p>
                        <p>80 Soi Tonson, Lumphini, Pathumwan,
                            Bangkok Thailand 10330</p>
                        <p>email</p>
                        <p>tel.</p>
                        <p>website</p>


                    </div>

                </div>

            </div>
=======
            </section>
>>>>>>> dev

        </Layout>
    );
}

export default Contact;