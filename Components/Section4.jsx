'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from './container/Container';
import Card1 from './cards/Card1';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const secRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const element = secRef.current;

  gsap.fromTo(
    cardRefs.current,
    { x: '300%', rotate: 60 },
    {
      x: '0%',
      rotate: 0,
      ease: 'none',
      stagger: 0.3,
      scrollTrigger: {
        trigger: secRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    }
  );

    // ScrollTrigger.create({
    //   trigger: element,
    //   start: '1978 top',
    //   pin: true,
    //   pinSpacing: false,
    //   scrub: true,
    // });

    // return () => {
    //   ScrollTrigger.getAll().forEach(t => t.kill());
    // };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Container>
        <div
          ref={secRef}
          className="relative w-full h-screen overflow-hidden rounded-2xl"
        >
          <div className="absolute w-full h-[200%] top-0 left-0 bg-linear-to-t from-[#5919c1] to-orange-200 rounded-2xl z-10 opacity-80 overflow-hidden"></div>

          <div className="absolute inset-0 w-full h-full rounded-2xl z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/Home.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        {/* <div className="absolute top-[20%] right-0 z-10 flex">
          <div ref={el => (cardRefs.current[0] = el)}>
            <Card1 />
          </div>
          <div className="mt-[500px]" ref={el => (cardRefs.current[1] = el)}>
            <Card2 />
          </div>
          <div ref={el => (cardRefs.current[2] = el)}>
            <Card3 />
          </div>
        </div> */}
        <div className="absolute top-1/2 right-0 z-20 flex flex-col items-end justify-center  transform -translate-y-1/2">
          <div ref={el => (cardRefs.current[0] = el)}>
            <Card1 />
          </div>
          <div ref={el => (cardRefs.current[1] = el)}>
            <Card2 />
          </div>
          <div ref={el => (cardRefs.current[2] = el)}>
            <Card3 />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section4;
