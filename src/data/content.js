// Portfolio content data

// Image imports - Projects
import heartInTheGame from '../assets/heart-in-the-game.png';
import finlife from '../assets/finlife_thumbnail.png';
import formula1 from '../assets/formula1.png';
import clustering from '../assets/clustering.png';
import continentalDb from '../assets/continental-database.png';
import spaceInvaders from '../assets/space-invaders.png';

// Image imports - Company logos
import jpmorganLogo from '../assets/jpmorgan.png';
import jericoLogo from '../assets/Jerico-Technologies.jpg';
import computingCatalystLogo from '../assets/computing-catalyst.jpg';
import icesiLogo from '../assets/icesi.png';

// Image imports - Education logos
import umdLogo from '../assets/umd.png';

// Image imports - Leadership logos
import icpcLogo from '../assets/icpc.png';
import alphaSigLogo from '../assets/alpha-sig.png';

export const personalInfo = {
  name: "Daniel Valencia",
  headline: "Computer Science Student @ UMD",
  location: "Maryland, United States",
  email: "daniel.vm2356@gmail.com",
  phone: "+1 571-436-5544",
  linkedin: "https://www.linkedin.com/in/danielvm28/",
  github: "https://github.com/danielvm28",
};

export const aboutMe = {
  bio: "I am a Computer Science student at the University of Maryland with a background in software engineering, machine learning, and distributed systems. I am passionate about solving complex problems and building impactful solutions, with experience across a variety of projects ranging from financial systems to educational VR games. I have worked with multiple technologies and am particularly interested in backend systems and understanding how large-scale systems connect and operate end to end.",
  personal: "When I am not coding, I enjoy staying active at the gym, traveling and playing video games.",
  stats: [
    { label: "Programming Languages", value: "12+" },
    { label: "Projects", value: "6+" },
    { label: "Years Experience", value: "3+" },
  ],
};

export const experience = [
  {
    id: 1,
    title: "Summer Software Engineer",
    company: "JPMorgan Chase",
    logo: jpmorganLogo,
    dates: "June 2025 – August 2025",
    responsibilities: [
      "Designed and deployed an <strong>event-driven processor</strong> to <strong>AWS EKS</strong> using Spring Boot and Terraform, integrating with Kafka to ingest <strong>1K+ account status updates/day</strong> and persist batch data into DynamoDB.",
      "Developed a <strong>RESTful API</strong> to expose batch status and metadata, enabling Party and Account Maintenance services to facilitate tracking of account status processing.",
      "Established <strong>CI/CD pipelines</strong> using Jenkins, Bitbucket, and Jira to automate build, test, deployment, and release tracking workflows.",
      "Implemented comprehensive <strong>unit and integration tests</strong> using JUnit and Mockito, achieving <strong>85%+ code coverage</strong>.",
    ],
    technologies: ["Spring Boot", "Terraform", "Kafka", "AWS EKS", "DynamoDB", "Jenkins", "JUnit", "Mockito"],
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "Jerico Technologies LLC",
    logo: jericoLogo,
    dates: "May 2024 – August 2024",
    responsibilities: [
      "Trained <strong>machine learning models</strong> using PyTorch and sklearn to predict trends in bodies of water by organizing data from buoys and multiple databases with <strong>70k+ entries</strong>, achieving an <strong>MSE &lt;0.8</strong>.",
      "Interpreted models through graphs and the pandas library in Python, creating <strong>human-understandable explanations</strong>.",
    ],
    technologies: ["PyTorch", "sklearn", "pandas", "Python"],
  },
  {
    id: 3,
    title: "Computing Instructor – Ambassador",
    company: "University of Maryland Computing Catalyst",
    logo: computingCatalystLogo,
    dates: "June 2023 – May 2025",
    responsibilities: [
      "Taught <strong>game development skills</strong> with a personalized curriculum for various summer camp sessions of <strong>20+ students</strong> each using JavaScript, the PlayCanvas web game engine and Oculus VR headsets.",
      "Orchestrated interactive lessons with a team, applying co-teaching and classroom management techniques that achieved <strong>95% project completion</strong>.",
      "Conducted weekly <strong>one-on-one tutoring sessions</strong> to <strong>15+ college students</strong> in object-oriented programming and discrete mathematics, breaking down complex topics such as inheritance, polymorphism, graph theory, and mathematical proofs.",
    ],
    technologies: ["JavaScript", "PlayCanvas", "Oculus VR"],
  },
  {
    id: 4,
    title: "Competitive Programming Instructor",
    company: "ICESI University",
    logo: icesiLogo,
    dates: "August 2022 – December 2022",
    responsibilities: [
      "Instructed freshman college students in <strong>competitive programming</strong> concepts, emphasizing <strong>C++</strong> and <strong>data structures</strong> with interactive lessons.",
      "Assisted students through hands-on exercises and learning platforms such as <strong>Leetcode</strong> and <strong>Codeforces</strong>.",
    ],
    technologies: ["C++", "Data Structures", "Leetcode", "Codeforces"],
  },
  {
    id: 5,
    title: "Algorithms and Programming II Teaching Assistant",
    company: "ICESI University",
    logo: icesiLogo,
    dates: "January 2022 – December 2022",
    responsibilities: [
      "Facilitated comprehension of course content by conducting thorough reviews of <strong>graphs</strong>, <strong>binary trees</strong>, <strong>linked lists</strong>, and <strong>sorting algorithms</strong> during office hours.",
      "Assessed and evaluated student projects and assignments weekly, ensuring timely return of results.",
    ],
    technologies: ["Graphs", "Binary Trees", "Linked Lists", "Algorithms"],
  },
];

