import React, { useEffect, useState,} from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServiceCard from './AllServiceCard/AllServiceCard';
import FadeLoader from "react-spinners/FadeLoader";
import useTitle from '../../hooks/useTitle';

const AllServices = () => {
    
    const allservices = useLoaderData()
     const [loading ,setLoading] = useState(false)
     useTitle('Physiotherapy services')
     useEffect(()=>{
         setLoading(true)
         setTimeout(()=>{
              setLoading(false)
         },500)
     },[])
    return (

        <div className='container mx-auto' >
            {
                loading?
                
                     <FadeLoader 

                    color={'#158B7A'}
                    loading={loading}
                    size={100}
                    />
                :
              <div className='md:grid grid-cols-3 gap-3' >
                {
                   allservices.map(service=> <AllServiceCard
                   key={service._id}
                   service ={service}
                   ></AllServiceCard>)
                }
            </div>
            }
            
        </div>
    );
};

export default AllServices;