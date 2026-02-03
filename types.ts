
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
  keyFeatures: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  type: string;
  responsibilities: string[];
  skills: string[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'AI/ML' | 'Tools';
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}
