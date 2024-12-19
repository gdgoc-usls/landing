const description =
  'Google Developer Groups on Campus Clubs - USLS is a community of developers that are passionate about uplifting and educating communities through technology and innovation while enriching Lasallian virtues.';

const imgUrl =
  'https://user-images.githubusercontent.com/69457996/223909395-d151c5c8-56bd-44ac-bfa0-c4ddfd26b87f.png';

export default {
  title: 'Google Developer Groups on Campus - USLS',
  description,
  openGraph: {
    type: 'website',
    url: 'https://gdsc.omsimos.com/',
    title: 'Powered by Intellect, Driven by Values',
    description,
    images: [
      {
        url: imgUrl,
        width: 1920,
        height: 1080,
        alt: 'Google Developer Student Clubs - USLS',
        type: 'image/png',
      },
    ],
    site_name: 'Google Developer Student Clubs - USLS',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
  ],
};
