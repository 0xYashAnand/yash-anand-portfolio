import redrobLogo from "@/public/redrob-logo.jpeg";
import finarkeinLogo from "@/public/finarkein-logo.jpeg";
import { CircuitBoard, Code2, Database, FileCode, Zap } from "lucide-react";
import Image from "next/image";
import BookCollectionImg from "@/public/book-collection-cover.png";
import NexTaskAppImg from "@/public/nextask-app-cover.png";
import ExpenseTrackerImg from "@/public/expense-tracker-cover.png";
import universityLogo from "@/public/university-logo.svg";
import MySQLImg from "@/public/mysql.svg";

// Experiences

export const experiences = [
  {
    title: "Software Engineer",
    company: "Finarkein Analytics · Full-time",
    logo: finarkeinLogo,
    website: "https://www.finarkein.com/",
    location: "Pune, MH",
    period: "May 2025 - Present",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Git",
    ],
    achievements: [
     
    ],
  },
  {
    title: "Backend Developer",
    company: "Redrob By McKinley Rice · Full-time",
    logo: redrobLogo,
    website: "https://in.redrob.io/",
    location: "Noida, UP",
    period: "Jun 2024 - Jan 2025",
    technologies: [
      "NestJS",
      "Prisma",
      "Mongoose",
      "MongoDB",
      "Elasticsearch",
      "Typescript",
      "AWS S3",
      "Gemini API",
      "OpenAI API",
      "Git",
    ],
    achievements: [
      "Engineered scalable backend services serving over 1.2M API requests monthly with 99.95% uptime",
      "Reduced query processing time by 45% through RESTful API optimizations and database indexing",
      "Achieved 55% query time reduction in job recommendation APIs using Elasticsearch optimizations",
      "Implemented MongoDB aggregation pipelines handling 750k+ records with Mongoose ODM",
      "Integrated OpenAI-powered chat interface with document analysis and semantic search capabilities",
      "Developed AI assessment tools reducing time-to-hire by 35% through automated coding evaluations",
      "Optimized CI/CD pipelines with Git, reducing deployment failures by 40% through automated testing",
      "Designed MongoDB schema architectures improving query efficiency by 50% for high-traffic systems",
      "Implemented secure file upload system with AWS S3 handling 10k+ daily uploads with 99.99% reliability",
    ],
  }
];

export const technologyIcons: { [key: string]: JSX.Element } = {
  NestJS: (
    <Image
      src="https://cdn.worldvectorlogo.com/logos/nestjs.svg"
      alt="NestJS"
      width={20}
      height={20}
    />
  ),
  Prisma: (
    <Image
      src="https://cdn.worldvectorlogo.com/logos/prisma-3.svg"
      alt="Prisma"
      width={20}
      height={20}
      className="invert"
    />
  ),
  Mongoose: <Database className="h-4 w-4" />,
  Elasticsearch: (
    <Image
      src="https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg"
      alt="Elasticsearch"
      width={20}
      height={20}
    />
  ),
  Typescript: (
    <Image
      src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
      alt="TypeScript"
      width={20}
      height={20}
    />
  ),
  "AWS S3": (
    <Image
      src="https://cdn.worldvectorlogo.com/logos/aws-2.svg"
      alt="AWS S3"
      width={20}
      height={20}
    />
  ),
  "Gemini API": (
    <Image
      src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg"
      alt="Google AI"
      width={20}
      height={20}
    />
  ),
  MongoDB: (
    <Image
      src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
      alt="MongoDB"
      width={20}
      height={20}
    />
  ),
  "OpenAI API": (
    <Image
      src="https://cdn.worldvectorlogo.com/logos/openai-2.svg"
      alt="OpenAI"
      width={20}
      height={20}
      className="invert"
    />
  ),
  Git: (
    <Image
      src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
      alt="Git"
      width={20}
      height={20}
    />
  ),
  Java: (
    <Image
      src="https://cdn.worldvectorlogo.com/logos/java-14.svg"
      alt="Java"
      width={20}
      height={20}
    />
  ),
  "Spring Boot": (
    <Image
      src="https://cdn.worldvectorlogo.com/logos/spring-3.svg"
      alt="Spring Boot"
      width={20}
      height={20}
    />
  ),
  PostgreSQL: (
    <Image
      src="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
      alt="PostgreSQL"
      width={20}
      height={20}
    />
  ),
  Docker: (
    <Image
      src="https://cdn.worldvectorlogo.com/logos/docker.svg"
      alt="Docker"
      width={20}
      height={20}
    />
  ),
};

