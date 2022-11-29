import React, { useEffect } from "react";
import bag from "../../../assets/theray.json";
import bag2 from '../../../assets/about/vivi.jpg'
import  Lottie from 'lottie-react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Banner = () => {
  useEffect(()=>{
    Aos.init({})
},[])
  return (
    <div>
      <div className="hero bg-cover bg-no-repeat" style={{backgroundImage: `url(${bag2})`}} >
        <div className="hero-content flex-col lg:flex-row-reverse">
           <div className="lg:w-1/2" >
           <Lottie animationData={bag} ></Lottie>
           </div>
          <div className="lg:w-1/2" data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine"  data-aos-duration="500" >
            <h1 className="text-5xl  font-bold text-white font-sans" >New York’s Largest Chartered Physiotherapy Provider</h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
