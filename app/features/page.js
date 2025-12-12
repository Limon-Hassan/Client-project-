'use client';

import Container from '@/Components/container/Container';
import React, { use, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GoArrowRight } from 'react-icons/go';
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  let setionRef = useRef(null);
  let videoSection = useRef(null);
  let textRef = useRef(null);
  let videoRef = useRef(null);
  let cardEL1 = useRef(null);
  let cardEL2 = useRef(null);
  let cardEL3 = useRef(null);
  let cardEL4 = useRef(null);
  let cardEL5 = useRef(null);
  let cardEL6 = useRef(null);

  useEffect(() => {
    let text = textRef.current;

    gsap.fromTo(
      text,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: 'power3.out',
      }
    );
  }, []);

  useEffect(() => {
    let section = setionRef.current;
    let cards = [
      cardEL1.current,
      cardEL2.current,
      cardEL3.current,
      cardEL4.current,
      cardEL5.current,
      cardEL6.current,
    ];

    gsap.set(cardEL1.current, { y: 130, x: 200, rotate: 20 });
    gsap.set(cardEL2.current, { y: 130, x: 1000, rotate: 30 });
    gsap.set(cardEL3.current, { y: 130, x: 1000, rotate: 40 });
    gsap.set(cardEL4.current, { y: 130, x: 1000, rotate: 40 });
    gsap.set(cardEL5.current, { y: 130, x: 1000, rotate: 40 });
    gsap.set(cardEL6.current, { y: 130, x: 1000, rotate: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=5000',
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    cards.forEach((card, i) => {
      tl.to(
        card,
        {
          x: -450,
          y: -200,
          rotate: 0,
          duration: 0.3,
          ease: 'power2.out',
        },
        i * 0.3
      );

      tl.to(card, {
        y: -1000,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  }, []);

  useEffect(() => {
    let section = videoSection.current;
    let video = videoRef.current;

    gsap.set(video, {
      scaleX: 0.4,
      transformOrigin: 'left center',
      height: 300,
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.to(video, {
      scaleX: 1,
      height: 520,
      ease: 'power2.out',
    });
  }, []);

  return (
    <>
      <section ref={setionRef} className="h-screen overflow-hidden">
        <Container>
          <div>
            <h2
              ref={textRef}
              className="text-[120px] font-Wix_Madefor_Text font-medium text-black mt-[100px] text-center"
            >
              The Advantage of <span className="text-[#5919C1]">Converza</span>
            </h2>
            <div className="absolute bottom-[55%] right-[5%] z-50 ">
              <div className="relative">
                <div
                  ref={cardEL1}
                  className="absolute right-[50px] z-20 overflow-hidden "
                >
                  <div className="w-[650px] h-[430px] p-8 border border-gray-300 rounded-[10px] bg-[#f1f1f1]">
                    <div className="relative w-[150px] h-[150px] rounded-lg shrink-0">
                      <video
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full  object-cover rounded-lg z-10"
                        playsInline
                        src="/Webvideo1.mp4"
                      ></video>
                      <div className="w-[100px] h-[100px] rounded-full bg-gray-500/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gray-500/60 flex items-center justify-center ml-[18px]">
                          <div className="w-[60px] h-[60px] rounded-full bg-gray-500/90 flex items-center justify-center ml-[18px]"></div>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-4xl mt-5 font-Wix_Madefor_Text font-medium text-black">
                      90+ Languages
                    </h4>
                    <div className=" mt-5">
                      <div>
                        <p className="text-[20px] font-Wix_Madefor_Text font-normal text-black">
                          Use this space to promote the business, its products
                          or its services. Help people become familiar with the
                          business and its offerings, creating a sense of
                          connection and trust. Focus on what makes the business
                          unique and how users can benefit from choosing it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  ref={cardEL2}
                  className="absolute right-[50px] z-20 overflow-hidden"
                >
                  <div className="w-[650px] h-[430px] p-8 border border-gray-300 rounded-[10px] bg-[#f1f1f1]">
                    <div className="relative w-[150px] h-[150px] rounded-lg shrink-0">
                      <video
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full  object-cover rounded-lg z-10"
                        playsInline
                        src="/Webvideo1.mp4"
                      ></video>
                      <div className="w-[100px] h-[100px] rounded-full bg-gray-500/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gray-500/60 flex items-center justify-center ml-[18px]">
                          <div className="w-[60px] h-[60px] rounded-full bg-gray-500/90 flex items-center justify-center ml-[18px]"></div>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-4xl mt-5 font-Wix_Madefor_Text font-medium text-black">
                      90+ Languages
                    </h4>
                    <div className=" mt-5">
                      <div>
                        <p className="text-[20px] font-Wix_Madefor_Text font-normal text-black">
                          Use this space to promote the business, its products
                          or its services. Help people become familiar with the
                          business and its offerings, creating a sense of
                          connection and trust. Focus on what makes the business
                          unique and how users can benefit from choosing it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  ref={cardEL3}
                  className="absolute right-[50px] z-20 overflow-hidden"
                >
                  <div className="w-[650px] h-[430px] p-8 border border-gray-300 rounded-[10px] bg-[#f1f1f1]">
                    <div className="relative w-[150px] h-[150px] rounded-lg shrink-0">
                      <video
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full  object-cover rounded-lg z-10"
                        playsInline
                        src="/Webvideo1.mp4"
                      ></video>
                      <div className="w-[100px] h-[100px] rounded-full bg-gray-500/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gray-500/60 flex items-center justify-center ml-[18px]">
                          <div className="w-[60px] h-[60px] rounded-full bg-gray-500/90 flex items-center justify-center ml-[18px]"></div>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-4xl mt-5 font-Wix_Madefor_Text font-medium text-black">
                      90+ Languages
                    </h4>
                    <div className=" mt-5">
                      <div>
                        <p className="text-[20px] font-Wix_Madefor_Text font-normal text-black">
                          Use this space to promote the business, its products
                          or its services. Help people become familiar with the
                          business and its offerings, creating a sense of
                          connection and trust. Focus on what makes the business
                          unique and how users can benefit from choosing it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  ref={cardEL4}
                  className="absolute right-[50px] z-20 overflow-hidden"
                >
                  <div className="w-[650px] h-[430px] p-8 border border-gray-300 rounded-[10px] bg-[#f1f1f1]">
                    <div className="relative w-[150px] h-[150px] rounded-lg shrink-0">
                      <video
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full  object-cover rounded-lg z-10"
                        playsInline
                        src="/Webvideo1.mp4"
                      ></video>
                      <div className="w-[100px] h-[100px] rounded-full bg-gray-500/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gray-500/60 flex items-center justify-center ml-[18px]">
                          <div className="w-[60px] h-[60px] rounded-full bg-gray-500/90 flex items-center justify-center ml-[18px]"></div>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-4xl mt-5 font-Wix_Madefor_Text font-medium text-black">
                      90+ Languages
                    </h4>
                    <div className=" mt-5">
                      <div>
                        <p className="text-[20px] font-Wix_Madefor_Text font-normal text-black">
                          Use this space to promote the business, its products
                          or its services. Help people become familiar with the
                          business and its offerings, creating a sense of
                          connection and trust. Focus on what makes the business
                          unique and how users can benefit from choosing it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  ref={cardEL5}
                  className="absolute right-[50px] z-20 overflow-hidden"
                >
                  <div className="w-[650px] h-[430px] p-8 border border-gray-300 rounded-[10px] bg-[#f1f1f1]">
                    <div className="relative w-[150px] h-[150px] rounded-lg shrink-0">
                      <video
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full  object-cover rounded-lg z-10"
                        playsInline
                        src="/Webvideo1.mp4"
                      ></video>
                      <div className="w-[100px] h-[100px] rounded-full bg-gray-500/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gray-500/60 flex items-center justify-center ml-[18px]">
                          <div className="w-[60px] h-[60px] rounded-full bg-gray-500/90 flex items-center justify-center ml-[18px]"></div>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-4xl mt-5 font-Wix_Madefor_Text font-medium text-black">
                      90+ Languages
                    </h4>
                    <div className=" mt-5">
                      <div>
                        <p className="text-[20px] font-Wix_Madefor_Text font-normal text-black">
                          Use this space to promote the business, its products
                          or its services. Help people become familiar with the
                          business and its offerings, creating a sense of
                          connection and trust. Focus on what makes the business
                          unique and how users can benefit from choosing it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  ref={cardEL6}
                  className="absolute right-[50px] z-20 overflow-hidden"
                >
                  <div className="w-[650px] h-[430px] p-8 border border-gray-300 rounded-[10px] bg-[#f1f1f1]">
                    <div className="relative w-[150px] h-[150px] rounded-lg shrink-0">
                      <video
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full  object-cover rounded-lg z-10"
                        playsInline
                        src="/Webvideo1.mp4"
                      ></video>
                      <div className="w-[100px] h-[100px] rounded-full bg-gray-500/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gray-500/60 flex items-center justify-center ml-[18px]">
                          <div className="w-[60px] h-[60px] rounded-full bg-gray-500/90 flex items-center justify-center ml-[18px]"></div>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-4xl mt-5 font-Wix_Madefor_Text font-medium text-black">
                      90+ Languages
                    </h4>
                    <div className=" mt-5">
                      <div>
                        <p className="text-[20px] font-Wix_Madefor_Text font-normal text-black">
                          Use this space to promote the business, its products
                          or its services. Help people become familiar with the
                          business and its offerings, creating a sense of
                          connection and trust. Focus on what makes the business
                          unique and how users can benefit from choosing it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section ref={videoSection}>
        <Container>
          <div
            ref={videoRef}
            className="relative w-full h-[520px] rounded-[20px] mx-auto"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover z-0 rounded-[20px]"
              src="/Features - Websit.mp4"
            ></video>
            <div className="absolute top-[60px] left-[60px] z-10 ">
              <h3 className="text-[40px] font-Wix_Madefor_Text font-normal text-white mb-[200px]">
                Be One Step Ahead,
                <br /> Communicate Smarter
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
      </section>
    </>
  );
};

export default page;
