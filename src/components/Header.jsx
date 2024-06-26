import React from 'react'
import { useState } from 'react';
import logo from '../assets/image.png'
import { NavLink,Link } from 'react-router-dom';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav className="flex items-center justify-between bg-white flex-wrap p-6">
        {/* <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
        <Link to="/">  <img src={logo} className=" logo mr-2" alt="Logo" /> </Link>
        </div> */}

        <div className=' text-2xl font-semibold' style={{color: "rgba(40, 107, 234, 1)"}}>
       <Link to="/">  CryptoCrest</Link>

        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className="font-semibold lg:flex-grow">
            <NavLink to="/cryptotaxes"  className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-3">
                Crypto Taxes
            </NavLink>
            <NavLink to="/freetools" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-3">
                Free Tools
            </NavLink>
            <NavLink to="resourcecenter" className="block mt-4 lg:inline-block lg:mt-0 text-white-200">
              Resource Center
            </NavLink>
          </div>
          <div>
            <button className="inline-flex mt-4 gradient  md:mt-0 ml-4 rounded-md items-center border-0 py-2 px-4 text-white">
                Get Started
            </button>
          </div>
        </div>
      </nav>
    );
   }


export default Header