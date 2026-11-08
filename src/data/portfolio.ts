export const personalInfo = {
  name: "Japneet Singh",
  title: "Software Developer",
  tagline: "SOFTWARE DEVELOPER / AI ENTHUSIAST / INDIA",
  headline: "Building digital experiences that solve real problems.",
  description:
    "I'm Japneet, a Computer Science undergraduate and software developer passionate about building scalable applications, intelligent systems, and meaningful digital products.",
  location: "Delhi, India",
  degree: "B.Tech Computer Science",
  institution: "GTBIT, GGSIPU",
  graduation: "2027",
  cgpa: "8.81",
  batch: "2023–2027",
  leetcode: "300+",
  phone: "+91 77175 33168",
  email: "japneetsingh1708@gmail.com",
  github: "https://github.com/jpneet",
  linkedin: "https://linkedin.com/in/japneetsingh",
  resumePath: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/jpneet",
    linkedin: "https://linkedin.com/in/japneetsingh",
    email: "japneetsingh1708@gmail.com",
  },
};

export const aboutContent = {
  headline: "Curiosity drives the code. Purpose drives the product.",
  paragraphs: [
    "I'm Japneet Singh, a final-year Computer Science Engineering student at Guru Tegh Bahadur Institute of Technology, affiliated with Guru Gobind Singh Indraprastha University, Delhi.",
    "I enjoy transforming ideas into functional software, developing full-stack applications, and exploring how artificial intelligence can make products more useful.",
    "My primary focus is software development, backend engineering, problem-solving, and building practical AI-powered applications.",
    "Beyond technology, I enjoy exploring new concepts, learning continuously, and taking on challenging problems.",
  ],
};

export const speakerContent = {
  headline:
    "More than building products. I enjoy being part of the conversation.",
  description:
    "Technology is not just about writing code. Communication, sharing ideas, and connecting with people are equally important parts of growth.",
  caption: "Speaker / Host",
};

