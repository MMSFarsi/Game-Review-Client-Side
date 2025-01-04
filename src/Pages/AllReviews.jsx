import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../Components/ReviewCard';

const AllReviews = () => {
  const reviews = useLoaderData();
  const [sortedReviews, setSortedReviews] = useState([]);
  const [sortCriterion, setSortCriterion] = useState('rating'); 

  const handleSortChange = (criterion) => {
    const sorted = [...reviews];

    if (criterion === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating); 
    } else if (criterion === 'year') {
      sorted.sort((a, b) => b.publishingYear - a.publishingYear); 
    }

    setSortedReviews(sorted);
  };

  useEffect(() => {
    handleSortChange(sortCriterion);
  }, [reviews, sortCriterion]);

  return (
    <div className='bg-gray-100 dark:bg-gray-800 dark:text-white'>
    <div className="pt-10 px-4 lg:px-11  pb-12">
      <h2 className="text-xl lg:text-3xl font-bold mx-auto px-3 py-2 bg-[#F80136] text-white w-fit mb-8">
        All Reviews
      </h2>

     
      <div className="mb-6">
        <label htmlFor="sort" className="text-lg font-medium mr-4">Sort by:</label>
        <select
          id="sort"
          value={sortCriterion}
          onChange={(e) => setSortCriterion(e.target.value)}
          className="select dark:bg-gray-800 dark:text-white dark:border-white select-bordered"
        >
          <option value="rating">Rating</option>
          <option value="year">Year</option>
        </select>
      </div>

      
      <div className="grid bg-gray-100 dark:bg-gray-800 dark:text-white gap-6 grid-cols-1 lg:grid-cols-4">
        {sortedReviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllReviews;
