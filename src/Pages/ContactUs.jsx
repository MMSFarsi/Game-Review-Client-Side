import React from "react";

const ContactUs = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 pt-12 dark:text-white min-h-screen">
         
                <div className="container mx-auto text-center">
                    <h1 className="text-xl lg:text-3xl font-bold mx-auto px-3 py-2 bg-[#F80136] text-white w-fit mb-8">Contact Us</h1>

                </div>
     

            <main className="py-12">
                <div className="container mx-auto px-4">
                    <section className="text-center mb-12">
                        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-8">
                            Whether you need help or have something to share, we’re here for you.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                                <h3 className="text-xl font-semibold mb-2 text-black">Address</h3>
                                <p className="text-gray-600">
                                Chittagong, Bangladesh

                                    <br />
                                    Chill Gamer
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                                <h3 className="text-xl font-semibold mb-2 text-black">Email</h3>
                                <p className="text-gray-600">info@chillgamer.com</p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                                <h3 className="text-xl font-semibold mb-2 text-black">Phone</h3>
                                <p className="text-gray-600">+123-4456-7940</p>
                            </div>
                        </div>
                    </section>
                    <section className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                        <form className="max-w-xl mx-auto">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#F80136]"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#F80136]"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    placeholder="Your Message"
                                    rows="5"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#F80136]"
                                ></textarea>
                            </div>
                            <p
                                className="bg-[#F80136] text-white px-6 py-3 rounded-lg hover:bg-[#c8002d] transition duration-300"
                            >
                                Send Message
                            </p>
                        </form>
                    </section>

                 
                    <section>
                        <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>
                        <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
                            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345098743!2d-122.42062918468156!3d37.7790269797591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c831e3e35%3A0xdbb1086d8f33e13e!2sGaming%20Platform%20HQ!5e0!3m2!1sen!2sus!4v1697211690172!5m2!1sen!2sus" allowFullScreen=""
                                loading="lazy"
                                title="Google Maps"
                            ></iframe>
                        </div>
                    </section>
                </div>
            </main>


        </div>
    );
};

export default ContactUs;
