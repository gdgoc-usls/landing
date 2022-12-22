import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className='relative m-auto grid h-screen place-items-center'>
        <h1 className='z-10 -translate-y-12 whitespace-nowrap text-center font-merchant-expanded text-8xl text-white'>
          Powered by Intellect, <br /> Driven by Values
        </h1>
        <Image
          src='/images/elements/gridsDotted.png'
          alt='Dotted Grids'
          fill
          className='pointer-events-none -translate-y-96 object-contain object-top opacity-75'
        />
        <Image
          src='/images/gradients/gradientMain.png'
          alt='Google Color Gradients'
          fill
          className='pointer-events-none object-contain object-bottom'
        />
        <Image
          src='/images/elements/gdscLines.png'
          alt='Google Color Lines'
          fill
          className='pointer-events-none z-[-1] translate-y-[30rem] object-contain object-bottom'
        />
        <Image
          src='/images/elements/gdscLogoGlass.png'
          alt='GDSC Logo Glass'
          height={500}
          width={1200}
          className='pointer-events-none absolute bottom-0 -right-4 translate-y-1/2 scale-90'
        />
        <Image
          src='/images/elements/arrowDown.png'
          alt='Arrow Down'
          height={300}
          width={300}
          className='pointer-events-none absolute left-32 bottom-48 translate-y-1/2 scale-[.80] mix-blend-overlay'
        />
      </section>
      <section className='relative overflow-x-hidden overflow-y-clip py-96 px-32 text-white'>
        <Image
          src='/images/gradients/gradientGreenBlue.png'
          alt='Gradient Green'
          height={800}
          width={800}
          className='pointer-events-none absolute top-1/2 -left-[36rem] z-[-1]'
        />
        <Image
          src='/images/elements/gridsDotted.png'
          alt='Dotted Grids'
          fill
          className='pointer-events-none z-[-2]  translate-y-1/3 object-contain object-top opacity-75'
        />
        <div className='mx-auto mb-40 w-3/4'>
          <h2 className='mr-auto mb-10 font-merchant-expanded text-7xl'>
            Google Developer <br /> Student Clubs —
          </h2>
          <p className='ml-auto w-[65%] text-right font-merchant-thin text-2xl'>
            The quick brown fox jumps over the lazy dog near the bank of the
            river the quick brown fox jumps over the lazy dog near the bank of
            the river.
          </p>
        </div>
        <div className='flex justify-between'>
          <Image
            src='/images/elements/swirlGlass.png'
            alt='Swirl Glass'
            height={800}
            width={600}
            className='pointer-events-none translate-x-40 -translate-y-20'
          />
          <div>
            <p className='font-merchant-semibold text-[10rem] leading-[0.7]'>
              USLS
            </p>
            <p className='text-md text-right font-montserrat uppercase'>
              University of St. La Salle <br /> — Bacolod{' '}
            </p>
          </div>
        </div>
        <div className='relative grid place-items-center'>
          <div className='text-white'>
            <h3 className='-translate-x-40 text-center font-merchant-expanded text-7xl'>
              GDSC - USLS
            </h3>
            <p className='mx-auto w-1/2 font-merchant-thin text-2xl'>
              The quick brown fox jumps over the lazy dog near the bank of the
              river the quick brown fox jumps over the lazy dog near the bank of
              the river.
            </p>
          </div>
          <Image
            src='/images/gradients/gradientYellowRed.png'
            alt='Gradient Yellow'
            height={800}
            width={800}
            className='pointer-events-none absolute top-1/2 -right-[36rem] z-[-1]'
          />
        </div>
      </section>
    </main>
  );
}
