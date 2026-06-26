export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillSet {
  languages: SkillItem[];
  webTech: SkillItem[];
  dataTools: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github: string;
  featured: boolean;
  award?: string;
  accent: string;
  category: string[];
}

export interface AchievementItem {
  icon: string;
  title: string;
  detail: string;
  extra: string;
  accent: string;
  counter?: boolean;
  counterValue?: number;
  link?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
  type: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field?: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
  scorePercent: number;
  accentColor: string;
}

export const PERSONAL = {
  name: "Tejassver Rishi S",
  titleLine1: "Computer Science Engineering Student",
  titleLine2: "Full Stack Developer & AI Builder",
  college: "Chennai Institute of Technology",
  cgpa: "8.52",
  email: "tejassverrishis.cse2025@citchennai.net",
  phone: "+91-7397355281",
  location: "Chennai, Tamil Nadu, India",
  github: "https://github.com/tejassverrishi67",
  linkedin: "https://www.linkedin.com/in/tejassver-rishi-549818376/",
  leetcode: "https://leetcode.com/u/tejassverrishi67/",
  leetcodeCount: 250,
  award: "Best UI/UX Design — Devlynix Buildathon 2.0",
};

export const TYPEWRITER_STRINGS = [
  "full-stack web apps",
  "AI-powered tools",
  "immersive UIs",
  "solutions that matter",
  "250+ LeetCode solutions",
];

export const SKILLS: SkillSet = {
  languages: [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "C++", level: 78 },
    { name: "JavaScript", level: 82 },
    { name: "PL/SQL", level: 65 },
  ],
  webTech: [
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "Django", level: 68 },
    { name: "React", level: 88 },
  ],
  dataTools: [
    { name: "MongoDB", level: 78 },
    { name: "MySQL", level: 80 },
    { name: "Supabase", level: 72 },
    { name: "Git", level: 88 },
    { name: "Vercel", level: 85 },
  ],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "neuromap",
    title: "NeuroMap",
    subtitle: "AI-Powered Visual Second Brain",
    description: "A knowledge graph that thinks. Built with cutting-edge React Flow and AI integration, NeuroMap lets you visually connect ideas, memories, and concepts into a dynamic, interactive second brain. The project that won the crowd.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind", "React Flow", "shadcn/ui", "Vercel"],
    github: "https://github.com/tejassverrishi67",
    featured: true,
    award: "🏆 BEST UI/UX DESIGN — DEVLYNIX BUILDATHON 2.0",
    accent: "#fbbf24",
    category: ["AI/ML", "Full Stack"],
  },
  {
    id: "queue-care",
    title: "Queue Care",
    subtitle: "Real-Time Clinic Queue Management",
    description: "Zero wait time uncertainty. A live-updating clinic queue platform powered by Supabase Realtime. Patients know their spot. Doctors stay efficient. Everyone wins.",
    tags: ["Supabase", "Real-time", "JavaScript", "Dashboard"],
    github: "https://github.com/tejassverrishi67",
    featured: false,
    accent: "#00d4ff",
    category: ["Real-time", "Full Stack"],
  },
  {
    id: "medcover",
    title: "MedCover — SocioAI",
    subtitle: "AI-Powered Healthcare Decision Platform",
    description: "When medical answers matter most, MedCover delivers. An AI chatbot + recommendation engine that guides healthcare decisions with empathy and intelligence.",
    tags: ["AI", "Chatbot", "Healthcare", "NLP", "Decision Support"],
    github: "https://github.com/tejassverrishi67",
    featured: false,
    accent: "#a855f7",
    category: ["AI/ML"],
  },
  {
    id: "aptitude",
    title: "Aptitude Exam Digitalization",
    subtitle: "Online Examination System",
    description: "Turning pencil-and-paper aptitude tests into fast, accessible, digital experiences. Clean UI that gets out of the way and lets candidates focus.",
    tags: ["Frontend", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/tejassverrishi67",
    featured: false,
    accent: "#7c3aed",
    category: ["Full Stack"],
  },
  {
    id: "airline",
    title: "Airline Reservation System",
    subtitle: "Full Reservation Management",
    description: "Full reservation management — booking, seat selection, cancellation, and status tracking. Python and MySQL working in harmony.",
    tags: ["Python", "MySQL", "CLI", "Database Design"],
    github: "https://github.com/tejassverrishi67",
    featured: false,
    accent: "#fbbf24",
    category: ["Python"],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    icon: "🏆",
    title: "Best UI/UX Design Award",
    detail: "Devlynix Buildathon 2.0",
    extra: "Competed against 50+ teams — won for NeuroMap",
    accent: "#fbbf24",
  },
  {
    icon: "</>",
    title: "250+ LeetCode Problems Solved",
    detail: "Data Structures & Algorithms",
    extra: "leetcode.com/tejassverrishi67",
    accent: "#00d4ff",
    counter: true,
    counterValue: 250,
    link: "https://leetcode.com/u/tejassverrishi67/",
  },
  {
    icon: "🔬",
    title: "Data Science Internship",
    detail: "Thiranex — May 2026 to Jun 2026",
    extra: "Preprocessing, ML fundamentals, analytical workflows",
    accent: "#a855f7",
  },
  {
    icon: "🎓",
    title: "Certificate of Excellence",
    detail: "Outstanding Student of Grade XII",
    extra: "Velammal Vidhyashram, Surapet",
    accent: "#fbbf24",
  },
  {
    icon: "🐍",
    title: "Python Essentials-I Certification",
    detail: "Cisco Networking Academy",
    extra: "Foundational Python programming certification",
    accent: "#00d4ff",
  },
  {
    icon: "⚡",
    title: "Active Hackathon Participant",
    detail: "Multiple competitions",
    extra: "Regular competitor in national-level hackathons",
    accent: "#a855f7",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "thiranex",
    role: "Data Science Intern",
    company: "Thiranex",
    duration: "May 2026 – Jun 2026",
    description: "Worked on data preprocessing pipelines, ML model fundamentals, and analytical workflows. Gained hands-on experience with real-world datasets and collaborative data engineering.",
    skills: ["Python", "Data Science", "ML", "Analytics"],
    type: "Internship",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "be",
    degree: "B.E. Computer Science Engineering",
    field: "CSE",
    institution: "Chennai Institute of Technology",
    location: "Chennai, Tamil Nadu",
    duration: "2025 – 2029",
    score: "CGPA: 8.52 / 10",
    scorePercent: 85.2,
    accentColor: "linear-gradient(to right, #00d4ff, #7c3aed)",
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (XII)",
    institution: "Velammal Vidhyashram, Surapet",
    location: "Surapet, Chennai",
    duration: "2024 – 2025",
    score: "Score: 91.6%",
    scorePercent: 91.6,
    accentColor: "linear-gradient(to right, #7c3aed, #a855f7)",
  },
  {
    id: "ssc",
    degree: "Secondary School Leaving Certificate (X)",
    institution: "Velammal Vidhyashram, Surapet",
    location: "Surapet, Chennai",
    duration: "2022 – 2023",
    score: "Score: 92.2%",
    scorePercent: 92.2,
    accentColor: "linear-gradient(to right, #a855f7, #fbbf24)",
  },
];

export const SOFT_SKILLS: string[] = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Analytical Thinking",
  "Collaboration",
  "Continuous Learning"
];

export const PERSONAL_INFO = PERSONAL;
export type Education = EducationItem;
export const EDUCATION_LIST = EDUCATION;
export const EXPERIENCES = EXPERIENCE;

