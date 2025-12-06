import React from 'react';

const Card2 = () => {
  return (
    <div className="w-[700px] h-[430px] p-5 rounded-lg bg-white">
      <h4 className="text-4xl font-Wix_Madefor_Text font-medium text-black">
        Web Design & Development
      </h4>
      <div className="flex mt-[180px] gap-10">
        <div className="relative w-[150px] h-[150px] rounded-lg shrink-0">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full  object-cover rounded-lg z-10"
            playsInline
            src="/webvideo2.mp4"
          ></video>
          <div className="w-[100px] h-[100px] rounded-full bg-gray-500/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-gray-500/60 flex items-center justify-center ml-[18px]">
              <div className="w-[60px] h-[60px] rounded-full bg-gray-500/90 flex items-center justify-center ml-[18px]"></div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[20px] font-Wix_Madefor_Text font-normal text-black">
            Describe the service and how customers or clients can benefit from
            it. This is the place to add a short description with relevant
            details, like pricing, duration and how to book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
