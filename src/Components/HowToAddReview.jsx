import React from "react";
import { Link } from "react-router-dom";


const HowToAddReview = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 dark:text-white py-10 px-4">
      <div className="container px-4 ">
        <h2 className="lg:text-3xl text-xl font-bold mx-auto px-3 py-2 bg-[#F80136] text-white w-fit mb-8">How to Add a Review</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-[#F80136] text-white flex items-center justify-center rounded-full mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl  font-semibold mb-2 dark:text-black">Log In</h3>
            <p className="text-gray-600">
              Start by logging into your account to ensure your review is tied to your profile.
            </p>
          </div>

          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-[#F80136] text-white flex items-center justify-center rounded-full mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-black">Open the Add Review Form</h3>
            <p className="text-gray-600">
              Navigate to the **Add Review** section using the menu or the provided button on the homepage.
            </p>
          </div>

        
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
            <div className="w-16 h-16 bg-[#F80136] text-white flex items-center justify-center rounded-full mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-black">Submit Your Review</h3>
            <p className="text-gray-600">
              Fill out the review form with the required details, including title, description, rating, and genre. Click the **Submit** button to save your review.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link to="/addreview">
            <button className="px-4 py-2 rounded-lg text-white bg-red-600 font-bold   backdrop-blur-md hover:bg-opacity-50 transition duration-300 border  hover:border-black">
              Go to Add Review
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowToAddReview;
