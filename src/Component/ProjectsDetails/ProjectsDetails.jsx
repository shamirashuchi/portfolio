import { useEffect, useState } from "react";
import { FaLaptop, FaGithub } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";



const ProjectsDetails = () => {
    const [projectsData, setProjectsData] = useState([])
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch('/public/project.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProjectsData(data)})
    }, [])
    const filteredData = projectsData.filter(project => project.id === parseInt(id));
    console.log(filteredData);
    //const { img2, img3, img4, fulldescription1, fulldescription2, livelink, githublink } = filteredData[0];
//filter the data using id and console log
    return (
        // <img src={filteredData[0]?.img2} alt="" />
        <div className='lg:mx-32'>

            <section className="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
                <section className="relative px-10 md:p-0 transform duration-500 ">
                    <div data-aos="fade-right">
                        <img className="xl:w-1/2 h-96 lg:mx-4 rounded-lg shadow-lg shadow-[#00df9a]" src={filteredData[0]?.img2} alt="" />
                    </div>
                    <div data-aos="fade-left" className="content rounded-lg lg:mt-12 p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-20 right-6">
                        <img className="xl:w-full h-96  lg:-mx-44 lg:mt-44 rounded-lg shadow-lg shadow-[#00df9a]" src={filteredData[0]?.img3} alt="" srcset="" />
                    </div>
                </section>
            </section>
            <section className="container mx-auto p-10 lg:mt-12 md:py-20 px-0 md:p-10 md:px-0">
                <section className="relative px-10 md:p-0 transform duration-500 ">
                    <div data-aos="fade-right" >
                        <img className="xl:w-1/2 h-96 lg:mt-32 lg:mx-4 rounded-lg shadow-lg shadow-[#00df9a]" src={filteredData[0]?.img4} alt="" />
                    </div>
                </section>
            </section>
            <div className='mt-8'>
                <h1 className=' text-2xl font-bold text-[#00df9a]'>Overview</h1>
            </div>
            <div className="px-4 mb-12 mt-8 mx-auto sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="p-8 rounded shadow-xl bg-[#0b4231] shadow-[#00df9a] sm:p-16">
                    <div className="">
                        <li className="mb-4 text-white ">
                            {filteredData[0]?.fulldescription1}
                        </li>
                        <li className="mb-4 text-white ">
                            {filteredData[0]?.fulldescription2}
                        </li>
                    </div>
                    <div className='mt-2'>
                        <h1 className=' text-2xl font-bold text-[#00df9a]'>Link</h1>
                    </div>
                    <div className="flex mt-2 gap-4">
                        <a href={filteredData[0]?.livelink}><FaLaptop className='text-2xl'></FaLaptop></a>
                        <a href={filteredData[0]?.githublink}><FaGithub className='text-2xl'></FaGithub></a>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ProjectsDetails;