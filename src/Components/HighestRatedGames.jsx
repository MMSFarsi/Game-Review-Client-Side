import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const HighestRatedGames = () => {
  const [reviews, setReviews] = useState([]);


  useEffect(() => {
    fetch('https://assignment-10-server-lime-nu.vercel.app/reviews')
      .then((res) => res.json())
      .then((data) => {
       
        const sortedReviews = data.sort((a, b) => b.rating - a.rating).slice(0, 8);
        setReviews(sortedReviews);
      })
      .catch((error) => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <section className="bg-gray-100 dark:bg-gray-800 dark:text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-3xl text-xl font-bold mx-auto px-3 py-2 bg-[#F80136] text-white w-fit mb-8">
          Highest Rated Games
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
             {
                reviews.map(review=> <ReviewCard key={review._id} review={review}></ReviewCard>)
              }
          
        </div>
      </div>
    </section>
  );
};

export default HighestRatedGames;
