import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const AddReview = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const title = form.title.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = form.rating.value;
    const publishingYear = form.publishingYear.value;
    const genre = form.genre.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    
    const newReview = {
      photo,
      title,
      reviewDescription,
      rating,
      publishingYear,
      genre,
      userEmail,
      userName,
    };

    fetch("https://assignment-10-server-lime-nu.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Review Added Successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          form.reset();
        }
      });
  };

  return (
   <div className="bg-gray-100 dark:bg-gray-800 dark:text-white">
     <div className="max-w-3xl  mx-auto p-6">
      <h1 className="text-xl lg:text-3xl font-bold mx-auto px-3 py-2 bg-[#F80136] text-white w-fit mb-8">Add New Review</h1>
      <form onSubmit={handleSubmit} className="space-y-6 dark:bg-gray-100 dark:text-white bg-white p-6 rounded-lg shadow-lg">
        <div>
          <label className="block font-medium text-gray-700 mb-2">Game Cover Image URL</label>
          <input
            type="url"
            name="photo"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">Game Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter the game title"
            className="input input-bordered w-full"
            required
          />
        </div>

  
        <div>
          <label className="block font-medium text-gray-700 mb-2">Review Description</label>
          <textarea
            name="reviewDescription"
            placeholder="Write a detailed review..."
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          ></textarea>
        </div>

       
        <div>
          <label className="block font-medium text-gray-700 mb-2">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            placeholder="Enter a rating"
            className="input input-bordered w-full"
            min="1"
            max="5"
            required
          />
        </div>

  
        <div>
          <label className="block font-medium text-gray-700 mb-2">Publishing Year</label>
          <input
            type="number"
            name="publishingYear"
            placeholder="e.g., 2024"
            className="input input-bordered w-full"
            min="1900"
            max="2099"
            required
          />
        </div>

       
        <div>
          <label className="block font-medium text-gray-700 mb-2">Genre</label>
          <select
            name="genre"
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>Select a genre</option>
            <option value="Action">Action</option>
            <option value="RPG">RPG</option>
            <option value="Adventure">Adventure</option>
            <option value="Strategy">Strategy</option>
            <option value="Shooter">Shooter</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">User Email</label>
          <input
            type="email"
            name="userEmail"
            defaultValue={user?.email || "Email not available"}
            readOnly
            className="input input-bordered w-full bg-gray-200 dark:bg-gray-800 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">User Name</label>
          <input
            type="text"
            name="userName"
            value={user?.displayName || ''}
            readOnly
            className="input input-bordered w-full bg-gray-200 dark:bg-gray-800 cursor-not-allowed"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-white bg-red-600 font-bold   backdrop-blur-md hover:bg-opacity-50 transition duration-300 border  hover:border-black"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default AddReview;
