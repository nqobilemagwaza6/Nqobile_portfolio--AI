
import { Project, Experience, Skill, Certificate } from './types';

export const PERSONAL_INFO = {
  name: "Nqobile Gratitude Thobile Magwaza",
  shortName: "Nqobile Magwaza",
  title: "AI/ML Software Engineer",
  email: "Nqobilemagwaza6@gmail.com",
  phone: "073 595 1190",
  location: "South Africa",
  bio: "Highly motivated Software Engineer with deep expertise in Python, Django, and Java. Transitioning into AI/ML roles with a focus on building intelligent, scalable systems. Proven track record at Empire Partner Foundation and AI Campus in delivering robust software solutions.",
  brandingStatement: "Architecting the Future with Intelligent Systems and Scalable Software.",
  linkedin: "https://linkedin.com/in/nqobile-magwaza",
  github: "https://github.com/nqobilemagwaza",
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
    id: "financial-ledger-api",
    title: "Robust Financial Ledger API",
    description: "A high-concurrency RESTful API for managing transaction ledgers with strict data integrity.",
    longDescription: "Built with a focus on data consistency and ACID properties. Utilized PostgreSQL for complex relational queries and ensured high performance through optimized database indexing.",
    techStack: ["C#.Net", "PostgreSQL", "Entity Framework", "Swagger"],
    imageUrl: "https://picsum.photos/seed/ledger/800/600",
    githubUrl: "https://github.com/nqobilemagwaza/ledger-api",
    demoUrl: "#",
    keyFeatures: ["Transaction Integrity", "Detailed Audit Logs", "Standardized Documentation"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "AI Campus",
    role: "Junior Software Engineer",
    period: "August 2024 – Sept 2025",
    type: "Permanent",
    responsibilities: [
    'Spearheaded full-stack development, including responsive front-ends with Vue.js/HTML/CSS/JS (AJAX) and robust back-ends with Django/Python (REST APIs).',
    'Actively involved in requirements gathering, code reviews, and documentation to deliver scalable, secure solutions with integrated payment systems, managing **PostgreSQL databases**.',
    'Operating within Agile methodologies.'
    ],
    skills: ['Python', 'Django', 'Vue.js', 'PostgreSQL', 'REST APIs',
    'Agile', 'Full-Stack Development', 'Payment Integration',
    'Requirements Analysis', 'Code Review', 'Technical Documentation']
  },
  {
    company: "Empire Partner Foundation",
    role: "Software Engineer Intern",
    period: "June 2023 – May 2024",
    type: "Internship",
    responsibilities: [
      'Engineered and deployed full-stack features for community portals, ensuring seamless integration of front-end and back-end components.',
      'Designed and implemented responsive user interfaces using HTML, CSS, and Bootstrap, with interactive elements developed using JavaScript and jQuery.',
      'Developed server-side applications and RESTful APIs with Python and Django, including database design and optimization in MySQL via Django ORM.',
      'Optimized legacy SQL queries, enhancing page load times by 20% and improving overall application performance.',
      'Ensured cross-browser compatibility and responsiveness across web applications, and contributed to maintaining code quality through Git version control.'
    ],
    skills: ['Python', 'Django', 'MySQL', 'Agile']
  },
  {
    company: "'Capaciti",
    role: "AI Bootcamp",
    period: "Nov 2025 – Feb 2026",
    type: "Internship",
    responsibilities: [
    'Engaged in hands-on AI projects, applying machine learning and deep learning techniques to real-world problems.',
    'Developed and delivered technical presentations, articulating complex AI concepts and project outcomes to peers and mentors.',
    'Completed a series of specialized Coursera courses, enhancing theoretical understanding and practical skills in various AI domains.'
    ],
    skills: ['AI', 'Machine Learning', 'Deep Learning', 'Presentation Skills', 'Data Analysis']
  }
];

export const SKILLS: Skill[] = [
 // --- Languages ---
  { name: 'Python', level: 5, category: 'Languages' },
  { name: 'JavaScript', level: 4, category: 'Languages' },
  { name: 'HTML5', level: 5, category: 'Languages' },
  { name: 'CSS3', level: 5, category: 'Languages' },
  { name: 'Java', level: 4, category: 'Languages' },
  // --- Frameworks & Libraries ---
  { name: 'Django', level: 5, category: 'Frameworks & Libraries' },
  { name: 'Django REST Framework', level: 4, category: 'Frameworks & Libraries' },
  { name: 'Vue.js', level: 4, category: 'Frameworks & Libraries' },
  { name: 'Spring Boot', level: 4, category: 'Frameworks & Libraries' },
  { name: 'Bootstrap', level: 4, category: 'Frameworks & Libraries' },
  // --- Databases ---
  { name: 'PostgreSQL', level: 4, category: 'Databases' },
  { name: 'MySQL', level: 3, category: 'Databases' },
  // --- Cloud & DevOps ---
  { name: 'Docker', level: 1, category: 'Cloud & DevOps' },
  // --- API & Integration ---
  { name: 'REST API Design & Development', level: 4, category: 'API & Integration' },
  { name: 'AJAX', level: 4, category: 'API & Integration' },
  { name: 'Payment Integration', level: 4, category: 'API & Integration' },
  { name: 'OAuth2', level: 3, category: 'API & Integration' },
  // --- Development Practices ---
  { name: 'Agile Methodologies', level: 4, category: 'Development Practices' },
  { name: 'Requirements Analysis', level: 4, category: 'Development Practices' },
  { name: 'Code Review', level: 4, category: 'Development Practices' },
  { name: 'Technical Documentation', level: 3, category: 'Development Practices' },
  { name: 'System Design', level: 4, category: 'Development Practices' },
  // --- Soft Skills ---
  { name: 'Stakeholder Management', level: 4, category: 'Soft Skills' },
];

export const CERTIFICATES: Certificate[] = [
  { title: "NQF LEVEL 5 in Systems Development", issuer: "WeThinkCode", year: "2022" },
  { title: "Certificate in Network Support", issuer: "MegaTraining", year: "2016" },
  { title: "MCSA: Windows Server 2012 (Configuring)", issuer: "Microsoft", year: "2016" },
  { title: "CompTIA N+", issuer: "CompTIA", year: "2016" },
  { title: "CompTIA A+", issuer: "CompTIA", year: "2016" },
];
