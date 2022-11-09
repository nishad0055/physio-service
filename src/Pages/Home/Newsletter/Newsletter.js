import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='bg' >
            <form action="">
                <h1 className='text-4xl font-bold text-white' >Join Our Newsletter</h1>
                <p className='text-md  text-white my-3'>Want to daily or weekly update news about physio theraphy please subscribe our new letter you will get latest news and discount.</p>
                <div>
                    
                <input type="email" placeholder="enter your email address" className="input input-bordered w-1/2 bg-gray-200" />
              <input className='btn btn-outline ml-2' type="submit" value="Subscribe" />
                </div>
            </form>
        </div>
    );
};

export default Newsletter;