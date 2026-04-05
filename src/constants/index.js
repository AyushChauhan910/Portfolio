
import {
  logo,
  backend,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  project2,
  project3,
  deepfake,
  absolute,
  PLGA,
  finsight,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
} from '../assets'


// (Optional) keep legacy imports here if needed


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "opensource",
    title: "Open Source",
  },
  {
    id: "publications",
    title: "Publications",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack + AI Engineer",
    icon: web,
  },
  {
    title: "Agentic Apps (RAG/LangChain)",
    icon: mobile,
  },
  {
    title: "Production ML Systems",
    icon: backend,
  },
];

const skillGroups = [
  { title: "Programming", items: ["Python", "JavaScript/TypeScript", "SQL", "Java"] },
  {
    title: "AI/ML",
    items: [
      "PyTorch",
      "Scikit-Learn",
      "OpenCV",
      "Librosa",
      "Pandas",
      "NumPy",
      "LangChain",
      "LangGraph",
      "ChromaDB",
      "BGE embeddings",
      "Agentic AI",
      "RAG pipelines",
      "Vector DBs (FAISS)",
      "LLM APIs (OpenAI, Hugging Face)",
      "LightGBM",
      "SHAP",
    ],
  },
  { title: "Frontend", items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML/CSS"] },
  { title: "Backend", items: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs"] },
  { title: "Databases", items: ["MongoDB", "PostgreSQL"] },
  { title: "Cloud & DevOps", items: ["Docker", "Vercel", "Render", "Git/GitHub Actions"] },
];

// Keep the original icon grid (used in the design) as "highlights"
const technologies = [
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Three JS", icon: threejs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Express.js", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "GSAP", icon: gsap },
  { name: "Framer Motion", icon: framer },
  { name: "Material UI", icon: mui },
];

const education = [
  {
    school: "Birla Institute of Technology & Science (BITS), Pilani - Hyderabad Campus",
    degree: "Bachelor of Engineering (Hons.) in Computer Science",
    date: "Aug 2023 – May 2027",
    details: [
      "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, Linear Algebra, Probability & Statistics",
    ],
  },
  {
    school: "Tagore International School, Vasant Vihar, New Delhi",
    degree: "Science (CBSE)",
    date: "Apr 2010 – Apr 2023",
    details: [],
  },
];

const experiences = [
  {
    title: "Digital Transformation Intern",
    company_name: "Absolute Smart Solutions, Gurgaon, Haryana",
    icon: absolute,
    iconBg: "#383E56",
    date: "May 2025 – Jul 2025",
    points: [
      "Engineered 3-page corporate web platform (Next.js + Tailwind CSS) with structured data markup and Core Web Vitals optimization (LCP < 2.1s), driving 30% lift in qualified lead submissions over 6 weeks post-launch — measured via Google Analytics conversion tracking",
      "Translated 12 Figma component specs into reusable React component library; reduced image payload by 65% via WebP conversion and lazy loading, achieving 99% cross-browser/device compatibility via BrowserStack testing",
      "Built Jira automation scripts (Python + REST API) to auto-triage and label incoming tickets by sprint milestone, reducing manual task-tracking overhead by 20% across a 6-person team",
      "Documented CI/CD procedures for seamless migration/deployment, enabling zero-downtime releases",
    ],
    link: "https://absolutestmart.in",
  },
];

const projects = [
  {
    name: "ML-Driven Prediction of Drug Release from PLGA Microspheres",
    description:
      "Engineered a hierarchical feature set from 25 PLGA formulations and built a leakage-safe grouped nested CV pipeline. Achieved 12.1% MAE with LightGBM and used SHAP to derive actionable formulation design rules.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "white-text-gradient",
      },
      {
        name: "lightgbm",
        color: "pink-text-gradient",
      },
      {
        name: "shap",
        color: "green-text-gradient",
      }, 
    ],
    image: PLGA,
    source_code_link: "https://github.com/AyushChauhan910/PLGA",
    live_demo_link: "",
    timeline: "Mar 2026 – Ongoing",
  },
  {
    name: "Production-Scale Deepfake Detection System",
    description:
      "Architected a multimodal deepfake detector (image/video/audio) with 90%+ accuracy. Built a CNN-LSTM pipeline and optimized inference time by 40%. Deployed a containerized REST API and a user-friendly dashboard.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      { name: "react", color: "white-text-gradient" },
    ],
    image: deepfake,
    source_code_link: "https://github.com/AyushChauhan910/Deepfake-Detector",
    live_demo_link: "https://deepfakedetector-rouge.vercel.app/",
    timeline: "Jul 2025",
  },
  {
    name: "FinSight",
    description:
      "An autonomous financial research agent that ingests SEC EDGAR filings and answers complex financial questions with 87% accuracy — a 43% improvement over naive RAG. Built with a self-correcting 5-stage LangGraph pipeline and streamed in real-time to a full-stack analyst dashboard with citation sourcing and YoY trend charts.",
    tags: [
      { name: "LangGraph", color: "blue-text-gradient" },
      { name: "RAG / ChromaDB", color: "white-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "React.js", color: "pink-text-gradient" },
    ],
    image: finsight,
    source_code_link: "https://github.com/AyushChauhan910/FinSight-Full",
    live_demo_link: "https://fin-sight-full.vercel.app/",
    timeline: "",
  },
];

