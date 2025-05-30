import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Data Analytics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: javascript, // Using JavaScript icon as placeholder for Python
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: typescript, // Using TypeScript icon as placeholder for C++
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
];

const experiences = [
  {
    title: "B.Tech Computer Science",
    company_name: "Vellore Institute of Technology - Bhopal",
    company_website: "https://vit.ac.in/",
    icon: skillrisers, // Using as placeholder for VIT
    iconBg: "#E6DEDD",
    date: "2021 - 2025",
    points: [
      "Pursuing Bachelor of Technology in Computer Science.",
      "CGPA: 7.51",
      "Focus areas include Web Applications, Natural Language Processing and Problem Solving.",
    ],
  },
  {
     title: "CBSE 12th - PCM",
    company_name: "Daffodils Public School",
    company_website: "#",
    icon: proximus, // Using as placeholder for school
    iconBg: "#E6DEDD",
    date: "Completed 2021",
    points: [
      "Completed Higher Secondary Education with Mathematics as core subjects.",
      "Strong foundation in programming concepts, data structures, and mathematical problem-solving.",
      "Developed interest in software development and Web applications.",
      "Participated in various coding competitions and technical events during school years.",
    ],
  },
  {
    title: "Software Development Projects",
    company_name: "Personal Projects & Learning",
    company_website: "#",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Developing machine learning models for object detection and image processing using YOLO and OpenCV.",
      "Building web applications using React.js, Node.js, and integrating AI/ML capabilities.",
      "Working on mobile app development using Flutter and React Native with backend integration.",
      "Implementing NLP projects using BERT and TensorFlow for text analysis and processing.",
    ],
  },
  {
    title: "Technical Skills Development",
    company_name: "Continuous Learning",
    company_website: "#",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Mastering programming languages: Python, Java, JavaScript, C++, C, Swift, Kotlin.",
      "Expertise in AI/ML frameworks: TensorFlow, PyTorch, OpenCV for computer vision applications.",
      "Database management with SQL and NoSQL technologies including MongoDB and MySQL.",
      "Cloud technologies and deployment using AWS, Firebase for scalable application development.",
    ],
  },
];

const projects = [
  {
    name: "Chess Matchmaking App",
    description:
      "A web app that connects chess players by matching them based on skill levels for real-time gameplay. It features live game sessions, player rankings, and a smooth matchmaking system to ensure balanced and competitive matches",
    tags: [
      {
        name: "Chess.js",
        color: "blue-text-gradient",
      },
      {
        name: "WebSockets",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb, // Using existing image as placeholder
    hosted_link: "#",
  },
  {
    name: "Financial Misinformation Detection System Using NLP",
    description:
      "Developed an NLP-based system to detect misleading financial news using transformer models like BERT. Preprocessed financial texts and fine-tuned the model for high accuracy, precision, and F1-score. Deployed the solution with a simple web interface for real-time news verification.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "bert",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb, // Using existing image as placeholder
    hosted_link: "#",
  },
  {
    name: "Eco Homepage",
    description:
      "Designed a visually appealing and informative homepage promoting eco-friendly living and sustainability practices. Integrated sections on energy-saving tips, recycling awareness, and green product recommendations. Built using HTML, CSS, and JavaScript with a focus on responsive design and user engagement",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScipt",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb, // Using existing image as placeholder
    hosted_link: "#",
  },
  {
    name: "VIT Chat Bot",
    description:
      "Designed and developed a chatbot to assist VIT students with real-time responses to academic and campus-related queries. Integrated NLP techniques to understand user input and provide accurate, context-aware answers, with user-friendly interface for seamless interaction.",
    tags: [
      {
        name: "Pyhton",
        color: "blue-text-gradient",
      },
      {
        name: "Dialogflow",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp, // Using existing image as placeholder
    hosted_link: "#",
  },
  {
    name: "Smart Waste Management System",
    description:
      "Developed an IoT-based system to monitor and manage waste levels in bins across urban areas. Used sensors to track fill levels and optimized waste collection routes using real-time data. Enabled efficient resource allocation and reduced overflow incidents through a central dashboard interface.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: zealApp, // Using existing image as placeholder
    hosted_link: "#",
  },
  {
    name: "Food Recipe",
    description:
      "Built a responsive web application to browse, search, and save food recipes with detailed ingredients and instructions. Integrated third-party recipe APIs to fetch real-time data and implemented user authentication for personalized features. Designed a clean UI using React and managed backend services with Node.js and MongoDB.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: rollApp, // Using existing image as placeholder
    hosted_link: "#",
  },
];

const personalInfo = {
  name: "Ashwani",
  fullName: "Ashwani Singh",
  email: "ashwani.singh1304@gmail.com",
  role: "Software Developer",
  about: `Designed and developed full-stack applications including a real-time Chess Matchmaking App, a Financial Misinformation Detection System using NLP, and a Quiz Platform for academic use.Utilized technologies like React, Node.js, TypeScript, MongoDB, PyTorch, and WebSockets to build scalable and interactive solutions.Focused on performance optimization, real-time data handling, and user-friendly interfaces across all projects.`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "/resume Sashwani.Resume.pdf",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/ashwani-singh1304",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/ashwanissingh",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
