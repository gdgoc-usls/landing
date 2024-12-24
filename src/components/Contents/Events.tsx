import React from 'react';
import Image from 'next/image';
import router from 'next/router';

export const Events = () => {
  const events = [
    {
      title: 'SONDER: International GDG on Campus Community Building',
      date: 'Dec 20, 2024',
      link: 'https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-sonder-international-gdg-on-campus-community-building-study-group-2024/',
    },
    {
      title: 'View-Source Networking Session',
      date: 'Dec 14, 2024',
      link: 'https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-view-source-networking-session/',
    },
    {
      title: 'Core Team - Team Building Program',
      date: 'Nov 9, 2024',
      link: 'https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-core-team-team-building-program/',
    },
    {
      title: '1st General Assembly & Chapter Characters Info Session',
      date: 'Nov 8, 2024',
      link: 'https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-1st-general-assembly-amp-chapter-characters-info-session/',
    },
    {
      title: 'Public Relations Department Study Group & Working Session',
      date: 'Oct 30, 2024',
      link: 'https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-public-relations-department-study-group-amp-working-session/',
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
      <div className='flex justify-center'>
        <button
          type='button'
          className='pt-5 text-body hover-effect border-b-[1px] text-white animated-gradient text-title uppercase'
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
