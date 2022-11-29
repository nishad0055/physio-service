import React, { useEffect } from 'react';
import smith from '../../../assets/about/dd.png'
import back from '../../../assets/about/Frame57.jpg'
import { AiOutlineLine } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'

const AboutMe = () => {
    useEffect(()=>{
        Aos.init({duration:1000,
            easing:'linear'
            
        })
    },[])
    return (
        <div className='my-20 bg-cover' style={{backgroundImage: `url(${back})`}} >
            <div className="hero-content flex-col lg:flex-row justify-evenly ">
        <div className='lg:w-1/2'   >
        <img src= {smith} alt='/' className=" rounded-lg min-h-screen" />
        
        </div>
    <div className='lg:w-1/2' >
        <p className='text-xl font-bold text-red-700 font-sans'><AiOutlineLine/> LET ME INTRODUCE</p>
      <h1 className="md:text-4xl text-3xl font-bold font-sans my-4">I'm Doctor Andy Smith- <br /> Expert <span className='md:text-4xl font-thin' >Physiologist</span> from New York.</h1>
      <p className="py-6 font-sans">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      
      <button className="btn  btn-primary text-white">Get More Info</button>
    </div>
  </div>
        </div>
    );
};

export default AboutMe;