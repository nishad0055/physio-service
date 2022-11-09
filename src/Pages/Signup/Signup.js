import { GoogleAuthProvider } from '@firebase/auth';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../assets/account/signup.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Signup = () => {
    
     const {createUser, googleSignIn} = useContext(AuthContext)
     const provider = new GoogleAuthProvider();

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password)

       createUser(email, password)
       .then(result =>{
        const user = result.user;
        console.log(user)
       })
       .catch(error=> console.error(error))
      

     } 
     const handleGoogle = () =>{
        
        googleSignIn(provider)
        .then(result=> {
            const user = result.user;
            console.log(user)
        })
        .catch(e=> console.error(e))
    
     }

    return (
        <div className='container mx-auto my-10' >
           <div className='md:grid grid-cols-2' >
             <div>
                 <img className='' src= {signup} alt="" />
             </div>
             <div className='md:my-5' >
                 <form onSubmit={handleSignUp} >
                     
                     <label htmlFor="" className='text-lg font-bold my-3'>Your Email Address</label><br />
                     <input type="email" name='email' placeholder="Type your email" className="input input-bordered input-primary w-full max-w-xs" /><br />
                     <label htmlFor="" className='text-lg font-bold my-3'>Your Password</label><br />
                     <input type="password" name='password' placeholder="Type your password" className="input input-bordered input-primary w-full max-w-xs" /><br />
                     <input type="submit" className='btn btn-primary w-full max-w-xs my-3' value="Sign Up" />
                 </form>
                 <p className='text-gray-700'>Already Have an Account? <Link className='text-blue-900 text-md font-semibold' to='/login'>Login</Link> </p>
                 <div className="divider w-full max-w-xs">OR</div>
                 <div>
                 <button onClick={handleGoogle} className="btn btn-outline btn-primary w-full max-w-xs my-3">Continue with Google</button>
                 </div>

             </div>
           </div>
        </div>
    );
};

export default Signup;