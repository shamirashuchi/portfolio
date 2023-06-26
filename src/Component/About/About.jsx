import React, { useEffect } from 'react';
import img1 from "../image/shamira.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({
          once: true,
        });
      }, []);
    return (
        <div id='about' className="px-4 py-24 lg:mx-28 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h1 className='text-2xl font-bold text-[#00df9a]'>About Me</h1>     
            <div className="grid mt-4 gap-10 lg:grid-cols-2">

                    <div data-aos="fade-right" className="max-w-xl text-[#00df9a] mb-6">
                        <p className="text-base md:text-lg">
                         Hi! I am MERN Stack Developer.I am passionate about Mern Stack development and I'm familiar with GitHub.I have knowledge of data structure and algorithms. Also, I have knowledge of java and python.
                         <br />
                         <br />
                         I focused on achieving my goals along with trying to seek out ways during which to develop my skills and learn new things. I am friendly, a good thinker, and flexible to work on any shift. I can work for extended hours without any breaks, and I also believe in teamwork and a strong work ethic. In my spare time, I read books and I love to travel. Although I don’t get to travel much, I relish each moment I get to. I'm generally pleased with my life.
                        </p>
                    </div>

             
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div data-aos="fade-left" className="px-3 ">
                        <img
                            className="object-cover  w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src={img1}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;