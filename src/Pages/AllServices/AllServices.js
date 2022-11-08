import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServiceCard from './AllServiceCard/AllServiceCard';

const AllServices = () => {
    const allservices = useLoaderData()
    return (
        <div className='container mx-auto' >
            <div className='md:grid grid-cols-3 gap-3' >
                {
                   allservices.map(service=> <AllServiceCard
                   key={service._id}
                   service ={service}
                   ></AllServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;