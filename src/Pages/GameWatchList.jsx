import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const GameWatchList = () => {
  const { user } = useContext(AuthContext);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://assignment-10-server-lime-nu.vercel.app/watchlist/${user.email}`)
        .then((res) => res.json())
        .then((data) => setWatchlist(data))
        .catch((error) => console.error('Error fetching watchlist:', error));
    }
  }, [user?.email]);

  return (
  <div className='bg-gray-100 dark:bg-gray-800 dark:text-white'>
      <div className="p-6 max-w-6xl mx-auto">
      <h2 className=" text-xl lg:text-3xl font-bold mx-auto px-3 py-2 bg-[#F80136] text-white w-fit mb-8">My Watchlist</h2>
      {watchlist.length > 0 ? (
        <div className="overflow-x-auto bg-white dark:bg-gray-100 shadow-lg rounded-lg">
          <table className="table-auto w-full text-gray-700">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-2 lg:px-4 py-1 lg:py-2 text-left">Title</th>
                <th className="px-2 lg:px-4 py-1 lg:py-2 text-left">Year</th>
                <th className="px-2 lg:px-4 py-1 lg:py-2 text-left">Genre</th>
                <th className="px-2 lg:px-4 py-1 lg:py-2 text-left">Rating</th>
              </tr>
            </thead>
            <tbody>
              {watchlist.map((item) => (
                <tr key={item._id} className="border-b dark:hover:bg-white hover:bg-gray-100">
                 
                  <td className="px-2 lg:px-4 py-1 lg:py-2">{item.title}</td>
                  <td className="px-2 lg:px-4 py-1 lg:py-2">{item.publishingYear}</td>
                  <td className="px-2 lg:px-4 py-1 lg:py-2">{item.genre}</td>
                  <td className="px-2 lg:px-4 py-1 lg:py-2">{item.rating}</td>
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-6">No items in your watchlist.</p>
      )}
    </div>
  </div>
  );
};

export default GameWatchList;
