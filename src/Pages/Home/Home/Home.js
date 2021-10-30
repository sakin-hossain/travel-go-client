import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import CompanyStatistics from '../CompanyStatistics/CompanyStatistics';
import ContractUs from '../ContractUs/ContractUs';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import HeroSlider from '../Slider/HeroSlider';

const Home = () => {
    return (
        <div>
            <HeroSlider/>
            <Services/>
            <Gallery/>
            <AboutUs/>
            <CompanyStatistics/>
            <ContractUs/>
        </div>
    );
};

export default Home;