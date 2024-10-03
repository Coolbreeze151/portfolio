import React from 'react';

export default function AboutMe(props: any): React.ReactElement {

    return (
        <div id="aboutme" className="mt-20 sm:pt-10">
            <div className="flex flex-row justify-center items-start">
                <div className="w-9/12 mx-auto text-left lg:p-40">
                    <h1 className="text-3xl text-black-100">
                        About Me
                    </h1>

                    <h2 className="mt-10 font-bold text-black-500">
                    I live in ap-southeast-1 and hold degrees in Information Systems and Computer Science. As a Data Engineer at GovTech, I focus on building solutions for public good and real-world challenges. I enjoy learning and exploring new places.
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
                        <img alt="API Gateway" src="https://img.shields.io/badge/API%20Gateway-%23FF4F00.svg?style=for-the-badge&logo=amazon-api-gateway&logoColor=white" />
                        <img alt="Aquasecurity" src="https://img.shields.io/badge/Aquasecurity-%2300A3E4.svg?style=for-the-badge&logo=aquasecurity&logoColor=white" />
                        <img alt="AWS Backup" src="https://img.shields.io/badge/AWS%20Backup-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="AWS Glue" src="https://img.shields.io/badge/AWS%20Glue-%234285F4.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="Calico" src="https://img.shields.io/badge/Calico-%23F68D2E.svg?style=for-the-badge&logo=calico&logoColor=white" />
                        <img alt="Cloudtrail" src="https://img.shields.io/badge/Cloudtrail-%23FF6600.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="Cloudwatch" src="https://img.shields.io/badge/Cloudwatch-%23232F3E.svg?style=for-the-badge&logo=amazon-cloudwatch&logoColor=white" />
                        <img alt="CodeCommit" src="https://img.shields.io/badge/CodeCommit-%234285F4.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="CodePipeline" src="https://img.shields.io/badge/CodePipeline-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="Denodo" src="https://img.shields.io/badge/Denodo-%23FF0000.svg?style=for-the-badge&logo=denodo&logoColor=white" />
                        <img alt="Docker" src="https://img.shields.io/badge/docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" />
                        <img alt="DynamoDB" src="https://img.shields.io/badge/Amazon%20DynamoDB-%2300A3E4.svg?style=for-the-badge&logo=amazon-dynamodb&logoColor=white" />
                        <img alt="ECS" src="https://img.shields.io/badge/Amazon%20ECS-%23FF9900.svg?style=for-the-badge&logo=amazon-ecs&logoColor=white" />
                        <img alt="EKS" src="https://img.shields.io/badge/Amazon%20EKS-%23232F3E.svg?style=for-the-badge&logo=amazon-eks&logoColor=white" />
                        <img alt="EventBridge" src="https://img.shields.io/badge/EventBridge-%23FF6600.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="Fluentbit" src="https://img.shields.io/badge/fluentbit-%230E8A8A.svg?style=for-the-badge&logo=fluentbit&logoColor=white" />
                        <img alt="GitHub" src="https://img.shields.io/badge/github-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" />
                        <img alt="GitLab" src="https://img.shields.io/badge/gitlab-%23FC6D26.svg?style=for-the-badge&logo=gitlab&logoColor=white" />
                        <img alt="Helm" src="https://img.shields.io/badge/helm-%230F1689.svg?style=for-the-badge&logo=helm&logoColor=white" />
                        <img alt="Hugging Face" src="https://img.shields.io/badge/Hugging%20Face-%23FFAE33.svg?style=for-the-badge&logo=huggingface&logoColor=white" />
                        <img alt="Jupyter" src="https://img.shields.io/badge/Jupyter-%23F37626.svg?style=for-the-badge&logo=Jupyter&logoColor=white" />
                        <img alt="Kyverno" src="https://img.shields.io/badge/Kyverno-%23416BDD.svg?style=for-the-badge&logo=kyverno&logoColor=white" />
                        <img alt="Lambda" src="https://img.shields.io/badge/Lambda-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="Linux" src="https://img.shields.io/badge/linux-%23FCC624.svg?style=for-the-badge&logo=linux&logoColor=black" />
                        <img alt="Markdown" src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white" />
                        <img alt="MYSQL" src="https://img.shields.io/badge/mysql-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" />
                        <img alt="Neo4j" src="https://img.shields.io/badge/neo4j-%2300A3E4.svg?style=for-the-badge&logo=neo4j&logoColor=white" />
                        <img alt="Next.js" src="https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white" />
                        <img alt="NumPy" src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" />
                        <img alt="OpenAI" src="https://img.shields.io/badge/OpenAI-%2346A8E3.svg?style=for-the-badge&logo=openai&logoColor=white" />
                        <img alt="Pandas" src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" />
                        <img alt="Postgres" src="https://img.shields.io/badge/postgres-%234169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
                        <img alt="Postman" src="https://img.shields.io/badge/postman-%23FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white" />
                        <img alt="React" src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black" />
                        <img alt="Redshift" src="https://img.shields.io/badge/Amazon%20Redshift-%230071C5.svg?style=for-the-badge&logo=amazon-redshift&logoColor=white" />
                        <img alt="Sagemaker Studio" src="https://img.shields.io/badge/Sagemaker%20Studio-%234285F4.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="S3" src="https://img.shields.io/badge/Amazon%20S3-%23FF4F00.svg?style=for-the-badge&logo=amazon-s3&logoColor=white" />
                        <img alt="Snyk" src="https://img.shields.io/badge/Snyk-%23000000.svg?style=for-the-badge&logo=snyk&logoColor=white" />
                        <img alt="SNS" src="https://img.shields.io/badge/SNS-%23FF9900.svg?style=for-the-badge&logo=amazon-sns&logoColor=white" />
                        <img alt="SonarQube" src="https://img.shields.io/badge/SonarQube-%234E9BCD.svg?style=for-the-badge&logo=sonarqube&logoColor=white" />
                        <img alt="SQS" src="https://img.shields.io/badge/SQS-%23232F3E.svg?style=for-the-badge&logo=amazon-sqs&logoColor=white" />
                        <img alt="Vim" src="https://img.shields.io/badge/vim-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white" />
                        <img alt="Many More" src="https://img.shields.io/badge/...-And%20More-yellowgreen?style=for-the-badge&logo=GitHub-Sponsors" />
                    </div>

                    <h2 className="mt-5 font-bold text-black-500">
                        As a cloud enthusiast I primarily use 
                    </h2>

                    <div className="flex flex-wrap gap-1">
                        <img alt="aws" src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="azure" src="https://img.shields.io/badge/AZURE-%233B87D0.svg?style=for-the-badge&logo=microsoft-azure&logoColor=white" />
                        <img alt="gcp" src="https://img.shields.io/badge/GCP-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" />
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