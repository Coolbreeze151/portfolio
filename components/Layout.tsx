import React, { ReactNode, useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { motion } from 'framer-motion'
import Footer from './Footer'


type Props = {
    children: ReactNode
    title: string
    description: string
}

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children, title, description }: Props): JSX.Element => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div className='flex flex-col justify-between h-screen'>
                <NextSeo title={title} description={description} openGraph={{ title, description }} />
                <motion.main
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ type: 'linear' }}
                >
                    {children}
                </motion.main>

                <Footer />
            </div>
            {showTopBtn && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    className={"cursor-pointer bi bi-arrow-up-circle fixed xl:bottom-0 mr-4 xl:mb-4 bottom-5 mb-10 right-0 fill-green-500 animate-bounce"}
                    viewBox="0 0 20 20"
                    onClick={goToTop}
                >
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
            )}{" "}
        </div>
    )

}
export default Layout