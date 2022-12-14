
import { GoogleAuthProvider } from '@firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/account/login.jpg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

import useTitle from '../../hooks/useTitle';


const Login = () => {

     const {createSignIn , googleSignIn , loading} = useContext(AuthContext)
     const provider = new GoogleAuthProvider()
     const navigate = useNavigate()
     const location = useLocation()
     const from = location.state?.from?.pathname || '/'
     useTitle('login')

     const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        createSignIn(email, password)
        .then(result =>{
            const user = result.user;
           
            if(loading){
                return <>
                <div class="flex items-center justify-center ">
                    <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                 </div>
                 </>
            }
             
            navigate('/')
            
            form.reset();
            
        })
        .catch(e=>console.error(e))

     } 
     const handleGoogle = () =>{

        googleSignIn(provider)
        .then(result=> {
            const user = result.user;
            console.log(user)
            if(loading){
                return <>
                <div class="flex items-center justify-center ">
                    <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
                 </div>
                 </>
            }
            navigate('/')
        })
        .catch(e=> console.error(e))
     }

    return (
        <div className='container mx-auto' >
           <div className='md:grid grid-cols-2' >
             <div>
                 <img className='' src= {login} alt="" />
             </div>
                <div className='md:my-20' >
                <form onSubmit={handleSubmit} >
                    
                    <label htmlFor="">Your Email Address</label><br />
                    <input type="email" name='email' placeholder="Type your email" className="input input-bordered input-primary w-full max-w-xs" /><br />
                    <label htmlFor="">Your Password</label><br />
                    <input type="password" name='password' placeholder="Type your password" className="input input-bordered input-primary w-full max-w-xs" /><br />
                    <input type="submit" className='btn btn-primary w-full max-w-xs my-3' value="Login" />
                    
                </form>
                <p className='text-gray-700'>Are You New User? Please <Link className='text-blue-900 text-md font-semibold' to='/signup'>SignUp</Link> </p>
                <div className="divider w-full max-w-xs">OR</div>
                <div>
                <button onClick={handleGoogle}  className="btn btn-outline btn-primary w-full max-w-xs my-3">Continue with Google</button>
                </div>

            </div>
           
             
           </div>
        </div>
    );
};

export default Login;