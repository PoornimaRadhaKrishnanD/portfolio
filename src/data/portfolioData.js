/**
 * PORTFOLIO DATA CONFIGURATION
 * Poornima R K - B.Tech Artificial Intelligence and Machine Learning
 * 
 * Edit this file to update profile links, contact info, projects, and skills.
 */

export const personalData = {
  name: "Poornima R K",
  shortName: "Poornima",
  role: "Aspiring Software Developer | AI & ML Enthusiast",
  headline: "Aspiring Software Developer | AI & ML Enthusiast",
  bio: "Final-year B.Tech Artificial Intelligence and Machine Learning student at Kongu Engineering College with an 8.70 CGPA. Experienced in developing full-stack web applications, exploring Retrieval-Augmented Generation (RAG) and machine learning architectures, and deriving actionable insights through Microsoft Power BI.",
  careerObjective: "Aspiring engineer with hands-on experience in machine learning, web development, and data-driven projects, seeking opportunities to build practical solutions, solve real-world problems, and grow in a technology-driven environment.",
  
  // Contact details from resume
  email: "poornimark.23aim@kongu.edu",
  phone: "+91 9042533625",
  rawPhone: "9042533625",
  location: "Kongu Engineering College, Perundurai, Erode, Tamil Nadu, India",
  college: "Kongu Engineering College",
  graduationYear: "2027",
  cgpa: "8.70 (till 6th semester)",
  availability: "Available for Placements, Internships & SDE Roles (Batch of 2027)",

  // Resume configuration (place your resume.pdf into public/resume.pdf)
  resumePath: "/resume.pdf",

  // Social and developer profile links
  // UPDATE THESE with your exact URLs if needed:
  socialLinks: {
    github: "https://github.com/PoornimaRadhaKrishnanD",
    linkedin: "https://www.linkedin.com/in/poornima-r-k-1b3298310/",
    leetcode: "https://leetcode.com/u/Poornima_R_K/",
    email: "mailto:poornimark.23aim@kongu.edu",
    phone: "tel:+919042533625"
  },

  // Key Quick Metrics
  quickMetrics: [
    { value: "8.70", label: "CGPA (till 6th Sem)", note: "Academic Excellence Awardee" },
    { value: "220K+", label: "Records Analyzed", note: "Power BI Placement Analytics" },
    { value: "6+", label: "Key Projects", note: "GenAI, Web Dev & Analytics" },
    { value: "4", label: "Certifications", note: "MongoDB & NPTEL Certified" }
  ],

  // Areas of interest from resume
  areasOfInterest: [
    {
      title: "Frontend Development",
      description: "Building responsive, modern, user-friendly client interfaces with React.js, JavaScript, and modular CSS systems.",
      icon: "Layout"
    },
    {
      title: "Backend Development",
      description: "Engineering scalable backend services and REST APIs utilizing Node.js, MongoDB, and relational MySQL schemas.",
      icon: "Server"
    },
    {
      title: "Machine Learning",
      description: "Developing intelligent predictive models, Convolutional Neural Networks (CNNs), and LLM/RAG pipelines with Python.",
      icon: "Brain"
    },
    {
      title: "Data Analysis",
      description: "Designing end-to-end Power BI dashboards, DAX measures, and statistical visualizations for data-backed decisions.",
      icon: "BarChart"
    }
  ]
};

