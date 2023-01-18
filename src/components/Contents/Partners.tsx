import React from 'react';
import Image from 'next/image';

export const Partners = () => {
  const partners = [
    {
      name: 'GDSC USLS',
      logo: '/images/icons/gdsc-logo.svg',
    },
    {
      name: 'GDSC USLS',
      logo: '/images/icons/gdsc-logo.svg',
    },
    {
      name: 'GDSC USLS',
      logo: '/images/icons/gdsc-logo.svg',
    },
  ];

  return (
    <div className='relative flex h-[70vh] flex-col items-center justify-center xl:h-screen'>
      <p className='contain text-center font-merchant-thin-condensed text-white [fontSize:clamp(1.3rem,4vw,3rem)]'>
        A community built with trusted companies and partners
      </p>

      <div className='mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-20 lg:mt-20'>
        {partners.map((partner) => (
          <Image
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            height={80}
            width={80}
            className='scale-75 md:scale-100'
          />
        ))}
      </div>

      <Image
        priority
        src='/images/elements/gridsDotted.png'
        alt='Dotted Grids'
        fill
        className='pointer-events-none z-[-2] object-contain opacity-80'
      />
    </div>
  );
};
