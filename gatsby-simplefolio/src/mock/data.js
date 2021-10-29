import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shar|Developer', // e.g: 'Name | Developer'
  lang: 'English(Native), Punjabi(Fleunt), Urdu (B1), Spanish (A2), Polsih (A1), Mandarin (HSK2)', // e.g: en, es, fr, jp
  description: 'Welcome to my site, I am a self-taught developer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Shar',
  subtitle: 'I am self-taught web-developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-warsaw.jpg',
  paragraphOne:
    'I am a motivated self-taught developer with a strong background in digital marketing. I am highly adaptable and a responsible individual seeking a position within the IT sector',
     'that will utilise the skills I developed during my professional employment and academics.':
     'I specialise in developing websites that are SEO, I do this using a variety of technologies.',
  paragraphTwo:
  'Tech stack: Gatsby, Next.js, Node.js. Firebase, Graphql, Maiclhimp/Hubspot and Webpack. For payments I like to use stripe.',
  
    
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
    info: 'A great third project that strengthened my knowledge of using an API',
    info2: 'Tech used: HTML, CSS, JAVASCRIPT, JSON, WEB API',
    url: 'https://weather-this.netlify.app/',
    repo: 'https://github.com/shar27/Weather', // if no repo, the button will not show up
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
