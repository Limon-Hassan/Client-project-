import React from 'react';
import Container from './container/Container';
import { FiArrowUpRight } from 'react-icons/fi';

const Section9 = () => {
  return (
    <div className="mb-[200px]">
      <Container className={'w-[1660px] mx-auto px-0'}>
        <div>
          <h2 className="text-center mx-auto text-[80px] font-Wix_Madefor_Text font-normal text-black">
            Work Sample
          </h2>
          <p className="text-center mx-auto text-[20px] font-Wix_Madefor_Text font-normal text-gray-500 w-[981px] mb-[50px]">
            Our numbers tell the story of our commitment to quality,
            reliability, and eco-fridendly care - ensuring every garment looks
            its best with every clean
          </p>
          <div className="grid grid-cols-4 gap-8 items-center">
            <div className="w-[370px] h-[260px] w-com hover:scale-105 transition-all ease-in-out duration-300">
              <img
                className="w-full h-full object-cover"
                src="/unsplash.avif"
                alt="unsplash"
              />
              <div className="flex gap-3 items-center justify-center -mt-5">
                <button className="text-[20px] font-Wix_Madefor_Text font-normal bg-green-400 rounded-full px-[30px] py-3 text-white opacity-50  ">
                  Project Name One
                </button>
                <button className="w-[50px] h-[50px] bg-[#5919C1] rounded-full flex items-center justify-center text-white opacity-90 hover:rotate-45 hover:font-bold transition-all ease-in-out duration-300 cursor-pointer ">
                  <FiArrowUpRight size={40} />
                </button>
              </div>
            </div>
            <div className="w-[370px] h-[260px] w-com hover:scale-105 transition-all ease-in-out duration-300">
              <img
                className="w-full h-full object-cover"
                src="/emily.avif"
                alt="unsplash"
              />
              <div className="flex gap-3 items-center justify-center -mt-5">
                <button className="text-[20px] font-Wix_Madefor_Text font-normal bg-green-400 rounded-full px-[30px] py-3 text-white opacity-50  ">
                  Project Name Two
                </button>
                <button className="w-[50px] h-[50px] bg-[#5919C1] rounded-full flex items-center justify-center text-white opacity-90 hover:rotate-45 hover:font-bold transition-all ease-in-out duration-300 cursor-pointer ">
                  <FiArrowUpRight size={40} />
                </button>
              </div>
            </div>
            <div className="w-[370px] h-[260px] w-com hover:scale-105 transition-all ease-in-out duration-300">
              <img
                className="w-full h-full object-cover"
                src="/anomaly.avif"
                alt="unsplash"
              />
              <div className="flex gap-3 items-center justify-center -mt-5">
                <button className="text-[20px] font-Wix_Madefor_Text font-normal bg-green-400 rounded-full px-[30px] py-3 text-white opacity-50  ">
                  Project Name Three
                </button>
                <button className="w-[50px] h-[50px] bg-[#5919C1] rounded-full flex items-center justify-center text-white opacity-90 hover:rotate-45 hover:font-bold transition-all ease-in-out duration-300 cursor-pointer ">
                  <FiArrowUpRight size={40} />
                </button>
              </div>
            </div>
            <div className="w-[370px] h-[260px] w-com hover:scale-105 transition-all ease-in-out duration-300">
              <img
                className="w-full h-full object-cover"
                src="/Getty.avif"
                alt="unsplash"
              />
              <div className="flex gap-3 items-center justify-center -mt-5">
                <button className="text-[20px] font-Wix_Madefor_Text font-normal bg-green-400 rounded-full px-[30px] py-3 text-white opacity-50  ">
                  Project Name Four
                </button>
                <button className="w-[50px] h-[50px] bg-[#5919C1] rounded-full flex items-center justify-center text-white opacity-90 hover:rotate-45 hover:font-bold transition-all ease-in-out duration-300 cursor-pointer ">
                  <FiArrowUpRight size={40} />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8 justify-center mt-[50px]">
            <div className="w-[370px] h-[260px] w-com hover:scale-105 transition-all ease-in-out duration-300">
              <img
                className="w-full h-full object-cover"
                src="/pouria.avif"
                alt="unsplash"
              />
              <div className="flex gap-3 items-center justify-center -mt-5">
                <button className="text-[20px] font-Wix_Madefor_Text font-normal bg-green-400 rounded-full px-[30px] py-3 text-white opacity-50  ">
                  Project Name Five
                </button>
                <button className="w-[50px] h-[50px] bg-[#5919C1] rounded-full flex items-center justify-center text-white opacity-90 hover:rotate-45 hover:font-bold transition-all ease-in-out duration-300 cursor-pointer ">
                  <FiArrowUpRight size={40} />
                </button>
              </div>
            </div>
            <div className="w-[370px] h-[260px] w-com hover:scale-105 transition-all ease-in-out duration-300">
              <img
                className="w-full h-full object-cover"
                src="/j-bECp7.avif"
                alt="unsplash"
              />
              <div className="flex gap-3 items-center justify-center -mt-5">
                <button className="text-[20px] font-Wix_Madefor_Text font-normal bg-green-400 rounded-full px-[30px] py-3 text-white opacity-50  ">
                  Project Name Six
                </button>
                <button className="w-[50px] h-[50px] bg-[#5919C1] rounded-full flex items-center justify-center text-white opacity-90 hover:rotate-45 hover:font-bold transition-all ease-in-out duration-300 cursor-pointer ">
                  <FiArrowUpRight size={40} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section9;
