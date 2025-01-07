import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black/90 dark:text-white text-black py-10">
        <Link to='/'><h2 className=' text-center my-3 text-2xl font-bold uppercase text-red-600 '>CHILL GAMER</h2></Link>
      <div className="container mx-auto px-4">
   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
      
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">About Us</h3>
            <p className="">
              Welcome to Chill Gamer Zone, your trusted source for unbiased and
              insightful game reviews. Stay updated on the latest gaming trends
              and share your experiences with our vibrant community.
            </p>
          </div>


          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2 hover:text-primary">
                <Link to="/" className="hover:text-primary">Home</Link>
              </li>
              <li className="mb-2 hover:text-primary">
                <Link to="/addreview" className="hover:text-primary">Add Review</Link>
              </li>
              <li className="mb-2 hover:text-primary">
                <Link to="/gamewatchlist" className="hover:text-primary">My Watchlist</Link>
              </li>
              <li className="mb-2 hover:text-primary">
                <Link to="/allreviews" className="hover:text-primary">All Reviews</Link>
              </li>
              <li className="mb-2 hover:text-primary">
                <Link to="/about-us" className="hover:text-primary">About Us</Link>
              </li>
              <li className="mb-2 hover:text-primary">
                <Link to="/contact-us" className="hover:text-primary">Contact Us</Link>
              </li>
            </ul>
          </div>

     
          <div>
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2">
                <span className="font-bold">Email:</span> info@chillgamer.com
              </li>
              <li className="mb-2">
                <span className="font-bold">Phone:</span> +123-4456-7940
              </li>
              <li className="mb-2">
                <span className="font-bold">Address:</span> Chittagong,  Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

   
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm ">
            &copy; {new Date().getFullYear()} Chill Gamer. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
