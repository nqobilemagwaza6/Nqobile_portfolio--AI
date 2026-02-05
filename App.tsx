
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code, 
  Cpu, 
  Terminal, 
  FileText, 
  Award, 
  Download,
  Briefcase,
  User,
  Layout,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILLS, CERTIFICATES } from './data';
import { Project, Experience, Skill, Certificate } from './types';

// Components
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md py-4 shadow-xl border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-heading gradient-text">NM.</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-500/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 p-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-slate-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
            <Cpu size={14} />
            <span>AI/ML Software Engineer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
            I build <span className="gradient-text">intelligent</span> systems that scale.
          </h1>
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-xl shadow-indigo-500/20 flex items-center space-x-2">
              <span>View Portfolio</span>
              <ChevronRight size={18} />
            </a>
            <div className="flex space-x-4">
              <a href={PERSONAL_INFO.github} className="p-4 rounded-xl glass-card hover:bg-white/5 transition-colors">
                <Github size={24} />
              </a>
              <a href={PERSONAL_INFO.linkedin} className="p-4 rounded-xl glass-card hover:bg-white/5 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="aspect-square rounded-3xl overflow-hidden glass-card p-4 rotate-3 transform transition-transform hover:rotate-0">
            <img src="./assets/Nqobile Magwaza.png" alt="Profile" className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 glass-card rounded-2xl animate-bounce">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold">Open to Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-16 space-y-4">
    <h3 className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-sm">{subtitle}</h3>
    <h2 className="text-4xl md:text-5xl font-bold font-heading">{title}</h2>
  </div>
);

