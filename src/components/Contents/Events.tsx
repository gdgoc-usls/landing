import React from 'react';
import Image from 'next/image';
import router from 'next/router';

export const Events = () => {
  const events = [
    {
      title: 'AImagine: Build with AI',
      date: 'Apr 29, 2025',
      link: 'https://www.facebook.com/dsc.usls/posts/pfbid026MXJ2BKpLzj9CG1kDrntwen1wAjqXCgRCHz7UK5JpkimMQnRDzpX952DVjMqWtZXl',
    },
    {
      title: 'TechCare: Project Dagtaan',
      date: 'Mar 22, 29 and Apr 5, 2025',
      link: 'https://project-dagtaan.vercel.app/',
    },
    {
      title: 'Sonder 2025: Vietnam',
      date: 'Feb 22, 2025',
      link: 'https://www.facebook.com/dsc.philippines/posts/pfbid0gugpw3Rso6EWU49PLS3y6CzJUzDXXwNFHdSxCqvSZUDWRXEYmby3GhYeqD48Pnz4l?rdid=BkXBXGgLOGPDe5YH#',
    },
    {
      title: 'Sonder 2025: Indonesia',
      date: 'Jan 11, 2025',
      link: 'https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-sonder-google-dev-world-tour-in-indonesia/cohost-gdg-on-campus-university-of-st-la-salle-bacolod-philippines',
    },
    {
      title: 'SONDER: International GDG on Campus Community Building',
      date: 'Dec 20, 2024',
      link: 'https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-sonder-international-gdg-on-campus-community-building-study-group-2024/',
    },
  ];

  return (
    <div id='events' className='contain relative pb-20'>
      <ul>
        {events.map((event) => (
          <li
            key={event.title}
            className='border-b-[1px] border-b-gray-200 py-6 text-white md:py-8 lg:py-10'
          >
            <p className='mb-1 font-montserrat uppercase text-slate-400 [fontSize:clamp(0.6rem,1.5vw,1rem)] lg:mb-2  xl:mb-4'>
              {event.date}
            </p>
            <a href={event.link} target='_blank' rel='noreferrer'>
              <h3 className='animated-gradient text-title inline-block uppercase'>
                {event.title}
              </h3>
            </a>
          </li>
        ))}
      </ul>
      <div className='flex justify-end'>
        <button
          type='button'
          className='pt-5 text-body hover-effect text-white animated-gradient text-title uppercase'
          onClick={() => router.push('https://gdgoc-event.vercel.app')}
        >
          More Events
        </button>
      </div>
      <Image
        priority
        src='/images/gradients/gradientYellowRed.png'
        alt='Gradient Yellow'
        height={1000}
        width={1000}
        className='pointer-events-none absolute -top-1/2 right-0 '
      />
    </div>
  );
};
