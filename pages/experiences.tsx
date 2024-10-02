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
                    <p className="font-body font-bold text-4xl md:text-5xl lg:text-6xl">Experiences</p>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 max-w-xl mx-auto pt-5 mb-10">
                {userData.experience.map((exp, idx) => (
                    <React.Fragment key={idx}>
                        <ExperienceCard
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
                    </React.Fragment>
                ))}
            </div>
        </Layout>
    );
};

const ExperienceCard = ({ title, desc, year, company }: ExpDetails): ReactElement => {
    return (
        <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 border-green-500">
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-semibold text-xl">{title}</h1>
                <span className="text-gray-500">{year}</span>
            </div>
            <a className="text-gray-500">
                {company}
            </a>
            <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
        </div>
    );
};

export default Experiences;
