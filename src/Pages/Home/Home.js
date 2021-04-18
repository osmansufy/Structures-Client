import React from 'react';
import Services from '../../Components/Services/Services';
import Projects from '../../Components/Projects/Projects';
import Header from "../../Components/Header/Header";

import Footer from "../../Components/Footer/Footer";
import Testimonials from '../../Components/Testimonials/Testimonials';
import Banner from '../../Components/Banner/Banner';
import Teams from '../../Components/Teams/Teams';

const Home = () => {
    return (
        <>
           <Header />
           <Banner/>
        <Services/>
        <Projects />
        <Testimonials/>
        <Teams />
        <Footer />
        </>
    );
};

export default Home;