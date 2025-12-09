'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from './container/Container';
import Card1 from './cards/Card1';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoArrowRight } from 'react-icons/go';
gsap.registerPlugin(ScrollTrigger);

const Section4 = () => {
  const sectionRef = useRef(null);
  let cardRef2 = useRef(null);
  let cardRef3 = useRef(null);
  let cardRef4 = useRef(null);

  // useEffect(() => {
  //   const section = sectionRef.current;
  //   const c2 = cardRef2.current;
  //   const c3 = cardRef3.current;
  //   const c4 = cardRef4.current;

  //   gsap.set(c2, { y: -500 });
  //   gsap.set(c3, { y: -1000 });
  //   gsap.set(c4, { y: -1500 });

  //   const tlEnter = gsap.timeline({ paused: true });

  //   tlEnter
  //     .to(c2, {
  //       y: 0,
  //       duration: 1,
  //       ease: 'power2.out',
  //     })
  //     .to(
  //       c3,
  //       {
  //         y: 0,
  //         duration: 1,
  //         ease: 'power2.out',
  //       },
  //       '+=0.2'
  //     )
  //     .to(
  //       c4,
  //       {
  //         y: 0,
  //         duration: 1,
  //         ease: 'power2.out',
  //       },
  //       '+=0.2'
  //     );

  //   ScrollTrigger.create({
  //     trigger: section,
  //     start: 'top 0%',
  //     pin: true,
  //     scrub: true,
  //     pinSpacing: true,
  //   });
  // }, []);

  useEffect(() => {
    const section4 = sectionRef.current;
    const c1 = cardRef2.current;
    const c2 = cardRef3.current;
    const c3 = cardRef4.current;

    gsap.set(c1, { y: 500 });
    gsap.set(c2, { y: 1500 });
    gsap.set(c3, { y: 2000 });

    const tlEnter = gsap.timeline({ paused: true });

    tlEnter
      .to(c1, {
        y: 0,
        duration: 1,
        ease: 'power2.out',
      })
      .to(
        c2,
        {
          y: 0,
          duration: 2,
          ease: 'power2.out',
        },
        '+=0.2'
      )
      .to(
        c3,
        {
          y: 0,
          duration: 3,
          ease: 'power2.out',
        },
        '+=0.2'
      );

    ScrollTrigger.create({
      trigger: section4,
      start: 'top top',
      pin: true,
      scrub: true,
      end: () => '+=' + tlEnter.duration() * 700,

      onUpdate: self => {
        const totalProgress = self.progress;

        if (totalProgress < 0.5) {
          tlEnter.progress(totalProgress / 0.5);
        }
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className=" w-full h-screen flex items-center justify-center"
    >
      <Container>
        <div className="flex gap-[350px] ">
          <div>
            <h4 className="text-3xl font-Wix_Madefor_Text font-normal text-black ">
              Simple Steps to Success
            </h4>
            <h2 className="text-[62px] font-Wix_Madefor_Text font-normal text-black my-5">
              How We Work
            </h2>
            <p className="text-[20px] font-Wix_Madefor_Text font-normal text-gray-600 w-[460px] mb-10">
              Our workflow is simple and efficient. We begin by understanding
              your goals, create a clear plan, design and develop your project,
              and refine every detail before launch. Once live, we provide
              ongoing support to ensure your business continues to grow
              smoothly.
            </p>
            <button className="text-[18px] font-Wix_Madefor_Text font-normal text-white px-10 py-3 flex items-center gap-2 rounded-full bg-green-500 hover:bg-purple-500 hover:font-medium ease-in-out transition-all duration-300 group cursor-pointer hover:text-[20px]">
              <span className="border-2 border-white w-[25px] h-[25px] rounded-full flex items-center justify-center ">
                <GoArrowRight
                  className="group-hover:-rotate-270 transition-all ease-in-out duration-300"
                  size={17}
                />
              </span>
              Get A Quote
            </button>
          </div>
          <div className="relative">
            <div className=" card1 w-[745px] h-[420px] card1 p-[50px] bg-green-300/20 rounded-3xl">
              <h3 className="text-[60px] font-normal text-black mb-[50px]">
                01
              </h3>
              <h2 className="text-[55px] font-Wix_Madefor_Text font-normal text-black mb-5">
                Understanding You
              </h2>
              <h5 className="text-[20px] font-Wix_Madefor_Text font-normal text-gray-600 w-[590px]">
                We start by discussing your goals and requirements to tailor our
                services to your specific needs.
              </h5>
            </div>
            <div
              ref={cardRef2}
              className=" absolute top-0 right-0 card2 w-[745px] h-[420px] card1 p-[50px] bg-green-200 rounded-3xl z-10"
            >
              <h3 className="text-[60px] font-normal text-black mb-[50px]">
                02
              </h3>
              <h2 className="text-[55px] font-Wix_Madefor_Text font-normal text-black mb-5">
                Plan & Design
              </h2>
              <h5 className="text-[20px] font-Wix_Madefor_Text font-normal text-gray-600 w-[590px]">
                We create a detailed plan and design that aligns with your
                vision and brand identity.
              </h5>
            </div>
            <div
              ref={cardRef3}
              className=" absolute  top-0 right-0 card3 w-[745px] h-[420px] card1 p-[50px] bg-green-200 rounded-3xl z-20"
            >
              <h3 className="text-[60px] font-normal text-black mb-[50px]">
                03
              </h3>
              <h2 className="text-[55px] font-Wix_Madefor_Text font-normal text-black mb-5">
                Test & Refine
              </h2>
              <h5 className="text-[20px] font-Wix_Madefor_Text font-normal text-gray-600 w-[590px]">
                We thoroughly test the project and make any necessary
                adjustments to ensure everything works perfectly.
              </h5>
            </div>
            <div
              ref={cardRef4}
              className=" absolute top-0 right-0 card4 w-[745px] h-[420px] card1 p-[50px] bg-green-300 rounded-3xl z-30"
            >
              <h3 className="text-[60px] font-normal text-black mb-[50px]">
                04
              </h3>
              <h2 className="text-[55px] font-Wix_Madefor_Text font-normal text-black mb-5">
                Launch & Support
              </h2>
              <h5 className="text-[20px] font-Wix_Madefor_Text font-normal text-gray-600 w-[590px]">
                We launch your project and provide ongoing support to help you
                succeed and address any future needs.
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section4;
