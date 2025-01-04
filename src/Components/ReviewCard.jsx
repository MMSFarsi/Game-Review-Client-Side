import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

const ReviewCard = ({ review }) => {
  const { _id, photo, title, reviewDescription, rating, publishingYear, genre } = review;

  return (
    <div className="card dark:bg-gray-800 dark:border-white dark:border dark:text-white bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <figure className="relative">
        <img
          src={photo}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-primary text-white text-sm px-2 py-1 rounded-lg shadow-lg">
          {genre}
        </div>
        <div className="absolute top-2 right-2 bg-black/75 text-white text-sm px-2 py-1 rounded-lg">
          {publishingYear}
        </div>
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-xl font-bold dark:text-white text-gray-800 truncate">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-white text-sm mb-2 truncate">
          {reviewDescription}
        </p>
        <div className="flex items-center justify-between">
          <Rating
            initialRating={rating}
            readonly
            emptySymbol={<span className="text-gray-300">☆</span>}
            fullSymbol={<span className="text-amber-500">★</span>}
          />
          <Link to={`/reviewdetails/${_id}`}>
            <button className="btn btn-sm btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
