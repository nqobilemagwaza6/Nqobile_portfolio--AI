
import { Project, Experience, Skill, Certificate } from './types';

export const PERSONAL_INFO = {
  name: "Nqobile Gratitude Thobile Magwaza",
  shortName: "Nqobile Magwaza",
  title: "Frontend Developer",
  email: "Nqobilemagwaza6@gmail.com",
  phone: "073 595 1190",
  location: "South Africa",
  bio: "Frontend-focused developer experienced in building responsive, accessible, and user-friendly interfaces with HTML5, CSS3, JavaScript, TypeScript, React.js, Vue.js, Bootstrap, and Tailwind CSS. Strong at translating requirements into polished UI features, integrating REST APIs, improving usability, and presenting software demos for real client projects.",
  brandingStatement: "Building responsive, usable, and performance-minded frontend experiences.",
  linkedin: "https://www.linkedin.com/in/nqobile-magwaza",
  github: "https://github.com/nqobilemagwaza6",
  resumeUrl: "./assets/CV_Magwaza.Nqobile_Gratitude_Thobile.pdf"
};

export const PROJECTS: Project[] = [
  {
    id: "ai-predictive-analytics",
    title: "MediFast AI: Smart Patient Identification & Data Access Platform",
    description: "MediFast AI: Smart Patient Identification & Data Access Platform",
    longDescription: "Developed using Python and Scikit-learn, this project involved processing historical sensor data to predict failure points. Implemented a Django-based dashboard to visualize real-time predictions and alert maintenance crews.",
    techStack: ["Python", "Django", "Scikit-Learn", "PostgreSQL", "Tailwind CSS"],
    imageUrl: "./assets/medifast.jpg",
    githubUrl: "https://github.com/nqobilemagwaza/predictive-analytics",
    demoUrl: "https://prong-wink-04231070.figma.site/",
    keyFeatures: ["Anomaly Detection", "Real-time Dashboard", "REST API Integration"]
  },
  {
    id: "smart-campus-management",
    title: "End to End AI Solution",
    description: "A full-stack transport application for South Africa that allows passengers to search taxi routes and fare prices, with an admin dashboard for taxi associations to manage fares and post announcements.",
    longDescription: "Leveraged during my tenure at AI Campus, this system handles registration, documentation gathering, and automated testing feedback loops for software engineering students.",
    techStack: ['Typescript', 'MySQL','Next.js', 'CSS'],
    imageUrl: "./assets/taxi_compass.jfif",
    githubUrl: "https://github.com/SpecialAgents/Taxi-Compass ",
    demoUrl: "https://v0-taxi-compass.vercel.app/",
    keyFeatures: ["Document Management", "Automated Testing Suite", "Role-based Access"]
  },
  {
    id: "aic-one",
    title: "AIC One",
    description: "Live client website focused on a clean, responsive frontend experience and accessible content presentation.",
    longDescription: "Worked on frontend implementation and interface refinements for a live public-facing website, supporting responsive layouts, usability, and polished content sections.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap","Vue.js"],
    imageUrl: "./assets/aic-one.jpg",
    demoUrl: "https://aic-one.com/",
    keyFeatures: ["Responsive UI", "Live Website", "Client Project"]
  },
  {
    id: "ict-chamber",
    title: "ICT Chamber",
    description: "Live organizational website with frontend updates supporting usability, structured content, and responsive page layouts.",
    longDescription: "Contributed to frontend work on a client-facing ICT website, focusing on layout quality, navigation usability, responsive behavior, and presentation of organizational content.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    imageUrl: "./assets/ict-chamber.jpg",
    demoUrl: "https://www.ictchamber.org.za/",
    keyFeatures: ["Responsive Layouts", "Content UI", "Live Website"]
  },
  {
    id: "bosa",
    title: "BOSA",
    description: "Live public-facing website project with frontend contributions across interface polish, responsiveness, and user experience.",
    longDescription: "Worked on frontend improvements for a live website, helping refine user-facing pages, responsive styling, and visual consistency across key sections.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Vue.js"],
    imageUrl: "./assets/bossa.png",
    demoUrl: "https://bosa.co.za/",
    keyFeatures: ["Frontend Polish", "Responsive Design", "Live Project"]
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "AI Campus",
    role: "Junior Frontend Developer",
    period: "August 2023 - September 2025",
    type: "Permanent",
    responsibilities: [
      'Built and maintained responsive user interfaces using HTML, CSS, JavaScript, Bootstrap, jQuery, AJAX, and Flutter.',
      'Collaborated with backend developers to connect frontend screens to APIs and deliver reliable data-driven user experiences.',
      'Improved UI performance, usability, layout consistency, and cross-device responsiveness across multiple projects.',
      'Participated in requirement gathering and translated business needs into clear frontend features and user flows.',
      'Conducted software demos showcasing completed frontend functionality, user journeys, and interface improvements.'
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'AJAX', 'Flutter', 'API Integration', 'Requirements Gathering', 'Software Demos']
  },
  {
    company: "Empire Partner Foundation",
    role: "Software Engineer Intern",
    period: "June 2022 - May 2023",
    type: "Internship",
    responsibilities: [
      'Designed, developed, tested, and maintained frontend features for internal and client-facing software projects.',
      'Created responsive interfaces with HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, and Flutter while supporting documentation and requirement gathering.',
      'Integrated frontend views with RESTful APIs and backend services built with Python Django and Java.',
      'Worked with MySQL and PostgreSQL data flows to display accurate application information in clean, usable interfaces.',
      'Prepared and delivered software demos, explaining frontend functionality, user workflows, and project progress to stakeholders.'
    ],
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'AJAX', 'RESTful APIs', 'Python Django', 'Java', 'MySQL', 'PostgreSQL']
  },
  {
    company: "CAPACITI",
    role: "UI/UX Developer",
    period: "October 2025 - Present",
    type: "Internship",
    responsibilities: [
      'Develop modern UI components using React.js, Vue.js, TypeScript, JavaScript ES6+, Bootstrap, and Tailwind CSS.',
      'Work on real client projects with a strong focus on user experience, interface design, responsive layouts, and frontend quality.',
      'Assist in testing, refining, and improving frontend features before deployment.',
      'Collaborate with teams to optimize application usability, accessibility, performance, and visual consistency.',
      'Gain practical exposure to deployment pipelines, component-based development, and frontend best practices.'
    ],
    skills: ['React.js', 'Vue.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'UI/UX', 'Frontend Testing']
  }
];

