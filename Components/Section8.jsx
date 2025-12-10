'use client';

import React, { useEffect, useRef } from 'react';
import Container from './container/Container';
import ReviewCard from './cards/ReviewCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Section8 = () => {
  let sectionRef = useRef(null);
  let animRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const anim = animRef.current;

    gsap.set(anim, { x: '-250vh' });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'center center',
        end: '+=500',
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(anim, {
      x: 250,
      duration: 1,
      ease: 'power2.out',
    });

    tl.to(
      anim,
      {
        y: -150,
        duration: 1,
        ease: 'power2.out',
      },
      '>'
    );
  }, []);

  return (
    <div ref={sectionRef} className="relative overflow-hidden h-[80vh]">
      <Container className={'w-[1480px] mx-auto px-0'}>
        <h3 className="text-[60px] font-Wix_Madefor_Text font-normal text-black mt-[50px]">
          What Our Clients Say
        </h3>
        <div
          ref={animRef}
          className="flex items-center gap-5 absolute top-[30%] left-0"
        >
          <ReviewCard
            img={'/Professional.avif'}
            name={'Olivia Johnson'}
            role={'HR Specialist'}
            rating={5}
            text={
              'Very satisfied with the collaboration. The team is responsive and delivers great quality work on schedule.'
            }
          />
          <ReviewCard
            img={'/Imag.avif'}
            name={'Michael Chen'}
            role={'Business Analyst'}
            rating={4}
            text={
              'Good communication throughout the project and a professional approach. The results met our expectations.'
            }
          />
          <ReviewCard
            img={'/Image.avif'}
            name={'Sophia Martinez'}
            role={'Product Designer'}
            rating={5}
            text={
              'Creative solutions and timely delivery. I highly recommend their services to anyone looking for quality and efficiency.'
            }
          />
          <ReviewCard
            img={'/Image by.avif'}
            name={'James Lee'}
            role={'CEO'}
            rating={4}
            text={
              'Outstanding service and attention to detail. They truly understand client needs and deliver excellent results every time.'
            }
          />
          <ReviewCard
            img={'/Image by Usman.avif'}
            name={'Emily Roberts'}
            role={'Marketing Manager'}
            rating={5}
            text={
              'The team exceeded our expectations with their professionalism and dedication. Our sales increased significantly after their campaign.'
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default Section8;
