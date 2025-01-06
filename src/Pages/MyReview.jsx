import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    if (user?.email) {
      fetch(`https://assignment-10-server-lime-nu.vercel.app/reviews/user/${user.email}`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch((error) => console.error('Error fetching reviews:', error));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This review will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-lime-nu.vercel.app/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your review has been deleted.",
                icon: "success",
              });

             
              const remainingReviews = reviews.filter((review) => review._id !== id);
              setReviews(remainingReviews);
            }
          })
          .catch((error) => {
            console.error("Error deleting review:", error);
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the review. Please try again later.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className='bg-gray-100 dark:bg-gray-800 dark:text-white'>
       <div className="p-6 py-12 pb-24 max-w-6xl mx-auto">
      <h2 className="lg:text-3xl text-xl font-bold mx-auto px-3 py-2 bg-[#F80136] text-white w-fit mb-8">My Reviews</h2>
      {reviews.length > 0 ? (
        <div className="overflow-x-auto bg-white dark:bg-gray-100 shadow-lg rounded-lg">
         <table className="table-auto w-full text-gray-700 text-sm sm:text-base">
  <thead className="bg-gray-200">
    <tr>
      <th className="lg:px-4 px-2 py-1 lg:py-2 text-left">Title</th>
      <th className="lg:px-4 px-2 py-1 lg:py-2 text-left">Year</th>
      <th className="lg:px-4 px-2 py-1 lg:py-2 text-left">Genre</th>
      <th className="lg:px-4 px-2 py-1 lg:py-2 text-left">Actions</th>
    </tr>
  </thead>
  <tbody>
    {reviews.map((review) => (
      <tr key={review._id} className="border-b dark:hover:bg-white hover:bg-gray-100">
        <td className="lg:px-4 px-2 py-1 lg:py-2">{review.title}</td>
        <td className="lg:px-4 px-2 py-1 lg:py-2">{review.publishingYear}</td>
        <td className="lg:px-4 px-2 py-1 lg:py-2">{review.genre}</td>
        <td className="lg:px-4 px-2 py-1 lg:py-2 flex gap-2 flex-wrap">
          <Link to={`/updatereview/${review._id}`}>
            <button className="btn btn-neutral py-1 px-2 text-xs sm:text-sm rounded-lg text-white hover:bg-neutral-focus">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(review._id)}
            className="btn btn-error py-1 px-2 text-xs sm:text-sm rounded-lg text-white hover:bg-red-700"
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      ) : (
        <p className="text-center text-gray-600 mt-6">No reviews found for your account.</p>
      )}
    </div>

    </div>
   
  );
};

export default MyReview;
