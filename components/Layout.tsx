import React, { ReactNode, useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from './Footer'

type Props = {
    children: ReactNode
    title: string
    description: string
}

const variants = {
    hidden: { opacity: 0, x: -40, y: 0 },
    enter:  { opacity: 1, x: 0,   y: 0 },
    exit:   { opacity: 0, x: 0,   y: -20 },
}

const Layout = ({ children, title, description }: Props): JSX.Element => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowTopBtn(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="min-h-screen flex flex-col">
            <NextSeo title={title} description={description} openGraph={{ title, description }} />
            <motion.main
                className="flex-1"
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: 'tween', duration: 0.3 }}
            >
                {children}
            </motion.main>
            <Footer />

            <AnimatePresence>
                {showTopBtn && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        onClick={goToTop}
                        aria-label="Back to top"
                        className="fixed bottom-6 right-6 w-11 h-11 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 z-40"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Layout
