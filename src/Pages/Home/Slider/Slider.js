import React from 'react';
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import './Slider.css'



const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

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
           <h1 className="title">
             Transform Your Mindset & Achieve Your Goals
           </h1>
           <h2 className='subtitle' >
              Amazing Therapies and advice to help you achieve your goals and taking important decision for your life.
           </h2>
           <button className='bt btn btn-warning' >Book Now</button>

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