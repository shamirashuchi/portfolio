import { useEffect, useState } from "react";
import { FaLaptop, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";



const Projects = () => {
    const [projectsData, setProjectsData] = useState([])
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjectsData(data))
    }, [])

    return (
        <div id='project' className="lg:mx-20">
            <h1 className='text-2xl font-bold text-[#00df9a]'>Projects</h1>


            {
                projectsData.map(projects => <section className="container mx-auto p-10 md:py-60 px-0 md:p-10 md:px-0">
                    <section className="relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1 ">
                        <div data-aos="fade-right">
                            <img className="xl:max-w-8xl lg:mx-4 rounded-lg shadow-lg shadow-[#00df9a]" src={projects.img1} alt="" />
                        </div>
                        <div data-aos="fade-left" className="content bg-[#0b4231] rounded-lg  p-2 pt-40 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-20 right-6">
                            <div className="flex justify-between font-bold text-sm">
                                <p>{projects.title} </p>

                            </div>
                            <h2 className="text-3xl font-semibold mt-4 md:mt-10 text-[#00df9a]">{projects.title1}</h2>
                            <p className="my-3 text-justify font-medium  leading-relaxed ">{projects.description}</p>
                            <div className='mt-4'>
                                <h1 className=' text-2xl font-bold text-[#00df9a]'>Overview</h1>
                            </div>
                            <div className="px-4 mb-12 mt-8 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8">
                                <div className="p-8 rounded shadow-xl bg-[#0b4231] shadow-[#00df9a] sm:p-16">
                                    <div className="">
                                        <li className="mb-4 text-white ">
                                            {projects.fulldescription1}
                                        </li>
                                        <li className="mb-4 text-white ">
                                            {projects.fulldescription2}
                                        </li>
                                    </div>
                                    </div>
                                    </div>
                            <div className="flex gap-4">
                                <a href={projects.livelink}><FaLaptop className='text-2xl'></FaLaptop></a>
                                <a href={projects.githublink}><FaGithub className='text-2xl'></FaGithub></a>
                               
                                 {/* <Link to={`project/${projects.id}`}><button className='btn btn-sm text-white btn-outline hover:bg-[#00df9a]'>Details</button></Link> */}
                                  
                            </div>
                        </div>
                    </section>
                </section>)
            }
        </div>
    );
};

export default Projects;