export const portfolioContent = {
  "person": {
    "name": "Mohammed Thanfees",
    "title": "Cyber Security Specialist | Undergraduate",
    "location": "Malabe, Sri Lanka",
    "contacts": {
      "email": "thanfees@gmail.com",
      "phone": "+94-717464735",
      "address": "168/5 Welivita Rd, Malabe",
      "linkedin": "@thanfees",
      "github": "@Thanfees"
    },
    "summary": "Offensive security practitioner focused on web and app pentesting, adversary emulation, and exploit-driven bug bounty work. Combines deep recon, custom tooling, and exploit development to surface high-impact vulnerabilities before attackers do. Delivers concise remediation guidance and partners with engineering to harden modern attack surfaces."
  },
  "education": [
    {
      "institution": "Sri Lanka Institute of Information Technology (SLIIT), Malabe",
      "degree": "B.Sc. (Hons) in Information Technology, Specializing in Cyber Security",
      "dates": "2022 – Present",
      "gpa": "3.00"
    }
  ],
  "skills": {
    "programming": ["Java", "Python", "C++", "C", "JavaScript"],
    "web": ["React.js", "PHP", "HTML", "CSS"],
    "databases": ["MySQL", "SQL", "OracleSQL"],
    "operatingSystems": ["Linux", "macOS", "Windows", "Android"],
    "versionControl": ["GitHub", "Git", "Jenkins"],
    "securityTools": ["Metasploit", "VirusTotal", "Any.run", "Wireshark", "Ghidra", "Burp Suite", "Splunk", "Nmap", "GDB", "Nessus", "Nuclei", "OWASP ZAP", "Amass"],
    "expertise": ["Penetration Testing", "Data Protection & Privacy", "Malware Analysis & Prevention", "Cybersecurity Frameworks"]
  },
  "projects": [
    {
      "title": "Online Fitness Training System",
      "description": "Web platform with trainer booking, payments, training review flow, and reservation validation.",
      "tech": ["HTML", "CSS", "JavaScript", "SQL", "PHP"],
      "tags": ["Web", "Full-stack"]
    },
    {
      "title": "Event Management System",
      "description": "Developed a web-based event management solution with core CRUD and validation.",
      "tech": ["HTML", "CSS", "JavaScript", "SQL", "PHP"],
      "tags": ["Web"]
    },
    {
      "title": "ISO 27001:2022 Learning Toolkit",
      "description": "Interactive web toolkit to educate SLT employees on ISO 27001:2022 policies with scenarios and quizzes.",
      "tech": ["Web"],
      "tags": ["Security", "Training"]
    },
    {
      "title": "AES & RSA in C",
      "description": "Implemented AES and RSA for encryption/decryption with secure key management.",
      "tech": ["C"],
      "tags": ["Cryptography", "Systems"]
    },
    {
      "title": "Risk Management Assessment (Hemas Hospital)",
      "description": "Comprehensive risk assessment using the OCTAVE framework aligned with organizational objectives.",
      "tech": ["OCTAVE"],
      "tags": ["Security", "Governance"]
    },
    {
      "title": "Android Lockdown Mode",
      "description": "Kotlin UI with root access; restricted unauthorized system access using Magisk and Apatch.",
      "tech": ["Kotlin", "Android"],
      "tags": ["Mobile", "Systems"]
    }
  ],
  "research": [
    {
      "title": "Detection and Defense Mechanisms Against AI-Powered Malware in FinTech Platforms",
      "summary": "Analyzed AI-driven attack vectors, obfuscation, anomaly behaviors, and evasion; proposed detection and defense approaches to protect financial data.",
      "tags": ["Security", "AI", "Malware"]
    }
  ],
  "ctfAchievements": [
    "1st Runner-Up at the Cyber Rush CodeJam 2024 (University of Moratuwa) 🥈",
    "1st Runner-Up at CYPHER 3.0 CTF (HashX) 2025 (General Sir John Kotelawala Defence University Inter-University) 🥈"
   
  ],
  "professionalDevelopment": [
    "TryHackMe Rooms",
    "HackTheBox Rooms",
    "Bug Bounty Programs",
    "AWS Fundamentals",
    "Penetration Testing Reports",
    "Automation scripts: bash recon pipelines and parsing from saved outputs"
  ],
  "languages": [
    { "name": "Tamil", "proficiency": "Native" },
    { "name": "English", "proficiency": "Intermediate" },
    { "name": "Sinhala", "proficiency": "Intermediate" }
  ],
  "softSkills": [
    "Problem-solving",
    "Effective communication",
    "Team collaboration",
    "Confident decision-making"
  ],
  "references": [
    {
      "name": "Mr. Kavinga Yapa Abeywardena",
      "role": "Senior Lecturer, SLIIT (Malabe Campus)",
      "email": "kavinga.y@sliit.lk",
      "phone": "+94 11 754 3935"
    },
    {
      "name": "Mr. Kanishka Yapa",
      "role": "Internship Coordinator Lecturer, SLIIT (Malabe Campus)",
      "email": "kanishka.y@sliit.lk",
      "phone": "+94 11 754 4801"
    }
  ],
  "social": {
    // Social feed page removed; keeping structure in case of future use
    "twitter": "@Thanfees_",
    "linkedinPosts": []
  }
} as const;
