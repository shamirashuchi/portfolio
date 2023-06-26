import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaLaptop, FaGithub } from "react-icons/fa";
import Footer from '../Footer/Footer';
const ProjectsDetails = () => {
    const { id } = useParams();
    console.log(id);
    // const projectsData = useLoaderData();
    // console.log(projectsData);
    const [projectsData, setProjectsData] = useState([])
    useEffect(() => {
        fetch('project.json')
          .then(res => res.json())
          .then(data => {
            setProjectsData(data);
            console.log(data);
          });
      }, []);
      
      const filteredData = projectsData.find(item => item.id === id);
    const { img2, img3, img4, fulldescription1, fulldescription2, livelink, githublink } = filteredData;


    return (
        <div className='lg:mx-32'>
            <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <section className="relative px-10 md:p-0 transform duration-500 ">
                    <div data-aos="fade-right">
                        <img className="xl:max-w-2xl lg:mx-4 rounded-lg shadow-lg shadow-[#00df9a]" src={img4} alt="" />
                    </div>
                    <div data-aos="fade-left" className="content rounded-lg lg:mt-12 p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-20 right-6">
                        <img className="xl:max-w-2xl  lg:-mx-44 lg:mt-44 rounded-lg shadow-lg shadow-[#00df9a]" src={img3} alt="" srcset="" />
                    </div>
                </section>
            </section>
            <section className="container mx-auto p-10 lg:mt-12 md:py-20 px-0 md:p-10 md:px-0">
                <section className="relative px-10 md:p-0 transform duration-500 ">
                    <div data-aos="fade-right" >
                        <img className="xl:max-w-2xl lg:mt-44 lg:mx-4 rounded-lg shadow-lg shadow-[#00df9a]" src={img2} alt="" />
                    </div>
                </section>
            </section>
            <div className='mt-8'>
                <h1 className=' text-2xl font-bold text-[#00df9a]'>Overview</h1>
            </div>
            <div className="px-4 mb-12 mt-8 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="p-8 rounded shadow-xl bg-[#0b4231] shadow-[#00df9a] sm:p-16">
                    <div className="">
                        <li><p className="mb-4 text-white ">
                            {fulldescription1}
                        </p></li>
                        <li><p className="mb-4 text-white ">
                            {fulldescription2}
                        </p></li>
                    </div>
                    <div className='mt-2'>
                        <h1 className=' text-2xl font-bold text-[#00df9a]'>Link</h1>
                    </div>
                    <div className="flex mt-2 gap-4">
                        <a href={livelink}><FaLaptop className='text-2xl'></FaLaptop></a>
                        <a href={githublink}><FaGithub className='text-2xl'></FaGithub></a>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ProjectsDetails;