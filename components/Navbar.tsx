import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { userData } from "../constants/user";
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Navbar(): React.ReactElement {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [onHoverTheme, setOnHoverTheme] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const links: { name: string; href: string }[] = [
    { name: 'Home', href: '/' },
    { name: 'Media / Portfolio', href: '/projects' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href: string, currentPathname: string): boolean => {
    if (href === '/') {
      return href === currentPathname;
    }
    return currentPathname.startsWith(href);
  };

  useEffect(() => {
    setMounted(true);
    setTheme("dark"); // Set default theme to dark
  }, [setTheme]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
          <div className="cursor-pointer flex gap-5 items-center mr-5 hover:animate-pulse">
            <img className="w-10 h-10" src="/tf_logo.jpeg" alt="Logo" />
            <h1 className="hidden md:flex font-semibold text-xl dark:text-gray-100 whitespace-nowrap">{userData.name}</h1>
          </div>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 focus:outline-none focus:text-gray-700 dark:focus:text-gray-400"
          >
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        <nav className={`flex-col md:flex-row items-center mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          {links.map(({ name, href }) => (
            <Link href={href} key={name}>
              <div className="mr-6 sm:mr-8 flex flex-col relative">
                {name}
                {isActiveLink(href, router.pathname) && (
                  <motion.div
                    layoutId="underline"
                    className="w-full border-b-2 border-green-500"
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
          data-tip={theme === "dark" ? "Light Mode" : "Dark Mode"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          onMouseEnter={() => setOnHoverTheme(theme === "dark" ? "animate-ping" : "animate-pulse")}
          onMouseLeave={() => setOnHoverTheme("")}
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
