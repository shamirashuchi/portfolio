import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="px-4 lg:mx-28  py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div data-aos="fade-down-right">
        <div className="lg:pr-10">
          <p className="text-[#00df9a] mb-8">Hi, My Name is</p>
          <h5 className="mb-4 text-4xl lg:text-6xl font-extrabold  leading-none">
            Shamira Shamsee.
            <br />
          </h5>
          <h5 className="mb-4 text-4xl lg:text-6xl font-extrabold  leading-none">
            I'm a{" "}
            <Typewriter
              words={["FUll Stack Web Developer", "MERN Stack Developer"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h5>
          <p className="mb-6 text-[#00df9a] ">
            I build interactive websites than run across platforms & devices
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
