import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  threejs,
  gsap,
  vercel,
  dice,
  routing,
  clock,
  golf,
  gsap_practice,
  nike,
  soda,
  ccl,
  teacher2,
  img1,
  img2,
  img3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Technologies",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Front End Developer",
    icon: backend,
  },
  {
    title: "JavaScript Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "ReactRouting",
    icon: routing,
  },
  {
    name: "ReduxToolkit",
    icon: redux,
  },
  {
    name: "TailwindCSS",
    icon: tailwind,
  },
  {
    name: "Gsap",
    icon: gsap,
  },
  {
    name: "ThreeJS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
];

// I will add vercel and gsap logo.

const experiences = [
  {
    title: "Medical Representative",
    company_name: "CCL Phamaceuticals",
    icon: ccl,
    iconBg: "#383E56",
    date: "Jan 2022 - Oct 2024",
    points: [
      "Developed and executed sales strategies to promote pharmaceutical products, achieving the second-highest sales across Pakistan.",
      "Collaborated with healthcare professionals and cross-functional teams to meet sales targets and improve product visibility.",
      "Consistently managed and exceeded monthly sales goals throughout tenure at the company.",
      "Earned a prestigious foreign tour as recognition for exceptional sales performance.",
      "Provided regular feedback and insights to the sales team, contributing to continuous improvement in sales tactics.",
    ],
  },
  {
    title: "Teacher",
    company_name: "Ghazali High School",
    icon: teacher2,
    iconBg: "#ffff",
    date: "July 2020 - Dec 2021",
    points: [
      "Developed and implemented engaging lesson plans to align with the curriculum and educational standards.",
      "Fostered a positive and inclusive classroom environment that encouraged student participation and learning.",
      "Assessed and monitored student progress through assignments, exams, and projects, providing constructive feedback.",
      "Collaborated with colleagues, parents, and school administration to support student development and address individual needs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxOTM5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDk2NzI2M18xNzExMDEzODAzLnBuZyIsInVzZXJuYW1lIjoiVGFhaGFhIFVzbWFuICJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_4967263_1711013803.png&_branch_match_id=1298641662543572008&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1vdOTE8tdk8Lt%2FBIAgAf5yd%2BIwAAAA%3D%3D",
    title: "Introduction to CSS",
    image: img1,
  },
  {
    testimonial:
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIyMDA0IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDk2NTQ4MV8xNzEwODA1NzMwLnBuZyIsInVzZXJuYW1lIjoiVGFhaGFhIFVzbWFuICJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_4965481_1710805730.png&_branch_match_id=1298641662543572008&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1q8w9vUtDysMN%2FFIAgByqh2oIwAAAA%3D%3D",
    title: "ReactJS Components",
    image: img2,
  },
  {
    testimonial:
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxOTMzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDk2NTIzMV8xNzEwODAzNzE5LnBuZyIsInVzZXJuYW1lIjoiVGFhaGFhIFVzbWFuIn0&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_4965231_1710803719.png&_branch_match_id=1298641662543572008&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1q%2Fwdq%2B0SDINMfFIAgBLqURLIwAAAA%3D%3D",
    title: "Front End development",
    image: img3,
  },
];

const projects = [
  {
    name: "Soda E-commerce",
    description:
      "Developed a soda e-commerce application using pure JavaScript and routing, aiming to refine and strengthen my foundational web development skills.",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: soda,
    source_code_link: "https://github.com/TaahaaUsman",
  },
  {
    name: "Family Golf",
    description:
      "Created a family golf website clone using GSAP.js and other technologies to sharpen my skills and advance my learning in web development.",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: golf,
    source_code_link: "https://github.com/TaahaaUsman",
  },
  {
    name: "Nike Shoes",
    description:
      "Developed a Nike shoes website as a single-page application using React, React Router, and other components to sharpen my web development skills.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/TaahaaUsman",
  },
  {
    name: "Coucher Clone",
    description:
      "Created a Coucher website clone utilizing plain JavaScript, CSS, and HTML, with advanced animations powered by GSAP to enrich the user experience.",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gsap_practice,
    source_code_link: "https://github.com/TaahaaUsman",
  },
  {
    name: "Dice Game",
    description:
      "Through building the game, I enhanced my ability to create interactive and responsive user interfaces, while also working on DOM manipulation, user interaction and State management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dice,
    source_code_link: "https://github.com/TaahaaUsman",
  },
  {
    name: "Digital Clock",
    description:
      "Designed and built a digital clock with a visually appealing layout using plain CSS and JavaScript. The clock features smooth animations and a polished design to enhance its functionality and aesthetic.",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: clock,
    source_code_link: "https://github.com/TaahaaUsman",
  },
];

export { services, technologies, experiences, testimonials, projects };