// Projects

export const projects = [
  {
    title: "NexTask App",
    description:
      "A powerful app for small business owners to manage invoices, oversee staff, and monitor sales effortlessly. From creating custom invoices to tracking team incentives across branches, it’s your go-to solution for streamlined operations.",
    technologies: [
      {
        name: "Next.js",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
            alt="Next.js"
            width={20}
            height={20}
            className="invert"
          />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
            alt="Tailwind CSS"
            width={20}
            height={20}
          />
        ),
      },
      {
        name: "MongoDB",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
            alt="MongoDB"
            width={20}
            height={20}
          />
        ),
      },
      {
        name: "Mongoose",
        icon: <Database className="h-5 w-5 text-green-500" />,
      },
      {
        name: "Nest.js",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/nestjs.svg"
            alt="NestJS"
            width={20}
            height={20}
          />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
            alt="TypeScript"
            width={20}
            height={20}
          />
        ),
      },
    ],
    github: "https://github.com/0xYashAnand/nextask-app-ui",
    live: "https://nextask-app.netlify.app",
    image: NexTaskAppImg,
  },
  {
    title: "Expense Tracker API",
    description:
      "A secure backend API built with Spring Boot for tracking personal expenses. Supports user authentication, categorization of expenses, and Swagger-based API documentation for testing and development.",
    technologies: [
      {
        name: "Spring Boot",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/spring-3.svg"
            alt="Spring Boot"
            width={20}
            height={20}
          />
        ),
      },
      {
        name: "Java",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/java-14.svg"
            alt="Java"
            width={20}
            height={20}
          />
        ),
      },
      {
        name: "MySQL",
        icon: (
          <Image
            src={MySQLImg}
            alt="MySQL"
            width={20}
            height={20}
            className="invert"
          />
        ),
      },
      {
        name: "JWT",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg"
            alt="JWT"
            width={20}
            height={20}
            className="invert"
          />
        ),
      },
      {
        name: "Swagger",
        icon: (
          <Image
            src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg"
            alt="Swagger"
            width={20}
            height={20}
          />
        ),
      },
    ],
    github: "https://github.com/0xYashAnand/expense-tracker-api",
    live: "",
    image: ExpenseTrackerImg,
  },
  {
    title: "Book Collection",
    description:
      "This application allows users to manage their book collections with a user-friendly interface. It interacts with a backend service to perform CRUD operations and fetch additional book details using external APIs.",
    technologies: [
      {
        name: "React",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
            alt="React"
            width={20}
            height={20}
          />
        ),
      },
      {
        name: "Vite",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/vitejs.svg"
            alt="Vite"
            width={20}
            height={20}
          />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
            alt="TypeScript"
            width={20}
            height={20}
          />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
            alt="Tailwind CSS"
            width={20}
            height={20}
          />
        ),
      },
      {
        name: "Framer Motion",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
            alt="Framer Motion"
            width={20}
            height={20}
          />
        ),
      },
      {
        name: "Node.js",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
            alt="Node.js"
            width={20}
            height={20}
          />
        ),
      },
      {
        name: "Express.js",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
            alt="Express.js"
            width={20}
            height={20}
            className="invert"
          />
        ),
      },
      {
        name: "MySQL",
        icon: (
          <Image
            src={MySQLImg}
            alt="MySQL"
            width={20}
            height={20}
            className="invert"
          />
        ),
      },
      {
        name: "Nodemon",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/nodemon.svg"
            alt="Nodemon"
            width={20}
            height={20}
          />
        ),
      },
    ],
    github: "https://github.com/0xYashAnand/book-collection-api",
    live: "https://save-your-books.netlify.app",
    image: BookCollectionImg,
  },
];

// Educations

export const education = [
  {
    degree: "Bachelor of Technology",
    major: "Computer Science and Engineering",
    institution: "Indian Institute of Information Technology, Nagpur",
    logo: universityLogo,
    website: "https://www.iiitn.ac.in",
    location: "Nagpur, Maharashtra",
    period: "2020 - 2024",
    courses: [
      "Data Structures and Algorithms",
      "Machine Learning",
      "Cloud Computing",
      "Object-Oriented Programming",
      "Operating Systems",
      "Database Management Systems",
      "Artificial Intelligence",
    ],
  },
];

