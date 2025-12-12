'use client';
import React from 'react';
import Container from './container/Container';
import { GoArrowRight } from 'react-icons/go';
import { FiFacebook, FiLinkedin } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';

const Fotter = () => {
  return (
    <div className="mb-[50px] mt-[100px]">
      <Container>
        <div>
          <div className="flex gap-[200px] mb-[100px]">
            <div className="1">
              <a href="/">
                <img
                  className="w-[350px] mb-[30px]"
                  src="/Logo.jpg"
                  alt="Logo"
                />
              </a>
              <h4 className="text-[25px] font-Wix_Madefor_Text font-normal text-gray-600 w-3xl mb-10">
                Website Deft specializes in Logo Design, Website Design &
                Development, and SEO Optimization (both on-page and off-page).
                We create custom solutions to boost your online presence and
                help your business succeed.
              </h4>
              <button className=" text-[18px] font-Wix_Madefor_Text font-normal text-white w-[220px] h-[50px] flex items-center justify-center gap-2 rounded-full bg-green-500 hover:font-medium ease-in-out transition-all duration-200 group cursor-pointer hover:text-[16px]">
                <span className="border-2 border-white w-[25px] h-[25px] rounded-full flex items-center justify-center ">
                  <GoArrowRight
                    className="group-hover:-rotate-270 transition-all ease-in-out duration-200"
                    size={17}
                  />
                </span>
                Get A Free Quote
              </button>
            </div>
            <div className="2">
              <h3 className="text-[40px] font-Wix_Madefor_Text font-normal text-black mb-10">
                Stay Up to Date
              </h3>
              <label htmlFor="Email">Email *</label>
              <div className="flex items-center gap-4 mt-2">
                <input
                  className="w-[580px] h-10 outline-0 border border-green-500 rounded-md hover:bg-green-300/20 px-2.5 text-[20px]"
                  type="text"
                />
                <button className="text-[20px] font-normal text-white bg-green-400 px-[50px] py-1.5 rounded-full cursor-pointer hover:bg-green-500 ">
                  Submit
                </button>
              </div>
              <div className="flex items-center gap-2 mt-10">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="custom-checkbox"
                />

                <label
                  htmlFor="newsletter"
                  className="cursor-pointer select-none text-gray-500"
                >
                  Yes, subscribe me to your newsletter
                </label>
              </div>

              <style jsx>{`
                .custom-checkbox {
                  width: 18px;
                  height: 18px;
                  appearance: none;
                  border: 2px solid #ccc;
                  border-radius: 4px;
                  cursor: pointer;
                  display: flex;
                  items: center;
                  justify-content: center;
                  place-items: center;
                }

                .custom-checkbox:checked {
                  background-color: #22c55e; /* green-500 */
                  border-color: #22c55e;
                }

                .custom-checkbox:checked::after {
                  content: '✔';
                  font-size: 14px;
                  color: white; /* White tick */
                }
              `}</style>
            </div>
          </div>
          <div className="flex gap-[500px] border-t border-gray-200 ">
            <div className="space-y-2 text-gray-800 mt-[50px]">
              <p className="text-[25px] font-Wix_Madefor_Text font-normal text-gray-600">
                Mail: contact@websitedeft.com
              </p>
              <p className="text-[25px] font-Wix_Madefor_Text font-normal text-gray-600">
                Tel: +1 917 789 8969
              </p>
              <p className="text-[25px] font-Wix_Madefor_Text font-normal text-gray-600">
                500 Terry Francine Street,
              </p>
              <p className="text-[25px] font-Wix_Madefor_Text font-normal text-gray-600">
                San Francisco, CA 94158
              </p>

              <div className="flex items-center gap-4 pt-4">
                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center cursor-pointer">
                  <RiTwitterXLine size={28} />
                </div>

                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center cursor-pointer">
                  <FiFacebook size={28} />
                </div>

                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center cursor-pointer">
                  <FiLinkedin size={28} />
                </div>
              </div>
            </div>

            <div className="text-gray-800 space-y-2  mt-[50px]">
              <p className=" cursor-pointer text-[25px] font-normal text-gray-600">
                Terms & Conditions
              </p>
              <p className=" cursor-pointer text-[25px] font-normal text-gray-600">
                Privacy Policy
              </p>
              <p className=" cursor-pointer text-[25px] font-normal text-gray-600">
                Refund Policy
              </p>
              <p className=" cursor-pointer text-[25px] font-normal text-gray-600">
                Accessibility Statement
              </p>

              <p className="pt-6 text-[25px] font-normal text-gray-600">
                © 2026 by Website Deft LLC. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Fotter;
