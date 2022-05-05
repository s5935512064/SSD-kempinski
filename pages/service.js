import Layout from "../components/Layout";

const Service = () => {
    return (
        <Layout>
            <div className="h-full w-full  flex justify-center">

                <div className="min-h-screen w-full h-full   max-w-7xl  py-10 relative mt-14 ">
                    <section className="flex w-full flex-col justify-center items-center px-4 lg:px-10 text-white">
                        <p className="text-center font-Libre text-3xl">Services and Facilities</p>
                        <fieldset className="md:w-[600px] border-t border-[#B5A191] text-center mb-5">
                            <legend className="px-4">The Residence at Sindhorn Kempinski</legend>
                        </fieldset>
                    </section>

                    <div className="text-white grid grid-cols-1 md:grid-cols-2 mt-10 px-4 md:px-10 gap-10">
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" className="md:mr-10">

                            <p className="font-Libre font-medium text-xl">CONCIERGE SERVICE</p>
                            <fieldset className="w-full border-t border-[#B5A191] text-right text-lg font-medium ">
                                <legend className="px-4 font-Libre">Making your stay memorable</legend>
                            </fieldset>

                            <p className="font-light text-sm">No matter how big or small your request, our concierge team is here to attend to your every need. Whether you need help arranging transport to or from the airport, or around the city for sightseeing, they should be your first port of call.

                                No matter how big or small your request, our concierge team is here to attend to your every need. Whether you need help arranging transport to or from the airport, or around the city for sightseeing, they should be your first port of call.

                                Celebrating an occasion while you’re here? Ask the concierge for help with any arrangements to make the day itself extra special, they’ll be delighted to assist.

                                Visit the concierge in the reception area on the ground floor, or contact them directly by dialing ‘0’ from your room.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" className="w-full h-full shadow ">
                            <img src="/assets/emotional-people-shots_13007_original_original_5259.jpg" alt="CONCIERGE SERVICE" className="w-full min-h-[300px] object-contain object-center" />
                        </div>
                    </div>

                    <div className="text-white grid grid-cols-1 md:grid-cols-2 mt-10 px-4 md:px-10 gap-10 ">
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" className="">
                            <img src="/assets/sindhorn-kempinski-hotel-bangkok_travel-information.jpg" alt="LIMOUSINE SERVICE" className="w-full object-contain object-center mb-5" />
                            <p className="font-Libre font-medium text-xl">LIMOUSINE SERVICE</p>
                            <fieldset className="w-full border-t border-[#B5A191]  text-lg font-medium ">
                                <legend className="pr-4 font-Libre">Travel in Style</legend>
                            </fieldset>

                            <p className="font-light text-sm">Chauffeur-driven limousines are available from the limousine desk. For more information, please contact the concierge desk or dial "0" from your room. </p>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" className="">

                            <p className="font-Libre font-medium text-xl">LUGGAGE STORAGE</p>
                            {/* <fieldset className="w-full border-t border-[#B5A191]  text-lg font-medium ">
                                <legend className="pr-4">Travel in Style</legend>
                            </fieldset> */}

                            <p className="font-light text-sm">If you would like us to store your luggage while you are away from the hotel we are happy to do so. This service is complimentary for in-house guests but, due to obvious security reasons, limitations may apply. Please contact the concierge desk or dial '0' from your room. </p>
                            <img src="/assets/kidxb3_bellboy_03_original_4010_2560.jpg" alt="LUGGAGE STORAGE" className="w-full object-contain object-center mt-5" />
                        </div>
                    </div>

                    <div className="text-white grid grid-cols-1 md:grid-cols-2 mt-10 px-4 md:px-10 gap-10">
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" className="w-full h-full shadow md:mr-10 ">
                            <img src="/assets/lady-in-red4.jpg" alt="LADY IN RED" className="w-full min-h-[300px] object-contain object-center" />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400" className="">

                            <p className="font-Libre font-medium text-xl">LADY IN RED</p>
                            <fieldset className="w-full border-t border-[#B5A191] text-right text-lg font-medium ">
                                <legend className="px-4 font-Libre">Kempinski's brand ambassadors</legend>
                            </fieldset>

                            <p className="font-light text-sm">Our Kempinski brand ambassador – the elegant Lady in Red – will give you a warm welcome upon arrival, and be at your service throughout your stay, right up to your departure. A local expert, our Lady in Red can help with all manner of enquiries, helping to craft an unforgettable experience for every guest, tailored to your precise priorities and taste.

                                Sightseeing tips, drinking and dining recommendations, travel arrangements – these are just a few of the things the Lady in Red can assist you with. Consider her a confidant during your visit – she can even elevate a special occasion with those finer details, so if you’re celebrating a big birthday with us, or arranging a surprise proposal, the Lady in Red will ensure everything runs smoothly.

                                Instantly recognisable in their iconic scarlet attire, you can’t miss the Lady in Red in the hotel lobby.</p>
                        </div>

                    </div>

                    <div className="text-white grid grid-cols-1 md:grid-cols-2 mt-10 px-4 md:px-10 gap-10">
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" className="w-full h-full shadow md:mr-10 ">
                            <img src="/assets/kempinskiemeraldpalaceanov18-88_original_5245.jpg" alt="SHUTTLE SERVICE" className="w-full min-h-[300px] object-contain object-center" />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400" className="">

                            <p className="font-Libre font-medium text-xl">SHUTTLE SERVICE</p>
                            <fieldset className="w-full border-t border-[#B5A191] text-right text-lg font-medium ">
                                <legend className="px-4 font-Libre">For your convenience</legend>
                            </fieldset>

                            <p className="font-light text-sm">For your comfort and enjoyment, we offer a complimentary shuttle service for guests, which runs between a selection of convenient locations.

                                This service is able to transport guests from the hotel directly to Lumphini MRT Station, Chidlom BTS Station, Central Chidlom, Central Embassy, CentralWorld and Erawan Shrine.

                                The shuttle departs for these popular destinations from 7:00 to 19:00. Advance reservation is required and subject to availability upon request. To book your place, or enquire about the times, you can call +66 (0) 2 095 9999 or get in touch by email via concierge.sindhornbangkok@kempinski.com.</p>
                        </div>

                    </div>

                    <div className="text-white grid grid-cols-1  mt-10 px-4 md:px-10 gap-10">
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" className="w-full h-full shadow md:mr-10 ">
                            <img src="/assets/sindhorn-kempinski-hotel-bangkok_executive_lounge_angle_2_final_original_17879.jpg" alt="EXECUTIVE LOUNGE" className="w-full min-h-[300px] object-contain object-center" />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400" className="">

                            <p className="font-Libre font-medium text-xl">EXECUTIVE LOUNGE SERVICE AND BENEFITS</p>
                            <fieldset className="w-full border-t border-[#B5A191] text-right text-lg font-medium ">
                                <legend className="px-4 font-Libre">Intimate dining and lounge space</legend>
                            </fieldset>

                            <p className="font-light text-sm">The Executive Lounge on Floor 19 is a haven for relaxation that offers an intimate dining and lounge space exclusive to Club guests. Patrons have the benefit of a tailored breakfast that includes eggs made à la minute, free-flow refreshments throughout the day, and selected cocktails in the evening.</p>
                            <p className="font-medium mt-2">Executive Club Benefits</p>
                            <ul className="list-disc ml-10 font-light text-sm">
                                <li>Inclusive of breakfast, high tea and evening cocktails*</li>
                                <li>Personalised concierge service</li>
                                <li>Personalised check in and check out</li>
                                <li>All day snacks and refreshments from 11:00 to 21:00</li>
                                <li>Complimentary VIP mini bar items</li>
                                <li>Unlimited local calls (02 only)</li>
                                <li>Complimentary local international newspapers and digital newspapers</li>
                                <li>Complimentary pressing service 2 pieces per day (non-accumulative)</li>
                                <li>Complimentary late checkout until 16:00, subject to availability </li>
                                <li>10 percent discount on a-la-carte spa treatments</li>
                                <li>20 percent discount on laundry service</li>
                            </ul>
                            <p className="font-light text-sm">*As per governmental law, alcohol will only be served to guests 20 years old and above. Proof of ID may be required for age verification. Guests under the age of 20 are not permitted to partake in the evening cocktails.</p>
                        </div>



                    </div>

                    <div className="text-white grid grid-cols-1 md:grid-cols-2 mt-10 px-4 md:px-10 gap-10 ">
                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" className="">
                            <img src="/assets/sindhorn-wellness-by-resense_2-16.jpg" alt="WELLNESS CONCIERGE" className="w-full object-contain object-center mb-5" />
                            <p className="font-Libre font-medium text-xl">WELLNESS CONCIERGE</p>
                            <fieldset className="w-full border-t border-[#B5A191]  text-lg font-medium ">
                                <legend className="pr-4 font-Libre">Personalised Care</legend>
                            </fieldset>

                            <p className="font-light text-sm">Our Wellness Concierge will help you plan your perfect visit; our Holistic Wellness Chef will prepare nutritionally balanced meals made with seasonal, whole foods; our Juice Butler will deliver a daily energy boost; and our team of nutritionists, yoga experts, exercise physiologists and other specialists unparalleled in the city will provide personalised integrative care.</p>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="">
                            <img src="/assets/no-gear-no-excuse.jpg" alt="NO GEAR / NO EXCUSE" className="w-full object-contain object-center mb-5" />
                            <p className="font-Libre font-medium text-xl">NO GEAR / NO EXCUSE</p>
                            <fieldset className="w-full border-t border-[#B5A191]  text-lg font-medium ">
                                <legend className="pr-4 font-Libre">Workout Clothes Hire</legend>
                            </fieldset>

                            <p className="font-light text-sm">Maintain a workout routine without the hassle of planning for it. We have created a solution of providing the essential workout gear for guests who want to continue their fitness regime but might not have the right attire. Guests can request the entire set of shorts, T-shirt, sports shoes and new socks or just individual items. After use, with the exception of the socks as guests can keep them, all items undergo an intensive hot-water washing process, and shoes go through disinfection. Now there is no more excuse to skip a workout.</p>
                        </div>
                    </div>


                </div>
            </div>
        </Layout>
    );
}

export default Service;