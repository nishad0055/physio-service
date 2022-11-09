import React from 'react';
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import './Slider.css'



import bogliasco from '../../../assets/about/cphysio.jpeg'
import countyClare from '../../../assets/about/doctor.jpg'
import craterRock from '../../../assets/about/physio.jpg'
import giauPass  from '../../../assets/about/doctor2.jpg'

const Slider = () => {
    return (
        <div>
            
            <HeroSlider
      height={"90vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <div className="Wrapper">
           <h1 className="title md:text-5xl text-3xl font-bold">
             Transform Your Mindset & Achieve Your Goals
           </h1>
           <h2 className='subtitle md:text-3xl text-xl' >
              Amazing Therapies and advice to help you achieve your goals and taking important decision for your life.
           </h2>
           <button className='bt btn btn-warning text-xl md:w-[15%]' >Appoinment</button>

        </div>
      </Overlay>
      <Slide
      
    
        background={{
          backgroundImageSrc: giauPass
        }}
        
      />

      <Slide
         
        
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
      
        
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
      
       
        background={{
          backgroundImageSrc: craterRock
        }}
      />
      <MenuNav />
    </HeroSlider>

        </div>
    );
};

export default Slider;