import React, { useState } from "react";
import Swal from "sweetalert2";

const Newsletter = () => {


  const handleSubscription = (e) => {
    e.preventDefault();
     Swal.fire({
                title: "Success!",
                text: "Thank you for subscribing to our newsletter!",
                icon: "success",
                confirmButtonText: "Okay",
              });
    e.target.reset()
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 dark:text-white py-12">

<div className="border-black/70 dark:border-white border-2  py-3 lg:py-10 px-2 lg:px-6  text-center w-[320px] lg:w-[900px] mx-auto my-12">
      <h2 className="text-sm lg:text-2xl md:text-3xl font-bold mb-4">
        Subscribe to our Newsletter
      </h2>
      <p className="text-xs lg:text-sm text-gray-600 dark:text-white mb-6">
        Get the latest updates, exclusive deals, and more straight to your inbox.
      </p>
      <form onSubmit={handleSubscription}className="flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          
          className="w-full md:w-1/3 border border-gray-300 rounded-lg px-2 lg:px-4 py-2 focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-3 lg:px-6 py-2 rounded-lg hover:border hover:border-black/50 hover:bg-white hover:text-black hover:font-bold transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
    </section>
  
  );
};

export default Newsletter;
