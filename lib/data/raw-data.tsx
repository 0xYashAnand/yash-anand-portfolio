import redrobLogo from "@/public/redrob-logo.jpeg";
import { CircuitBoard, Code2, Database, FileCode, Zap } from "lucide-react";
import Image from "next/image";
import img1 from "@/public/book-collection-cover.png";
import universityLogo from "@/public/university-logo.svg";

// Experiences

export const experiences = [
  {
    title: "Backend Developer",
    company: "Redrob By McKinley Rice · Full-time",
    logo: redrobLogo,
    website: "https://in.redrob.io/",
    location: "Noida, UP",
    period: "May 2023 - Jan 2024",
    technologies: [
      "NestJS",
      "Prisma",
      "Mongoose",
      "MongoDB",
      "Elasticsearch",
      "Typescript",
      "AWS S3",
      "Gemini",
      "OpenAI",
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
  },
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
  Gemini: (
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
  OpenAI: (
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
};

// Projects

export const projects = [
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
          />
        ),
      },
      {
        name: "MySQL",
        icon: (
          <Image
            src="https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
            alt="MySQL"
            width={20}
            height={20}
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
    image: img1,
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
  { name: "Mongoose", icon: <Database className="h-5 w-5 text-green-500" /> },
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
    name: "MySQL",
    icon: (
      <Image
        src="https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
        alt="MySQL"
        width={20}
        height={20}
      />
    ),
  },
];

// SKills

// Define individual skills with their images or icons
export const skills = [
  {
    name: "C++",
    image: "https://cdn.worldvectorlogo.com/logos/c.svg",
  },
  {
    name: "TypeScript",
    image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "JavaScript",
    image: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
  },
  {
    name: "Python",
    image: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
  {
    name: "Nest.js",
    image: "https://cdn.worldvectorlogo.com/logos/nestjs.svg",
  },
  {
    name: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "Express.js",
    image: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    invert: true,
  },
  { name: "RESTful APIs", icon: Zap },
  { name: "Redis", image: "https://cdn.worldvectorlogo.com/logos/redis.svg" },
  {
    name: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1-1.svg",
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
  { name: "Mongoose", icon: Database },
  {
    name: "Elasticsearch",
    image: "https://cdn.worldvectorlogo.com/logos/elasticsearch.svg",
  },
  { name: "Git", image: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
  { name: "HTML5", image: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
  { name: "CSS3", image: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
  { name: "React", image: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  {
    name: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    invert: true,
  },
];

// Hero

export const techStack = [
  { Icon: FileCode, name: "Node.js" },
  { Icon: Database, name: "MongoDB" },
  { Icon: CircuitBoard, name: "Python" },
  { Icon: Code2, name: "TypeScript" },
];
