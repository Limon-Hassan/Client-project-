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

// 'use client';
// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Container from './container/Container';
// import Section4 from './Section4';
// import Card1 from './cards/Card1';
// import Card2 from './cards/Card2';
// import Card3 from './cards/Card3';

// gsap.registerPlugin(ScrollTrigger);

// const Section3 = () => {
// const textRef = useRef(null);
// const sectionRef = useRef(null);
// const section4Ref = useRef(null);

// useEffect(() => {
//   const section = sectionRef.current;
//   const textEl = textRef.current;
//   const section4El = section4Ref.current;

//   gsap.fromTo(
//     textEl,
//     { fontSize: 40 },
//     {
//       fontSize: 100,
//       ease: 'power1.out',
//       scrollTrigger: {
//         trigger: section,
//         start: 'top center',
//         end: 'center center',
//         scrub: true,
//         snap: { snapTo: value => Math.round(value / 10) * 10 },
//       },
//     }
//   );

//   ScrollTrigger.create({
//     trigger: section,
//     start: 'center center',
//     end: 'bottom top',
//     pin: section,
//     pinSpacing: false,
//     scrub: true,
//     anticipatePin: 1,
//   });

//   if (section4El) {
//     gsap.fromTo(
//       section4El,
//       { y: 100 },
//       {
//         y: 0,
//         ease: 'none',
//         scrollTrigger: {
//           trigger: section,
//           start: 'center center',
//           end: 'bottom top',
//           scrub: true,
//         },
//       }
//     );
//   }

//   return () => ScrollTrigger.getAll().forEach(st => st.kill());
// }, []);

//   return (
//     <>
//       <section
//         // ref={sectionRef}
//         className="h-screen flex items-center justify-center"
//       >
//         <Container>
//           <h2
//             // ref={textRef}
//             className="text-center whitespace-nowrap leading-20 text-4xl font-normal"
//           >
//             Our <br /> Most Popular <br />
//             <span className="text-[#5919c1]">Services</span>
//           </h2>
//         </Container>
//       </section>

//       {/* =======================================
//                     section4
//       ======================================= */}

//       <section
//         // ref={section4Ref}
//         style={{ transform: 'translateY(0px)' }}
//         className="relative w-full h-screen overflow-hidden"
//       >
//         <Container>
//           <div className="relative w-full h-screen overflow-hidden rounded-2xl">
//             <div className="absolute w-full h-full top-0 left-0 bg-linear-to-t from-[#5919c1] to-orange-200 rounded-2xl z-10 opacity-80 overflow-hidden"></div>

//             <div className="absolute inset-0 w-full h-full rounded-2xl z-0">
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="w-full h-full object-cover"
//               >
//                 <source src="/Home.mp4" type="video/mp4" />
//               </video>
//             </div>
//           </div>

