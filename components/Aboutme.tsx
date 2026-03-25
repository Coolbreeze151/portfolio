import React from 'react';

const SkillGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-green-500 mb-3">{title}</h3>
        <div className="flex flex-wrap gap-2">{children}</div>
    </div>
);

export default function AboutMe(): React.ReactElement {
    return (
        <div id="aboutme" className="py-20 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Section header */}
                <div className="mb-12">
                    <p className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-2">Get to know me</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">About Me</h2>
                    <div className="w-12 h-1 rounded-full bg-green-500 mb-6" />
                    <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
                        I live in <span className="font-mono text-green-500 font-semibold">ap-southeast-1</span> and hold
                        degrees in Information Systems and Computer Science from the National University of Singapore.
                        As a Data Engineer at GovTech, I build data infrastructure and AI solutions for public good.
                        I love exploring new technologies, solving real-world problems, and the occasional travel adventure.
                    </p>
                </div>

                {/* Skills */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Skills &amp; Technologies</h2>

                    <SkillGroup title="Languages">
                        <img alt="Python"     src="https://img.shields.io/badge/Python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white" />
                        <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
                        <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
                        <img alt="Bash"       src="https://img.shields.io/badge/Bash-%23121011.svg?style=for-the-badge&logo=gnubash&logoColor=white" />
                        <img alt="Java"       src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
                        <img alt="Scala"      src="https://img.shields.io/badge/Scala-%23DC322F.svg?style=for-the-badge&logo=scala&logoColor=white" />
                    </SkillGroup>

                    <SkillGroup title="Cloud Platforms">
                        <img alt="AWS"   src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="Azure" src="https://img.shields.io/badge/Microsoft_Azure-%230072C6.svg?style=for-the-badge&logo=microsoft-azure&logoColor=white" />
                        <img alt="GCP"   src="https://img.shields.io/badge/Google_Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white" />
                    </SkillGroup>

                    <SkillGroup title="Data & AI">
                        <img alt="Apache Spark"    src="https://img.shields.io/badge/Apache_Spark-%23E25A1C.svg?style=for-the-badge&logo=apache-spark&logoColor=white" />
                        <img alt="AWS Glue"        src="https://img.shields.io/badge/AWS_Glue-%234285F4.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="Redshift"        src="https://img.shields.io/badge/Amazon_Redshift-%230071C5.svg?style=for-the-badge&logo=amazon-redshift&logoColor=white" />
                        <img alt="DynamoDB"        src="https://img.shields.io/badge/DynamoDB-%2300A3E4.svg?style=for-the-badge&logo=amazon-dynamodb&logoColor=white" />
                        <img alt="Postgres"        src="https://img.shields.io/badge/PostgreSQL-%234169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
                        <img alt="Neo4j"           src="https://img.shields.io/badge/Neo4j-%2300A3E4.svg?style=for-the-badge&logo=neo4j&logoColor=white" />
                        <img alt="MYSQL"           src="https://img.shields.io/badge/MySQL-%234479A1.svg?style=for-the-badge&logo=mysql&logoColor=white" />
                        <img alt="Sagemaker"       src="https://img.shields.io/badge/SageMaker-%234285F4.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="Hugging Face"    src="https://img.shields.io/badge/Hugging_Face-%23FFAE33.svg?style=for-the-badge&logo=huggingface&logoColor=white" />
                        <img alt="OpenAI"          src="https://img.shields.io/badge/OpenAI-%2346A8E3.svg?style=for-the-badge&logo=openai&logoColor=white" />
                        <img alt="Jupyter"         src="https://img.shields.io/badge/Jupyter-%23F37626.svg?style=for-the-badge&logo=Jupyter&logoColor=white" />
                        <img alt="Pandas"          src="https://img.shields.io/badge/Pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" />
                        <img alt="NumPy"           src="https://img.shields.io/badge/NumPy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" />
                    </SkillGroup>

                    <SkillGroup title="DevOps & Infrastructure">
                        <img alt="Docker"      src="https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" />
                        <img alt="Kubernetes"  src="https://img.shields.io/badge/Kubernetes-%23326CE5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" />
                        <img alt="Terraform"   src="https://img.shields.io/badge/Terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white" />
                        <img alt="Serverless"  src="https://img.shields.io/badge/Serverless-%23FD5750.svg?style=for-the-badge&logo=serverless&logoColor=white" />
                        <img alt="EKS"         src="https://img.shields.io/badge/Amazon_EKS-%23232F3E.svg?style=for-the-badge&logo=amazon-eks&logoColor=white" />
                        <img alt="ECS"         src="https://img.shields.io/badge/Amazon_ECS-%23FF9900.svg?style=for-the-badge&logo=amazon-ecs&logoColor=white" />
                        <img alt="Helm"        src="https://img.shields.io/badge/Helm-%230F1689.svg?style=for-the-badge&logo=helm&logoColor=white" />
                        <img alt="GitHub"      src="https://img.shields.io/badge/GitHub-%23181717.svg?style=for-the-badge&logo=github&logoColor=white" />
                        <img alt="GitLab"      src="https://img.shields.io/badge/GitLab-%23FC6D26.svg?style=for-the-badge&logo=gitlab&logoColor=white" />
                        <img alt="CodePipeline" src="https://img.shields.io/badge/CodePipeline-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="Lambda"      src="https://img.shields.io/badge/Lambda-%23FF9900.svg?style=for-the-badge&logo=aws-lambda&logoColor=white" />
                        <img alt="Fluentbit"   src="https://img.shields.io/badge/Fluent_Bit-%230E8A8A.svg?style=for-the-badge&logo=fluentbit&logoColor=white" />
                        <img alt="Kyverno"     src="https://img.shields.io/badge/Kyverno-%23416BDD.svg?style=for-the-badge&logo=kyverno&logoColor=white" />
                        <img alt="Aquasecurity" src="https://img.shields.io/badge/Aqua_Security-%2300A3E4.svg?style=for-the-badge&logo=aquasecurity&logoColor=white" />
                        <img alt="Linux"       src="https://img.shields.io/badge/Linux-%23FCC624.svg?style=for-the-badge&logo=linux&logoColor=black" />
                        <img alt="Calico"      src="https://img.shields.io/badge/Calico-%23F68D2E.svg?style=for-the-badge&logo=calico&logoColor=white" />
                    </SkillGroup>

                    <SkillGroup title="Monitoring & Security">
                        <img alt="Cloudwatch"  src="https://img.shields.io/badge/CloudWatch-%23232F3E.svg?style=for-the-badge&logo=amazon-cloudwatch&logoColor=white" />
                        <img alt="Cloudtrail"  src="https://img.shields.io/badge/CloudTrail-%23FF6600.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="SonarQube"   src="https://img.shields.io/badge/SonarQube-%234E9BCD.svg?style=for-the-badge&logo=sonarqube&logoColor=white" />
                        <img alt="Snyk"        src="https://img.shields.io/badge/Snyk-%23000000.svg?style=for-the-badge&logo=snyk&logoColor=white" />
                        <img alt="API Gateway" src="https://img.shields.io/badge/API_Gateway-%23FF4F00.svg?style=for-the-badge&logo=amazon-api-gateway&logoColor=white" />
                        <img alt="EventBridge" src="https://img.shields.io/badge/EventBridge-%23FF6600.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" />
                        <img alt="SNS"         src="https://img.shields.io/badge/SNS-%23FF9900.svg?style=for-the-badge&logo=amazon-sns&logoColor=white" />
                        <img alt="SQS"         src="https://img.shields.io/badge/SQS-%23232F3E.svg?style=for-the-badge&logo=amazon-sqs&logoColor=white" />
                        <img alt="Postman"     src="https://img.shields.io/badge/Postman-%23FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white" />
                    </SkillGroup>

                    <SkillGroup title="Frontend & Other">
                        <img alt="React"    src="https://img.shields.io/badge/React-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black" />
                        <img alt="Next.js"  src="https://img.shields.io/badge/Next.js-%23000000.svg?style=for-the-badge&logo=next.js&logoColor=white" />
                        <img alt="S3"       src="https://img.shields.io/badge/Amazon_S3-%23FF4F00.svg?style=for-the-badge&logo=amazon-s3&logoColor=white" />
                        <img alt="Denodo"   src="https://img.shields.io/badge/Denodo-%23FF0000.svg?style=for-the-badge&logo=denodo&logoColor=white" />
                        <img alt="Markdown" src="https://img.shields.io/badge/Markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white" />
                        <img alt="Vim"      src="https://img.shields.io/badge/Vim-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white" />
                        <img alt="Many More" src="https://img.shields.io/badge/...and_more-yellowgreen?style=for-the-badge&logo=GitHub-Sponsors" />
                    </SkillGroup>
                </div>
            </div>
        </div>
    );
}
