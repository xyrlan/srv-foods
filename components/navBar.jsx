"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import useNavbar from '@/hooks/useNavbar';
import { ThemeSwitch } from './themeSwitch';


export function Navbar({ alwaysShown }) {
  const { visible, isNavbarAtTop } = useNavbar()
  const [isOpen, setIsOpen] = useState(false); // Mobile menu open state
  const router = useRouter();
  const pathname = usePathname();

  // Navigation items 
  // DA PRA IMPLEMENTAR SUBNAV
  const navigation = [
    { name: 'O que fazemos', href: '/#AboutSection' },
    { name: 'Quem somos', href: '/mvv' },
    { name: 'Produtos', href: '/#ProductsSection' },
    { name: 'Clientes', href: '/#CustomersSection' },
    { name: 'Contato', href: '/#Footer' },
  ];

  // Handle navigation for internal links
  function handlePath(item) {
    if (pathname === '/') {
      const element = document.getElementById(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on the home page, navigate to the home page with a query parameter
      router.push(`/?section=${item.name.toLowerCase().replace(' ', '-')}`);
    }
  }

  return (
    <nav className={`w-full text-branco fixed top-0 duration-200 transition-all delay-100 z-50 ${((visible || alwaysShown) && !isOpen) || isOpen ? '-translate-y-0 bg-pink-950' : '-translate-y-40 bg-opacity-0 '} ${(isNavbarAtTop && !alwaysShown) && !isOpen ? 'bg-opacity-0' : 'bg-opacity-100 bg-stone-900'}`}>
      <div className="px-4 py-4 pr-4 mx-auto lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center w-full">
            <Link href="/" className="flex items-center justify-center gap-4">
              <Image
                width={200}
                height={200}
                src="/hisalogo.png"
                alt="Logo oab para todos"
                className="w-auto h-16 max-md:h-12"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-md bg-opacity-80 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                // Close Icon
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu Icon
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex space-x-4 items-center">
              {navigation.map((item) => (
                <li key={item.name} className='group relative'>
                  <Link href={item.href}  >
                    <p className=" text-nowrap group-hover:text-rosa transition-all duration-200">{item.name}</p>
                  </Link>
                </li>
              ))}
              {/* <li className="relative group">
                <ThemeSwitch />
              </li> */}
            </ul>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <li key={item.name} >
                <Link href={item.href} passHref>
                  <p
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-3 py-2 text-left hover:bg-default-800 rounded-lg hover:text-rosa transition-all duration-100 hover:font-semibold"
                  >
                    {item.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
