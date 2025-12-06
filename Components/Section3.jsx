// 'use client';
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Container from './container/Container';

// gsap.registerPlugin(ScrollTrigger);

// const Section3 = () => {
//   const textRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const element = textRef.current;
//     const section = sectionRef.current;

//     ScrollTrigger.create({
//       trigger: section,
//       start: 'top center',
//       onEnter: () => console.log('Section reached middle!'),
//     });

//     gsap.fromTo(
//       element,
//       { fontSize: '40px' },
//       {
//         fontSize: '80px',
//         ease: 'power2.out',
//         scrollTrigger: {
//           trigger: section,
//           start: 'top center',
//           end: 'bottom center',
//           scrub: true,
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach(st => st.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="min-h-screen flex items-center justify-center"
//     >
//       <Container>
//         <h2 ref={textRef} className="text-center whitespace-nowrap leading-20">
//           Our <br /> Most Popular <br />
//           <span className="text-[#5919c1]">Services</span>
//         </h2>
//       </Container>
//     </section>
//   );
// };

// export default Section3;

'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from './container/Container';
import Section4 from './Section4';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);
  const section4Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textEl = textRef.current;
    const section4El = section4Ref.current;

    gsap.fromTo(
      textEl,
      { fontSize: 40 },
      {
        fontSize: 100,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'center center',
          scrub: true,
          snap: { snapTo: value => Math.round(value / 10) * 10 },
        },
      }
    );

    ScrollTrigger.create({
      trigger: section,
      start: 'center center',
      end: 'bottom top',
      pin: section,
      pinSpacing: false,
      scrub: true,
      anticipatePin: 1,
    });

    if (section4El) {
      gsap.fromTo(
        section4El,
        { y: 100 },
        {
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'center center',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center"
      >
        <Container>
          <h2
            ref={textRef}
            className="text-center whitespace-nowrap leading-20 text-4xl font-normal"
          >
            Our <br /> Most Popular <br />
            <span className="text-[#5919c1]">Services</span>
          </h2>
        </Container>
      </section>
      <section ref={section4Ref} style={{ transform: 'translateY(0px)' }}>
        <Section4 />
      </section>
    </>
  );
};

export default Section3;
