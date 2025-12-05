'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from './container/Container';

const Section4 = ({ ref, style }) => {
  const bgRef = useRef(null);

  return (
    <section ref={ref} style={style}>
      <Container>
        <div className="relative w-full h-screen overflow-hidden rounded-2xl">
          <div
            ref={bgRef}
            className="absolute w-full h-[200%] top-0 left-0 bg-linear-to-t from-[#5919c1] to-orange-200 rounded-2xl z-10 opacity-80 "
          ></div>

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
      </Container>
    </section>
  );
};

export default Section4;
