
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  deepfake,
  music,
  absolute,
  PLGA,
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
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "leadership",
    title: "Leadership",
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
  {
    title: "UI Engineering",
    icon: creator,
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
  { title: "Tools", items: ["Figma", "JWT Auth", "Material-UI"] },
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
      "Spearheaded development of a responsive corporate website (3 pages), implementing an SEO-optimized content strategy that boosted lead generation by 30%.",
      "Engineered pixel-perfect UI components from Figma mockups with optimized assets, achieving 99% cross-device compatibility.",
      "Automated sprint coordination workflows reducing task-tracking overhead by 20%.",
      "Documented CI/CD procedures for seamless migration/deployment, enabling zero-downtime releases.",
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
    source_code_link: "",
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
    live_demo_link: "https://deepfakedetector.app",
    timeline: "Jul 2025",
  },
  {
    name: "Intelligent Music Recommendation Engine",
    description:
      "Developed a hybrid recommender (collaborative + content-based) and improved accuracy by 25% over baselines using TF-IDF + cosine similarity. Integrated Spotify API for 1-click playback and reduced generation time by 60%.",
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
        name: "spotify-api",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/AyushChauhan910/Music-Recommendation-System",
    live_demo_link: "https://music-recommendation-system.app",
    timeline: "Jun 2025",
  },
];

const certifications = [
  {
    name: "GenAI Virtual Experience",
    issuer: "Boston Consulting Group (BCG) – Forage",
    date: "Jun 2025",
    details: [
      "Built a GenAI chatbot to extract and summarize SEC 10-K/10-Q financial metrics using Python, Pandas & NLP. Improved parsing accuracy and automated trend analysis for real-time insights.",
    ],
    credential: "",
  },
  {
    name: "Software Engineering",
    issuer: "HackerRank",
    date: "Jul 2025",
    details: ["Validated expertise in REST API design and SQL query optimisation."],
    credential: "",
  },
];

const leadership = [
  {
    title: "Sponsorship Team Member",
    org: "DOSM, BITS Pilani",
    date: "Oct 2023 – Oct 2024",
    points: [
      "Secured sponsorships for 5+ technical events through data-driven proposals generating a 30% funding increase.",
      "Analysed market trends and competitor strategies to optimise sponsorship pitch success rate.",
    ],
  },
  {
    title: "Logistics Coordinator",
    org: "DORA, BITS Pilani",
    date: "Oct 2023 – Oct 2024",
    points: [
      "Optimised event logistics workflows for 3+ large-scale events serving 1000+ participants.",
      "Coordinated cross-functional teams ensuring 100% on-time event delivery.",
    ],
  },
  {
    title: "College Football Player",
    org: "Football Team, BITS Pilani",
    date: "Sep 2023 – Present",
    points: [
      "Balanced 15+ hours/week athletic training with academics.",
      "Competed in 5+ inter-collegiate tournaments demonstrating time management and teamwork.",
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
    "Engineered a production-ready deepfake detector and scaled full-stack apps—deploying AI from model to user in the wild. Built and deployed end-to-end AI systems—leveraging LangChain, RAG pipelines, and FAISS vector DBs—to power domain-specific agents.",
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
  certifications,
  leadership,
};