//           <div className='absolute top-[15%] right-[30%] z-50'>
//             <div className="relative   ">
//               <div
//                 id="card1"
//                 className="absolute top-[50px] right-[50px] z-20"
//               >
//                 <div className="w-[700px] h-[430px] p-5 rounded-[10px] bg-white">
//                   <h4 className="text-4xl font-Wix_Madefor_Text font-medium text-black">
//                     Logo or Branding Design
//                   </h4>
//                   <div className="flex mt-[180px] gap-10">
//                     <div className="relative w-[150px] h-[150px] rounded-lg shrink-0">
//                       <video
//                         autoPlay
//                         loop
//                         muted
//                         className="absolute inset-0 w-full h-full  object-cover rounded-lg z-10"
//                         playsInline
//                         src="/Webvideo1.mp4"
//                       ></video>
//                       <div className="w-[100px] h-[100px] rounded-full bg-gray-500/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
//                         <div className="w-20 h-20 rounded-full bg-gray-500/60 flex items-center justify-center ml-[18px]">
//                           <div className="w-[60px] h-[60px] rounded-full bg-gray-500/90 flex items-center justify-center ml-[18px]"></div>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-[20px] font-Wix_Madefor_Text font-normal text-black">
//                         Describe the service and how customers or clients can
//                         benefit from it. This is the place to add a short
//                         description with relevant details, like pricing,
//                         duration and how to book.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 id="card2"
//                 className="absolute top-[120px] right-[-150px] z-30 border border-gray-300/30"
//               >
//                 <div className="w-[700px] h-[430px] p-5 rounded-[10px] bg-white">
//                   <h4 className="text-4xl font-Wix_Madefor_Text font-medium text-black">
//                     Web Design & Development
//                   </h4>
//                   <div className="flex mt-[180px] gap-10">
//                     <div className="relative w-[150px] h-[150px] rounded-lg shrink-0">
//                       <video
//                         autoPlay
//                         loop
//                         muted
//                         className="absolute inset-0 w-full h-full  object-cover rounded-lg z-10"
//                         playsInline
//                         src="/webvideo2.mp4"
//                       ></video>
//                       <div className="w-[100px] h-[100px] rounded-full bg-gray-500/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
//                         <div className="w-20 h-20 rounded-full bg-gray-500/60 flex items-center justify-center ml-[18px]">
//                           <div className="w-[60px] h-[60px] rounded-full bg-gray-500/90 flex items-center justify-center ml-[18px]"></div>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-[20px] font-Wix_Madefor_Text font-normal text-black">
//                         Describe the service and how customers or clients can
//                         benefit from it. This is the place to add a short
//                         description with relevant details, like pricing,
//                         duration and how to book.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 id="card3"
//                 className="absolute top-[200px] right-[-350px] z-50 border border-gray-300/30"
//               >
//                 <div className="w-[700px] h-[430px] p-5 rounded-[10px] bg-white">
//                   <h4 className="text-4xl font-Wix_Madefor_Text font-medium text-black">
//                     SEO Optimization
//                   </h4>
//                   <div className="flex mt-[180px] gap-10">
//                     <div className="relative w-[150px] h-[150px] rounded-lg shrink-0">
//                       <video
//                         autoPlay
//                         loop
//                         muted
//                         className="absolute inset-0 w-full h-full  object-cover rounded-lg z-10"
//                         playsInline
//                         src="/webvideo3.mp4"
//                       ></video>
//                       <div className="w-[100px] h-[100px] rounded-full bg-gray-500/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
//                         <div className="w-20 h-20 rounded-full bg-gray-500/60 flex items-center justify-center ml-[18px]">
//                           <div className="w-[60px] h-[60px] rounded-full bg-gray-500/90 flex items-center justify-center ml-[18px]"></div>
//                         </div>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-[20px] font-Wix_Madefor_Text font-normal text-black">
//                         Describe the service and how customers or clients can
//                         benefit from it. This is the place to add a short
//                         description with relevant details, like pricing,
//                         duration and how to book.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default Section3;

