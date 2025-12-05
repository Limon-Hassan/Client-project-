import React from 'react';
import Container from './container/Container';

const Section2 = () => {
  return (
    <>
      <section className=''>
        <Container>
          <h3 className='text-[25px] font-Wix_Madefor_Text font-normal text-black ml-80'>#1 Ranked in State 5 consecutive years</h3>
          <div className="flex items-center justify-center mt-2">
            <div className="flex items-center gap-3">
              <div className="w-[300px] h-auto p-3 hover:bg-green-400/10 hover:border-t border-red-400 transition-all ease-in-out duration-300">
                <h2 className="text-5xl font-normal mb-2 text-gray-400">
                  2,100
                </h2>
                <h5 className='text-[18px] font-normal font-Wix_Madefor_Text text-black'>Cases</h5>
              </div>
              <div className="w-[300px] h-auto p-3 hover:bg-green-400/10 hover:border-t border-red-400 transition-all ease-in-out duration-300">
                <h2 className="text-5xl font-normal mb-2 text-gray-400">95%</h2>
                <h5 className='text-[18px] font-normal font-Wix_Madefor_Text text-black'>Client Satisfaction</h5>
              </div>
              <div className="w-[300px] h-auto p-3 hover:bg-green-400/10 hover:border-t border-red-400 transition-all ease-in-out duration-300">
                <h2 className="text-5xl font-normal mb-2 text-gray-400">25</h2>
                <h5 className='text-[18px] font-normal font-Wix_Madefor_Text text-black'>Years of experience</h5>
              </div>
              <div className="w-[300px] h-auto p-3 hover:bg-green-400/10 hover:border-t border-red-400 transition-all ease-in-out duration-300">
                <h2 className="text-5xl font-normal mb-2 text-gray-400">
                  +300
                </h2>
                <h5 className='text-[18px] font-normal font-Wix_Madefor_Text text-black'>5-star ratings on Google</h5>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section2;
