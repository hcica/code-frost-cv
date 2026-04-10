export const personalInfo = {
  name: "Mohammed Thanfees",
  title: "DevOps, DevSecOps & Security Engineering Undergraduate",
  tagline: "Building Secure Infrastructure. Automating the Future.",
  address: "168/5 Welivita Rd, Malabe, Colombo",
  email: "thanfees@gmail.com",
  linkedin: "https://www.linkedin.com/in/thanfees/",
  github: "https://github.com/Thanfees",
  phone: "+94 717464735",
  summary:
    "Results-driven Information Technology undergraduate specializing in Linux system administration and cloud-based infrastructure. Experienced in managing and optimizing RHEL-compatible environments, including Rocky Linux, with a strong focus on performance, security, and uptime. Skilled in designing and implementing automated CI/CD pipelines using Jenkins and GitHub Actions to streamline software delivery. Proficient in Docker containerization, infrastructure automation with Python and Bash scripting, and deployment optimization using Nginx and PM2. Demonstrated ability to troubleshoot and maintain live VPS environments, ensuring high availability and system reliability. Solid foundation in AWS cloud services, DevOps practices, and scalable infrastructure design.",
};

export const experience = [
  {
    role: "WordPress Web Designer & Developer",
    company: "Oquraa (PVT) LTD.",
    period: "Previous",
    highlights: [
      "Designed, developed, and deployed custom responsive WordPress websites tailored to client requirements.",
      "Managed overall website lifecycles, including maintenance, optimization, and troubleshooting.",
    ],
  },
  {
    role: "Intern – Cyber Security",
    company: "PineappleAI (PVT) LTD.",
    period: "Internship",
    highlights: [
      "Designed and maintained secure CI/CD pipelines using Jenkins and GitHub Actions, embedding security controls into the SDLC.",
      "Performed web and mobile application security testing, including vulnerability assessment, secure infrastructure maintenance, and remediation validation.",
      "Implemented Docker-based containerization for secure, scalable, and consistent application deployments.",
      "Managed server hardening by configuring Fail2Ban and privilege management to minimize security risks.",
      "Configured Cloudflare security services, DNS management, DDoS protection, and customized email routing systems.",
    ],
  }

];

export const education = [
  {
    degree: "B.Sc. (Hons) in Information Technology",
    specialization: "Specialising in Cyber Security",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    location: "Malabe, Sri Lanka",
    period: "2022 – Present",
    gpa: "3.00",
  },
  {
    degree: "Advanced Level – Physical Science",
    institution: "Mn/Al-Azar National School",
    period: "2019",
    results: "Mathematics: B | Physics: C | Chemistry: S",
  },
  {
    degree: "Ordinary Level",
    institution: "Mn/Al-Azar National School",
    period: "2016",
    results: "8A | English: C",
  },
];

