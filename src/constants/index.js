
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
      "Pandas",
      "NumPy",
      "LangChain",
      "LangGraph",
      "LiteLLM",
      "MLflow",
      "ChromaDB",
      "BGE embeddings",
      "Agentic AI",
      "LLM evaluation",
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
  { title: "Testing", items: ["Playwright", "Gherkin"] },
  { title: "Cloud & DevOps", items: ["Docker", "Vercel", "Render", "GitLab CI", "Git/GitHub Actions"] },
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
    date: "Class of 2023",
    details: [],
  },
];

const experiences = [
  {
    title: "Full Stack Intern (AI Evaluation and Agent Infrastructure)",
    company_name: "Ather Energy, Bengaluru",
    icon: backend,
    iconBg: "#1a1a2e",
    date: "Jun 2026 – Present",
    points: [
      "Built and shipped an end-to-end evaluation system for a production LLM support assistant — authenticated streaming integration, privacy-safe dry-run telemetry, and a checkpointed 32-worker runner that completed 958 scenarios with zero execution errors",
      "Designed its scoring layer: deterministic business assertions paired with a four-dimension LLM-as-judge behind fail-closed gates, over a versioned golden replay suite, with distributed tracing for token usage, cost and latency and a blinded two-rater human calibration harness reporting Cohen's kappa",
      "Architected a multi-agent platform on LangGraph converting product requirements into Gherkin test cases and executable Playwright suites, with a generate-execute-read-failure-fix loop, flake detection, automatic quarantine, and a healing agent that repairs selector drift from failure artifacts",
      "Built the platform operations layer: structured LLM logging, per-team gateway keys with spend limits and per-request cost attribution, nightly metrics aggregation, admin dashboard, delivered as a versioned CI template",
    ],
  },
  {
    title: "Frontend Developer Intern",
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
      { name: "python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "white-text-gradient" },
      { name: "lightgbm", color: "pink-text-gradient" },
      { name: "shap", color: "green-text-gradient" },
    ],
    image: PLGA,
    source_code_link: "https://github.com/AyushChauhan910/PLGA",
    live_demo_link: "",
    timeline: "Jan 2026 – Mar 2026",
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
  {
    name: "OpenEnv SQL Analyst Agent",
    description:
      "Built an OpenEnv-compliant SQL Analyst Agent environment for the Hugging Face × Meta hackathon. The agent converts natural-language queries into validated SQL, self-corrects on schema errors, and returns structured results with provenance. Qualified top 2% of 52,000+ teams, advancing to the final Agentic Evaluation judged by Meta and Hugging Face engineers.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "LangGraph", color: "white-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
      { name: "OpenEnv", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/AyushChauhan910",
    live_demo_link: "",
    timeline: "Mar 2026",
  },
  {
    name: "Deep Research Agent",
    description:
      "A multi-agent deep research system that autonomously breaks down research questions, dispatches parallel sub-agents to search and synthesize sources, resolves contradictions across multiple documents, and produces cited, structured research reports. Built on LangGraph with a web-search tool layer and a final synthesis agent.",
    tags: [
      { name: "LangGraph", color: "blue-text-gradient" },
      { name: "Python", color: "white-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "React.js", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/AyushChauhan910",
    live_demo_link: "",
    timeline: "",
  },
];

const openSourceContributions = [
  {
    role: "Contributor (proposed)",
    project: "facebookresearch/sam2 (Meta FAIR)",
    meta: "March 2026",
    note: "Raised as an issue with a proposed contribution; not a merged pull request.",
    points: [
      "Proposed motion-adaptive temporal frame sampler for SAM 2 training pipeline — replaces uniform stride with motion-density-proportional budget allocation using lightweight L1 pixel-diff scoring (PyTorch, PIL)",
      "Measured 4.1% mean improvement in high-motion frame coverage across 15 DAVIS-2017 sequences",
    ],
    prLink: "https://github.com/AyushChauhan910/sam2/tree/feat/adaptive-temporal-sampler",
  },
];

const publications = [
  {
    title:
      "Machine Learning-Guided Prediction of Drug Release Kinetics from PLGA Microsphere Formulations: Under Review, Journal of Controlled Release | First author | Jan 2026 – Mar 2026",
    link: "https://drive.google.com/file/d/1BNqTLFPMTyrWqeQPu4oYKwX6Q74Ax5Ke/view?usp=sharing",
  },
];

const competitiveAchievements = [
  {
    title: "OpenEnv Hackathon — Finale",
    subtitle: "Hugging Face × Meta · March 2026",
    points: [
      "Built an OpenEnv-compliant SQL Analyst Agent environment; qualified top 2% of 52,000+ teams, advancing to final Agentic Evaluation judged by Meta and Hugging Face engineers.",
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
    "I'm Ayush Chauhan, a Computer Science undergraduate at BITS Pilani, Hyderabad, building LLM evaluation and agent infrastructure at Ather Energy. I turn complex AI research into production-ready systems — evaluation frameworks, multi-agent platforms, autonomous research agents, and full-stack analyst tools. I work across the full stack: LangGraph pipelines, ML training and evaluation, and polished React frontends. I've proposed a training-pipeline contribution to facebookresearch/sam2 and have a research paper under review at the Journal of Controlled Release.",
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
