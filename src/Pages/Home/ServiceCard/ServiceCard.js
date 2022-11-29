
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import {  PhotoProvider, PhotoView } from 'react-photo-view';

import { useEffect } from 'react';

const ServiceCard = ({service}) => {
    const {name, price, image,description ,_id} = service;
   
  
    return (
        <div>
             <PhotoProvider>
             <div className="card h-full w-full bg-base-100 shadow-md" data-aos="fade-down"
             data-aos-easing="linear"
                 data-aos-duration="1500" >
                <figure className="px-10 pt-10">
                 <PhotoView src={image} >
                 
                 <img src= {image} alt="/" className=" rounded-xl cursor-pointer" />
              
                 
                 
                 </PhotoView>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{name} </h2>
                  <p>{description.slice(0,100)}...</p>
                  <div className="badge badge-secondary badge-outline text-md font-bold">Price: ${price}</div>
                  <div className="card-actions">
                    <Link to = {`/services/${_id}`}  className='btn btn-outline btn-primary' >View Details</Link>
                  </div>
                </div>
              </div>
             </PhotoProvider>
        </div>
    );
};

export default ServiceCard;