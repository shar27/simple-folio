import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shar|Developer', // e.g: 'Name | Developer'
  lang: 'English(Native), Punjabi(Fleunt), Urdu (B1), Spanish (A2), Polish (A1), Mandarin (HSK2)', // e.g: en, es, fr, jp
  description: 'Welcome to my site, I am a front end developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Shar',
  subtitle: 'I am front-end web developer',
  cta: 'you can reach me here - shariq.ahmed@hotmail.co.uk',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-warsaw.jpg',
  paragraphOne:
    'I am a UK front-end developer based in Poznan, Poland. I have a strong background in digital marketing as well as web development.',
  
  paragraphTwo:  'I specialise in developing websites that are SEO, I do this using a variety of technologies. Gatsby/React and Next.js are my usuals.',
     
  paragraphThree: 'I manage everything from the design, development and deployment. No stone is left unturned during this process.', 
  
  paragraphFour: 'I always ensure that my clients are 100% satisfied. Not convinced? drop me an email and we can book in a for a free consultation',
  paragraphFive:
  'Tech stack: Gatsby, React, Next.js, Node.js. Firebase, Graphql, Mailchimp/Hubspot and Webpack. For payments I like to use stripe.',
  
    
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tesla.PNG',
    title: 'Tesla-clone',
    info: 'A tesla clone',
    info2: 'Tech used: HTML, CSS, JAVASCRIPT, REACT, REDUX',
    url: 'https://tesla-shar-clone.netlify.app/',
    repo: 'https://github.com/shar27/tesla-clone', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'weather.PNG',
    title: 'Weather App',
    info: 'An API focused site',
    info2: 'Tech used: HTML, CSS, JAVASCRIPT, JSON, WEB API',
    url: 'https://weather-this.netlify.app/',
    repo: 'https://github.com/shar27/Weather', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'candles.jpeg',
    title: 'Candles',
    info: 'E-commerce site for candles',
    info2: 'Tech used: React & Gatsby',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'shariq.ahmed@hotmail.co.uk',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shar-ahmed/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/shar27/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
