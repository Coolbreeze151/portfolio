import React from "react";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

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
            {/* Page header */}
            <div className="max-w-6xl mx-auto px-4 pt-10 pb-6 text-center">
                <p className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-2">Portfolio</p>
                <h1 className="font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-3">Projects</h1>
                <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto">
                    A selection of things I&apos;ve built, shipped, and published.
                </p>
                <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-green-500" />
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16 px-4">
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
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <div className="relative overflow-hidden h-48">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={image}
                    alt={title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-semibold flex items-center gap-1">
                        View Project
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="flex flex-col flex-1 p-5">
                <h2 className="font-semibold text-base text-gray-900 dark:text-gray-100 mb-2 leading-snug group-hover:text-green-500 transition-colors duration-200">
                    {title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed flex-1">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {tech.filter(t => t).map((eachTech, idx) => (
                        <span
                            key={idx}
                            className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full font-medium"
                        >
                            {eachTech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.a>
    );
};

export default Projects;
