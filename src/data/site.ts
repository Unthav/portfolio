export const site = {
  name: "Bishal Deka",
  status: "Aspiring Machine Learning Engineer",
  email: "bishal_deka@icloud.com",
  phone: "+91 6002711646",
  phoneHref: "tel:+916002711646",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-rho-blush-98.vercel.app",

 
  github: "https://github.com/Unthav",
  instagram: "https://www.instagram.com/_unt_hav_",
  linkedin: null as string | null,
  resumeUrl: null as string | null, // put resume.pdf in /public, then "/resume.pdf"
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  college: "Mangaldai College",
  university: "Gauhati University",
  year: "Third Year / Final Year",
};

export const skills = [
  { group: "Programming", items: ["Python"] },
  {
    group: "Machine Learning",
    items: ["Machine Learning fundamentals", "Data preprocessing", "Feature engineering", "Model training and evaluation"],
  },
  {
    group: "Tools and Technologies",
    items: ["Jupyter Notebook", "Pandas", "NumPy", "Scikit-learn", "Git and GitHub"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  repoUrl?: string; 
  demoUrl?: string; 
};


export const projects: Project[] = [
  {
    title: "Student Performance Prediction",
    category: "Machine Learning",
    description:
      "A machine learning project focused on predicting student academic performance using relevant student-related data. The project explores data preprocessing, feature selection, model training, and performance evaluation.",
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Jupyter Notebook"],
  },
];

export const internship = {
  title: "Machine Learning Intern",
  duration: "1 Month",
  certificate: "Completed",
  organization: undefined as string | undefined, 
  description:
    "Completed a one-month Machine Learning internship, gaining exposure to practical machine learning concepts and workflows.",
};

export const journey = [
  "Python and programming foundations",
  "Mathematics and statistics for ML",
  "Data analysis and preprocessing",
  "Machine learning algorithms",
  "Real-world ML projects",
  "Advanced ML and deployment",
];
