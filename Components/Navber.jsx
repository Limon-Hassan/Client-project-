'use client';
import React, { useEffect, useState } from 'react';
import Container from './container/Container';
import { usePathname } from 'next/navigation';
import { GoArrowRight } from 'react-icons/go';

const Navber = () => {
  let pathName = usePathname();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Testimonials', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];
  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 border-b border-gray-300 py-3
  transition-transform duration-500 ease-in-out
  ${showNav ? 'translate-y-0' : '-translate-y-full'}
  group hover:bg-gray-300/30`}
      >
        <Container>
          <div className="flex items-center justify-between relative">
            <div className="flex items-center gap-3.5">
              <div className="bg-black/20 size-12 rounded-full inline-flex items-center justify-center animate-wiggle">
                <div className="bg-black/30 size-8 rounded-full inline-flex items-center justify-center">
                  <div className="bg-black/40 size-4 rounded-full"></div>
                </div>
              </div>
              <h1 className="text-3xl font-Wix_Madefor_Text font-bold text-black">
                Website Deft
              </h1>
            </div>
            <div className="flex items-center justify-center gap-1 group-hover:bg-gray-100 bg-gray-200 rounded-full w-[800px] h-[70px]">
              {links.map((link, i) => {
                const isActive = pathName === link.href;

                return (
                  <div key={i} className="">
                    <a
                      href={link.href}
                      className={`text-[22px] font-Wix_Madefor_Text font-normal  px-6 py-2.5 rounded-full transition-all

                ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-black hover:bg-purple-700 hover:text-white'
                }
              `}
                    >
                      {link.name}
                    </a>
                  </div>
                );
              })}
            </div>

            <button className="text-[22px] font-Wix_Madefor_Text font-normal text-black cursor-pointer mr-[250px]">
              Log In
            </button>
          </div>
        </Container>
        <button
          className="
    group absolute top-0 right-0 text-[22px] font-Wix_Madefor_Text font-normal 
    text-white cursor-pointer flex items-center justify-center gap-2 
    w-[250px] h-[94px] 
    bg-[linear-gradient(45deg,#5919C1_28%,#A586DA_100%)]
    hover:bg-green-500"
        >
          <span className="border-2 border-white w-[25px] h-[25px] rounded-full flex items-center justify-center ">
            <GoArrowRight
              className="group-hover:-rotate-270 transition-all ease-in-out duration-300"
              size={17}
            />
          </span>
          Get A Quote
        </button>
      </nav>
    </>
  );
};

export default Navber;
