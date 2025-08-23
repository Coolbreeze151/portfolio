import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { userData } from "../constants/user";
import { motion } from 'framer-motion';
import { HomeIcon, BriefcaseIcon, CollectionIcon, MailIcon } from '@heroicons/react/outline';

export default function Navbar(): React.ReactElement {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [onHoverTheme, setOnHoverTheme] = useState("");

  const links: { name: string; href: string; icon: React.ReactNode }[] = [
    { name: 'Home', href: '/', icon: <HomeIcon className="w-6 h-6" /> },
    { name: 'Projects', href: '/projects', icon: <CollectionIcon className="w-6 h-6" /> },
    { name: 'Experiences', href: '/experiences', icon: <BriefcaseIcon className="w-6 h-6" /> },
    { name: 'Certifications', href: '/certification', icon: <MailIcon className="w-6 h-6" /> },
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
    <>
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 navbar-height">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
          <div className="flex justify-between items-center">
            <Link href="/">
              <div className="cursor-pointer flex gap-5 items-center mr-5 hover:animate-pulse">
                <img className="w-10 h-10 rounded-full" src="/profilepic.jpg" alt="Logo" />
                <h1 className="hidden md:flex font-semibold text-xl dark:text-gray-100 whitespace-nowrap">{userData.name}</h1>
              </div>
            </Link>

            <nav className="flex items-center space-x-6">
              {links.map(({ name, href, icon }) => (
                <Link href={href} key={name}>
                  <div className="flex flex-col items-center relative">
                    {icon}
                    <span className="text-xs mt-1">{name}</span>
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
      </div>
      <div className="main-content mt-24">
        {/* Your main content goes here */}
      </div>
    </>
  );
}
