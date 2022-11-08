import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import ServiceArea from './ServiceArea/ServiceArea';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutMe></AboutMe>
            <ServiceArea></ServiceArea>
        </div>
    );
};

export default Home;