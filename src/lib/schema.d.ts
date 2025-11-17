export interface Person {
  name: string;
  title: string;
  location: string;
  contacts: {
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    github: string;
  };
  summary: string;
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
  gpa: string;
}

export interface Skills {
  programming: string[];
  web: string[];
  databases: string[];
  operatingSystems: string[];
  versionControl: string[];
  securityTools: string[];
  expertise: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  tags: string[];
}

export interface Research {
  title: string;
  summary: string;
  tags: string[];
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Reference {
  name: string;
  role: string;
  email: string;
  phone: string;
}

export interface PortfolioContent {
  person: Person;
  education: Education[];
  skills: Skills;
  projects: Project[];
  research: Research[];
  ctfAchievements: string[];
  professionalDevelopment: string[];
  languages: Language[];
  softSkills: string[];
  references: Reference[];
}