export const SKILLS: Skill[] = [
  // --- Frontend ---
  { name: 'HTML5', level: 5, category: 'Frontend' },
  { name: 'CSS3', level: 5, category: 'Frontend' },
  { name: 'JavaScript ES6+', level: 5, category: 'Frontend' },
  { name: 'TypeScript', level: 4, category: 'Frontend' },
  { name: 'React.js', level: 4, category: 'Frontend' },
  { name: 'Vue.js', level: 4, category: 'Frontend' },
  { name: 'Bootstrap', level: 5, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 4, category: 'Frontend' },
  { name: 'jQuery', level: 4, category: 'Frontend' },
  { name: 'Flutter', level: 3, category: 'Frontend' },

  // --- API & Backend Exposure ---
  { name: 'RESTful API Integration', level: 4, category: 'Backend' },
  { name: 'AJAX', level: 4, category: 'Backend' },
  { name: 'Python Django', level: 4, category: 'Backend' },
  { name: 'Java', level: 3, category: 'Backend' },

  // --- Data ---
  { name: 'MySQL', level: 3, category: 'Database' },
  { name: 'PostgreSQL', level: 3, category: 'Database' },

  // --- Workflow & Delivery ---
  { name: 'Requirement Gathering', level: 4, category: 'Tools' },
  { name: 'UI Testing', level: 4, category: 'Tools' },
  { name: 'Software Demos', level: 4, category: 'Tools' },
  { name: 'Agile Collaboration', level: 4, category: 'Tools' },
  { name: 'Frontend Deployment Practices', level: 3, category: 'DevOps' },
];

export const CERTIFICATES: Certificate[] = [
  { title: "NQF LEVEL 5 in Systems Development", issuer: "WeThinkCode", year: "2022" },
  { title: "Certificate in Network Support", issuer: "MegaTraining", year: "2016" },
  { title: "Introduction to Artificial Intelligence (AI)", issuer: "Cousera", year: "2026" },
  { title: "Python for Data Science, AI & Development", issuer: "Cousera", year: "2026" },
  { title: "Building AI Powered Chatbots Without Programming", issuer: "Cousera", year: "2026" },
  { title: "AI on Microsoft Azure", issuer: "Cousera", year: "2026" },
  { title: "AI Foundations: Prompt Engineering with ChatGPT", issuer: "Cousera", year: "2026" },
  { title: "Generative AI with Large Language Models", issuer: "Cousera", year: "2026" },
  { title: "Trustworthy AI: Managing Bias, Ethics, and Accountability", issuer: "Cousera", year: "2026" },
  { title: "AI Essentials", issuer: "Cousera", year: "2026" },
  { title: "Introduction to Generative AI", issuer: "Cousera", year: "2026" },
  { title: "AI For Everyone", issuer: "Cousera", year: "2026" },
];
