"use client";

import React, { useEffect, useRef } from 'react';
import Container from './container/Container';
import gsap from 'gsap';

const Section2 = () => {
    const boxRef = useRef(null);

    useEffect(() => {
      const elem = boxRef.current;

      gsap.set(elem, { opacity: 0, y: 50 });

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.to(elem, {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: 'power3.out',
              });

              observer.unobserve(elem); 
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(elem);

      return () => observer.disconnect();
    }, []);
  return (
    <>
      <section>
        <Container>
          <h3 className='text-[25px] font-Wix_Madefor_Text font-normal text-black ml-80'>#1 Ranked in State 5 consecutive years</h3>
          <div className="flex items-center justify-center mt-2">
            <div ref={boxRef} className="flex items-center gap-3">
              <div className="w-[300px] h-auto p-3 hover:bg-green-400/10 hover:border-t border-red-400 transition-all ease-in-out duration-300">
                <h2 className="text-5xl font-normal mb-2 text-gray-400">
                  2,100
                </h2>
                <h5 className='text-[18px] font-normal font-Wix_Madefor_Text text-black'>Cases</h5>
              </div>
              <div className="w-[300px] h-auto p-3 hover:bg-green-400/10 hover:border-t border-red-400 transition-all ease-in-out duration-300">
                <h2 className="text-5xl font-normal mb-2 text-gray-400">95%</h2>
                <h5 className='text-[18px] font-normal font-Wix_Madefor_Text text-black'>Client Satisfaction</h5>
              </div>
              <div className="w-[300px] h-auto p-3 hover:bg-green-400/10 hover:border-t border-red-400 transition-all ease-in-out duration-300">
                <h2 className="text-5xl font-normal mb-2 text-gray-400">25</h2>
                <h5 className='text-[18px] font-normal font-Wix_Madefor_Text text-black'>Years of experience</h5>
              </div>
              <div className="w-[300px] h-auto p-3 hover:bg-green-400/10 hover:border-t border-red-400 transition-all ease-in-out duration-300">
                <h2 className="text-5xl font-normal mb-2 text-gray-400">
                  +300
                </h2>
                <h5 className='text-[18px] font-normal font-Wix_Madefor_Text text-black'>5-star ratings on Google</h5>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section2;
