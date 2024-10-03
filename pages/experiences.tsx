import React, { ReactElement } from "react";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";

const title = `${userData.name}`;
const subtitle = "Experiences";

interface ExpDetails {
    title: string;
    company: string;
    desc: string;
    year: string;
}

const Experiences: NextPage = () => {
    return (
        <Layout title="Experiences" description={`${title} - ${subtitle}`}>
            <div className="flex flex-col items-center overflow-hidden">
                <div className="w-full md:w-2/3 lg:w-1/2 mx-auto text-center lg:p-20">
                    <p className="font-body font-bold text-4xl md:text-5xl lg:text-6xl animate-fade-in">Experiences</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 max-w-xl mx-auto pt-5 mb-6">
                {userData.experience.map((exp, idx) => (
                    <React.Fragment key={idx}>
                        <ExperienceCard
                            title={exp.title}
                            desc={exp.desc}
                            year={exp.year}
                            company={exp.company}
                        />
                        {idx === userData.experience.length - 1 ? null : (
                            <div className="divider-container flex flex-col items-center -mt-1">
                                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                                </div>
                                <div className="w-1 h-16 bg-green-200 rounded-full -mt-1"></div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </Layout>
    );
};

const ExperienceCard = ({ title, desc, year, company }: ExpDetails): ReactElement => {
    return (
        <div className="relative experience-card border p-6 rounded-lg shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 border-green-500 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-semibold text-2xl text-green-600">{title}</h1>
                <span className="text-gray-500">{year}</span>
            </div>
            <a className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-2 block">
                {company}
            </a>
            <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400 to-blue-500 opacity-10 rounded-lg"></div>
        </div>
    );
};

export default Experiences;
