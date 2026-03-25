import React, { ReactElement } from "react";
import { userData } from "../constants/user";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const title = `${userData.name}`;
const subtitle = "Experiences";

interface ExpDetails {
    title: string;
    company: string;
    desc: string;
    year: string;
    index: number;
}

const Experiences: NextPage = () => {
    return (
        <Layout title="Experiences" description={`${title} - ${subtitle}`}>
            <div className="max-w-6xl mx-auto px-4 pt-10 pb-6 text-center">
                <p className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-2">Career Journey</p>
                <h1 className="font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-3">Experiences</h1>
                <p className="text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto">
                    My professional journey from intern to senior engineer.
                </p>
                <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-green-500" />
            </div>

            <div className="max-w-2xl mx-auto px-4 pt-4 pb-16">
                {userData.experience.map((exp, idx) => (
                    <React.Fragment key={idx}>
                        <ExperienceCard
                            title={exp.title}
                            desc={exp.desc}
                            year={exp.year}
                            company={exp.company}
                            index={idx}
                        />
                        {idx !== userData.experience.length - 1 && (
                            <div className="flex flex-col items-center my-1">
                                <div className="relative w-4 h-4">
                                    <div className="absolute inset-0 bg-green-500 rounded-full" />
                                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-60" />
                                </div>
                                <div className="w-0.5 h-10 bg-gradient-to-b from-green-500 to-green-200 dark:to-green-900" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </Layout>
    );
};

const ExperienceCard = ({ title, desc, year, company, index }: ExpDetails): ReactElement => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 border-l-4 border-l-green-500 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
        >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
                <h2 className="font-bold text-lg text-green-600 dark:text-green-400 leading-snug">{title}</h2>
                <span className="inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full whitespace-nowrap self-start">
                    {year}
                </span>
            </div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
        </motion.div>
    );
};

export default Experiences;
