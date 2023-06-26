import React from 'react';
import Navbar from '../Navber/Navber';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../SKills/SKills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;