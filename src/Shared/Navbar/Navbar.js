import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from '../../assets/logo/logo.png'
import avator from "../../assets/account/avator.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <div className="" >
      <nav className="bg-[#F9F8FE] border-gray-200">
        <div className="hidden lg:flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-2 md:px-0 px-4 block ">
          <div>
            <a
              href="/"
              className="mr-6 text-sm font-medium text-[#868A91] hover:underline"
            >
              <FontAwesomeIcon className="text-red-500" icon={faEnvelope} />{" "}
              info@gmail.com
            </a>

            <a
              href="/"
              className="text-sm font-medium text-[#868A91]  hover:underline"
            >
              {" "}
              <FontAwesomeIcon className="text-red-500" icon={faPhone} />{" "}
              04566755666{" "}
            </a>
          </div>

          <div className="flex items-center">
            
            <Link>
             
              <FontAwesomeIcon className="mr-2" icon={faFacebook} />
            </Link>
            <Link>
            
              <FontAwesomeIcon className="mr-2" icon={faInstagram} />
            </Link>
            <Link>
              
              <FontAwesomeIcon className="mr-2" icon={faTwitter} />
            </Link>
            <Link>
             
              <FontAwesomeIcon className="mr-2" icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </nav>
      <div className="navbar bg-white mx-auto max-w-screen-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-gray-900 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {
                user?.uid ?
                             <>
                               <li> <Link to='/myreviews' >My Reviews</Link> </li>
                               <li> <Link to='/myreviews' >Add Service</Link> </li>
                               <li> <Link onClick={handleLogOut}  to='/myreviews' >Sign Out</Link> </li>
                                   
                                 
                                
                              </>: <li><Link to="/login">Login</Link></li>
                   }
            </ul>
          </div>
          <Link to="/" className=" normal-case text-xl text-gray-900">
            <img className='h-[50px]' src= {logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-gray-900 uppercase  font-semibold">
            <li className="" >
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            
               {
                user?.uid ?
                             <>
                               <li> <Link to='/myreviews' >My Reviews</Link> </li>
                               <li> <Link to='/myreviews' >Add Service</Link> </li>
                               <li> <Link onClick={handleLogOut}  to='/myreviews' >Sign Out</Link> </li>
                                   
                                 
                                
                              </>: <li><Link to="/login">Login</Link></li>
                   }
                
              
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
