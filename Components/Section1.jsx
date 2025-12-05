'use client';
import React, { useRef } from 'react';
import Container from './container/Container';

const Section1 = () => {
  let vedioRef = useRef(null);

  let handleVedio = () => {
    if (!vedioRef.current) return;
    if (vedioRef.current.paused) {
      vedioRef.current.play();
    } else {
      vedioRef.current.pause();
    }
  };
  return (
    <section className="relative w-full h-[95vh] overflow-hidden flex items-center justify-center">
      <Container>
        <video
          ref={vedioRef}
          autoPlay
          loop
          muted
          onClick={handleVedio}
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="absolute bg-linear-to-t  from-white via-white/90 to-white/30 w-full h-full -bottom-[300px] left-0 z-20 mx-auto text-center">
          <h4 className="text-[20px] font-Wix_Madefor_Text text-purple-600 font-normal tracking-wide mb-4">
            BOOST YOUR BRAND WITH A COMPLETE SOLUTION
          </h4>

          <h1 className="text-[55px] font-extrabold text-black leading-tight ">
            TIRED OF STRUGGLING TO <br />
            <span className="text-[#5919c1]">GROW YOUR BUSINESS?</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center mt-6 gap-3">
            <h5 className="text-2xl font-Wix_Madefor_Text font-medium">For</h5>
            <span className="px-7 py-3.5 bg-[#5919c1]/10 rounded-lg text-gray-700 font-normal text-[20px] font-Wix_Madefor_Text">
              Startups
            </span>
            ,
            <span className="px-7 py-3.5 bg-[#5919c1]/10 rounded-lg text-gray-700 font-normal text-[20px] font-Wix_Madefor_Text">
              Enterprise leaders
            </span>
            ,
            <span className="px-7 py-3.5 bg-[#5919c1]/10 rounded-lg text-gray-700 font-normal text-[20px] font-Wix_Madefor_Text">
              Social Good
            </span>
            ,
            <span className="px-7 py-3.5 bg-[#5919c1]/10 rounded-lg text-gray-700 font-normal text-[20px] font-Wix_Madefor_Text">
              Media & Publishers
            </span>
            and
            <span className="px-7 py-3.5 bg-[#5919c1]/10 rounded-lg text-gray-700 font-normal text-[20px] font-Wix_Madefor_Text">
              Social Good
            </span>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button className="px-9 py-4 rounded-full bg-[#5919c1] hover:bg-green-400 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-all ease-in-out duration-400 cursor-pointer">
              Get A Quote
            </button>

            <button className="px-9 py-4 rounded-full bg-green-400 hover:bg-[#5919c1] text-white font-semibold text-lg shadow-lg hover:scale-105 transition-all ease-in-out duration-400 cursor-pointer">
              Connect Us
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-20">
            <div className="flex items-center">
              <img
                src="/group1.avif"
                className=" rounded-full border-2 border-white"
              />
              <img
                src="/group2.avif"
                className=" rounded-full border-2 border-white -ml-4"
              />
              <img
                src="/group3.avif"
                className=" rounded-full border-2 border-white -ml-4"
              />
              <img
                src="/group4.avif"
                className=" rounded-full border-2 border-white -ml-4"
              />
              <img
                src="/group5.avif"
                className=" rounded-full border-2 border-white -ml-4"
              />
            </div>

            <p className="text-[20px] text-gray-500">
              Already Trusted by 1.5k Customers
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Section1;
