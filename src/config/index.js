module.exports = {
  siteTitle: 'Arun Purushothaman | Backend Engineer',
  siteDescription:
    'Arun Purushothaman aka ahumblenerd is a software engineer based in Kochi, Kerala who specializes in developing highly scalable backend systems.',
  siteKeywords:
    'Arun Purushothaman, ahumblenerd, a_humble_nerd, backend engineer kerala, software engineer, java, backend engineer india',
  siteUrl: 'https://ahumblenerd.dev',
  siteLanguage: 'en_US',

  googleVerification: 'vb-zcDGb7unc-auVIabU5FP9NBbQaZkjRjbXASq0ra4',

  name: 'Arun Purushothaman',
  location: 'Cochin, Kerala',
  email: 'ahumblenerd@gmail.com',
  github: 'https://github.com/ahumblenerd/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/ahumblenerd/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/arunpurushothaman/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/a_humble_nerd/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
