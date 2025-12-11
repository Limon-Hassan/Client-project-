'use client';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqData = [
  {
    question: 'What is an FAQ section?',
    answer:
      'An FAQ section is a place where you answer the most common questions your visitors or customers ask.',
  },
  {
    question: 'Why do FAQs matter?',
    answer:
      'FAQs help users quickly find important information without needing to contact support.',
  },
  {
    question: 'Where can I add my FAQs?',
    answer:
      'FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="mx-auto py-16 w-[1455px]">
      <h2 className="text-[40px] font-normal mb-8">
        Frequently asked questions
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-400 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full h-20 flex justify-between items-center px-6 text-left"
            >
              <span className="text-lg">{faq.question}</span>
              {openIndex === index ? (
                <FiChevronUp size={22} />
              ) : (
                <FiChevronDown size={22} />
              )}
            </button>

            <div
              className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-hidden 
                ${
                  openIndex === index
                    ? 'max-h-[200px] opacity-100'
                    : 'max-h-0 opacity-0'
                }
              `}
            >
              <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
