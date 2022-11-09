import React from 'react';
import { FaUser } from 'react-icons/fa'

const ShowReview = ({rv}) => {
    const {name, img, feedback, _id} = rv
    return (
        <div>
           <div className='flex  items-center gap-3' >
               <div>
               {
                img?
                <img className='h-[30px] rounded-full' src= {img} alt="" />:
                <FaUser></FaUser>
                 }
               </div>
              <div>
                 <h2 className='' >{name}</h2>
              </div>
           </div>
           <p className='text-lg my-2'>{feedback}</p>
            
        </div>
    );
};

export default ShowReview;