import React from 'react';
import Banner from './Banner';
import Info from '../Home/Info';
import Services from './Services';
import DentalCare from './DentalCare';
import MakeAppoinment from './MakeAppoinment';
import Testimonials from './Testimonials';
import ContactUs from '../Home/ContactUs';
import Footer from '../Shared/Footer';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;