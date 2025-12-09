import React from 'react';
import Container from './container/Container';
import { GrStatusGood } from 'react-icons/gr';

const Section5 = () => {
  return (
    <>
      <section className="flex items-center justify-center mt-[100px] mb-[50px] ">
        <Container>
          <div className="mx-auto">
            <h2 className="text-[40px] text-center font-Wix_Madefor_Text font-normal text-black">
              Choose your pricing plan
            </h2>
            <h5 className="text-[20px] text-center font-Wix_Madefor_Text font-normal text-black mt-2.5 mb-[50px]">
              Find one that works for you
            </h5>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-[500px] h-[800px] relative">
              <img
                className="w-full h-auto object-cover"
                src="/cardImage.avif"
                alt="cardImage"
              />
              <div className="bg-[#5919C1] text-white mx-auto absolute top-[148px] left-1/2 transform -translate-x-1/2 w-[100px] h-6 flex items-center justify-center">
                Best Value
              </div>
              <div className=" mx-auto border-x border-gray-300 border-b">
                <h4 className="text-center text-[20px] font-Wix_Madefor_Text font-normal pt-[30px]">
                  Basic
                </h4>
                <h3 className="text-center text-[60px] font-normal relative">
                  <span className="text-2xl absolute top-1 left-[180px] ">
                    $
                  </span>
                  4.99
                </h3>
                <h6 className="text-center mx-auto text-sm -mt-4">
                  Every month
                </h6>
                <p className="text-center mx-auto text-[16px] font-normal font-Wix_Madefor_Text my-[30px] ">
                  To get the first impression of our capabilities
                </p>
                <h6 className="text-center mx-auto text-sm mb-5">
                  Valid until canceled
                </h6>
                <button className="text-center flex items-center justify-center mx-auto text-[20px] font-normal bg-[#5919C1] px-[200px] py-3 rounded-sm text-white hover:opacity-80 transition-all ease-in-out duration-300 cursor-pointer mb-[30px]">
                  Select
                </button>
                <hr className="w-[450px] h-px opacity-50 mx-auto " />
                <h5 className="text-center mx-auto flex items-center gap-3 justify-center my-5 text-sm text-gray-500 font-normal ">
                  <GrStatusGood size={17} />
                  Access to essential AI tools
                </h5>
                <hr className="w-[450px] h-px opacity-50 mx-auto " />
                <h5 className="text-center mx-auto flex items-center gap-3 justify-center my-5 text-sm text-gray-500 font-normal ">
                  <GrStatusGood size={17} />
                  Limited translation processing capacity
                </h5>
                <hr className="w-[450px] h-px opacity-50 mx-auto " />
                <h5 className="text-center mx-auto flex items-center gap-3 justify-center my-5 text-sm text-gray-500 font-normal mb-20 ">
                  <GrStatusGood size={17} />
                  Basic customer support
                </h5>
              </div>
            </div>
            <div className="w-[500px] h-[800px] relative">
              <img
                className="w-full h-auto object-cover"
                src="/cardImage.avif"
                alt="cardImage"
              />
              <div className="bg-[#5919C1] text-white mx-auto absolute top-[148px] left-1/2 transform -translate-x-1/2 w-[100px] h-6 flex items-center justify-center">
                Best Value
              </div>
              <div className=" mx-auto border-x border-gray-300 border-b">
                <h4 className="text-center text-[20px] font-Wix_Madefor_Text font-normal pt-[30px]">
                  Standard
                </h4>
                <h3 className="text-center text-[60px] font-normal relative">
                  <span className="text-2xl absolute top-1 left-[180px] ">
                    $
                  </span>
                  9.99
                </h3>
                <h6 className="text-center mx-auto text-sm -mt-4">
                  Every month
                </h6>
                <p className="text-center mx-auto text-[16px] font-normal font-Wix_Madefor_Text my-[30px] ">
                  Designed for growing businesses
                </p>
                <h6 className="text-center mx-auto text-sm mb-5">
                  Valid until canceled
                </h6>
                <button className="text-center flex items-center justify-center mx-auto text-[20px] font-normal bg-[#5919C1] px-[200px] py-3 rounded-sm text-white hover:opacity-80 transition-all ease-in-out duration-300 cursor-pointer mb-[30px]">
                  Select
                </button>
                <hr className="w-[450px] h-px opacity-50 mx-auto " />
                <h5 className="text-center mx-auto flex items-center gap-3 justify-center my-5 text-sm text-gray-500 font-normal ">
                  <GrStatusGood size={17} />
                  Expanded translation processing capacity
                </h5>
                <hr className="w-[450px] h-px opacity-50 mx-auto " />
                <h5 className="text-center mx-auto flex items-center gap-3 justify-center my-5 text-sm text-gray-500 font-normal ">
                  <GrStatusGood size={17} />
                  Enhanced AI algorithms models
                </h5>
                <hr className="w-[450px] h-px opacity-50 mx-auto " />
                <h5 className="text-center mx-auto flex items-center gap-3 justify-center my-5 text-sm text-gray-500 font-normal ">
                  <GrStatusGood size={17} />
                  Access to additional data sources and integrations
                </h5>
                <hr className="w-[450px] h-px opacity-50 mx-auto " />
                <h5 className="text-center mx-auto flex items-center gap-3 justify-center my-5 text-sm text-gray-500 font-normal ">
                  <GrStatusGood size={17} />
                  Priority customer support
                </h5>
              </div>
            </div>
            <div className="w-[500px] h-[800px] relative">
              <img
                className="w-full h-auto object-cover"
                src="/cardImage.avif"
                alt="cardImage"
              />
              <div className="bg-[#5919C1] text-white mx-auto absolute top-[148px] left-1/2 transform -translate-x-1/2 w-[100px] h-6 flex items-center justify-center">
                Best Value
              </div>
              <div className=" mx-auto border-x border-gray-300 border-b">
                <h4 className="text-center text-[20px] font-Wix_Madefor_Text font-normal pt-[30px]">
                  Premium
                </h4>
                <h3 className="text-center text-[60px] font-normal relative">
                  <span className="text-2xl absolute top-1 left-[180px] ">
                    $
                  </span>
                  17.99
                </h3>
                <h6 className="text-center mx-auto text-sm -mt-4">
                  Every month
                </h6>
                <p className="text-center mx-auto text-[16px] font-normal font-Wix_Madefor_Text my-[30px] ">
                  Tailored for large enterprises and organizations
                </p>
                <h6 className="text-center mx-auto text-sm mb-5">
                  Valid until canceled
                </h6>
                <button className="text-center flex items-center justify-center mx-auto text-[20px] font-normal bg-[#5919C1] px-[200px] py-3 rounded-sm text-white hover:opacity-80 transition-all ease-in-out duration-300 cursor-pointer mb-[30px]">
                  Select
                </button>
                <hr className="w-[450px] h-px opacity-50 mx-auto " />
                <h5 className="text-center mx-auto flex items-center gap-3 justify-center my-5 text-sm text-gray-500 font-normal ">
                  <GrStatusGood size={17} />
                  Highly scalable infrastructure
                </h5>
                <hr className="w-[450px] h-px opacity-50 mx-auto " />
                <h5 className="text-center mx-auto flex items-center gap-3 justify-center my-5 text-sm text-gray-500 font-normal ">
                  <GrStatusGood size={17} />
                  Advanced and complex generative capabilities
                </h5>
                <hr className="w-[450px] h-px opacity-50 mx-auto " />
                <h5 className="text-center mx-auto flex items-center gap-3 justify-center my-5 text-sm text-gray-500 font-normal ">
                  <GrStatusGood size={17} />
                  Comprehensive data security and compliance
                </h5>
                <hr className="w-[450px] h-px opacity-50 mx-auto " />
                <h5 className="text-center mx-auto flex items-center gap-3 justify-center my-5 text-sm text-gray-500 font-normal ">
                  <GrStatusGood size={17} />
                  Flexible contract options
                </h5>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section5;
