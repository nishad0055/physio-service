import React from 'react';
import smith from '../../../assets/about/smith.jpg'
import { AiOutlineLine } from 'react-icons/ai'

const AboutMe = () => {
    return (
        <div>
            <div className="hero-content flex-col lg:flex-row container mx-auto">
        <div className='w-1/2 relative' >
        <img src= {smith} alt='/' className=" rounded-lg" />
        
        </div>
    <div className='w-1/2'>
        <p className='text-xl font-bold text-red-700'><AiOutlineLine/> LET ME INTRODUCE</p>
      <h1 className="md:text-4xl text-3xl font-bold font-mono my-4">I'm Doctor Andy Smith- <br /> Expert <span className='md:text-4xl font-thin' >Physiologist</span> from New York.</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      
      <button className="btn btn-warning">Get More Info</button>
    </div>
  </div>
        </div>
    );
};

export default AboutMe;