'use client';
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from './container/Container';

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const section4Ref = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    gsap.fromTo(
      text,
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

    // if (section4) {
    //   const section4El = section4Ref.current;

    //   gsap.fromTo(
    //     section4El,
    //     { y: 100 },
    //     {
    //       y: 0,
    //       ease: 'none',
    //       scrollTrigger: {
    //         trigger: section4El,
    //         start: 'top 0%',
    //         end: 'bottom top',
    //         scrub: true,
    //         pin: true,
    //         anticipatePin: 1,
    //         onEnter: () => {
    //           gsap.to(sectionRef.current, { delay: 0.5, duration: 0.5 });
    //         },
    //         onLeaveBack: () => {
    //           gsap.to(sectionRef.current, { delay: 1, duration: 0.5 });
    //         },
    //       },
    //     }
    //   );
    // }

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: section4Ref.current,
    //     start: 'top 0%', // 🔥 তোমার চাওয়া point
    //     end: 'bottom+=800',
    //     pin: true,
    //     scrub: true,
    //   },
    // });

    // // Initial state
    // gsap.set(c1, { opacity: 0, x: 300, rotate: 30 });
    // gsap.set(c2, { opacity: 0, x: 350, rotate: 30 }); // c1 থেকে 50px বেশি
    // gsap.set(c3, { opacity: 0, x: 400, rotate: 30 }); // c2 থেকে 50px বেশি

    // // Animation timeline
    // tl.to(c1, {
    //   opacity: 1,
    //   x: 0,
    //   rotate: 0,
    //   duration: 0.8,
    //   ease: 'power2.out',
    // })
    //   .to(
    //     c2,
    //     {
    //       opacity: 1,
    //       x: 0,
    //       rotate: 0,
    //       duration: 0.8,
    //       ease: 'power2.out',
    //     },
    //     '+=0.2'
    //   )
    //   .to(
    //     c3,
    //     {
    //       opacity: 1,
    //       x: 0,
    //       rotate: 0,
    //       duration: 0.8,
    //       ease: 'power2.out',
    //     },
    //     '+=0.2'
    //   );

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  // useEffect(() => {
  //   const section4 = section4Ref.current;
  //   const c1 = card1Ref.current;
  //   const c2 = card2Ref.current;
  //   const c3 = card3Ref.current;

  //   gsap.set(c1, { y: 300, x: 1500, rotate: 60 });
  //   gsap.set(c2, { y: 700, x: 1560, rotate: 60 });
  //   gsap.set(c3, { y: 700, x: 1620, rotate: 60 });

  //   const tl = gsap.timeline({
  //     paused: true,
  //   });

  //   tl.to(c1, {
  //     x: 0,
  //     y: 0,
  //     rotate: 0,
  //     duration: 1,
  //     ease: 'power2.out',
  //   })
  //     .to(
  //       c2,
  //       {
  //         x: 0,
  //         y: 0,
  //         rotate: 0,
  //         duration: 1,
  //         ease: 'power2.out',
  //       },
  //       '+=0.2'
  //     )
  //     .to(
  //       c3,
  //       {
  //         x: 0,
  //         y: 0,
  //         rotate: 0,
  //         duration: 1,
  //         ease: 'power2.out',
  //       },
  //       '+=0.2'
  //     );

  //   ScrollTrigger.create({
  //     trigger: section4,
  //     start: 'top 0%',
  //     pin: true,
  //     scrub: true,
  //     end: () => '+=' + tl.duration() * 700,
  //     animation: tl,
  //   });
  // }, []);

  // useEffect(() => {
  //   const section4 = section4Ref.current;
  //   const c1 = card1Ref.current;
  //   const c2 = card2Ref.current;
  //   const c3 = card3Ref.current;

  //   gsap.set(c1, { y: 100, x: 1500, rotate: 60 });
  //   gsap.set(c2, { y: 300, x: 1560, rotate: 60 });
  //   gsap.set(c3, { y: 500, x: 1620, rotate: 60 });

  //   // ===========================
  //   // 1️⃣ PIN TRIGGER (ONLY PIN)
  //   // ===========================
  //   const pinTrigger = ScrollTrigger.create({
  //     trigger: section4,
  //     start: 'top 0%',
  //     pin: true,
  //     scrub: false, // pin stays still
  //   });

  //   // ===========================
  //   // 2️⃣ CARDS TIMELINE
  //   // ===========================
  //   const tl = gsap.timeline({ paused: true });

  //   tl.to(c1, {
  //     x: 0,
  //     y: 0,
  //     rotate: 0,
  //     duration: 1,
  //     ease: 'power2.out',
  //   })
  //     .to(
  //       c2,
  //       {
  //         x: 0,
  //         y: 0,
  //         rotate: 0,
  //         duration: 1,
  //         ease: 'power2.out',
  //       },
  //       '-=0.6'
  //     )
  //     .to(
  //       c3,
  //       {
  //         x: 0,
  //         y: 0,
  //         rotate: 0,
  //         duration: 1,
  //         ease: 'power2.out',
  //       },
  //       '-=0.6'
  //     );

  //   // ===========================
  //   // 3️⃣ ANIMATION SCRUB TRIGGER
  //   // ===========================
  //   ScrollTrigger.create({
  //     trigger: section4,
  //     start: 'top 70%',
  //     end: '+=' + tl.duration() * 700,
  //     scrub: true,
  //     onUpdate: self => {
  //       tl.progress(self.progress);
  //     },
  //     onLeave: () => {
  //       // যখন animation পুরো শেষ হবে → pin unlock হবে
  //       pinTrigger.disable();
  //     },
  //   });
  // }, []);

  useEffect(() => {
    const section4 = section4Ref.current;
    const c1 = card1Ref.current;
    const c2 = card2Ref.current;
    const c3 = card3Ref.current;

    // Initial positions
    gsap.set(c1, { y: 300, x: 1500, rotate: 60 });
    gsap.set(c2, { y: 700, x: 1560, rotate: 60 });
    gsap.set(c3, { y: 700, x: 1620, rotate: 60 });

    // 1️⃣ FIRST TIMELINE — CARDS ENTER
    const tlEnter = gsap.timeline({ paused: true });

    tlEnter
      .to(c1, {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 1,
        ease: 'power2.out',
      })
      .to(
        c2,
        {
          x: 0,
          y: 0,
          rotate: 0,
          duration: 1,
          ease: 'power2.out',
        },
        '+=0.2'
      )
      .to(
        c3,
        {
          x: 0,
          y: 0,
          rotate: 0,
          duration: 1,
          ease: 'power2.out',
        },
        '+=0.2'
      );

    const tlBottom = gsap.timeline({ paused: true });

    tlBottom
      .to(card1Ref.current, {
        x: 0,
        y: 0,
        rotate: 0,
        top: 300,
        right: 0,
        duration: 1,
        ease: 'power2.out',
      })
      .to(
        card2Ref.current,
        {
          x: 0,
          y: 0,
          rotate: 0,
          top: 300,
          right: -150,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.8'
      )
      .to(
        card3Ref.current,
        {
          x: 0,
          y: 0,
          rotate: 0,
          top: 300,
          right: -350,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.8'
      );

    // 3️⃣ MAIN SCROLLTRIGGER
    ScrollTrigger.create({
      trigger: section4,
      start: 'top top',
      pin: true,
      scrub: true,
      end: () => '+=' + (tlEnter.duration() * 700 + tlBottom.duration() * 700),

      onUpdate: self => {
        const totalProgress = self.progress;

        // First half → show cards
        if (totalProgress < 0.5) {
          tlEnter.progress(totalProgress / 0.5);
        }
        // Second half → move cards to bottom
        else {
          tlBottom.progress((totalProgress - 0.5) / 0.5);
        }
      },
    });
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="h-screen flex items-center justify-center"
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

      <section
        ref={section4Ref}
        className="relative w-full h-screen overflow-hidden"
      >
        <Container>
          <div className="relative w-full h-screen rounded-2xl overflow-hidden">
            <div className="absolute w-full h-full bg-linear-to-t from-[#5919c1] to-orange-200 opacity-80 z-10"></div>

            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover z-0"
            >
              <source src="/Home.mp4" type="video/mp4" />
            </video>
          </div>
          {/* 
          <div className="relative w-full h-screen overflow-hidden rounded-2xl">
            <div className="absolute w-full h-full top-0 left-0 bg-linear-to-t from-[#5919c1] to-orange-200 rounded-2xl z-10 opacity-80 overflow-hidden"></div>

            <div className="absolute inset-0 w-full h-full rounded-2xl z-0">
              
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/Home.mp4" type="video/mp4" />
              </video>
            </div>
          </div> */}

          <div className="absolute top-[15%] right-[30%] z-50">
            <div className="relative   ">
              <div
                ref={card1Ref}
                className="absolute top-[50px] right-[50px] z-20 "
              >
                <div className="w-[700px] h-[430px] p-5 rounded-[10px] bg-white">
                  <h4 className="text-4xl font-Wix_Madefor_Text font-medium text-black">
                    Logo or Branding Design
                  </h4>
                  <div className="flex mt-[180px] gap-10">
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
                    <div>
                      <p className="text-[20px] font-Wix_Madefor_Text font-normal text-black">
                        Describe the service and how customers or clients can
                        benefit from it. This is the place to add a short
                        description with relevant details, like pricing,
                        duration and how to book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={card2Ref}
                className="absolute top-[120px] right-[-150px] z-30  box-shadow"
              >
                <div className="w-[700px] h-[430px] p-5 rounded-[10px] bg-white">
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
                        Describe the service and how customers or clients can
                        benefit from it. This is the place to add a short
                        description with relevant details, like pricing,
                        duration and how to book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                ref={card3Ref}
                className="absolute top-[200px] right-[-350px] z-50  box-shadow"
              >
                <div className="w-[700px] h-[430px] p-5 rounded-[10px] bg-white">
                  <h4 className="text-4xl font-Wix_Madefor_Text font-medium text-black">
                    SEO Optimization
                  </h4>
                  <div className="flex mt-[180px] gap-10">
                    <div className="relative w-[150px] h-[150px] rounded-lg shrink-0">
                      <video
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full  object-cover rounded-lg z-10"
                        playsInline
                        src="/webvideo3.mp4"
                      ></video>
                      <div className="w-[100px] h-[100px] rounded-full bg-gray-500/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-gray-500/60 flex items-center justify-center ml-[18px]">
                          <div className="w-[60px] h-[60px] rounded-full bg-gray-500/90 flex items-center justify-center ml-[18px]"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-[20px] font-Wix_Madefor_Text font-normal text-black">
                        Describe the service and how customers or clients can
                        benefit from it. This is the place to add a short
                        description with relevant details, like pricing,
                        duration and how to book.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Section3;
