import React from 'react';
import { FaFacebookSquare, FaLinkedin,FaGithub, FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className="bg-gray-900">
                <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                   
                    <div className="flex flex-col gap-10 pt-5 pb-10 border-t border-gray-800 sm:flex-row">
                        <p className="text-sm text-gray-500">
                            © Copyright 2023 shamira@shamsee.
                        </p>
                        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                            <a
                                href="https://www.facebook.com/shamirashamsee.shuchi/"
                                className=" "
                            >
                                <FaFacebookSquare className='text-2xl'></FaFacebookSquare>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shamira-shamsee-602a02273/"
                                className='text-2xl'
                            >
                               <FaLinkedin></FaLinkedin>
                            </a>
                            <a
                                href="https://github.com/shamirashuchi"
                                className='text-2xl'
                            >
                                <FaGithub ></FaGithub>
                            </a>
                             
                             <div className='flex items-center gap-2'><FaPhoneAlt className='text-2xl'></FaPhoneAlt>
                             <p className='text-[#00df9a]'>+8801767116056</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;