// Social Links
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("your.email@example.com");
    alert("Email copied to clipboard!");
  } catch (err) {
    alert("Failed to copy email");
  }
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/0xYashAnand",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
        alt="GitHub"
        width={20}
        height={20}
      />
    ),
    color: "hover:text-[#f58a07]",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/0xYashAnand",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-3.svg"
        alt="LinkedIn"
        width={20}
        height={20}
      />
    ),
    color: "hover:text-[#0077b5]",
  },
  {
    name: "Twitter",
    url: "https://X.com/ylazydev",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/x-2.svg"
        alt="X.com"
        width={20}
        height={20}
        className="invert"
      />
    ),
    color: "hover:text-[#1da1f2]",
  },
  {
    name: "Gmail",
    url: "mailto:0xyashanand@gmail.com",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/official-gmail-icon-2020-.svg"
        alt="Gmail"
        width={20}
        height={20}
      />
    ),
    color: "hover:text-[#a63446]",
  },
];

export const email = "0xyashanand@gmail.com";

// about section

export const technologies = [
  {
    name: "Java",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/java-14.svg"
        alt="Java"
        width={20}
        height={20}
      />
    ),
  },
  {
    name: "Spring Boot",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/spring-3.svg"
        alt="Spring Boot"
        width={20}
        height={20}
      />
    ),
  },
  {
    name: "Nest.js",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/nestjs.svg"
        alt="NestJS"
        width={20}
        height={20}
      />
    ),
  },
  {
    name: "Prisma",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/prisma-3.svg"
        alt="Prisma"
        width={20}
        height={20}
        className="invert"
      />
    ),
  },
  // { name: "Mongoose", icon: <Database className="h-5 w-5 text-green-500" /> },
  {
    name: "MongoDB",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
        alt="MongoDB"
        width={20}
        height={20}
      />
    ),
  },

  {
    name: "TypeScript",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
        alt="TypeScript"
        width={20}
        height={20}
      />
    ),
  },
  {
    name: "Node.js",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
        alt="Node.js"
        width={20}
        height={20}
      />
    ),
  },
  {
    name: "Express.js",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/express-109.svg"
        alt="Express.js"
        width={20}
        height={20}
        className="invert"
      />
    ),
  },  
  {
    name: "PostgreSQL",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/postgresql.svg"
        alt="PostgreSQL"
        width={20}
        height={20}
      />
    ),
  },
  // {
  //   name: "MySQL",
  //   icon: <Image src={MySQLImg} alt="MySQL" width={20} height={20} />,
  // },
];

// SKills

// Define individual skills with their images or icons
export const skills = [
  // Languages
  { name: "C", image: "https://cdn.worldvectorlogo.com/logos/c-1.svg" },
  { name: "C++", image: "https://cdn.worldvectorlogo.com/logos/c.svg" },
  { name: "Java", image: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
  {
    name: "Python",
    image: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
  {
    name: "JavaScript",
    image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  },
  {
    name: "TypeScript",
    image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  { name: "SQL", icon: Database },

  // Backend Tech
  {
    name: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "Express.js",
    image: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    invert: true,
  },
  {
    name: "Nest.js",
    image: "https://cdn.worldvectorlogo.com/logos/nestjs.svg",
  },
  { name: "RESTful APIs", icon: Zap },
  { name: "Redis", image: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
  {
    name: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg",
  },
  {
    name: "MySQL",
    image: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg",
  },
  {
    name: "PostgreSQL",
    image: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
  },
  {
    name: "Prisma",
    image: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
    invert: true,
  },
  {
    name: "Mongoose",
    icon: Database,
  },
  {
    name: "Elasticsearch",
    image: "https://cdn.worldvectorlogo.com/logos/elasticsearch.svg",
  },

  // Frontend Tech
  { name: "HTML5", image: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "CSS3", image: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: "React", image: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  {
    name: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    invert: true,
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  { name: "Vue.js", image: "https://cdn.worldvectorlogo.com/logos/vue-9.svg" },

  // DevOps
  { name: "Git", image: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
  {
    name: "GitHub",
    image: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg",
  },
  { name: "Docker", image: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
  { name: "AWS", image: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
  {
    name: "Postman",
    image: "https://cdn.worldvectorlogo.com/logos/postman.svg",
  },
];

// Hero

export const techStack = [
  { Icon: FileCode, name: "Node.js" },
  { Icon: Database, name: "MongoDB" },
  { Icon: CircuitBoard, name: "Python" },
  { Icon: Code2, name: "TypeScript" },
];
