import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from 'next-seo';
import SEO from "../constants/next-seo.config"
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo
        {...SEO}
      />
      <ThemeProvider defaultTheme="light" attribute="class" enableSystem>
        <Navbar />
        <AnimatePresence
          // exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Toaster />
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default MyApp