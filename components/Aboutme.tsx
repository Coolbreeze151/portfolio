import React from 'react';

export default function AboutMe(props: any): React.ReactElement {

    return (
        <div id="aboutme" className="">
            <div className="flex flex-row justify-center items-start">
                <div className="w-9/12 mx-auto text-left lg:p-40">
                    <h1 className="text-4xl text-black-100">
                        About Me
                    </h1>

                    <h2 className="mt-10 font-bold text-black-500">
                        Hello! I reside in ap-southeast-1. I hold an Undergrad Degree in Information Systems (Digital Innovation) and Masters in Computer Science.

                        I enjoy learning new things and travelling to new places.
                    </h2>

                    <h1 className="mt-10 text-3xl text-black-100">
                        Skills
                    </h1>

                    <h2 className="mt-5 mb-5 font-bold text-black-500">
                        These are the languages that I code in:
                    </h2>

                    <div className="flex flex-wrap gap-1">
                        <img alt="Python" src="https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white" />
                        <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
                        <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
                        <img alt="Bash" src="https://img.shields.io/badge/Bash%20-%23121011.svg?style=for-the-badge&logo=c%2B%2B&ogoColor=white" />
                        <img alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white" />
                    </div>

                    <h2 className="mt-5 mb-5 font-bold text-black-500">
                        These are the tools / frameworks / libraries that I am most familiar with:
                    </h2>

                    <div className="flex flex-wrap gap-1">
                        <img alt="Docker" src="https://img.shields.io/badge/docker-%234090DF.svg?style=for-the-badge&logo=docker&logoColor=white" />
                        <img alt="Kubernetes" src="https://img.shields.io/badge/kubernetes-%23416BDD.svg?style=for-the-badge&logo=kubernetes&logoColor=white" />
                        <img alt="Helm" src="https://img.shields.io/badge/helm-%2340789C.svg?style=for-the-badge&logo=helm&logoColor=white" />
                        <img alt="Fluentbit" src="https://img.shields.io/badge/fluentbit-%235BA092.svg?style=for-the-badge&logo=fluentbit&logoColor=white" />
                        <img alt="Linux" src="https://img.shields.io/badge/linux-%23000000.svg?style=for-the-badge&logo=linux&logoColor=white" />
                        <img alt="Ubuntu" src="https://img.shields.io/badge/ubuntu-%23CC532A.svg?style=for-the-badge&logo=ubuntu&logoColor=white" />
                        <img alt="Postgres" src="https://img.shields.io/badge/postgres-%2340658C.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
                        <img alt="MYSQL" src="https://img.shields.io/badge/mysql-%23285F86.svg?style=for-the-badge&logo=mysql&logoColor=white" />
                        <img alt="Vim" src="https://img.shields.io/badge/vim-%23439641.svg?style=for-the-badge&logo=vim&logoColor=white" />
                        <img alt="Gitlab" src="https://img.shields.io/badge/gitlab-%23D15036.svg?style=for-the-badge&logo=gitlab&logoColor=white" />
                        <img alt="Github" src="https://img.shields.io/badge/github-%23000000.svg?style=for-the-badge&logo=github&logoColor=white" />                   
                        <img alt="Jupyter" src="https://img.shields.io/badge/Jupyter-%23F37626.svg?style=for-the-badge&logo=Jupyter&logoColor=white" />
                        <img alt="NumPy" src="https://img.shields.io/badge/numpy-%2366A9CB.svg?style=for-the-badge&logo=numpy&logoColor=white" />
                        <img alt="Pandas" src="https://img.shields.io/badge/pandas-%23110750.svg?style=for-the-badge&logo=pandas&logoColor=white" />
                        <img alt="Postman" src="https://img.shields.io/badge/postman-%23EB7545.svg?style=for-the-badge&logo=postman&logoColor=white" />
                        <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
                        <img alt="Markdown" src="https://img.shields.io/badge/markdown-%23150458.svg?style=for-the-badge&logo=markdown&logoColor=white" />               
                        <img alt="Many More" src="https://img.shields.io/badge/...-And%20More-yellowgreen?style=for-the-badge&logo=GitHub-Sponsors" />
                    </div>

                    <h2 className="mt-5 font-bold text-black-500">
                        As a cloud enthusiast I primarily use 
                    </h2>

                    <div className="flex flex-wrap gap-1">
                        <img alt="aws" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="azure" src="https://img.shields.io/badge/AZURE-%233B87D0.svg?style=for-the-badge&logo=microsoft-azure&logoColor=white" />
                    </div>

                    <h2 className="mt-5 font-bold text-black-500">
                        coupled with these IaC technologies:
                    </h2>

                    <div className="flex flex-wrap gap-1">
                        <img alt="terraform" src="https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white" />
                        <img alt="serverless" src="https://img.shields.io/badge/sls-Serverless-brightgreen" />

                    </div>

                </div>
                {/* <div className="hidden lg:block relative w-1/2 -mr-40 mt-20">
                    <></>
                </div> */}
            </div>
        </div>
    );
}