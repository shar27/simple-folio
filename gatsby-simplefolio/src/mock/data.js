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
    'A motivated, adaptable and responsible individual seeking a position within the IT sector that will utilise the skills I developed during my professional employment and academics',
  paragraphTwo:
    'I enjoy working on my own initiative or in a team. In short, I am reliable, trustworthy, hardworking and eager to learn and have a genuine interest in IT.',
  
  
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'rps.jpg',
    title: 'My first project',
    info: 'A great first project that helped solidify javascript foundations',
    info2: 'Tech used: HTML, CSS, JAVASCRIPT',
    url: 'https://shar27.github.io/rock-paper-scissors/',
    repo: 'https://github.com/shar27/rock-paper-scissors', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'calc.jpg',
    title: 'Second project',
    info: 'A great second project that strengthened my knowledge',
    info2: 'Tech used: HTML, CSS, JAVASCRIPT',
    url: 'https://shar27.github.io/calculator-js/',
    repo: 'https://github.com/shar27/calculator-js', // if no repo, the button will not show up
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
  
  {
    id: nanoid(),
    img: 'cafeshar.png',
    title: 'CafeShar',
    info: 'Cafe site',
    info2: 'Tech used: HTML, CSS, BOOTSTRAP, MATERIALISE ,JAVASCRIPT',
    url: 'https://cafeshar.netlify.app/',
    repo: 'https://github.com/shar27/CafeShar', // if no repo, the button will not show up
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
