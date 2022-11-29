import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';


const ServiceArea = () => {

   
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch('https://assignment-eleven-server-zeta.vercel.app/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='container mx-auto my-4 bg-base-100'>
            <div className='text-center'>
            <h2 className='md:text-2xl font-semibold text-[#19D3AE] font-sans'  >What I offer</h2> 
            <h1 className='md:text-5xl text-2xl text-primary font-bold font-sans' >THERAPHIES & TREATMENT</h1>
          <hr className='w-[10%] h-[3px] bg-gray-500 my-3 mx-auto' />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 my-8' >
                {
                   services.map(service=> <ServiceCard 
                    key={service._id}
                    service ={service}
                    ></ServiceCard>)
                }
            </div>
              <div className='items-center text-center' >
               <Link to='/services' ><button className="btn btn-outline btn-primary">View All Service</button></Link>
              </div>
        </div>
    );
};

export default ServiceArea;