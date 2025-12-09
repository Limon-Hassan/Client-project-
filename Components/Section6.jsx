'use client';

import React, { useEffect, useRef } from 'react';
import Container from './container/Container';
import { GoArrowRight } from 'react-icons/go';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Section6 = () => {
  let sectionRef = useRef(null);
  let textRef = useRef(null);
  let circleRef1 = useRef(null);
  let circleRef2 = useRef(null);
  let circleRef3 = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    gsap.set(text, { y: 100, fontSize: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(text, {
      fontSize: 80,
      duration: 0.3,
      ease: 'none',
    });

    tl.to(text, {
      y: 2200,
      duration: 0.7,
      ease: 'none',
    });
  }, []);

  useEffect(() => {
    let c1 = circleRef1.current;
    let c2 = circleRef2.current;
    let c3 = circleRef3.current;

    gsap.set(c1, { x: 400, y: 500 });
    gsap.set(c2, { x: -800, y: 0 });
    gsap.set(c3, { x: 0, y: 500 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: () => `top+=${window.innerHeight / 3}px center`,
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(
      [c1, c2, c3],
      {
        x: 0,
        y: 0,

        ease: 'power2.out',
      },
      0
    );

    tl.to(
      [c1, c2, c3],
      {
        y: 300,

        ease: 'power1.inOut',
      },
      1
    );
  }, []);

  return (
    <div ref={sectionRef} className="bg-services-gradient h-[200vh] relative">
      <Container>
        <h2
          ref={textRef}
          className="absolute left-1/2 -translate-x-1/2 text-center whitespace-nowrap leading-20  font-normal text-white"
        >
          Every service. One partner. Real <br /> growth.
        </h2>
        <div
          ref={circleRef1}
          className="w-[450px] h-[450px] rounded-full bg-purple-200/20 flex items-center justify-center mx-auto"
        >
          <div
            ref={circleRef2}
            className="w-[250px] h-[250px] rounded-full bg-green-200/20 flex items-center justify-center"
          >
            <div
              ref={circleRef3}
              className="w-[124px] h-[124px] rounded-full bg-green-300/20"
            ></div>
          </div>
        </div>
        <div className="absolute bottom-[50px] right-[300px] flex items-end justify-end">
          <div>
            <h3 className="text-[45px] font-Wix_Madefor_Text font-normal text-white mb-5">
              About Us
            </h3>
            <p className="text-[20px] font-Wix_Madefor_Text font-normal text-white w-[495px]">
              Website Deft LLC delivers complete digital solutions that help
              businesses grow with confidence. As a certified Wix expert, we
              handle everything from web design and development to branding,
              digital marketing, and long-term support.
            </p>
            <p className="text-[20px] font-Wix_Madefor_Text font-normal text-white w-[495px] mt-3 mb-8">
              Our goal is simple: create high-performing digital experiences
              that turn your ideas into real results.
            </p>
            <button className="text-[18px] font-Wix_Madefor_Text font-normal text-black w-[170px] h-[50px] flex items-center justify-center gap-2 rounded-full bg-white hover:bg-transparent hover:border border-white hover:text-white hover:font-medium ease-in-out transition-all duration-200 group cursor-pointer hover:text-[20px]">
              <span className="border-2 group-hover:border-white border-gray-500 w-[25px] h-[25px] rounded-full flex items-center justify-center ">
                <GoArrowRight
                  className="group-hover:-rotate-270 transition-all ease-in-out duration-200"
                  size={17}
                />
              </span>
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section6;
