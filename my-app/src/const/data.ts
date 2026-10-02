// ─────────────────────────────────────────────────────────
// Bütün şəxsi məlumatları bu fayldan idarə et.
// Aşağıdakı sahələri öz məlumatlarınla əvəz et.
// ─────────────────────────────────────────────────────────

export const profile = {
  name: "Aydan Abbaszadə",
  firstName: "Aydan",
  role: "Software Developer",
  status: "Open for new projects",
  location: "Bakı, Azərbaycan",
  tagline:
    "Hi there! I'm a passionate Front-end Developer working with React and Next.js. I love building fast, functional, and user-focused web products. I approach problems creatively and enjoy working closely with teams to bring projects to successful completion.",
  about:
    "Working with code is more than a technical skill for me — it's a craft of shaping thought into form. In every project, I strive to prioritize simplicity, clarity, and a seamless user experience. Attention to detail, writing clean and readable code, and a user-centered mindset form the foundation of how I work.",
  email: "aydanabbaszade373@gmail.com",
  phone: "+994 55 843 18 60",
  github: "https://github.com/username",
  linkedin: "https://www.linkedin.com/in/username",
  cvUrl: "#",
};

export const stats = [
  { value: "15", suffix: "+", label: "Completed projects" },
  { value: "9", suffix: "", label: "Technologies learned" },
];

export type Service = {
  title: string;
  description: string;
  icon: "code" | "app" | "server";
};

export const services: Service[] = [
  {
    title: "Website Development",
    description: "Fast, responsive, and SEO-friendly websites crafted with care.",
    icon: "code",
  },
  {
    title: "App Development",
    description: "Modern, interactive application interfaces built with React.",
    icon: "app",
  },
  {
    title: "Website Hosting",
    description: "Seamless deployment, domain setup, and performance monitoring.",
    icon: "server",
  },
];

export const skills = [
  "HTML5",
  "CSS",
  "JavaScript",
  "Node.js",
  "React",
  "Next.js",
  "TypeScript",
  "Git",
  "Github",
];

export type Project = {
  name: string;
  slug: string;
  description: string;
  stack: string[];
  link: string;
  repo?: string;
  accent: string;
  image?: string;
};

export const projects: Project[] = [
  {
    name: "Booking.com Clone",
    slug: "01",
    description:
      "A full-stack booking platform with secure authentication, rate limiting, and real-time logging.",
    stack: ["Next.js", "Express.js", "MongoDB", "TypeScript", "Tailwind"],
    link: "https://booking-app-blush-alpha.vercel.app/en",
    repo: "https://github.com/aydanszd/Booking.com",
    accent: "#ff6b4a",
    image: "/project-01.png",
  },
  {
    name: "Mavon Beauty",
    slug: "02",
    description:
      "An elegant e-commerce experience for a beauty brand, built for speed and smooth browsing.",
    stack: ["Next.js", "Express.js", "MongoDB", "TypeScript", "Tailwind"],
    link: "https://mavonbeauty.vercel.app/az",
    repo: "https://github.com/aydanszd/mavonbeauty.git",
    accent: "#6ea8ff",
    image: "/project-02.png",
  },
  {
    name: "Belly Coffee",
    slug: "07",
    description:
      "A warm, content-driven coffee shop website powered by a headless CMS.",
    stack: ["React", "Strapi", "Tailwind", "TanStack Query", "TypeScript"],
    link: "https://belly-coffee.vercel.app/",
    repo: "https://github.com/aydanszd/BellyCoffee",
    accent: "#e0a458",
    image: "/project-03.png",
  },
  {
    name: "MedBooking",
    slug: "03",
    description:
      "A hospital appointment platform designed from Figma to a fully responsive, user-friendly interface. (Demo access code: 1100)",
    stack: ["React", "Redux", "Tailwind", "Figma"],
    link: "https://demo.medbooking.az/",
    repo: "https://gitlab.com/NuraneIsali/mit.group.git",
    accent: "#7fe0b0",
    image: "/project-04.png",
  },
  {
    name: "Bizera",
    slug: "04",
    description:
      "A clean, modern corporate website built with pixel-perfect precision.",
    stack: ["React", "Tailwind", "TypeScript"],
    link: "https://www.bizera.co/",
    repo: "https://github.com/infobizera-cmd/Bizera.git",
    accent: "#c084fc",
    image: "/project-05.png",
  },
  {
    name: "Dr. Beyrek",
    slug: "05",
    description:
      "A responsive medical landing page focused on clarity and accessibility.",
    stack: ["HTML", "CSS"],
    link: "https://medixal-template.vercel.app/index.html",
    repo: "https://github.com/aydanszd/dr.Beyrek.A.git",
    accent: "#ffb86b",
    image: "/project-06.png",
  },
  {
    name: "Bina.az",
    slug: "06",
    description:
      "A real estate listings platform with fast data fetching and a smooth browsing experience.",
    stack: ["Next.js", "Tailwind", "TanStack Query", "Prisma"],
    link: "https://bina-az-1osg.vercel.app/announcement",
    repo: "https://github.com/aydanszd/bina.az.git",
    accent: "#4ade80",
    image: "/project-07.png",
  },
  {
    name: "Minimog",
    slug: "08",
    description:
      "A minimalist e-commerce template built with a strong focus on performance.",
    stack: ["Next.js", "Prisma", "TypeScript", "Tailwind"],
    link: "https://minimog-gules.vercel.app/home",
    repo: "https://github.com/aydanszd/minimog.git",
    accent: "#f472b6",
    image: "/project-08.png",
  },
  {
    name: "Evimfix",
    slug: "09",
    description:
      "A property maintenance platform with a public site and admin dashboard, built for smooth data handling.",
    stack: ["React", "Next.js", "Tailwind", "TanStack Query", "TypeScript"],
    link: "https://evimfix.az/",
    repo: "https://github.com/elxanxanlarov/evimfix-front",
    accent: "#38bdf8",
    image: "/project-09.png",
  },
];

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "06.2026 — 07.2026",
    title: "Frontend Developer",
    company: "MIT Career Center",
    points: [
      "Built a CRM system for a hospital with a focus on user-friendly design.",
      "Delivered pixel-perfect interfaces tailored to real clinical workflows.",
    ],
  },
  {
    period: "03.2026 — 05.2026",
    title: "Frontend Developer",
    company: "Evimfiz",
    points: [
      "Developed an admin panel with React and Next.js, ensuring pixel-perfect accuracy.",
      "Handled hosting, SEO optimization, and integration with REST APIs.",
    ],
  },
  {
    period: "01.2026 — 03.2026",
    title: "Frontend Developer",
    company: "Bizera",
    points: [
      "Translated Figma designs into pixel-perfect, fully responsive interfaces.",
      "Built interactive UI components with a strong focus on usability and detail.",
    ],
  },
];