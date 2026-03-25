import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { userData } from "../constants/user";
import { motion } from 'framer-motion';
import { HomeIcon, BriefcaseIcon, CollectionIcon } from '@heroicons/react/outline';
import { AcademicCapIcon } from '@heroicons/react/outline';

export default function Navbar(): React.ReactElement {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links: { name: string; href: string; icon: React.ReactNode }[] = [
    { name: 'Home',           href: '/',              icon: <HomeIcon className="w-5 h-5" /> },
    { name: 'Projects',       href: '/projects',      icon: <CollectionIcon className="w-5 h-5" /> },
    { name: 'Experiences',    href: '/experiences',   icon: <BriefcaseIcon className="w-5 h-5" /> },
    { name: 'Certifications', href: '/certification', icon: <AcademicCapIcon className="w-5 h-5" /> },
  ];

  const isActiveLink = (href: string, currentPathname: string): boolean => {
    if (href === '/') return href === currentPathname;
    return currentPathname.startsWith(href);
  };

  useEffect(() => {
    setMounted(true);
    setTheme("dark");

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setTheme]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200/60 dark:border-gray-700/60"
          : "bg-white dark:bg-gray-900 border-b border-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
          <div className="flex justify-between items-center">

            {/* Logo / Brand */}
            <Link href="/">
              <div className="cursor-pointer flex items-center gap-3 group">
                <div className="relative">
                  <img className="w-9 h-9 rounded-full ring-2 ring-green-500/50 group-hover:ring-green-500 transition-all duration-200" src="/profilepic.jpg" alt="Logo" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
                </div>
                <span className="hidden md:block font-semibold text-gray-900 dark:text-gray-100 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                  {userData.name}
                </span>
              </div>
            </Link>

            {/* Nav links */}
            <nav className="flex items-center gap-1">
              {links.map(({ name, href, icon }) => {
                const active = isActiveLink(href, router.pathname);
                return (
                  <Link href={href} key={name}>
                    <div className={`relative flex flex-col items-center px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer group ${
                      active
                        ? "text-green-500"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}>
                      {icon}
                      <span className="text-xs mt-0.5 font-medium">{name}</span>
                      {active && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"
                        />
                      )}
                    </div>
                  </Link>
                );
              })}
            </nav>

            {/* Theme toggle */}
            <button
              type="button"
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5"
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
      </header>
      {/* Spacer */}
      <div className="h-[68px] md:h-[76px]" />
    </>
  );
}
