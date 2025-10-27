import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Shreevat/", name: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/shreevatshanka/", name: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:info@example.com", name: "Email" },
]

export interface ExperienceItem {
  id: number
  role: string
  company: string
  location: string
  period: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Monal Tech",
    location: "Kathmandu",
    period: "Oct 2025 - Dec 2025",
    description: "Working on the front-end development of MakeMyScan, a website vulnerability scanning tool.",
    responsibilities: [
      "Implemented responsive designs using HTML, CSS, and JavaScript",
      "Developed and maintained reusable UI components using Next.js and Tailwind CSS",
      "Fixed bugs and improved application performance across different devices",
      "Created RESTful API integrations for data fetching and user authentication",
      "Participated in daily stand-up meetings and sprint planning sessions",
      "Collaborated with team lead to implement perfect interfaces",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS", "Git"],
  },
  {
    id: 2,
    role: "Junior Developer",
    company: "Monal Tech",
    location: "Kathmandu",
    period: "Dec 2025 - Present",
    description:
      "Promoted to Junior Developer role, continuing work on MakeMyScan and taking on more complex development tasks.",
    responsibilities: [
      "Developed and optimized front-end features for MakeMyScan platform",
      "Implemented advanced UI components and interactive features",
      "Improved code quality and performance through refactoring",
      "Mentored interns and reviewed their code contributions",
      "Collaborated with backend team on API integration and optimization",
      "Participated in architectural decisions and technical planning",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Next.js", "Tailwind CSS", "React", "Git"],
  },
  {
    id: 3,
    role: "React Developer",
    company: "Freelance",
    location: "Remote",
    period: "",
    description: "Building custom e-commerce solutions for clients using modern React technologies.",
    responsibilities: [
      "Designed and developed responsive e-commerce websites",
      "Implemented shopping cart, payment integration, and product management features",
      "Optimized website performance and user experience",
      "Maintained and updated existing client projects",
      "Provided technical support and bug fixes",
      "Collaborated with clients to understand requirements and deliver solutions",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Git"],
  },
]

export const PROJECTS = [
  {
    id: "project-1",
    title: "Make My Scan",
    description:
      "Website vulnerability scanning tool to protect your system from possible security threats and vulnerabilities.",
    link: "https://makemyscan.com/",
    category: "Professional",
  },
  {
    id: "project-2",
    title: "Rondesse FARS Page",
    description: "WordPress landing page for a firm, designed to showcase services and generate client leads.",
    link: "https://rondesse.com",
    category: "Professional",
  },
  {
    id: "project-3",
    title: "Contacts Backend",
    description: "API for a contact app with search function, login, and basic CRUD operations.",
    link: "https://github.com/Shreevat/Contacts",
    category: "Personal",
  },
  {
    id: "project-4",
    title: "Mailo Driver (Game)",
    description: "A driving game made in Unity Engine, featuring a map for license trial. Worked on map design.",
    link: "https://drive.google.com/drive/folders/1GCVMZWSbKnadJGPOg4WWOKrjS6Gyo4oP?usp=drive_link",
    category: "Personal",
  },
  {
    id: "project-5",
    title: "Rajesh Daii (Games)",
    description: "A 3D game made in Unity Engine. Worked on level design.",
    link: "https://drive.google.com/drive/folders/1Z5YeSFo3bUvMq_q04TkBTkSZz5LCHCAH?usp=drive_link",
    category: "Personal",
  },

  {
    id: "project-7",
    title: "Portfolio Website",
    description:
      "A React App to display my portfolio and projects made in React, TypeScript, and Vite. Continuously updated as I learn new tools and UI frameworks.",
    link: "https://github.com/Shreevat/Portfolio",
    category: "Personal",
  },
]
