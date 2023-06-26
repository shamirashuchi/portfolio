import React, { useEffect } from 'react';
import css from '../image/icons/css.png'
import html from '../image/icons/HTML.png'
import tailwind from '../image/icons/tailwind.png'
import bootsrap from '../image/icons/Bootsrap.png'
import javascript from '../image/icons/JavaScript.png'
import react from '../image/icons/react.png'
import node from '../image/icons/node.png'
import mongodb from '../image/icons/mongodb.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
    useEffect(() => {
        AOS.init();
      }, []);
      
    return (
        <div id='skill'>
            <div className='lg:mx-28'>
                <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <h1 className='text-2xl font-bold text-[#00df9a]'>Skills</h1>
                    <div className="relative mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div data-aos="flip-left" className="flex flex-col text-center justify-between overflow-hidden   transition-shadow duration-200  rounded-lg shadow-xl group hover:shadow-2xl shadow-[#00df9a]">
                            <img className='' src={html} alt="" srcset="" />
                            <h1 className='text-2xl font-bold mb-2'>HTML</h1>
                        </div>
                        <div data-aos="flip-left" className="flex text-center shadow-[#00df9a] flex-col justify-between overflow-hidden  transition-shadow duration-200  rounded shadow-xl group hover:shadow-2xl">
                            <img src={css} alt="" srcset="" />
                            <h1 className='text-2xl font-bold mb-2'>CSS</h1>
                        </div>
                        <div data-aos="flip-left" className="flex flex-col justify-between shadow-[#00df9a] text-center overflow-hidden  transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl">
                            <img src={tailwind} alt="" srcset="" />
                            <h1 className='text-2xl font-bold mb-2'>Tailwind</h1>
                        </div>
                        <div data-aos="flip-left" className="flex flex-col justify-between shadow-[#00df9a] text-center overflow-hidden  transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl">
                            <img src={bootsrap} alt="" srcset="" />
                            <h1 className='text-2xl font-bold mb-2'>Bootsrap</h1>
                        </div>
                        <div data-aos="flip-left" className="flex flex-col justify-between shadow-[#00df9a] text-center overflow-hidden  transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl">
                            <img src={javascript} alt="" srcset="" />
                            <h1 className='text-2xl font-bold mb-2'>Javascript</h1>
                        </div>
                        <div data-aos="flip-left" className="flex flex-col justify-between shadow-[#00df9a] text-center overflow-hidden  transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl">
                            <img src={react} alt="" srcset="" />
                            <h1 className='text-2xl font-bold mb-2'>React</h1>
                        </div>
                        <div data-aos="flip-left" className="flex flex-col justify-between shadow-[#00df9a] text-center overflow-hidden  transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl">
                            <img src={node} alt="" srcset="" />
                            <h1 className='text-2xl font-bold mb-2'>Node Js</h1>
                        </div>
                        <div data-aos="flip-left" className="flex flex-col justify-between shadow-[#00df9a] text-center overflow-hidden  transition-shadow duration-200 rounded shadow-xl group hover:shadow-2xl">
                            <img src={mongodb} alt="" srcset="" />
                            <h1 className='text-2xl font-bold mb-2'>MongoDB</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;