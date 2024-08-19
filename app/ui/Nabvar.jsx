'use client'

import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { navLinks } from '@/app/lib/data.js';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <header className='absolute top-0 z-[10000] mx-auto flex flex-wrap w-full items-center justify-between px-4 md:px-10 py-6 bg-white border-b border-b-slate-400'>
      <div className='logo w-[100px] md:w-[130px]'>
        <Link href="/">
          <Image src='/logo.png' alt='logo' width={150} height={30} />
        </Link>
      </div>
      <nav className='flex w-1/3 justify-end flex-wrap'>
        {/* Menú Desktop */}
        <div className='w-full hidden md:flex justify-end'>
          <ul className='flex justify-between gap-4'>
            {navLinks.map((link, index) => (
              <li key={index} className="font-bold hover:text-orange-500">
                {link.submenu ? (
                  <div className="relative" ref={dropdownRef}>
                    <button onClick={toggleDropdown} className="flex items-center">
                      {link.label} <ChevronDown size={20} className="ml-1" />
                    </button>
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-full mt-2 left-0 w-[200px] bg-white shadow-lg rounded-md overflow-hidden"
                        >
                          {link.submenu.map((sublink, subIndex) => (
                            <li key={subIndex} className="py-2 px-4 hover:bg-gray-100">
                              <Link href={sublink.href} className="hover:text-orange-500">
                                {sublink.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Menú Mobile */}
        <div className='md:hidden'>
          <button onClick={toggleNavbar}>
            {isOpen ? <X size='30' /> : <Menu size='30' />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="nav-links"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mt-4 basis-full md:hidden overflow-hidden"
          >
            <ul className='flex flex-col items-center gap-4'>
              {navLinks.map((link, index) => (
                <li key={index} className="font-bold hover:text-orange-500 transition-all ease-in-out">
                  {link.submenu ? (
                    <div className="relative" ref={dropdownRef}>
                      <button onClick={toggleDropdown} className="flex items-center">
                        {link.label} <ChevronDown size={20} className="ml-1" />
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="w-full bg-white shadow-lg rounded-md overflow-hidden"
                          >
                            {link.submenu.map((sublink, subIndex) => (
                              <li key={subIndex} className="py-2 px-4 hover:bg-gray-100">
                                <Link href={sublink.href} onClick={toggleNavbar} className="hover:text-orange-500">
                                  {sublink.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={link.href} onClick={toggleNavbar}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};