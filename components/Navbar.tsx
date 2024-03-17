import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { userData } from "../constants/user";
import { motion } from 'framer-motion'

export default function Navbar(): React.ReactElement {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [onHoverTheme, setOnHoverTheme] = useState("");

  const links: { name: string; href: string }[] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Media / Portfolio',
      href: '/projects',
    },
    {
      name: 'Experiences',
      href: '/experiences',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ]

  const isActiveLink = (href: string, currentPathname: string): boolean => {
    if (href === '/') {
      return href === currentPathname
    }
    return currentPathname.startsWith(href)
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-8">
      <div className="flex md:flex-row justify-between items-center">
        <Link href="/">
          <div className="cursor-pointer flex gap-5 items-center mr-5 hover:animate-pulse">
            <img className="w-10 h-10" src="/tf_logo.jpeg" />
            
            {/* <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325.77 340.66">
              <g id="a" />
              <g id="b">
                <g id="c">
                  <g>
                    <polygon points="127.09 .25 99.46 85.28 27.88 .25 127.09 .25" fill="#1d604f" />
                    <polygon points="27.88 .25 99.46 85.28 .25 85.28 27.88 .25" fill="#174036" />
                  </g>
                  <g>
                    <polygon points="127.1 .25 226.31 .25 198.68 85.28 127.1 .25" fill="#44b495" />
                    <polygon points="127.1 .25 198.68 85.28 99.47 85.28 127.1 .25" fill="#44b495" />
                  </g>
                  <g>
                    <polygon points="325.52 .25 297.89 85.29 226.31 .25 325.52 .25" fill="#1d604f" />
                    <polygon points="226.31 .25 297.89 85.29 198.68 85.29 226.31 .25" fill="#174036" />
                  </g><g><polygon points="198.68 85.29 171.05 170.33 99.46 85.29 198.68 85.29" fill="#1d604f" />
                    <polygon points="99.46 85.29 171.05 170.33 71.83 170.33 99.46 85.29" fill="#44b495" /></g><g>
                    <polygon points="171.05 170.33 143.42 255.37 71.83 170.33 171.05 170.33" fill="#44b495" />
                    <polygon points="71.83 170.33 143.42 255.37 44.2 255.37 71.83 170.33" fill="#174036" /></g>
                  <g><polygon points="143.42 255.37 115.79 340.41 44.2 255.37 143.42 255.37" fill="#1d604f" />
                    <polygon points="44.2 255.37 115.79 340.41 16.57 340.41 44.2 255.37" fill="#44b495" /></g>
                  <g><polygon points="270.25 170.33 242.62 255.37 171.04 170.33 270.25 170.33" fill="#44b495" />
                    <polygon points="171.04 170.33 242.62 255.37 143.41 255.37 171.04 170.33" fill="#174036" /></g>
                </g></g>
            </svg> */}
            <h1 className="hidden md:flex font-semibold text-xl dark:text-gray-100 whitespace-nowrap">{userData.name}</h1>
          </div>
        </Link>

        <nav className="flex">
          {links.map(({ name, href }) => (
            <Link href={href} key={name} >
              <div className="mr-6 sm:mr-8 flex flex-col relative">
                {name}
                {isActiveLink(href, router.pathname) && (
                  <motion.div
                    layoutId="w-full border border-green-500"
                    className="w-full border border-green-500"
                    animate
                  />
                )}
              </div>
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="w-10 h-10 p-3 rounded-full hover:bg-gray-500 daisyui-tooltip daisyui-tooltip-bottom"
          data-tip={theme === "light" ? "Dark Mode" : "Light Mode"}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark")
          }}
          onMouseEnter={() => {
            setOnHoverTheme(theme === "dark" ? "animate-ping" : "animate-pulse")
          }}
          onMouseLeave={() => {
            setOnHoverTheme(theme === "dark" ? "" : "")
          }}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className={`w-4 h-4 text-blue-500 dark:text-yellow-500 ${onHoverTheme}`}
            >
              {theme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}