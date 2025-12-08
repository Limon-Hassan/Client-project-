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
  return (
    <div>
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
    </div>
  );
};

export default Section4;