export const skillsData = {
  categories: [
    {
      name: "Frontend Development",
      description: "Modern, responsive, user-centered web interfaces",
      skills: [
        { name: "React.js", level: "Advanced", icon: "react" },
        { name: "JavaScript (ES6+)", level: "Advanced", icon: "javascript" },
        { name: "HTML5", level: "Proficient", icon: "html" },
        { name: "CSS3 / Modern CSS", level: "Proficient", icon: "css" },
        { name: "Bootstrap", level: "Proficient", icon: "bootstrap" }
      ]
    },
    {
      name: "Backend & Databases",
      description: "Server-side logic, API design, and persistent storage",
      skills: [
        { name: "Node.js", level: "Intermediate", icon: "nodejs" },
        { name: "MongoDB", level: "Certified Associate", icon: "mongodb" },
        { name: "MySQL", level: "Intermediate", icon: "mysql" },
        { name: "REST APIs", level: "Intermediate", icon: "api" }
      ]
    },
    {
      name: "AI & Machine Learning",
      description: "Predictive modeling, deep learning, and NLP",
      skills: [
        { name: "Python", level: "Advanced", icon: "python" },
        { name: "TensorFlow", level: "Intermediate", icon: "tensorflow" },
        { name: "Keras", level: "Intermediate", icon: "keras" },
        { name: "Scikit-learn", level: "Proficient", icon: "scikitlearn" },
        { name: "NLTK", level: "Intermediate", icon: "nltk" },
        { name: "CNNs & Deep Learning", level: "Intermediate", icon: "brain" }
      ]
    },
    {
      name: "Generative AI",
      description: "Next-generation intelligence and reasoning architectures",
      skills: [
        { name: "Retrieval-Augmented Generation (RAG)", level: "Hands-on", icon: "sparkles" },
        { name: "Large Language Models (LLMs)", level: "Hands-on", icon: "cpu" },
        { name: "Multi-Agent AI Reasoning", level: "Exploring", icon: "network" },
        { name: "Prompt Engineering", level: "Proficient", icon: "terminal" }
      ]
    },
    {
      name: "Data Analytics & Visualization",
      description: "Transforming big data into actionable business intelligence",
      skills: [
        { name: "Microsoft Power BI", level: "Advanced", icon: "powerbi" },
        { name: "DAX & Data Modeling", level: "Proficient", icon: "database" },
        { name: "KPI Dashboards", level: "Advanced", icon: "chart" },
        { name: "Data Preprocessing", level: "Proficient", icon: "filter" }
      ]
    },
    {
      name: "Programming Languages & Tools",
      description: "Core computer science fundamentals and development tools",
      skills: [
        { name: "Python", level: "Advanced", icon: "python" },
        { name: "Java", level: "Intermediate", icon: "java" },
        { name: "Git", level: "Proficient", icon: "git" },
        { name: "GitHub", level: "Proficient", icon: "github" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "trustmed-ai",
    title: "TrustMedAI",
    tagline: "Evidence-Grounded Medical Question-Answering System",
    category: "AI & Machine Learning",
    badge: "Current AI Project",
    badgeType: "featured",
    featured: true,
    summary: "An evidence-grounded medical question-answering architecture that combines Retrieval-Augmented Generation (RAG), specialized AI agents, collaborative reasoning, and explainable consensus to improve the reliability of AI-generated medical answers.",
    disclaimer: "Presented as a research exploration in medical QA reliability. Does not claim clinical validation or production deployment.",
    highlights: [
      "Engineered an evidence-grounded question-answering workflow combining RAG pipelines with verified medical literature.",
      "Designed specialized collaborative AI agent reasoning steps to mitigate hallucination risks in medical summaries.",
      "Incorporated explainable consensus mechanisms allowing users to inspect retrieved source citations and confidence rationale.",
      "Built with Python and modern Generative AI / LLM orchestration frameworks."
    ],
    tech: ["Generative AI", "RAG", "LLMs", "AI Agents", "Python", "Vector Retrieval"],
    githubUrl: "https://github.com/PoornimaRadhaKrishnanD/TrustMedAI",
    isGithubPlaceholder: true,
    liveUrl: "",
    isLivePlaceholder: true
  },
  {
    id: "internship-finder",
    title: "Internship Finder",
    tagline: "Interactive Student Internship Discovery & Tracking Platform",
    category: "Web Development",
    badge: "Full-Stack Web App",
    badgeType: "web",
    featured: true,
    summary: "A React-based internship management platform that helps university students search, discover, track, and organize active internship opportunities all in one centralized hub.",
    disclaimer: null,
    highlights: [
      "Developed a modular React single-page application with responsive state management for filtering opportunities by role, stipend, and deadlines.",
      "Designed an intuitive application tracking board to monitor progress through Saved, Applied, Interview, and Offer stages.",
      "Crafted an accessible, clean UI using semantic HTML5 and modern CSS for smooth responsiveness across all screen sizes."
    ],
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "State Management"],
    githubUrl: "https://github.com/PoornimaRadhaKrishnanD/Internship-Finder",
    isGithubPlaceholder: true,
    liveUrl: "",
    isLivePlaceholder: true
  },
  {
    id: "placement-analytics",
    title: "Placement Analytics Dashboard",
    tagline: "Big Data Campus Recruitment Insights on 2,20,000+ Student Records",
    category: "Data Analytics",
    badge: "2,20,000+ Records",
    badgeType: "analytics",
    featured: true,
    summary: "An interactive Microsoft Power BI analytics dashboard analyzing recruitment trends, CGPA performance benchmarks, branch-wise insights, and salary patterns across 2,20,000+ student records.",
    disclaimer: null,
    highlights: [
      "Modeled and visualized over 2,20,000 student placement data points to extract meaningful patterns in campus recruitment.",
      "Implemented responsive KPI dashboards and dynamic drill-downs evaluating package distribution and hiring volume.",
      "Analyzed the measurable impact of Machine Learning, Data Structures & Algorithms (DSA), and academic performance on placement conversion rates.",
      "Crafted complex DAX measures and custom interactive filters for multi-dimensional data exploration."
    ],
    tech: ["Microsoft Power BI", "Data Analytics", "DAX", "Data Modeling", "KPI Dashboards"],
    githubUrl: "https://github.com/PoornimaRadhaKrishnanD/Placement-Analytics-PowerBI",
    isGithubPlaceholder: true,
    liveUrl: "",
    isLivePlaceholder: true
  },
  {
    id: "sign-language-prediction",
    title: "Sign Language Prediction",
    tagline: "Real-Time Webcam Alphabet Classification via Deep Learning CNN",
    category: "AI & Machine Learning",
    badge: "Deep Learning & Vision",
    badgeType: "ai",
    featured: false,
    summary: "A deep learning-based web application that predicts sign-language alphabets in real time using live webcam input and a Convolutional Neural Network (CNN) model.",
    disclaimer: null,
    highlights: [
      "Designed and trained a Convolutional Neural Network (CNN) using Python, TensorFlow, and Keras for alphabet gesture recognition.",
      "Integrated real-time video stream capture and frame preprocessing via OpenCV for low-latency live prediction.",
      "Connected the model to an intuitive browser interface built with HTML/CSS to enable immediate visual feedback for users."
    ],
    tech: ["Python", "TensorFlow", "Keras", "CNN", "OpenCV", "HTML/CSS"],
    githubUrl: "https://github.com/PoornimaRadhaKrishnanD/Sign-Language-Prediction-CNN",
    isGithubPlaceholder: true,
    liveUrl: "",
    isLivePlaceholder: true
  },
  {
    id: "tournament-booking",
    title: "Tournament Booking System",
    tagline: "Dynamic Slot Reservation System with Real-Time Availability",
    category: "Web Development",
    badge: "Booking Platform",
    badgeType: "web",
    featured: false,
    summary: "A React-based tournament slot booking system that allows users to reserve match and tournament slots with real-time availability updates and conflict prevention.",
    disclaimer: null,
    highlights: [
      "Implemented dynamic booking logic and validation in React and JavaScript to prevent overlapping slot reservations.",
      "Designed an interactive scheduling grid displaying real-time availability status (Booked, Open, Reserved).",
      "Built responsive, mobile-optimized interface components using HTML and CSS for seamless on-the-go booking."
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Booking Logic"],
    githubUrl: "https://github.com/PoornimaRadhaKrishnanD/Tournament-Booking-System",
    isGithubPlaceholder: true,
    liveUrl: "",
    isLivePlaceholder: true
  },
  {
    id: "contact-list-app",
    title: "Contact List Application",
    tagline: "Responsive Contact Management with Search and Restore",
    category: "Web Development",
    badge: "React Utility",
    badgeType: "web",
    featured: false,
    summary: "A React-based contact management web application that allows users to seamlessly add, search, update, delete, and restore contacts.",
    disclaimer: null,
    highlights: [
      "Engineered full CRUD operations with persistent state and an instant undo/restore mechanism for deleted contacts.",
      "Implemented live text-search and tag filtering for instantaneous contact discovery.",
      "Crafted an intuitive, responsive user interface using React, JavaScript, and custom CSS styling."
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "CRUD Architecture"],
    githubUrl: "https://github.com/PoornimaRadhaKrishnanD/Contact-List-Application",
    isGithubPlaceholder: true,
    liveUrl: "",
    isLivePlaceholder: true
  }
];

export const educationData = [
  {
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    institution: "Kongu Engineering College",
    location: "Perundurai, Erode, Tamil Nadu",
    period: "2023 – 2027",
    status: "Final Year Student",
    score: "CGPA: 8.70",
    scoreDetail: "(as stated in resume, till 6th semester)",
    highlights: [
      "Consistent Academic Excellence Award recipient for two consecutive academic years (2023–2024 & 2024–2025).",
      "Specialization in Artificial Intelligence, Deep Learning, Natural Language Processing, Full-Stack Web Development, and Big Data Analytics.",
      "Active participant in department technical symposiums, research paper presentations, and institutional hackathons."
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "Alphonsa Matriculation Higher Secondary School",
    location: "Tamil Nadu",
    period: "2022 – 2023",
    status: "Completed",
    score: "89.67%",
    scoreDetail: "Higher Secondary Examination",
    highlights: [
      "Strong foundation in Mathematics, Physics, Chemistry, and Computer Science."
    ]
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC - 10th)",
    institution: "Kumari Matriculation Higher Secondary School",
    location: "Tamil Nadu",
    period: "2020 – 2021",
    status: "Completed",
    score: "Distinction",
    scoreDetail: "SSLC Board Examination",
    highlights: [
      "Excellence in core sciences and foundational academics."
    ]
  }
];

export const achievementsData = [
  {
    title: "Academic Excellence Awards (Consecutive 2 Years)",
    issuer: "Kongu Engineering College",
    period: "2023–2024 & 2024–2025",
    badge: "Top Academic Rank",
    description: "Honored with the Academic Excellence Award for two consecutive academic years in recognition of exemplary academic performance and high cumulative GPA (8.70)."
  },
  {
    title: "First Prize in Paper Presentation",
    issuer: "Kongu Engineering College (Newells'24)",
    period: "2024",
    badge: "1st Place Winner",
    description: "Secured First Prize in the national/college-level paper presentation event during the Newells'24 technical symposium for presenting innovative technical research."
  },
  {
    title: "Second Prize in Paper Presentation",
    issuer: "KSR Educational Institutions (Spring Fest'24)",
    period: "2024",
    badge: "2nd Place Winner",
    description: "Secured Second Prize in the paper presentation contest at KSR Spring Fest'24, showcasing in-depth analytical research and presentation skills."
  },
  {
    title: "Internal Smart India Hackathon (SIH)",
    issuer: "Kongu Engineering College Level",
    period: "2024",
    badge: "Hackathon Participant",
    description: "Selected and participated in the Internal Smart India Hackathon at the college level, collaborating with peers on real-world problem statements and innovative solution design."
  }
];

export const certificationsData = [
  {
    title: "MongoDB Certified Associate Developer (Node.js)",
    issuer: "MongoDB Inc.",
    year: "2025",
    type: "Industry Certification",
    skills: ["MongoDB", "Node.js", "Document Modeling", "CRUD Operations", "Aggregation"],
    description: "Official certification validating proficiency in developing and deploying Node.js applications backed by MongoDB NoSQL database architectures."
  },
  {
    title: "Responsible & Safe AI Systems",
    issuer: "NPTEL / IIT",
    year: "2025",
    type: "NPTEL Certified",
    skills: ["AI Safety", "Ethics in AI", "Explainability", "Bias Mitigation"],
    description: "Rigorous coursework focusing on responsible AI deployment, safety alignment, bias detection, algorithmic fairness, and governance in modern AI systems."
  },
  {
    title: "Affective Computing",
    issuer: "NPTEL / IIT",
    year: "2025",
    type: "NPTEL Certified",
    skills: ["Emotion AI", "Signal Processing", "HCI", "Behavioral Analysis"],
    description: "Explored computational systems capable of recognizing, interpreting, processing, and simulating human emotional states and affective interactions."
  },
  {
    title: "User-centric Computing for Human Computer Interaction",
    issuer: "NPTEL / IIT",
    year: "2026",
    type: "NPTEL Certified",
    skills: ["HCI", "UI/UX Principles", "Cognitive Ergonomics", "Accessibility"],
    description: "In-depth study of human-centered software design, usability principles, user research methodologies, and ergonomic digital interfaces."
  }
];

export const leadershipData = [
  {
    role: "Placement Coordinator",
    organization: "Kongu Engineering College",
    period: "2024 – 2027",
    category: "Campus Leadership",
    highlights: [
      "Serving as liaison between campus recruitment authorities, corporate recruiters, and over 1,000+ graduating students.",
      "Facilitating recruitment drives, scheduling technical assessment rounds, and coordinating pre-placement training sessions.",
      "Helping streamline placement notifications, eligibility tracking, and student communication."
    ]
  },
  {
    role: "Class Representative",
    organization: "Department of AI & ML, KEC",
    period: "2025 – 2026",
    category: "Academic Governance",
    highlights: [
      "Representing fellow student peers in department academic councils and faculty-student coordination meetings.",
      "Coordinating academic schedules, practical lab sessions, and bridging communication between professors and students."
    ]
  },
  {
    role: "Treasurer",
    organization: "CUG Club of KEC",
    period: "Active Tenure",
    category: "Student Club Management",
    highlights: [
      "Managing budgetary allocations, expense records, and financial planning for club workshops and technical events.",
      "Ensuring transparent financial accounting and supporting smooth execution of student activities."
    ]
  },
  {
    role: "NSS Volunteer",
    organization: "National Service Scheme (NSS), KEC Unit",
    period: "2024 – 2026",
    category: "Community & Social Service",
    highlights: [
      "Actively volunteering in community development programs, rural outreach camps, blood donation drives, and environmental sustainability campaigns.",
      "Fostering civic responsibility, team leadership, and social awareness across campus initiatives."
    ]
  }
];
