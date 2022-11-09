import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Navbar = () => {
    
     const {user, logOut} = useContext(AuthContext)

     const handleLogOut = () =>{
        
     logOut()
    .then(()=>{
      
    })
    .catch(e=> console.error(e))
       
     }
  
    return (
        <div>
            
            <nav className="bg-[#F2F8F8] border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-2 md:px-0 px-4">
                   <div>
                   <a href="/" className="mr-6 text-sm font-medium text-[#868A91] hover:underline"> info@gmail.com</a>
                        <a href="/" className="text-sm font-medium text-[#868A91]  hover:underline">+880 01321-128665</a>
                   </div>
                   
                    <div className="flex items-center">
                        
                         
                        {
                          user?.uid ?
                          <>
                            <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                              <div class="w-8 rounded-full">
                                <img src={user?.photoURL} />
                              </div>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                              <li>
                                <Link to='/myreviews' class="justify-between">
                                 My reviews
                                </Link>
                              </li>
                              <li><a>Settings</a></li>
                              <li><Link onClick={handleLogOut} >Logout</Link> </li>
                            </ul>
                          </div>
                          </>:
                          <Link to='/login' className="text-md font-bold text-blue-600  hover:underline">Login</Link>
                        }
                        

                       
                    </div>
                </div>
            </nav>
<div className="navbar bg-[#2D3613]  px-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to=''>Blog</Link></li>
        
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Physcare</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-white">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to=''>Blog</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link className="btn btn-outline btn-warning">Make an Appointment</Link>
  </div>
</div>
 </div>
    );
};

export default Navbar;