import React from 'react';
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import './Slider.css'



import bogliasco from '../../../assets/about/physio.jpg'
import giauPass  from '../../../assets/about/doctor2.jpeg'
import countyClare from '../../../assets/about/cphysio.jpeg'
import craterRock from  '../../../assets/about/physio.jpg'

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