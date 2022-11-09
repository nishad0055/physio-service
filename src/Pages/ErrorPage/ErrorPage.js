import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='text-center  my-20' >
        <h2 className='md:text-8xl text-6xl' >Page Not Found</h2>
        <h1 className='md:text-8xl text-6xl' >{error.status}</h1>
        {
            error && ( <h1>{error.statusTest || error.message}</h1>)
        }
         
        <button className='btn btn-lg my-2'> <Link to='/' >Back to home</Link> </button>
    </div>
    );
};

export default ErrorPage;