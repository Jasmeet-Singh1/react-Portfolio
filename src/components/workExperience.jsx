import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { workCards } from '../constants';
import TitleHeader from '../components/TitleHeader';
import GlowCard from '../components/GlowCard';

gsap.registerPlugin(ScrollTrigger);

const WorkExperience = () => {
  useGSAP(() => {
    gsap.utils.toArray('.work-card').forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });
  }, []);

  return (
    <section
      id='work-experience'
      className='flex-center md:mt-40 mt-20 section-padding xl:px-0 relative z-1 bg-black/3 backdrop-blur-[2px] pt-12'
    >
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader title='Work Experience' />

        <div className='mt-14 relative'>
          <div className='relative z-50 xl:space-y-20 space-y-10'>
            {workCards.map((card) => (
              <div key={card.title} className='exp-card-wrapper'>
                <a
                  className='xl:w-2/6 cursor-pointer'
                  target={card.companyLink ? '_blank' : undefined}
                  rel={card.companyLink ? 'noopener noreferrer' : undefined}
                  href={card.companyLink || '#'}
                  onClick={!card.companyLink ? (e) => e.preventDefault() : undefined}
                >
                  <GlowCard>
                    <div>
                      <img src={card.imgPath} alt='exp-img' />
                    </div>

                    <div className='mt-3'>
                      {card.skills?.map((skill, index) => (
                        <div key={index} className='text-white-50 text-sm font-thin inline'>
                          {skill}
                          {index < card.skills.length - 1 ? ', ' : ''}
                        </div>
                      ))}
                    </div>
                  </GlowCard>
                </a>

                <div className='xl:w-4/6'>
                  <div className='flex items-start'>
                    <div className='timeline-wrapper'>
                      <div className='timeline' />
                      <div className='gradient-line w-1 h-full' />
                    </div>
                    <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                      <a
                        className='timeline-logo cursor-pointer'
                        target={card.companyLink ? '_blank' : undefined}
                        rel={card.companyLink ? 'noopener noreferrer' : undefined}
                        href={card.companyLink || '#'}
                        onClick={!card.companyLink ? (e) => e.preventDefault() : undefined}
                      >
                        <img className='max-w-[75%]' src={card.logoPath} alt='logo' />
                      </a>
                      <div>
                        <h1 className='font-semibold text-xl'>{card.title}</h1>

                        <p className='my-2 text-white-50 pl-2'>{card.date}</p>

                        <ul className='list-disc ms-5 mt-5 flex flex-col gap-2 text-white-50'>
                          {card.responsibilities.map((responsibility, index) => (
                            <li key={index} className='text-base font-thin'>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
