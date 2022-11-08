import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/account/login.jpg'

const Login = () => {
    return (
        <div className='container mx-auto' >
           <div className='md:grid grid-cols-2' >
             <div>
                 <img className='' src= {login} alt="" />
             </div>
             <div className='md:my-20' >
                 <form>
                     <label htmlFor="">Your Name</label><br />
                     <input type="text" name='name' placeholder="Type your name" className="input input-bordered input-primary w-full max-w-xs" /><br />
                     <label htmlFor="">Your Name</label><br />
                     <input type="email" name='email' placeholder="Type your email" className="input input-bordered input-primary w-full max-w-xs" /><br />
                     <label htmlFor="">Your Name</label><br />
                     <input type="password" name='password' placeholder="Type your password" className="input input-bordered input-primary w-full max-w-xs" /><br />
                     <button className='btn btn-primary my-3 w-full max-w-xs' >Login</button>
                     <p className='text-gray-700'>Are You New User? <Link className='text-blue-900 text-md font-semibold' to='/signup'>SignUp</Link> </p>
                 </form>
                 <div>
                     <button className='btn btn-primary my-3 w-full max-w-xs' >Google</button>
                 </div>

             </div>
           </div>
        </div>
    );
};

export default Login;