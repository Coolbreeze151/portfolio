import React from "react";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Projects.module.css"; // Import the CSS module

const title = `${userData.name}`;
const subtitle = "Projects";

interface projectDetails {
    title: string;
    link: string;
    image: string;
    tech: string[];
    desc: string;
}

const Projects: NextPage = () => {
    return (
        <Layout title="Projects" description={`${title} - ${subtitle}`}>
            <div className={`${styles.animatedBackground} flex flex-col justify-center items-center overflow-hidden px-4 md:px-0`}>
                <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                    <h1 className="font-body font-bold text-4xl md:text-5xl text-center">Projects</h1>
                </div>
                <br/>
            </div>
            <div className="max-w-md md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 px-4 md:px-0">
                {userData.projects.map((proj, idx) => (
                    <ProjectCard
                        key={idx}
                        title={proj.title}
                        link={proj.link}
                        image={proj.image}
                        desc={proj.desc}
                        tech={proj.tech}
                    />
                ))}
            </div>
        </Layout>
    );
};

const ProjectCard = ({ title, link, image, desc, tech }: projectDetails) => {
    return (
        <a
            target="_blank"
            href={link}
            className="daisyui-card w-full shadow-xl relative overflow-hidden hover:scale-105 transition-transform duration-500 ease-out h-full rounded-lg"
        >
            <figure className="relative">
                <img className="w-full h-48 md:h-60 object-cover rounded-t-lg" src={image} alt="projectPics" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">View Project</span>
                </div>
            </figure>
            <div className="daisyui-card-body dark:bg-gray-800 p-4 md:p-6">
                <h2 className="daisyui-card-title text-xl md:text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{desc}</p>
                <div className="daisyui-card-actions justify-start flex-wrap">
                    {tech.map((eachTech, idx) => (
                        <div key={idx} className="daisyui-badge daisyui-badge-outline m-1">{eachTech}</div>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default Projects;
