import React, { useState } from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

const logos: Record<string, string> = {
    aws: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    google: "https://avatars.githubusercontent.com/u/2810941?s=200&v=4",
    azure: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png",
    isc2: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/ISC2_Logo.svg/1200px-ISC2_Logo.svg.png",
    scrum: "https://support.scrumalliance.org/hc/theming_assets/01J94ZG0G5EN0Z891XQZ40VMQM",
    scrumorg: "https://cdn.worldvectorlogo.com/logos/scrumorg-1.svg",
    linux: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Linux_Foundation_Logo.svg/500px-Linux_Foundation_Logo.svg.png",
    neo4j: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Neo4j-logo_color.png",
    udemy: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png",
    coursera: "/logos/coursera.svg",
    nus: "/logos/nus.svg",
};

const categoryMeta: Record<string, { label: string; color: string; accent: string }> = {
    all:       { label: "All",               color: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200",        accent: "border-t-gray-400" },
    architect: { label: "Solutions Architect", color: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",    accent: "border-t-blue-500" },
    data:      { label: "Data Engineering",    color: "bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300", accent: "border-t-purple-500" },
    security:  { label: "Security",            color: "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300",        accent: "border-t-red-500" },
    linux:     { label: "Linux Foundation",    color: "bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300", accent: "border-t-yellow-500" },
    agile:     { label: "Agile & Leadership",  color: "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300", accent: "border-t-green-500" },
};

const certifications: Record<
    string,
    { name: string; issuer: string; year: string; logoKey: string; category: string }[]
> = {
    architect: [
        { name: "AWS Certified Solutions Architect – Professional", issuer: "Amazon Web Services", year: "2025", logoKey: "aws", category: "architect" },
        { name: "Google Professional Cloud Architect",              issuer: "Google Cloud",         year: "2023", logoKey: "google", category: "architect" },
        { name: "Azure Solutions Architect Expert",                 issuer: "Microsoft Azure",      year: "2024", logoKey: "azure", category: "architect" },
        { name: "Google Associate Cloud Engineer",                  issuer: "Google Cloud",         year: "2021", logoKey: "google", category: "architect" },
        { name: "AWS Certified Solutions Architect – Associate",    issuer: "Amazon Web Services",  year: "2020", logoKey: "aws", category: "architect" },
        { name: "Azure Administrator Associate",                    issuer: "Microsoft Azure",      year: "2022", logoKey: "azure", category: "architect" },
        { name: "Azure Fundamentals",                               issuer: "Microsoft Azure",      year: "2021", logoKey: "azure", category: "architect" },
        { name: "AWS Certified Developer – Associate",              issuer: "Amazon Web Services",  year: "2021", logoKey: "aws", category: "architect" },
        { name: "Certificate of Distinction – ICT Solutioning",    issuer: "National University of Singapore", year: "2019", logoKey: "nus", category: "architect" },
        { name: "Certificate of Distinction – IS Management",      issuer: "National University of Singapore", year: "2019", logoKey: "nus", category: "architect" },
    ],
    data: [
        { name: "Neo4J Certified Professional",                     issuer: "Neo4J",                year: "2024", logoKey: "neo4j", category: "data" },
        { name: "AWS Certified Data Analytics – Specialty",         issuer: "Amazon Web Services",  year: "2022", logoKey: "aws", category: "data" },
        { name: "Apache Spark with Scala – Big Data",               issuer: "Udemy",                year: "2019", logoKey: "udemy", category: "data" },
        { name: "Scala and Spark for Big Data & Machine Learning",  issuer: "Udemy",                year: "2019", logoKey: "udemy", category: "data" },
    ],
    security: [
        { name: "Certified Information Systems Security Professional (CISSP)", issuer: "ISC2", year: "2024", logoKey: "isc2", category: "security" },
    ],
    linux: [
        { name: "KCNA: Kubernetes and Cloud Native Associate",      issuer: "Linux Foundation",     year: "2022", logoKey: "linux", category: "linux" },
    ],
    agile: [
        { name: "Certified ScrumMaster (CSM)",                      issuer: "Scrum Alliance",       year: "2020", logoKey: "scrum", category: "agile" },
        { name: "Certified Scrum Product Owner (CSPO)",             issuer: "Scrum Alliance",       year: "2022", logoKey: "scrum", category: "agile" },
        { name: "Professional Scrum Master™ I",                     issuer: "Scrum.org",            year: "2021", logoKey: "scrumorg", category: "agile" },
        { name: "Leading People and Teams Specialization",          issuer: "Coursera",             year: "2021", logoKey: "coursera", category: "agile" },
    ],
};

certifications.all = [
    ...certifications.architect,
    ...certifications.data,
    ...certifications.security,
    ...certifications.linux,
    ...certifications.agile,
];

const totalCount = certifications.all.length;

const CertificationCard: React.FC<{
    cert: { name: string; issuer: string; year: string; logoKey: string; category: string };
    index: number;
}> = ({ cert, index }) => {
    const accent = categoryMeta[cert.category]?.accent ?? "border-t-gray-400";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            className={`flex flex-col items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 border-t-4 ${accent} rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full`}
        >
            <div className="flex items-center justify-center mb-4 h-16 w-full">
                <img
                    src={logos[cert.logoKey] || ""}
                    alt={cert.issuer}
                    className="max-h-14 max-w-[120px] object-contain"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                    }}
                />
            </div>
            <div className="flex-1 flex flex-col items-center text-center">
                <p className="font-semibold text-sm text-gray-900 dark:text-gray-100 leading-snug mb-2">
                    {cert.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{cert.issuer}</p>
            </div>
            <span className="mt-auto inline-block px-3 py-1 text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                {cert.year}
            </span>
        </motion.div>
    );
};

const CertificationsPage: NextPage = () => {
    const [activeTab, setActiveTab] = useState("all");

    return (
        <Layout title="Certifications" description="Certifications – Ismahfaris Portfolio">
            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Page header */}
                <div className="text-center mb-10">
                    <h1 className="font-bold text-4xl md:text-5xl mb-3 text-gray-900 dark:text-white">
                        Certifications
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-base">
                        {totalCount} certifications across cloud, data, security, and leadership
                    </p>
                    <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-green-500" />
                </div>

                {/* Category filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {Object.entries(categoryMeta).map(([key, meta]) => {
                        const count = key === "all" ? totalCount : certifications[key]?.length ?? 0;
                        const isActive = activeTab === key;
                        return (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                                    isActive
                                        ? "bg-green-500 text-white border-green-500 shadow-md scale-105"
                                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-green-400 hover:text-green-600 dark:hover:text-green-400"
                                }`}
                            >
                                {meta.label}
                                <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${isActive ? "bg-white/20 text-white" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"}`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Cert cards grid */}
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                    >
                        {certifications[activeTab].map((cert, idx) => (
                            <CertificationCard cert={cert} index={idx} key={`${cert.name}-${idx}`} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </Layout>
    );
};

export default CertificationsPage;