export const projects = [
  {
    id: 1,
    name: "Heart in the Game Web App",
    description: "Built a <strong>CPR/AED awareness</strong> web application at the <strong>JPMC Code For Good Hackathon 2024</strong>, using React for the front-end and Flask for the back-end, including <strong>interactive training modules</strong> and emergency response guides.",
    techStack: ["React", "Flask"],
    image: heartInTheGame,
    link: null,
  },
  {
    id: 2,
    name: "FinLife",
    description: "Interactive game following a newly graduated college student stepping into adult life after the <strong>2008 stock market crash</strong>, where every decision matters for your <strong>player stats and net worth</strong>.",
    techStack: ["React", "JavaScript", "chart.js", "yahoo-finance-api"],
    image: finlife,
    link: "https://devpost.com/software/finlife-zwkj1v",
  },
  {
    id: 3,
    name: "Formula One Race Outcome Prediction",
    description: "Applied and compared <strong>regression models</strong> (Linear Regression, Random Forest, Gradient-Boosted Trees) on <strong>14 linked datasets</strong> spanning <strong>70 years</strong> of pre-race data to predict race outcomes.",
    techStack: ["Python", "Machine Learning"],
    image: formula1,
    link: "https://github.com/danielvm28/formula-one-outcome-prediction",
  },
  {
    id: 4,
    name: "Clustering Applied to Climate in Colombia",
    description: "Used Jupyter Notebooks and the <strong>k-means algorithm</strong> in sklearn to partition data into clusters and recognize <strong>weather patterns</strong> across various regions of Colombia.",
    techStack: ["Python", "sklearn", "Jupyter"],
    image: clustering,
    link: "https://github.com/danielvm28/clustering-applied",
  },
  {
    id: 5,
    name: "Continental Database",
    description: "Created a database simulating the population in America with <strong>1 million+ records</strong>, supporting <strong>CRUD operations</strong> with an AVL tree using Java and a JavaFX UI.",
    techStack: ["Java", "JavaFX", "Data Structures"],
    image: continentalDb,
    link: "https://github.com/danielvm28/continental-database",
  },
  {
    id: 6,
    name: "Space Invaders",
    description: "Built an original version of the Space Invaders game with JavaFX, offering <strong>multiple levels</strong> and replay functionality.",
    techStack: ["Java", "JavaFX"],
    image: spaceInvaders,
    link: "https://github.com/danielvm28/space-invaders",
  },
];

