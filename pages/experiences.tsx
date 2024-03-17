import React, { ReactElement } from "react";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";

const title = `${userData.name}`;
const subtitle = "Experiences"

interface ExpDetails {
    title: string
    company: string
    desc: string
    year: string
}

const Experiences: NextPage = () => {
    return (
        <Layout title="Experiences" description={`${title} - ${subtitle}`}>
            <div className="flex flex-row justify-center items-start overflow-hidden">
                <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                    <p className="font-body font-bold text-[60px]">Experiences</p>
                </div>
            </div>
            <div className="grid grid-cols-1 max-w-xl mx-auto pt-5 mb-10">
                {userData.experience.map((exp, idx) => (
                    <>
                        <ExperienceCard
                            key={idx}
                            title={exp.title}
                            desc={exp.desc}
                            year={exp.year}
                            company={exp.company}
                        />
                        {idx === userData.experience.length - 1 ? null : (
                            <div className="divider-container flex flex-col items-center -mt-2">
                                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                                </div>
                                <div className="w-1 h-24 bg-green-200 rounded-full -mt-2"></div>
                            </div>
                        )}
                    </>
                ))}
            </div>
        </Layout>
    );
}


const ExperienceCard = ({ title, desc, year, company }: ExpDetails): ReactElement => {
    return (
        <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 border-green-500">
            <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
                {year}
            </h1>
            <h1 className="font-semibold text-xl">{title}</h1>
            <a className="text-gray-500">
                {company}
            </a>
            <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
        </div>
    );
};


export default Experiences;