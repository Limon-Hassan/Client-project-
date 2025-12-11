'use client';
import React, { useEffect, useRef } from 'react';
import Container from './container/Container';
import { GoArrowRight } from 'react-icons/go';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Section11 = () => {
  let sectionRef = useRef(null);
  let videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    gsap.set(video, { width: 200 });

    let tline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tline.to(video, {
      width: "100%",
      duration: 1,
      ease: 'power2.out',
    });
  }, []);
  return (
    <div ref={sectionRef} className="mb-[100px]">
      <Container>
        <div
          ref={videoRef}
          className="relative w-[1480px] h-[430px] rounded-[20px] mx-auto"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover z-0 rounded-[20px]"
            src="/Home - Website.mp4"
          ></video>
          <div className="absolute top-[60px] left-[60px] z-10 ">
            <h3 className="text-[40px] font-Wix_Madefor_Text font-normal text-white mb-[200px]">
              Start Your Project Today.
            </h3>
            <button className="text-[18px] font-Wix_Madefor_Text font-normal text-black w-[170px] h-[50px] flex items-center justify-center gap-2 rounded-full bg-white hover:bg-transparent hover:border border-white hover:text-white hover:font-medium ease-in-out transition-all duration-200 group cursor-pointer hover:text-[20px]">
              <span className="border-2 group-hover:border-white border-gray-500 w-[25px] h-[25px] rounded-full flex items-center justify-center ">
                <GoArrowRight
                  className="group-hover:-rotate-270 transition-all ease-in-out duration-200"
                  size={17}
                />
              </span>
              Get Started
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section11;
