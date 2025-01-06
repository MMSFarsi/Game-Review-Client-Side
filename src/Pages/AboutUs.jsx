import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white min-h-screen">
    
        <div className="container pt-12 mx-auto text-center">
          <h1 className="text-xl  lg:text-3xl font-bold mx-auto px-3 py-2 bg-[#F80136] text-white w-fit mb-8">About Us</h1>
        
        </div>
    

      <main className="py-6">
        <section className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 text-[15px]">
              Our mission is to create a hub for gamers to discover, review, and connect over their favorite games. We strive to make gaming more inclusive and engaging for players worldwide.
            </p>
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 text-[15px]">
              To become the leading platform where gamers can find trusted reviews, share their experiences, and foster a thriving global gaming community.
            </p>
          </div>
        </section>

      

        <section className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-700 dark:text-gray-300 text-[15px] mb-8">
              We are passionate about gaming and dedicated to providing a platform that empowers gamers to make informed decisions, share their thoughts, and connect with others who share their interests.
            </p>
            <ul className="list-disc list-inside text-left lg:text-center mx-auto lg:w-1/2 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Comprehensive game database with detailed reviews.</li>
              <li>User-friendly platform for sharing opinions and feedback.</li>
              <li>Strong focus on community building and engagement.</li>
              <li>Regular updates to keep content fresh and relevant.</li>
            </ul>
          </div>
        </section>
      </main>

    </div>
  );
};

export default AboutUs;