const openSourceContributions = [
  {
    role: "Contributor",
    project: "facebookresearch/sam2 (Meta FAIR)",
    meta: "18.5k stars on GitHub · March 2026",
    points: [
      "Implemented motion-adaptive temporal frame sampler for SAM 2 training pipeline — replaces uniform stride with motion-density-proportional budget allocation using lightweight L1 pixel-diff scoring (PyTorch, PIL)",
      "Measured 4.1% mean improvement in high-motion frame coverage across 15 DAVIS-2017 sequences",
    ],
    prLink: "https://github.com/AyushChauhan910/sam2/tree/feat/adaptive-temporal-sampler",
  },
];

const publications = [
  {
    title:
      "Machine Learning-Guided Prediction of Drug Release Kinetics from PLGA Microsphere Formulations: Under Review, Journal of Controlled Release | author | 2026",
    link: "https://docs.google.com/document/u/1/d/1BL2eFZ6XAXQRhxCvrjmZGytPBWE4pt2QbP7Fro2_rNE/edit?usp=sharing",
  },
];

const competitiveAchievements = [
  {
    title: "Kaggle — Titanic (Machine Learning from Disaster)",
    subtitle: "Top 24% (2,951/12,300+ teams) · February 2026",
    points: [
      "Built stacked ensemble of XGBoost, LightGBM, and CatBoost with custom feature engineering (Title extraction, TicketFreq, interaction terms)",
      "Achieved 0.787 accuracy",
    ],
  },
  {
    title: "OpenEnv Hackathon — Round 2 Qualifier",
    subtitle: "Hugging Face × Meta · March 2026",
    points: [
      "Built an OpenEnv-compliant SQL Analyst Agent environment; qualified top 30% advancing to Phase 2 Agentic Evaluation judged by Meta and Hugging Face engineers.",
    ],
  },
];

const personal = {
  name: "Ayush Chauhan",
  phone: "+91 9891105156",
  email: "talktoayushchauhan@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/ayush-chauhan",
    github: "https://github.com/AyushChauhan910",
    leetcode: "https://leetcode.com/ayushchauhan910",
    portfolio: "https://myportfolio.app",
  },
  summary:
    "I'm Ayush Chauhan, a Computer Science undergraduate at BITS Pilani, Hyderabad, passionate about turning complex AI research into real-world products. From autonomous financial research agents to deepfake detection systems, I build end-to-end solutions that are not just technically rigorous but production-ready. I work across the full stack — designing LangGraph pipelines, training multimodal ML models, and shipping polished React frontends. I'm also an open-source contributor to Meta FAIR's SAM2 and have a research paper under review at the Journal of Controlled Release.",
  languages: ["English (Professional Proficiency)", "Hindi (Native)"],
  interests: ["Competitive Programming", "Sports Analytics", "Physical fitness", "Playing football"],
};

export {
  personal,
  services,
  technologies,
  skillGroups,
  education,
  experiences,
  projects,
  openSourceContributions,
  publications,
  competitiveAchievements,
};
