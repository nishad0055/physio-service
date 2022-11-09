import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Booking from './Booking/Booking';
import Newsletter from './Newsletter/Newsletter';
import ServiceArea from './ServiceArea/ServiceArea';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutMe></AboutMe>
            <ServiceArea></ServiceArea>
            <Booking></Booking>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;