export const projects = [
  {
    title: "Automate Deployment Webhook",
    subtitle: "Open-Source CI/CD Tool",
    description:
      "Engineered and open-sourced a lightweight automated deployment server to streamline CI/CD pipelines for small server environments and VPS infrastructure. Developed custom webhooks and deployment scripts using Python and Flask to automatically trigger application updates upon repository changes, eliminating manual deployment overhead.",
    technologies: ["Python", "Flask", "Bash", "Git", "Nginx"],
    category: "DevOps",
    icon: "🚀",
  },
  {
    title: "Infrastructure Auditing & Security Automation",
    subtitle: "Security Tooling",
    description:
      "Conducted comprehensive security audits on web applications and system executables (ELF/EXE), identifying vulnerabilities and providing structured remediation reports. Engineered automated Bash scripts to streamline infrastructure reconnaissance, enabling efficient data collection, output parsing, and system state analysis for proactive threat mitigation.",
    technologies: ["Bash", "Python", "Linux", "Security Auditing"],
    category: "Security",
    icon: "🔍",
  },
  {
    title: "Penetration Testing & PoC Reports",
    subtitle: "Bug Hunting & Vulnerability Research",
    description:
      "Identified and exploited vulnerabilities in web applications, Android applications, and user programs including ELF and EXE binaries. Created detailed Proof of Concept (PoC) reports with structured remediation guidance submitted according to responsible disclosure criteria.",
    technologies: ["Web Pentesting", "Android Security", "Reverse Engineering", "Report Writing"],
    category: "Security",
    icon: "🛡️",
  },
  {
    title: "Detection & Defense Against AI-Powered Malware",
    subtitle: "Research Paper – FinTech Security",
    description:
      "Conducted research on AI-powered malware targeting FinTech platforms, analyzing sophisticated attack vectors, obfuscation techniques, anomaly behaviors, and evasion mechanisms. Focused on developing advanced detection and defense strategies to safeguard critical financial data.",
    technologies: ["AI/ML", "Malware Analysis", "FinTech Security", "Research"],
    category: "Research",
    icon: "🤖",
  },
  {
    title: "AES & RSA Cryptographic Implementation",
    subtitle: "C Programming",
    description:
      "Developed secure cryptographic solutions by implementing AES and RSA algorithms in C, focusing on data encryption, decryption, and secure key management to ensure confidentiality and integrity of sensitive information.",
    technologies: ["C", "AES", "RSA", "Cryptography"],
    category: "Security",
    icon: "🔐",
  },
  {
    title: "ISO 27001:2022 Interactive Toolkit",
    subtitle: "Security Awareness Platform",
    description:
      "Designed an interactive web-based toolkit to educate SLT employees on ISO 27001:2022 policies through real-world scenarios and quizzes, enhancing understanding of information security management and compliance requirements.",
    technologies: ["Web Development", "ISO 27001", "Security Awareness", "UX Design"],
    category: "Security",
    icon: "📋",
  },
  {
    title: "Risk Management Assessment – Hemas Hospital",
    subtitle: "OCTAVE Framework",
    description:
      "Conducted a comprehensive risk assessment at Hemas Hospital using the OCTAVE framework, aligning with organizational objectives and enhancing the hospital's information security posture through structured threat and risk analysis.",
    technologies: ["OCTAVE", "Risk Assessment", "ISO Standards", "Documentation"],
    category: "Research",
    icon: "📊",
  },
  {
    title: "Android Lockdown Mode",
    subtitle: "Kernel-Level Security Hardening",
    description:
      "Implemented Android device lockdown by restricting unauthorized access to system features using Magisk and APatch root solutions. Forced selective app restrictions, cut off entire system network, enforced 2G-only mode, and disabled microphone, camera, and GPS permissions at the kernel level to prevent data collection and malicious activities.",
    technologies: ["Android", "Magisk", "APatch", "Kernel Integration", "Root"],
    category: "Security",
    icon: "📱",
  },
  {
    title: "Online Fitness Training System",
    subtitle: "Full-Stack Web Application",
    description:
      "Developed a web-based fitness training management system with trainer booking, payment processing, training review, and reservation validation features.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    category: "Development",
    icon: "💪",
  },
];

export const skills = {

  "Security Testing": ["Nmap", "Burpsuite", "Metasploit", "Blood Hound", "Wireshark", "OWASP ZAP", "SQLMap", "IDA Pro"],
  "CI/CD & Automation": ["Jenkins", "GitHub Actions", "Terraform", "Git", "GitHub"],
  "Operating Systems": ["Rocky Linux", "Kali Linux", "macOS", "Windows", "Fail2Ban"],
  "Web Servers & Process Mgmt": ["Nginx", "PM2"],
  "Monitoring & Observability": ["Grafana", "Kibana"],
  "Programming & Scripting": ["Bash", "Python", "JavaScript", "Java", "C++", "C"],
  "Frameworks & Modern Workflows": ["MERN Stack", "Flutter", "AI-Assisted Vibe Coding", "WordPress", "AI/ML Model Training"],
  "Database Management": ["MySQL", "MariaDB", "MongoDB"],
};

export const certifications = [
  { name: "Cloud Fundamentals (AWS)", icon: "☁️" },
  { name: "TryHackMe – Top 8%", icon: "🏆" },
  { name: "Linux Administration", icon: "🐧" },
  { name: "HackerRank Certified", icon: "💻" },
];

export const softSkills = [
  "Problem-Solving",
  "Team Collaboration",
  "Effective Communication",
  "Decision-Making Confidence",
  "Root Cause Analysis",
];

export const languages = [
  { name: "Tamil", level: "First Language", proficiency: 100 },
  { name: "English", level: "Intermediate", proficiency: 65 },
  { name: "Sinhala", level: "Intermediate", proficiency: 60 },
];

export const references = [
  {
    name: "Mr. Kavinga Yapa Abeywardena",
    role: "Senior Lecturer",
    institution: "SLIIT, Malabe Campus, Sri Lanka",
    email: "kavinga.y@sliit.lk",
    phone: "+94 11 754 3935",
  },
  {
    name: "Mr. Laksan Saravanabavan",
    role: "Founder, PineappleAI | Magicktech QA Engineer",
    institution: "Jaffna, Sri Lanka",
    email: "ceo@pineappleai.cloud",
    phone: "+94 77 814 2648",
  },
];
