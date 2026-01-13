// Mock data for Narendra's Portfolio

export const personalInfo = {
  name: "Narendra Yenagandula",
  title: "Python Developer & Web Developer",
  bio: "Hello! I'm a passionate Python developer with a strong foundation in web development. I enjoy creating responsive, user-friendly websites that solve real-world problems. Pursuing a B.Tech in Artificial Intelligence and Machine Learning, seeking an entry-level position in a fast-paced and innovative environment where I can leverage my skills and knowledge to make a positive impact.",
  email: "yenagandula.narendra@gmail.com",
  phone: "+91 9989114207",
  location: "Sircilla, Telangana, India",
  profileImage: "https://narendra-yenagandula-portfolio.vercel.app/pp.png",
  resumeUrl: "/narendra_yenagandula_resume.pdf",
  social: {
    github: "https://github.com/Narendra2904",
    linkedin: "https://www.linkedin.com/in/narendra-yenagandula",
    portfolio: "https://narendra-yenagandula-portfolio.vercel.app/"
  }
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering (AI & ML)",
    institution: "Vaageswari College of Engineering, Karimnagar",
    location: "Karimnagar, Telangana",
    duration: "2023 - Present",
    current: true
  },
  {
    id: 2,
    degree: "Diploma",
    field: "Electronics and Communication Engineering",
    institution: "Vaageswari College of Engineering, Karimnagar",
    location: "Karimnagar, Telangana",
    duration: "2020 - 2023",
    current: false
  }
];

export const skills = {
  languages: [
    { name: "Python", icon: "code" },
    { name: "React", icon: "coffee" },
    { name: "JavaScript", icon: "code-2" },
    { name: "HTML5", icon: "file-code" },
    { name: "CSS3", icon: "palette" }
  ],
  concepts: [
    { name: "Data Structures", icon: "database" },
    { name: "DBMS", icon: "database" },
    { name: "Operating Systems", icon: "cpu" },
    { name: "Machine Learning", icon: "brain" },
    { name: "Artificial Intelligence", icon: "bot" }
  ],
  tools: [
    { name: "VS Code", icon: "code" },
    { name: "GitHub", icon: "github" },
    { name: "Google Colab", icon: "cloud" },
    { name: "Anaconda", icon: "terminal" },
    { name: "Excel", icon: "table" },
    { name: "Jupyter", icon: "notebook" },
    { name: "Power BI", icon: "bar-chart" },
    { name: "Git", icon: "git-branch" }
  ],
  problemSolving: [
    { name: "CodeChef", icon: "trophy" },
    { name: "LeetCode", icon: "code" },
    { name: "HackerRank", icon: "terminal" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "JNTUH BTech Notes Portal",
    description: "Built an academic resource platform providing structured study materials for all B.Tech branches and semesters. Enhanced accessibility of learning resources through a clean and organized UI. Students can easily access and download notes, syllabus, and materials for all years.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Narendra2904/Btech-notes",
    live: "https://btech-notes.vercel.app/",
    image: "/notes.png",
    category: "Web Development",
    color: "emerald"
  },
  {
    id: 2,
    title: "JNTUH Results Dashboard",
    description: "Comprehensive results dashboard for JNTUH students featuring live results updates, backlog report generation, credit checker, and comparison tools. Provides easy access to search all semesters and track academic progress with an intuitive interface.",
    technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
    github: "https://github.com/Narendra2904",
    live: "https://btech-jntuh-results.vercel.app/",
    image: "/result.png",
    category: "Web Development",
    color: "blue"
  },
  {
    id: 3,
    title: "Fruit Disease Detection System",
    description: "Designed and implemented an image-based disease detection system for grape leaves using machine learning. Applied Support Vector Machine (SVM) algorithm achieving 93% test accuracy. Improved early disease identification to assist agricultural decision-making.",
    technologies: ["Python", "SVM", "Machine Learning", "Google Colab"],
    github: "https://github.com/Narendra2904/CLOUD-BASED-IMAGE-ANALYSIS-FOR-DETECTING-FRUIT-DISEASES-AUTOMATICALLY",
    live: null,
    image: "/fruit.jpg",
    category: "Machine Learning",
    color: "violet"
  },
  {
    id: 4,
    title: "Automatic Resume Builder",
    description: "Developed a responsive web application to generate professional resumes using predefined templates. Implemented real-time preview and dynamic content rendering using JavaScript. Helps users generate clean, structured, and job-ready resumes quickly with minimal effort.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Narendra2904/Automatic-Resume-Builder",
    live: "https://automatic-resume-builder.vercel.app/",
    image: "/resume.png",
    category: "Web Development",
    color: "orange"
  }
];

export const certifications = [
  {
  id: 1,
  title: "Java Full Stack Development",
  issuer: "TalentNext & Wipro",
  date: "2024",
  icon: "award",
  link: "https://www.linkedin.com/posts/narendra-yenagandula_java-fs-activity-7400388618760065024-vTnc"
},

  {
    id: 2,
    title: "Artificial Intelligence Foundation",
    issuer: "Wipro FutureSkills",
    date: "2024",
    icon: "brain",
      link: "https://www.linkedin.com/posts/narendra-yenagandula_certification-ai-cloudcomputing-activity-7398596249068851200-uxYK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnXTRYB3psOVfsIElE235TDEWCkpnObkrw"

  },
  {
    id: 3,
    title: "Cloud Computing Foundation",
    issuer: "Wipro FutureSkills",
    date: "2024",
    icon: "cloud",
      link: "https://www.linkedin.com/posts/narendra-yenagandula_certification-ai-cloudcomputing-activity-7398596249068851200-uxYK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEnXTRYB3psOVfsIElE235TDEWCkpnObkrw"

  }
];

export const achievements = [
  {
    id: 1,
    title: "93% Accuracy",
    description: "Achieved with SVM algorithm in Fruit Disease Detection project",
    icon: "target"
  },
  {
    id: 2,
    title: "Active Problem Solver",
    description: "Regular participant on CodeChef, LeetCode, and HackerRank",
    icon: "trophy"
  },
  {
    id: 3,
    title: "Open Source Contributor",
    description: "Multiple projects deployed and maintained on GitHub",
    icon: "git-branch"
  }
];
