'use client';

import React, { useEffect, useRef } from 'react';
import Container from './container/Container';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Section7 = () => {
  let sectionRef = useRef(null);
  let TextRef = useRef(null);
  let Element1 = useRef(null);
  let Element2 = useRef(null);
  let Element3 = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = TextRef.current;

    gsap.set(text, {
      y: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(text, {
      y: 300,
      duration: 0.7,
      ease: 'none',
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const el1 = Element1.current;
    const el2 = Element2.current;
    const el3 = Element3.current;

    gsap.set(el1, { y: 500 });
    gsap.set(el2, { y: 800 });
    gsap.set(el3, { y: 1400 });

    let tl = gsap.timeline();

    tl.to(el1, { y: 0, duration: 1, ease: 'power2.out' })
      .to(el2, { y: 0, duration: 1.5, ease: 'power2.out' })
      .to(el3, { y: 0, duration: 2, ease: 'power2.out' });

    ScrollTrigger.create({
      trigger: section,
      start: 'center center',
      end: () => '+=' + tl.duration() * 500,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      animation: tl,
    });
  }, []);

  return (
    <div ref={sectionRef} className=" h-screen bg-[#f2f2f2]">
      <Container className={'w-[1480px] mx-auto px-0'}>
        <h4
          ref={TextRef}
          className="text-[80px] font-Wix_Madefor_Text font-normal text-black"
        >
          All In One
        </h4>
        <div className="mt-[300px]">
          <div className="w-full h-px opacity-50 mx-auto bg-gray-400 " />
          <div className="flex items-center gap-[800px] mt-3">
            <div className="w-[60px] h-[60px] bg-green-400 rounded-full"></div>
            <h4 className="text-[35px] font-Wix_Madefor_Text font-normal text-black">
              Web Design & Development
            </h4>
          </div>
          <div ref={Element1} className="relative mt-3">
            <div className="absolute -top-[70px] left-[50px] w-[60px] h-[60px] bg-green-400/60 rounded-full "></div>
            <div className="absolute top-0 right-0  w-[40%] h-px opacity-50 mx-auto bg-gray-400 " />
            <h4 className="text-end mr-[222px] text-[35px] font-Wix_Madefor_Text font-normal text-black">
              Branding & Graphics
            </h4>
          </div>
          <div ref={Element2} className="relative  mt-3">
            <div className="absolute -top-[135px] left-[100px] w-[60px] h-[60px] bg-green-400/50 rounded-full "></div>
            <div className="absolute top-0 right-0  w-[40%] h-px opacity-50 mx-auto bg-gray-400 " />
            <h4 className="text-end mr-40 text-[35px] font-Wix_Madefor_Text font-normal text-black">
              Digital Marketing & SEO
            </h4>
          </div>
          <div ref={Element3} className="relative  mt-3">
            <div className="absolute -top-[198px] left-[150px] w-[60px] h-[60px] bg-green-400/30 rounded-full "></div>
            <div className="absolute top-0 right-0  w-[40%] h-px opacity-50 mx-auto bg-gray-400 " />
            <h4 className="text-end mr-2.5 text-[35px] font-Wix_Madefor_Text font-normal text-black">
              App Development & Maintenance
            </h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section7;
