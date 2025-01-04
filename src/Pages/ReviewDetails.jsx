import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { FaCalendarAlt, FaUser, FaStar, FaFacebook, FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";
import Rating from "react-rating";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);
  const review = useLoaderData();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/watchlist/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const exists = data.some((item) => item.reviewId === review._id);
          setIsAdded(exists);
        });
    }
  }, [user?.email, review._id]);

  const handleAddToWatchlist = () => {
    if (!user) {
      Swal.fire({
        title: "Error",
        text: "You need to be logged in to add to the watchlist.",
        icon: "error",
      });
      return;
    }

    const watchlistData = {
      userEmail: user.email,
      userName: user.displayName,
      reviewId: review._id,
      title: review.title,
      photo: review.photo,
      reviewDescription: review.reviewDescription,
      rating: review.rating,
      publishingYear: review.publishingYear,
      genre: review.genre,
    };

    fetch("https://assignment-10-server-lime-nu.vercel.app/watchlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(watchlistData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added to your watchlist successfully.",
            icon: "success",
          });
          setIsAdded(true);
        }
      })
      .catch((error) => {
        console.error("Error adding to watchlist:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to add to the watchlist. Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div className="dark:bg-gray-800 pt-9 pb-12 dark:text-white">
    <div className="max-w-4xl mx-auto  bg-white rounded-none lg:rounded-lg shadow-md overflow-hidden ">
   
      <div className="relative">
        <img
          src={review.photo}
          alt={review.title}
          className="w-full h-fit object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full   flex items-end">
          <div className="p-4">
            <span className="bg-red-600 text-white text-xs px-3 py-1 rounded">
              {review.genre}
            </span>
          </div>
        </div>
      </div>

 
      <div className="p-2 mt-6 mb-4 dark:bg-gray-100 dark:text-white">
        <h1 className="text-2xl  font-bold text-gray-800">{review.title}</h1>
        <div className="flex items-center text-sm text-gray-600 mt-2 space-x-4">
          <span className="flex items-center">
            <FaCalendarAlt /> {review.publishingYear}
          </span>
          <span className="flex items-center ">
            <FaUser /> {review.userName }
          </span>
        
          <div className="flex items-center space-x-2">
  <span className="font-semibold text-gray-700 ">Rating:</span>
  <Rating
    initialRating={review.rating}
    readonly
    emptySymbol={<span className="text-gray-300">☆</span>}
    fullSymbol={<span className="text-amber-500">★</span>}
  />
</div>

        </div>
      </div>


      <div className="p-6 border-t dark:bg-gray-100 dark:text-white border-gray-200">
        <p className="text-gray-700 text-base leading-6">
          {review.reviewDescription}
        </p>
      </div>

   
      <div className="p-6 border-t dark:bg-gray-100 dark:text-white border-gray-200 flex justify-between items-center">
        <button
          onClick={handleAddToWatchlist}
          className={`px-3 py-2 rounded-lg text-[10px] lg:text-[15px] text-white bg-red-600 font-bold   backdrop-blur-md hover:bg-opacity-50 transition duration-300 border  hover:border-black ${
            isAdded
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-primary-focus"
          }`}
          disabled={isAdded}
        >
          {isAdded ? "Added to Watchlist" : "Add to Watchlist"}
        </button>

      
        <div className="flex space-x-3 items-center">
          <span className="text-gray-600 text-sm">Share:</span>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="text-sky-500 hover:text-sky-700 transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            <FaPinterest />
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ReviewDetails;