export interface Project {
  id: number;
  slug: string;
  title: string;
  image: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  liveDemo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "meet-ai",
    title: "Meet AI",
    image: "/meetai.jpg",
    category: "AI / Full-Stack SaaS",
    year: "2026",
    description:
      "An AI-powered video meeting platform that allows users to create and join meetings, interact with an AI meeting agent, and manage meeting recordings and transcripts.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "tRPC",
      "Drizzle",
      "PostgreSQL",
      "Stream Video",
      "Python",
      "FastAPI",
    ],
    features: [
      "Meeting creation and management",
      "Real-time video meetings",
      "Meeting recording and transcription",
      "Python/FastAPI AI meeting agent",
      "Speech-to-text processing",
      "LLM-based reasoning",
      "Text-to-speech",
      "Stream webhooks",
      "Agent workflow management",
      "Configurable agent personas",
      "Protected routes and secure recording downloads",
    ],
    github: "https://github.com/jpneet/MeetAi",
    liveDemo: "https://meet-ai-drab.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    slug: "ai-ugc-ads",
    title: "AI UGC Ads SaaS",
    image: "/ai ugc saas.jpg",
    category: "AI / SaaS / Full-Stack Development",
    year: "2026",
    description:
      "An AI-powered SaaS platform that transforms user prompts and uploaded assets into UGC-style advertisement creatives using generative AI.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Cloudinary",
      "Sentry",
    ],
    features: [
      "Responsive dashboard",
      "AI-powered creative generation",
      "Asset uploads",
      "Project management",
      "REST APIs",
      "Authentication using Clerk",
      "Cloudinary media storage",
      "Credit management",
      "Monitoring and error tracking",
      "Asynchronous generation workflows",
    ],
    github: "https://github.com/jpneet/AI-UGC-ads-SAAS",
    liveDemo: "https://ai-ugc-ads-saas-jet.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    slug: "cmapss-engine",
    title: "CMAPSS Engine RUL Prediction",
    image: "/cmapss rul prediction.jpg",
    category: "Machine Learning / Predictive Analytics",
    year: "2026",
    description:
      "An end-to-end predictive maintenance pipeline using NASA's CMAPSS dataset to estimate the Remaining Useful Life of aircraft engines using sensor measurements.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
    ],
    features: [
      "Analysis of 20+ sensor features",
      "Feature engineering",
      "Data preprocessing and normalization",
      "Correlation analysis",
      "Random Forest, XGBoost, and LightGBM evaluation",
      "Best Random Forest RMSE: 16.99",
      "MAE: 12.30",
      "R²: 0.83",
      "Engine health classification with 86% accuracy",
    ],
    github:
      "https://github.com/jpneet/CMAPSS-Engine-Remaining-Useful-Life-Prediction",
    featured: true,
  },
  {
    id: 4,
    slug: "movie-recommendation",
    title: "Movie Recommendation System",
    image: "/movie recommendation.jpg",
    category: "Machine Learning / Recommendation Systems",
    year: "2026",
    description:
      "A machine learning-based movie recommendation system designed to suggest relevant movies based on user preferences and similarity between movie features.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
    ],
    features: [
      "Movie data preprocessing",
      "Exploratory data analysis",
      "Feature extraction",
      "Content-based filtering",
      "Movie similarity calculation",
      "Personalized movie recommendations",
    ],
    github: "",
    featured: true,
  },
  {
    id: 5,
    slug: "ai-voice-assistant",
    title: "AI Voice Agent",
    image: "/ai voice agent.jpg",
    category: "Artificial Intelligence / Python",
    year: "2026",
    description:
      "An AI-powered voice assistant designed to interact with users through voice-based commands and intelligent responses.",
    technologies: [
      "Python",
      "Speech Recognition",
      "pyttsx3",
      "OpenAI API",
    ],
    features: [
      "Voice command recognition",
      "AI-powered conversational responses",
      "Text-to-speech output",
      "Natural language understanding",
      "Task automation",
    ],
    github: "https://github.com/jpneet/AI-Voice-Assistant",
    featured: false,
  },
  // {
  //   id: 6,
  //   slug: "campus-placement",
  //   title: "Campus Placement Prediction",
  //   category: "Machine Learning / Predictive Analytics",
  //   year: "2026",
  //   description:
  //     "A machine learning project focused on analyzing student-related features and predicting campus placement outcomes.",
  //   technologies: [
  //     "Python",
  //     "Pandas",
  //     "NumPy",
  //     "Scikit-learn",
  //     "Matplotlib",
  //     "Seaborn",
  //   ],
  //   features: [
  //     "Exploratory data analysis",
  //     "Feature engineering and preprocessing",
  //     "Multiple classification algorithms",
  //     "Model evaluation and comparison",
  //     "Placement outcome prediction",
  //   ],
  //   github: "https://github.com/jpneet/Campus-placement-prediction",
  //   featured: false,
  // },
  // {
  //   id: 7,
  //   slug: "gym-website",
  //   title: "Gym Website",
  //   category: "Web Development / Frontend",
  //   year: "2025–2026",
  //   description:
  //     "A responsive gym website designed to showcase fitness services, present offerings, and provide an engaging user experience.",
  //   technologies: [
  //     "HTML5",
  //     "CSS3",
  //     "JavaScript",
  //     "Responsive Design",
  //   ],
  //   features: [
  //     "Hero section with gym branding",
  //     "Programs and services showcase",
  //     "Membership plans",
  //     "Responsive mobile design",
  //     "Smooth animations",
  //   ],
  //   github: "https://github.com/jpneet/gym-website",
  //   featured: false,
  // },
];

export const skills = {
  "Programming Languages": ["C++", "Python", "JavaScript", "SQL"],
  Frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Databases: ["PostgreSQL", "Prisma", "Drizzle ORM"],
  "Developer Tools": ["Git", "GitHub", "Vercel"],
  "Core Computer Science": [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
  ],
};

export const education = [
  {
    period: "2023–2027",
    degree: "B.Tech Computer Science and Engineering",
    institution: "Guru Tegh Bahadur Institute of Technology",
    university: "Guru Gobind Singh Indraprastha University, Delhi",
    score: "8.81 CGPA",
  },
  {
    period: "2022",
    degree: "CBSE Class XII | PCM",
    institution: "Akal Academy Kajri, CBSE",
    score: "87%",
  },
  {
    period: "2020",
    degree: "CBSE Class X",
    institution: "Akal Academy Kajri, CBSE",
    score: "91%",
  },
];

export const achievements = [
  { value: "300+", label: "LeetCode Problems Solved" },
  { value: "8.81", label: "B.Tech CGPA" },
  {
    value: "IIT MADRAS",
    label:
      "Completed Foundation Level of BS in Data Science and Applications",
  },
];

export const certifications = [
  {
    title: "BS in Data Science and Applications, Foundation Level",
    issuer: "Indian Institute of Technology Madras",
  },
  {
    title: "Machine Learning A-Z: AI, Python & ChatGPT",
    issuer: "Udemy",
  },
  {
    title: "Python for AI",
    issuer: "Dataluminia",
  },
  {
    title: "DSA Summer Training",
    issuer: "Guru Tegh Bahadur Institute of Technology",
  },
];

export const responsibilities = [
  {
    role: "Social Media Lead",
    organization: "Mindscape Club, GTBIT",
    period: "2025–Present",
  },
  {
    role: "Student Member",
    organization: "IEEE, GTBIT",
    period: "2024–2026",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];