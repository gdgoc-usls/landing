import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useLayoutEffect from '~/hooks/useIsomorphicLayoutEffect';
import { gsap } from 'gsap';

const Partners = () => {
  useLayoutEffect(() => {
    gsap.to('body', {
      overflowY: 'scroll',
    });

    gsap.to('.menu-burger, .logo', {
      duration: 0.5,
      opacity: 1,
      stagger: 0.2,
    });
  }, []);

  const partnersGDSC = [
    'Philippines',
    'De La Salle University',
    'University of Science and Technology of Southern Philippines',
    'Tohoku University',
    "Seoul Women's University",
    'Binus University Malang',
    'Southville International School and Colleges',
    'Waseda University',
    'K.J. Somaiya Institute of Engineering and Information Technology ',
    'Holy Angel University',
    'Guru Nanak Dev University',
    'PUP Sto. Tomas Branch',
    'University of Negros Occidental - Recoletos',
    'Central Philippine University',
    'University of Energy and Natural Resources Ghana',
    'Universitas Sumatera Utara',
    'Benguet State University',
    'University of the Immaculate Conception',
    'NU Baliwag',
    'De La Salle-College of Saint Benilde',
    'Cristal e-College',
    'Saitama University',
    'Sookmyong University',
    'Western State Mindanao University',
    'National Chengchi University',
    'Chungang University',
    'George Washington University',
    'Mukesh Patel School of Technology Management and Engineering',
  ];

  const partnersUSLS = [
    'USLS Computer Studies Department ',
    'USLS IT & EMC Department ',
  ];

  const router = useRouter();

  return (
    <section className='contain relative z-20 flex min-h-[70vh] flex-col items-center justify-center pt-44 xl:min-h-screen'>
      <p
        id='partners-title'
        className='contain text-center font-merchant-thin-condensed text-white [fontSize:clamp(1.3rem,4vw,3rem)]'
      >
        Built with trusted community partners
      </p>

      <div className='my-10 flex flex-wrap items-center justify-center gap-10 md:gap-20 lg:my-20'>
        {partnersUSLS.map((partner) => (
          <div className='' key={partner}>
            <p className='mt-2 text-center font-googleSans-medium font-medium text-white'>
              {partner}
            </p>
          </div>
        ))}
      </div>

      <div
        id='partners-logos'
        className='my-10 flex flex-wrap items-center justify-center gap-10 md:gap-20 lg:my-20'
      >
        <div>
          <Image
            src='/images/icons/gdsc-logo.svg'
            alt='gdsc-logo'
            height={80}
            width={80}
            className='logo mx-auto h-20 scale-[0.6] sm:scale-75 md:scale-100'
          />
          <p className='-mt-3 text-center font-googleSans-medium font-medium text-white'>
            Google Developer Group
          </p>
          <p className='max-w-xs text-center font-googleSans-regular text-white'>
            Bacolod
          </p>
        </div>
        {partnersGDSC.map((partner) => (
          <div className='' key={partner}>
            <Image
              src='/images/icons/gdsc-logo.svg'
              alt='gdsc-logo'
              height={80}
              width={80}
              className='logo mx-auto scale-[0.6] sm:scale-75 md:scale-100'
            />
            <p className='mt-2 text-center font-googleSans-medium font-medium text-white'>
              Google Developer Groups on Campus
            </p>
            <p className='max-w-xs text-center font-googleSans-regular text-white'>
              {partner}
            </p>
          </div>
        ))}
      </div>

      <button
        type='button'
        className='text-body hover-effect border-b-[1px] text-white'
        onClick={() => router.push('/')}
      >
        back home
      </button>
      <Image
        priority
        src='/images/elements/gridsDotted.png'
        alt='Dotted Grids'
        fill
        className='pointer-events-none z-[-2] object-contain opacity-80'
      />
      <Image
        priority
        src='/images/elements/swirlGlass.png'
        alt='Swirl Glass'
        height={800}
        width={600}
        className='pointer-events-none -top-full rotate-0 -scale-x-100 md:rotate-0 lg:rotate-12 xl:absolute'
      />
      <Image
        priority
        src='/images/gradients/gradientRedYellow.png'
        alt='Gradient Red'
        height={1000}
        width={1000}
        className='pointer-events-none absolute top-0 left-0  z-[-1] mr-40 scale-x-[-1] lg:-top-96'
      />
    </section>
  );
};

export default Partners;
