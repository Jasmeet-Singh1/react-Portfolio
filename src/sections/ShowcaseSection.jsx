import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import TitleHeader from '../components/TitleHeader';

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        },
      );
    });
  }, []);

  return (
    <div className='flex flex-col gap-10 backdrop-blur-[1px] z-10 relative'>
      <div className='text-center py-16 z-10 mt-10 '>
        <TitleHeader sub='🛠️ Handy Toolbox 🛠️' />

        <div className='flex flex-wrap justify-center gap-4 text-sm text-gray-300 max-w-3xl mx-auto px-4'>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>HTML</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>CSS</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>JavaScript</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>ES6+</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Next.js</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>React</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Redux</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Tailwind</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>TypeScript</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Material UI</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>OOP</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Node.js</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Express</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>MongoDB</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Hash Table</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>PostgreSQL</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Java</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>C++</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>JWT</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Socket.IO</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Stripe</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Jest</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>GitHub</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Two Pointer</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Tree</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>HashMap</span>
          <span className='bg-zinc-800 px-3 py-1 rounded-full'>Stack</span>
        </div>
      </div>

      <div className='mt-20 sm:mt-32'>
        <TitleHeader sub='🚀 Technical Highlights 🚀' title='Code. Scale. Ship.' />
      </div>

      <section className='app-showcase relative'>
        <div className='space-y-6 text-gray-300 text-sm leading-relaxed'>
          <ul className='list-disc ms-5 mt-5 flex flex-col gap-2 text-white-50'>
            <li className='text-lg '>
              Built and scaled multi-tenant <strong>Web Applications</strong> serving thousands of users.
            </li>

            <li className='text-lg '>
              Designed real-time systems using <strong>WebSocket & Socket.IO.</strong>.
            </li>

            <li className='text-lg '>
              Implemented secure authentication flows with <strong>JWT & OAuth2.</strong>
            </li>

            <li className='text-lg '>
              Integrated production payment systems <strong>(Stripe).</strong>
            </li>

            <li className='text-lg '>
              Leveraged <strong>AI APIs</strong> to enhance product capabilities.
            </li>

            <li className='text-lg '>
              Architect scalable frontend architecture with <strong>React & Next.js.</strong>
            </li>

            <li className='text-lg '>
              Thrive in <strong>AGILE</strong> teams delivering production-grade software.
            </li>
          </ul>
        </div>
      </section>

      <div id='work' ref={sectionRef} className='app-showcase relative -mt-8'>
        <div className='w-full'>
          <div className='showcaselayout'>
            <div ref={rydeRef} className='first-project-wrapper'>
              <div className='w-full overflow-hidden rounded-xl'>
                <img src='/images/project1.png' alt='UniChat Platform' />
              </div>
              <div className='text-content'>
                <h2 className='text-xl'>
                  MernEats Platform - Food Ordering System built with the MERN stack (MongoDB, Express, React, and
                  Node.js){' '}
                </h2>
              </div>

              <div className='w-full overflow-hidden rounded-xl mt-10'>
                <img src='/images/freescribe.png' alt='UniChat Platform' />
              </div>
              <div className='text-content'>
                <h2 className='text-xl'>
                  FreeScribe is an AI-powered web application that allows users to record audio or upload MP3
                  files, automatically transcribe the speech into text, and translate the transcription into
                  multiple languages.
                </h2>
              </div>
            </div>

            <div className='project-list-wrapper overflow-hidden '>
              <div className='project' ref={libraryRef}>
                <div className='w-full  bg-[#becbe7] overflow-hidden rounded-xl flex items-center justify-center'>
                  <img src='/images/project2.png' alt='Social Networking Platform' />
                </div>

                <h2 className='text-xl'>
                  Social Networking Platform - Full-Featured Social Media with Real-time Updates
                </h2>
              </div>

              <div className='project xl:mt-4' ref={ycDirectoryRef}>
                <div className='image-wrapper bg-[#becbe7]'>
                  <img src='/images/project3.png' alt='MernEats Platform' />
                </div>
                <h2 className='text-xl'>
                  Solved more than 250 problems on LeetCode, strengthening my data structures and algorithms
                  skills.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
