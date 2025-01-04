import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateReview = () => {
  const review = useLoaderData();
  const { _id, photo, title, reviewDescription, rating, publishingYear, genre } = review;
  const { user } = useContext(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedReview = {
      photo: form.photo.value,
      title: form.title.value,
      reviewDescription: form.reviewDescription.value,
      rating: form.rating.value,
      publishingYear: form.publishingYear.value,
      genre: form.genre.value,
      userEmail: form.userEmail.value,
    };

    fetch(`https://assignment-10-server-lime-nu.vercel.app/reviews/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Review Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Okay',
          });
        }
      });
  };

  return (
    <div className='bg-gray-100 dark:bg-gray-800 dark:text-white'>
      <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-[14px] lg:text-3xl font-bold mx-auto px-3 py-2 bg-[#F80136] text-white w-fit mb-8">Update Review for {title}</h1>
      <form onSubmit={handleUpdate} className="space-y-6 dark:bg-gray-100 dark:text-black bg-white p-6 rounded-lg shadow-lg">
      
        <div>
          <label className="block font-medium text-gray-700 mb-2">Game Cover Image URL</label>
          <input
            type="url"
            name="photo"
            defaultValue={photo}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">Game Title</label>
          <input
            type="text"
            name="title"
            defaultValue={title}
            placeholder="Enter the game title"
            className="input input-bordered w-full"
            required
          />
        </div>

 
        <div>
          <label className="block font-medium text-gray-700 mb-2">Review Description</label>
          <textarea
            name="reviewDescription"
            defaultValue={reviewDescription}
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
            defaultValue={rating}
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
            defaultValue={publishingYear}
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
            defaultValue={genre}
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
            className="input input-bordered w-full bg-gray-200 cursor-not-allowed"
          />
        </div>

   
        <div>
          <label className="block font-medium text-gray-700 mb-2">User Name</label>
          <input
            type="text"
            defaultValue={user?.displayName || ''}
            readOnly
            className="input input-bordered w-full bg-gray-200 cursor-not-allowed"
          />
        </div>

       
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 rounded-lg text-white bg-red-600 font-bold   backdrop-blur-md hover:bg-opacity-50 transition duration-300 border  hover:border-black"
          >
            Update Review
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateReview;