const About: React.FC = () => (
  <section id="about" className="py-24 bg-slate-900/50">
    <div className="container mx-auto px-6">
      <SectionHeading title="Passionate about AI-driven solutions." subtitle="Biography" />
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
        <p className="text-xl text-slate-300 leading-relaxed">
            As a 1997-born professional matriculated in 2014, I have spent the last decade building a strong foundation in systems development. My journey began with a Certificate in Network Support and evolved into a deep dive into full-stack development through WeThinkCode.
          </p>
          <p className="text-xl text-slate-300 leading-relaxed">
            I am dedicated to bridging the gap between traditional software engineering and the rapidly evolving field of Artificial Intelligence. My unique background in networking and systems development allows me to architect solutions that are not only intelligent but also infrastructure-aware, focusing on building intelligent, scalable AI/ML systems.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="p-6 rounded-2xl glass-card text-center group hover:border-indigo-500/50 transition-all">
              <h4 className="text-3xl font-bold text-indigo-400 mb-1">2+</h4>
              <p className="text-xs uppercase text-slate-500 tracking-wider">Years Exp.</p>
            </div>
            <div className="p-6 rounded-2xl glass-card text-center group hover:border-indigo-500/50 transition-all">
              <h4 className="text-3xl font-bold text-indigo-400 mb-1">5+</h4>
              <p className="text-xs uppercase text-slate-500 tracking-wider">Proj. Done</p>
            </div>
            <div className="p-6 rounded-2xl glass-card text-center group hover:border-indigo-500/50 transition-all">
              <h4 className="text-3xl font-bold text-indigo-400 mb-1">10+</h4>
              <p className="text-xs uppercase text-slate-500 tracking-wider">Tech Stack</p>
            </div>
          </div>
        </div>
        <div className="glass-card p-8 rounded-2xl h-fit border-l-4 border-l-indigo-500">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FileText size={20} className="text-indigo-400" />
            Quick Details
          </h4>
          <ul className="space-y-4">
            <li className="flex flex-col">
              <span className="text-xs text-slate-500 uppercase tracking-widest">Full Name</span>
              <span className="text-slate-200">{PERSONAL_INFO.name}</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xs text-slate-500 uppercase tracking-widest">Education</span>
              <span className="text-slate-200 text-sm">NQF Level 5 Systems Dev</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xs text-slate-500 uppercase tracking-widest">Languages</span>
              <span className="text-slate-200">English, Zulu, Xhosa</span>
            </li>
            <li className="flex flex-col pt-4 border-t border-white/5">
              <a href={PERSONAL_INFO.resumeUrl} className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 transition-colors">
                Download Resume <Download size={16} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group rounded-3xl overflow-hidden glass-card hover:border-indigo-500/30 transition-all duration-500 flex flex-col">
    <div className="relative h-64 overflow-hidden">
      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
        <div className="flex gap-2 flex-wrap">
          {project.techStack.slice(0, 3).map(tech => (
            <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <h4 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h4>
      <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>
      <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
        <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-semibold hover:text-indigo-400 transition-colors">
          <Github size={18} /> Code
        </a>
        <a href={project.demoUrl} className="flex items-center gap-2 text-sm font-semibold hover:text-indigo-400 transition-colors">
          Demo <ExternalLink size={18} />
        </a>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <SectionHeading title="Featured Projects" subtitle="Portfolio Showcase" />
        <a href={PERSONAL_INFO.github} className="text-indigo-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all mb-16 md:mb-0">
          View all repositories <ChevronRight size={20} />
        </a>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

const ExperienceTimeline: React.FC = () => (
  <section id="experience" className="py-24 bg-slate-900/50">
    <div className="container mx-auto px-6">
      <SectionHeading title="Professional Journey" subtitle="Career History" />
      <div className="space-y-12 max-w-4xl mx-auto">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0">
            {/* Connector Line */}
            {idx !== EXPERIENCES.length - 1 && (
              <div className="absolute left-[3px] md:left-1/2 top-8 bottom-0 w-[2px] bg-indigo-500/20 md:-ml-[1px]"></div>
            )}
            
            <div className={`flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.8)] md:-ml-1 z-10"></div>
              
              <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-right'}`}>
                <div className="glass-card p-8 rounded-3xl hover:border-indigo-500/50 transition-all group">
                  <div className={`flex flex-col ${idx % 2 !== 0 && 'md:items-end'}`}>
                    <span className="text-indigo-400 font-bold mb-2 text-sm">{exp.period}</span>
                    <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                    <p className="text-slate-400 font-medium mb-4">{exp.company} • {exp.type}</p>
                    <div className={`flex flex-wrap gap-2 mb-6 ${idx % 2 !== 0 && 'md:justify-end'}`}>
                      {exp.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <ul className={`space-y-2 text-slate-400 text-sm list-disc list-inside ${idx % 2 !== 0 && 'md:text-right md:list-none'}`}>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading title="Technical Arsenal" subtitle="Skills & Competencies" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => (
            <div key={category} className="glass-card p-10 rounded-3xl">
              <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                <Terminal size={22} className="text-indigo-400" />
                {category}
              </h4>
              <div className="space-y-8">
                {SKILLS.filter(s => s.category === category).map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-300">{skill.name}</span>
                      <span className="text-xs text-indigo-400 font-bold uppercase tracking-widest">Level {skill.level}/5</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-600 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(79,70,229,0.5)]" 
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationAndCertificates: React.FC = () => (
  <section id="education" className="py-24 bg-slate-900/50">
    <div className="container mx-auto px-6">
      <SectionHeading title="Learning & Growth" subtitle="Education & Certificates" />
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h4 className="text-2xl font-bold flex items-center gap-3 mb-8">
            <Layout size={24} className="text-indigo-400" />
            Tertiary Education
          </h4>
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Code size={120} />
              </div>
              <div className="flex flex-col">
                <span className="text-indigo-400 font-bold mb-2">2021 - 2022</span>
                <h5 className="text-xl font-bold mb-1">NQF LEVEL 5 in Systems Development</h5>
                <p className="text-slate-400">WeThinkCode</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Layout size={120} />
              </div>
              <div className="flex flex-col">
                <span className="text-indigo-400 font-bold mb-2">2016</span>
                <h5 className="text-xl font-bold mb-1">Certificate in Network Support</h5>
                <p className="text-slate-400">MegaTraining</p>
              </div>
              
            </div>
                        <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Layout size={120} />
              </div>
              <div className="flex flex-col">
                <span className="text-indigo-400 font-bold mb-2">2026</span>
                <h5 className="text-xl font-bold mb-1">Artifitail Intelligence Bootcamp</h5>
                <p className="text-slate-400">CAPACITI</p>
              </div>
              
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-2xl font-bold flex items-center gap-3 mb-8">
            <Award size={24} className="text-indigo-400" />
            Certifications Achieved
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATES.slice(2).map((cert, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl hover:border-indigo-500/30 transition-all cursor-default">
                <div className="flex flex-col h-full">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 mb-2">{cert.issuer}</span>
                  <h5 className="font-bold text-slate-200 text-sm leading-snug">{cert.title}</h5>
                  <span className="mt-auto pt-4 text-xs text-slate-500">{cert.year}</span>
                </div>
              </div>
            ))}
            <div className="glass-card p-6 rounded-2xl border-dashed border-white/20 flex flex-col items-center justify-center text-center group hover:border-indigo-500/50 transition-all">
                <p className="text-xs text-slate-500 group-hover:text-indigo-400 transition-colors">Continuing Education</p>
                <p className="text-sm font-bold mt-1">AWS Certified Solutions Architect (In Progress)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CapstoneShowcase: React.FC = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-indigo-600/5 -skew-y-3 transform origin-right"></div>
    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading title="Capstone Showcase" subtitle="Recorded Presentation" />
      <div className="glass-card p-8 md:p-12 rounded-[40px] max-w-6xl mx-auto shadow-2xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-video bg-slate-800 rounded-3xl overflow-hidden relative group cursor-pointer shadow-xl">
            <img src="https://picsum.photos/seed/presentation/1280/720" alt="Video Placeholder" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-indigo-600/40 transform group-hover:scale-110 transition-all">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl backdrop-blur-xl">
               <p className="text-xs font-bold uppercase tracking-widest text-indigo-400">10-Minute Presentation</p>
               <h5 className="text-lg font-bold">Nqobile Magwaza - AI/ML Career Showcase</h5>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-3xl font-bold font-heading">The Future of Intelligent Systems</h4>
              <p className="text-slate-400 leading-relaxed text-lg">
                In this 10-minute deep dive, I explore the technical architecture of my capstone projects, my transition from Systems Development into AI/ML, and my vision for future learning.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Personal Introduction & Technical Background",
                "Deep-dive: Predictive Analytics Architecture",
                "Demonstration: Enterprise Managed Campus",
                "Career Roadmap: AI/ML Specialization"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <button className="px-8 py-4 glass-card hover:bg-white/5 rounded-2xl font-bold flex items-center gap-3 transition-all border-white/10">
                <FileText className="text-indigo-400" />
                View Application Strategy Doc
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact: React.FC = () => (
  <section id="contact" className="py-24 bg-slate-900">
    <div className="container mx-auto px-6">
      <SectionHeading title="Let's build something." subtitle="Contact Me" />
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <p className="text-2xl text-slate-400 leading-relaxed max-w-lg">
            I'm currently looking for new opportunities in <span className="text-white font-bold">AI/ML Software Engineering</span>. If you have a project or a position, let's talk.
          </p>
          <div className="space-y-6">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-3xl glass-card flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg">
                <Mail size={28} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Email Me</p>
                <p className="text-xl font-bold text-slate-200">{PERSONAL_INFO.email}</p>
              </div>
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-3xl glass-card flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg">
                <Phone size={28} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-1">Call Me</p>
                <p className="text-xl font-bold text-slate-200">{PERSONAL_INFO.phone}</p>
              </div>
            </a>
          </div>
          <div className="pt-8 flex gap-6">
            <a href={PERSONAL_INFO.linkedin} className="px-6 py-3 glass-card rounded-2xl flex items-center gap-3 hover:bg-white/5 transition-all">
              <Linkedin size={20} className="text-indigo-400" />
              <span>LinkedIn</span>
            </a>
            <a href={PERSONAL_INFO.github} className="px-6 py-3 glass-card rounded-2xl flex items-center gap-3 hover:bg-white/5 transition-all">
              <Github size={20} className="text-indigo-400" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <div className="glass-card p-10 rounded-[40px]">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-slate-800/50 border border-white/5 rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Email</label>
                <input type="email" placeholder="email@example.com" className="w-full bg-slate-800/50 border border-white/5 rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 ml-1">Message</label>
              <textarea rows={6} placeholder="Tell me about your project..." className="w-full bg-slate-800/50 border border-white/5 rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"></textarea>
            </div>
            <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg transition-all shadow-xl shadow-indigo-600/20 active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-12 bg-slate-950 border-t border-white/5">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-2xl font-bold font-heading gradient-text">NM.</div>
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Nqobile Magwaza. All rights reserved.
      </p>
      <div className="flex gap-8">
        <a href="#about" className="text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors">About</a>
        <a href="#projects" className="text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Projects</a>
        <a href="#" className="text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Privacy</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ExperienceTimeline />
      <Skills />
      <EducationAndCertificates />
      <Contact />
      <Footer />
    </div>
  );
}
