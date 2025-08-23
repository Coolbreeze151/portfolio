import React, { useState } from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";

// Logo URLs (replace with your own assets or use public URLs)
const logos: Record<string, string> = {
    aws: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    google: "https://avatars.githubusercontent.com/u/2810941?s=200&v=4",
    azure: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png",
    isc2: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/ISC2_Logo.svg/1200px-ISC2_Logo.svg.png",
    scrum: "https://support.scrumalliance.org/hc/theming_assets/01J94ZG0G5EN0Z891XQZ40VMQM",
    scrumorg: "https://cdn.worldvectorlogo.com/logos/scrumorg-1.svg",
    linux: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Linux_Foundation_Logo.svg/500px-Linux_Foundation_Logo.svg.png",
    neo4j: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Neo4j-logo_color.png",
    udemy: "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png",
    coursera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Coursera_logo_%282020%29.svg/2560px-Coursera_logo_%282020%29.svg.png",
    nus: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/130px-NUS_coat_of_arms.svg.png",
};

const categories = [
    { key: "all", label: "All Categories" },
    { key: "architect", label: "Solutions Architect" },
    { key: "data", label: "Data Engineering" },
    { key: "security", label: "Security" },
    { key: "linux", label: "Linux Foundation" },
    { key: "agile", label: "Agile & Leadership" },
];

// Add subtle glowing animation styles
const glowStyle = `
@keyframes glow {
    0% { box-shadow: 0 0 6px 1px #bcedf1f8, 0 0 0px 0px #fff; }
    50% { box-shadow: 0 0 12px 3px #eaebeefa, 0 0 6px 1px #fff; }
    100% { box-shadow: 0 0 6px 1px #dce2e8eb, 0 0 0px 0px #fff; }
}
.cert-card {
    background: #f2f8f8f4;
    transition: background 0.3s, box-shadow 0.3s;
}
.cert-card:hover {
    background: linear-gradient(135deg, #e0e7ff 60%, #cae2efff 100%);
    animation: glow 2s infinite alternate;
}
`;

if (typeof window !== "undefined") {
    if (!document.getElementById("cert-glow-style")) {
        const style = document.createElement("style");
        style.id = "cert-glow-style";
        style.innerHTML = glowStyle;
        document.head.appendChild(style);
    }
}

const CertificationCard: React.FC<{
    cert: { name: string; issuer: string; year: string; logoKey: string };
}> = ({ cert }) => (
    <div
        className="cert-card flex flex-col items-center rounded-lg m-2 p-5 w-80 border border-blue-300"
        style={{
            fontWeight: "bold",
        }}
    >
        <div className="flex items-center justify-center mb-3" style={{ height: "72px" }}>
            <img
                src={logos[cert.logoKey] || ""}
                alt={cert.issuer}
                className="h-16 object-contain"
                style={{ maxWidth: "90px" }}
            />
        </div>
        <div className="font-bold text-base text-black text-center mb-1">{cert.name}</div>
        <div className="text-xs text-black font-semibold text-center mb-1">{cert.issuer}</div>
        <div className="text-xs text-gray-700 font-bold">{cert.year}</div>
    </div>
);

const certifications: Record<
    string,
    { name: string; issuer: string; year: string; logoKey: string }[]
> = {
    architect: [
        {
            name: "AWS Certified Solutions Architect – Professional",
            issuer: "Amazon Web Services",
            year: "2025",
            logoKey: "aws",
        },
        {
            name: "Google Professional Cloud Architect",
            issuer: "Google Cloud",
            year: "2023",
            logoKey: "google",
        },
        {
            name: "Azure Solutions Architect Expert",
            issuer: "Azure",
            year: "2024",
            logoKey: "azure",
        },
        {
            name: "Google Associate Cloud Engineer",
            issuer: "Google Cloud",
            year: "2021",
            logoKey: "google",
        },
        {
            name: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services",
            year: "2020",
            logoKey: "aws",
        },
        {
            name: "Azure Administrator Associate",
            issuer: "Azure",
            year: "2022",
            logoKey: "azure",
        },
        {
            name: "Azure Fundamentals",
            issuer: "Azure",
            year: "2021",
            logoKey: "azure",
        },
        {
            name: "AWS Certified Developer – Associate",
            issuer: "Amazon Web Services",
            year: "2021",
            logoKey: "aws",
        },
        {
            name: "Certificate of Distinction in ICT Solutioning Knowledge Area",
            issuer: "National University of Singapore",
            year: "2019",
            logoKey: "nus",
        },
        {
            name: "Certificate of Distinction in Information Systems Management Knowledge Area",
            issuer: "National University of Singapore",
            year: "2019",
            logoKey: "nus",
        },
    ],
    data: [
        {
            name: "Neo4J Certified Professional",
            issuer: "Neo4J",
            year: "2024",
            logoKey: "neo4j",
        },
        {
            name: "AWS Certified Data Analytics – Specialty",
            issuer: "Amazon Web Services",
            year: "2022",
            logoKey: "aws",
        },
        {
            name: "Apache Spark with Scala - Hands on with Big Data",
            issuer: "Udemy",
            year: "2019",
            logoKey: "udemy",
        },
            {
            name: "Scala and Spark for Big Data and Machine Learning",
            issuer: "Udemy",
            year: "2019",
            logoKey: "udemy",
        },
    ],
    security: [
        {
            name: "Certified Information Systems Security Professional (CISSP)",
            issuer: "ISC2",
            year: "2024",
            logoKey: "isc2",
        }
    ],
    linux: [
        {
            name: "KCNA: Kubernetes and Cloud Native Associate",
            issuer: "ISC2",
            year: "2022",
            logoKey: "linux",
        }
    ],
    agile: [
        {
            name: "Certified ScrumMaster (CSM)",
            issuer: "Scrum Alliance",
            year: "2020",
            logoKey: "scrum",
        },
        {
            name: "Certified Scrum Product Owner (CSPO)",
            issuer: "Scrum Alliance",
            year: "2022",
            logoKey: "scrum",
        },
        {
            name: "Professional Scrum Master™ I",
            issuer: "Scrum.org",
            year: "2021",
            logoKey: "scrumorg",
        },
        {
            name: "Leading People and Teams Specialization",
            issuer: "Coursera",
            year: "2021",
            logoKey: "coursera",
        },
    ],
};

// Add "all" category by combining all certificates
certifications.all = [
    ...certifications.architect,
    ...certifications.data,
    ...certifications.security,
    ...certifications.linux,
    ...certifications.agile,
];

const CertificationsPage: NextPage = () => {
    const [activeTab, setActiveTab] = useState(categories[0].key); // "all" by default

    return (
        <Layout title="Certifications" description="Certifications - Portfolio">
            <div className="flex flex-col items-center py-10">
                <h1 className="font-body font-bold text-[48px] mb-6">Certifications</h1>
                <div className="flex space-x-4 mb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveTab(cat.key)}
                            className={`px-6 py-2 rounded-full font-semibold transition ${
                                activeTab === cat.key
                                    ? "bg-blue-600 text-white shadow"
                                    : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center">
                    {certifications[activeTab].map((cert, idx) => (
                        <CertificationCard cert={cert} key={idx} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default CertificationsPage;
