export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  category: 'AI/ML' | 'Full Stack' | 'Real-time' | 'Python' | 'Frontend' | string;
  featured: boolean;
  award?: string;
  github?: string;
  demo?: string;
  accentColor: string;
}

export interface Achievement {
  id: string;
  icon: 'trophy' | 'code' | 'lab' | 'cap' | 'python' | 'lightning';
  title: string;
  detail: string;
  extra: string;
  accent: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  location: string;
  score: string;
  scorePercent: number; // For rendering progress bar percentage
  duration: string;
  accentColor: string;
}

export const PERSONAL_INFO = {
  fullName: "Tejassver Rishi S",
  title1: "Computer Science Engineering Student",
  title2: "Full Stack Developer & AI Builder",
  college: "Chennai Institute of Technology",
  cgpa: "8.52 / 10",
  email: "tejassverrishis.cse2025@citchennai.net",
  phone: "+91-7397355281",
  location: "Chennai, Tamil Nadu, India",
  github: "https://github.com/tejassverrishi67",
  linkedin: "https://www.linkedin.com/in/tejassver-rishi-549818376/",
  leetcode: "https://leetcode.com/u/tejassverrishi67/",
  leetcodeCount: "250+",
  award: "Best UI/UX Design — Devlynix Buildathon 2.0"
};

export const PROJECTS: Project[] = [
  {
    id: "neuromap",
    title: "NeuroMap",
    subtitle: "AI-Powered Visual Second Brain",
    description: "A knowledge graph that thinks. Built with cutting-edge React Flow and AI integration, NeuroMap lets you visually connect ideas, memories, and concepts into a dynamic, interactive second brain. The project that won the crowd.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind", "React Flow", "shadcn/ui", "Vercel"],
    category: "AI/ML",
    featured: true,
    award: "🏆 BEST UI/UX DESIGN — DEVLYNIX BUILDATHON 2.0",
    github: "https://github.com/tejassverrishi67/neuromap",
    demo: "https://neuromap.vercel.app",
    accentColor: "--neon-blue"
  },
  {
    id: "queue-care",
    title: "Queue Care",
    subtitle: "Real-Time Clinic Queue Management",
    description: "Zero wait time uncertainty. A live-updating clinic queue platform powered by Supabase Realtime. Patients know their spot. Doctors stay efficient. Everyone wins.",
    tags: ["Supabase", "Real-time", "JavaScript", "Dashboard"],
    category: "Real-time",
    featured: false,
    github: "https://github.com/tejassverrishi67/queue-care",
    accentColor: "--neon-green"
  },
  {
    id: "medcover",
    title: "MedCover — SocioAI",
    subtitle: "AI-Powered Healthcare Decision Platform",
    description: "When medical answers matter most, MedCover delivers. An AI chatbot + recommendation engine that guides healthcare decisions with empathy and intelligence.",
    tags: ["AI", "Chatbot", "Healthcare", "NLP", "Decision Support"],
    category: "AI/ML",
    featured: false,
    github: "https://github.com/tejassverrishi67/medcover",
    accentColor: "--neon-violet"
  },
  {
    id: "aptitude-system",
    title: "Aptitude Exam Digitalization",
    description: "Turning pencil-and-paper aptitude tests into fast, accessible, digital experiences. Clean UI that gets out of the way and lets candidates focus.",
    tags: ["Frontend", "HTML", "CSS", "JavaScript"],
    category: "Frontend",
    featured: false,
    github: "https://github.com/tejassverrishi67/aptitude-system",
    accentColor: "--neon-blue"
  },
  {
    id: "airline-system",
    title: "Airline Reservation System",
    description: "Full reservation management — booking, seat selection, cancellation, and status tracking. Python and MySQL working in harmony.",
    tags: ["Python", "MySQL", "CLI", "Database Design"],
    category: "Python",
    featured: false,
    github: "https://github.com/tejassverrishi67/airline-reservation",
    accentColor: "--neon-gold"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "uiux-award",
    icon: "trophy",
    title: "Best UI/UX Design Award",
    detail: "Devlynix Buildathon 2.0",
    extra: "Competed against 50+ teams — won for NeuroMap",
    accent: "gold"
  },
  {
    id: "leetcode",
    icon: "code",
    title: "250+ LeetCode Problems Solved",
    detail: "Data Structures & Algorithms",
    extra: "Active problem solver with proficiency in various topics",
    accent: "blue"
  },
  {
    id: "internship",
    icon: "lab",
    title: "Data Science Internship",
    detail: "Thiranex — May 2026 to Jun 2026",
    extra: "Preprocessing, ML fundamentals, analytical workflows",
    accent: "violet"
  },
  {
    id: "excellence",
    icon: "cap",
    title: "Certificate of Excellence",
    detail: "Outstanding Student of Grade XII",
    extra: "Velammal Vidhyashram, Surapet",
    accent: "gold"
  },
  {
    id: "python-cert",
    icon: "python",
    title: "Python Essentials-I Certification",
    detail: "Cisco Networking Academy",
    extra: "Foundational Python programming certification",
    accent: "blue-green"
  },
  {
    id: "hackathon",
    icon: "lightning",
    title: "Active Hackathon Participant",
    detail: "Multiple competitions",
    extra: "Regular competitor in national-level hackathons",
    accent: "purple"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "thiranex",
    company: "Thiranex",
    role: "Data Science Intern",
    duration: "May 2026 — Jun 2026",
    description: "Worked with structured datasets, preprocessing pipelines, and ML fundamentals. Built analytical workflows and collaborated on project-based learning initiatives.",
    skills: ["Data Science", "Python", "ML", "Analytics"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "be",
    degree: "Bachelor of Engineering",
    field: "Computer Science Engineering",
    institution: "Chennai Institute of Technology",
    location: "Chennai, Tamil Nadu",
    score: "CGPA: 8.52 / 10",
    scorePercent: 85.2,
    duration: "2025 — 2029",
    accentColor: "linear-gradient(135deg, var(--neon-blue) 0%, var(--neon-violet) 100%)"
  },
  {
    id: "hsc",
    degree: "HSC (Grade XII)",
    institution: "Velammal Vidhyashram",
    location: "Surapet, Chennai",
    score: "Score: 91.6%",
    scorePercent: 91.6,
    duration: "Completed 2025",
    accentColor: "linear-gradient(135deg, var(--neon-violet) 0%, var(--neon-purple) 100%)"
  },
  {
    id: "ssc",
    degree: "SSC (Grade X)",
    institution: "Velammal Vidhyashram",
    location: "Surapet, Chennai",
    score: "Score: 92.2%",
    scorePercent: 92.2,
    duration: "Completed 2023",
    accentColor: "linear-gradient(135deg, var(--neon-blue) 0%, var(--neon-pink) 100%)"
  }
];

export const SOFT_SKILLS = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Analytical Thinking",
  "Collaboration",
  "Continuous Learning"
];

export const SKILL_CATEGORIES = [
  {
    title: "LANGUAGES",
    icon: "code",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "C++", level: 78 },
      { name: "JavaScript", level: 82 },
      { name: "PL/SQL", level: 65 }
    ]
  },
  {
    title: "WEB TECH",
    icon: "globe",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Django", level: 68 }
    ]
  },
  {
    title: "DATA & TOOLS",
    icon: "database",
    skills: [
      { name: "MongoDB", level: 78 },
      { name: "MySQL", level: 80 },
      { name: "Supabase", level: 72 },
      { name: "Git", level: 88 },
      { name: "Vercel", level: 85 }
    ]
  }
];
