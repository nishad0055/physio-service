import React from 'react';
import mc from '../../../assets/account/people1.png'
import nc from '../../../assets/account/people2.png'
import yc from '../../../assets/account/people3.png'
import TestimonicalCard from './TestimonicalCard';

const Testimonial = () => {
    
    const tesmonialData = [
        {
            id: 1,
            name: 'Mc Anderson',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam voluptate quasi et vero quisquam itaque consequuntur doloribus repudiandae nulla.',
            location: 'New York',
            img: mc

                    
        },
        {
            id: 2,
            name: 'Mc Anderson',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam voluptate quasi et vero quisquam itaque consequuntur doloribus repudiandae nulla.',
            location: 'New York',
            img: nc
                    
        },
        {
            id: 3,
            name: 'Mc Anderson',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam voluptate quasi et vero quisquam itaque consequuntur doloribus repudiandae nulla.',
            location: 'New York',
            img: yc
                    
        }
    ]

    return (
        <div className='my-20 container mx-auto'>
        <div className='flex justify-between' >
             <div>
             <h4 className='text-lg font bold text-[#19D3AE]' >Testimonial</h4>
             <h2 className='text-4xl text-[#3A4256] font-serif' >What Our Patients Says</h2>
             </div>
             <figure>
               
             </figure>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10' >
          {
           tesmonialData.map(testimonial => <TestimonicalCard
           key={testimonial.id}
           testimonial= {testimonial}
           ></TestimonicalCard>)
          }
        </div>
    </div>
    );
};

export default Testimonial;