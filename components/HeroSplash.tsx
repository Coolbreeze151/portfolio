import React from 'react';
import { userData } from "../constants/user";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

interface Props {
    scrollToSection: (id: string) => void;
}

export default function HeroSplash(props: Props): React.ReactElement {
    return (
        <>
            <div className="mt-12 flex flex-row justify-center items-center min-h-screen pb-20">
                <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:px-20 lg:py-10 px-6">

                    {/* Mobile profile image */}
                    <div className="flex justify-center mb-6 lg:hidden">
                        <div className="relative">
                            <div className="w-28 h-28 rounded-full ring-4 ring-green-500 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 overflow-hidden">
                                <img className="w-full h-full object-cover" src="/profilepic.jpg" alt="Ismahfaris" />
                            </div>
                            <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full" title="Open to work" />
                        </div>
                    </div>

                    {/* Greeting */}
                    <p className="text-sm font-semibold tracking-widest text-green-500 uppercase mb-2">
                        Welcome to my portfolio
                    </p>

                    <h1 className="mb-2 font-mono text-4xl text-gray-900 dark:text-gray-100 md:text-6xl leading-tight">
                        Hi, I&apos;m{' '}
                        <span className="text-green-500">
                            Ismahfaris
                        </span>
                    </h1>

                    <div className="mb-4">
                        <TypeAnimation
                            sequence={[
                                'Data Engineer',
                                2000,
                                'AI Engineer',
                                2000,
                                'Platform Engineer',
                                2000,
                                'Do Everything Engineer',
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            className="text-2xl md:text-3xl font-mono text-green-500"
                        />
                    </div>

                    <p className="mt-4 text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
                        Building data infrastructure and AI solutions for{' '}
                        <span className="text-gray-900 dark:text-gray-100 font-semibold">public good</span>{' '}
                        at GovTech Singapore.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                        <Link href="/projects">
                            <span className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer text-sm">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m0 0l7-7m-7 7l7 7" />
                                </svg>
                                View My Work
                            </span>
                        </Link>
                        <a
                            href={userData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-500 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 text-sm"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                            Connect on LinkedIn
                        </a>
                    </div>

                    {/* Stats row */}
                    <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start border-t border-gray-200 dark:border-gray-700 pt-8">
                        <div className="text-center md:text-left">
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">19+</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Certifications</p>
                        </div>
                        <div className="w-px h-10 bg-gray-200 dark:bg-gray-700 hidden md:block self-center" />
                        <div className="text-center md:text-left">
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">5+</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Years Experience</p>
                        </div>
                        <div className="w-px h-10 bg-gray-200 dark:bg-gray-700 hidden md:block self-center" />
                        <div className="text-center md:text-left">
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">3</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Cloud Platforms</p>
                        </div>
                        <div className="w-px h-10 bg-gray-200 dark:bg-gray-700 hidden md:block self-center" />
                        <div className="text-center md:text-left">
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">2</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Degrees</p>
                        </div>
                    </div>

                    {/* Social icons row */}
                    <div className="mt-6 flex gap-4 justify-center md:justify-start">
                        <a href={userData.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <a href={userData.medium} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" aria-label="Medium">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
                            </svg>
                        </a>
                        <a href={userData.formBold} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors" aria-label="Contact">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Desktop profile image */}
                <div className="hidden lg:flex flex-col items-center justify-center w-2/5 pr-10">
                    <div className="relative group">
                        {/* Decorative ring */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-green-400 via-green-500 to-teal-600 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-500" />
                        <div className="relative w-72 h-72 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-900">
                            <img
                                className="animate-slowBounce w-full h-full object-cover"
                                src="/profilepic.jpg"
                                alt="Ismahfaris Ismail"
                            />
                        </div>
                        {/* Online indicator */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-white dark:bg-gray-800 rounded-full px-3 py-1.5 shadow-lg border border-gray-100 dark:border-gray-700">
                            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Based in Singapore</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 w-full flex justify-center">
                <button
                    className="flex flex-col items-center gap-1 text-gray-400 hover:text-green-500 transition-colors animate-bounce"
                    onClick={() => props.scrollToSection("aboutme")}
                    aria-label="Scroll down"
                >
                    <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </>
    );
}
