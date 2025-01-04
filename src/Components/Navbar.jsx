import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import { FaSun, FaMoon } from 'react-icons/fa';

import 'react-tooltip/dist/react-tooltip.css';
import { ThemeContext } from '../../ThemeProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinkStyles = ({ isActive }) =>
    `font-bold ${isActive ? 'text-red-500' : 'hover:text-red-500'
    } transition duration-300`;

  return (
    <div className="navbar bg-white dark:bg-gray-800 dark:text-white text-black sticky top-0 z-50 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white dark:bg-gray-800 dark:text-white text-black rounded-box z-[100] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className={navLinkStyles}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/allreviews" className={navLinkStyles}>
                ALL REVIEWS
              </NavLink>
            </li>
            <li>
              <NavLink to="/addreview" className={navLinkStyles}>
                ADD REVIEWS
              </NavLink>
            </li>
            <li>
              <NavLink to="/myreview" className={navLinkStyles}>
                MY REVIEWS
              </NavLink>
            </li>
            <li>
              <NavLink to="/gamewatchlist" className={navLinkStyles}>
                GAME WATCHLIST
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to='/'><h2 className=' text-[14px] lg:text-xl font-bold uppercase text-red-600 pl-0 lg:pl-5'>CHILL GAMER</h2></Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={navLinkStyles}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/allreviews" className={navLinkStyles}>
              ALL REVIEWS
            </NavLink>
          </li>
          <li>
            <NavLink to="/addreview" className={navLinkStyles}>
              ADD REVIEWS
            </NavLink>
          </li>
          <li>
            <NavLink to="/myreview" className={navLinkStyles}>
              MY REVIEWS
            </NavLink>
          </li>
          <li>
            <NavLink to="/gamewatchlist" className={navLinkStyles}>
              GAME WATCHLIST
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-white bg-gray-700 hover:bg-gray-600 dark:bg-gray-500 dark:hover:bg-gray-400 transition duration-300"
        >
          {theme === 'light' ? <FaMoon size={10} /> : <FaSun size={10} />}
        </button>
        {user ? (
          <>
            <div className="relative">
              <img
                src={user.photoURL || 'https://via.placeholder.com/40'}
                alt="User Avatar"
                className="lg:w-10 lg:h-10 w-6 h-6 rounded-full my-anchor-element"
              />
              <Tooltip anchorSelect=".my-anchor-element" place="left">
                {user.displayName || 'User'}
              </Tooltip>
            </div>
            <button
              onClick={logOut}
              className="px-4 py-2 rounded-lg text-white bg-red-600 text-[10px] font-medium backdrop-blur-md hover:bg-opacity-50 transition duration-300 border hover:border-black"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 text-[10px] rounded-lg text-white bg-red-600 font-medium backdrop-blur-md hover:bg-opacity-50 transition duration-300 border hover:border-black"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
