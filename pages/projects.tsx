import React from "react";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";

const title = `${userData.name}`;
const subtitle = "Projects"

interface projectDetails {
    title: string,
    link: string,
    image: string,
    tech: string[],
    desc: string
}

const Projects: NextPage = () => {
    return (
        <Layout title="Projects" description={`${title} - ${subtitle}`}>
            <div className="flex flex-row justify-center items-start overflow-hidden">
                <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                    <h1 className="font-body font-bold text-[60px]">Media / Portfolio</h1>
                </div>
            </div>
            <div className="max-w-md md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
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
}

const ProjectCard = ({ title, link, image, desc, tech }: projectDetails) => {
    return (
        <a target="_blank" href={link} className="daisyui-card w-full shadow-xl relative overflow-hidden hover:scale-105 transition duration-500 ease-out h-full">
            <figure><img className="max-w-full h-[300px]" src={image} alt="projectPics" /></figure>
            <div className="daisyui-card-body dark:bg-gray-800">
                <h2 className="daisyui-card-title">
                    {title}
                </h2>
                <p>{desc}</p>
                <div className="daisyui-card-actions justify-end">
                    {tech.map((eachTech, idx) => (
                        <div key={idx} className="daisyui-badge daisyui-badge-outline">{eachTech}</div>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default Projects;