// Skill icons mapping to Devicon class names
export const skillIcons = {
  // Languages
  "Python": "devicon-python-plain",
  "Java": "devicon-java-plain",
  "JavaScript": "devicon-javascript-plain",
  "C++": "devicon-cplusplus-plain",
  "C": "devicon-c-plain",
  "Scala": "devicon-scala-plain",
  "Rust": "devicon-rust-plain",
  "OCaml": "devicon-ocaml-plain",
  "HTML": "devicon-html5-plain",
  "CSS": "devicon-css3-plain",
  "R": "devicon-r-plain",
  "MIPS Assembly": null, // No icon available
  // Databases
  "DynamoDB": "devicon-dynamodb-plain",
  "SQL": "devicon-mysql-plain",
  "MongoDB": "devicon-mongodb-plain",
  // Frameworks
  "Spring Boot": "devicon-spring-plain",
  "React": "devicon-react-original",
  "Scikit-learn": "devicon-scikitlearn-plain",
  "Flask": "devicon-flask-original",
  // Tools
  "Git": "devicon-git-plain",
  "GitHub Copilot": "devicon-github-original",
  "Linux": "devicon-linux-plain",
  "Jupyter Notebooks": "devicon-jupyter-plain",
  "AWS": "devicon-amazonwebservices-plain-wordmark",
  "Docker": "devicon-docker-plain",
  "Terraform": "devicon-terraform-plain",
  "Kafka": "devicon-apachekafka-original",
  "PyTorch": "devicon-pytorch-original",
  "pandas": "devicon-pandas-plain",
};

export const skills = {
  languages: ["Python", "Java", "JavaScript", "C++", "C", "Scala", "Rust", "OCaml", "HTML", "CSS", "R", "MIPS Assembly"],
  databases: ["DynamoDB", "SQL", "MongoDB"],
  frameworks: ["Spring Boot", "React", "Scikit-learn"],
  tools: ["Git", "GitHub Copilot", "Linux", "Jupyter Notebooks", "AWS", "Docker", "Terraform"],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      link: "https://www.credly.com/badges/68f24253-5cf5-4af7-ad94-2f533ac4635d/linked_in_profile",
    },
  ],
  spokenLanguages: ["English", "Spanish"],
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Maryland, College Park",
    location: "College Park, Maryland",
    logo: umdLogo,
    dates: "January 2023 - May 2026",
    graduation: "Expected May 2026",
    gpa: "3.6/4.0",
    coursework: [
      "Discrete Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Organization of Programming Languages",
      "Intro to Artificial Intelligence",
      "Web Application Development",
      "Intro to Data Science",
      "Programming Language Technologies and Paradigms",
      "Computer and Network Security",
      "Advanced Data Structures",
    ],
  },
  {
    id: 2,
    degree: "Software Systems Engineering",
    institution: "ICESI University",
    location: "Cali, Colombia",
    logo: icesiLogo,
    dates: "February 2021 - December 2022",
    graduation: "Transferred",
    gpa: "4.0/4.0",
    coursework: [],
  },
];

export const leadership = [
  {
    id: 1,
    title: "Member",
    organization: "ICESI University Competitive Programming Team",
    logo: icpcLogo,
    dates: "January 2021 - December 2022",
    link: "https://icpc.global/ICPCID/W59SDH32XUOW",
    highlights: [
      "Solved programming problems using C++ and Python.",
      "Competed in the 2021 ICPC South America-North Finals, 2021 and 2022 ICPC Colombia National Programming Marathons.",
    ],
  },
  {
    id: 2,
    title: "VP of Communications and Diversity & Inclusion Chair",
    organization: "Alpha Sigma Phi",
    logo: alphaSigLogo,
    dates: "April 2024 - April 2025",
    highlights: [
      "Collaborate with members of the Executive Board to evaluate priorities, discuss strategy, and make crucial decisions.",
      "Manage and oversee the chapter's social media presence, creating and publishing content to maintain member engagement.",
    ],
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];
