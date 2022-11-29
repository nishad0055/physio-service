import React from 'react';
import useTitle from '../../hooks/useTitle';
import AboutMe from './AboutMe/AboutMe';
import Banner from './Banner/Banner';
import Benifits from './Benifits/Benifits';
import Booking from './Booking/Booking';
import Newsletter from './Newsletter/Newsletter';
import ServiceArea from './ServiceArea/ServiceArea';
import Slider from './Slider/Slider';
import Testimonial from './Testomonial/Testimonial';

const Home = () => {
    useTitle('Best Physiotheraphy service in New York City')
    return (
        <div>
             <Banner></Banner>
            <AboutMe></AboutMe>
            <ServiceArea></ServiceArea>
            <Benifits></Benifits>
            
            
            <Testimonial></Testimonial>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;