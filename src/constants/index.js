import project1 from "../assets/newsStack.png";
import project2 from "../assets/TicTacToe.png";
import project3 from "../assets/coffeeShop.png";

export const HERO_CONTENT = `I’m a passionate Front-End Developer with almost 1 year of experience transforming ideas into visually stunning and user-friendly web interfaces. Proficient in modern front-end technologies like Html,Css,Js and React js , I specialize in creating responsive, accessible, and engaging digital experiences. With a deep understanding of user-centric design and scalable solutions, I’m driven to build applications that not only look great but perform flawlessly. Let’s bring your vision to life with innovation and creativity.`;

export const ABOUT_TEXT = `I recently completed my Bachelor's in Software Engineering, where I gained a solid foundation in programming fundamentals, C++, Object-Oriented Programming (OOP), Data Structures and Algorithms (DSA), and Web Development. My studies also included working with databases, ASP.NET, and the Semantic Web, particularly with ontologies using Protege. In May, I began an internship as a Front-End Developer, where I gained hands-on experience with React.js. Currently, I'm expanding my skill set by learning the MERN stack to deepen my knowledge in full-stack development and build more dynamic, scalable web applications.`;

export const EXPERIENCES = [
  {
    year: "OCTOBER 2024 - Present",
    role: "Development Team Lead",
    company: "Dev Techno",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Node.js", "MongoDB"],
  },
  {
    year: "MAY 2024 - OCTOBER 2024",
    role: "Frontend Developer",
    company: "Spark Solutionz",
    description: `Designed and developed dynamic, user-focused interfaces for web applications using React.js, Bootstrap, and Tailwind CSS.Collaborated with backend developers and the UX/UI team to create a hospital website from scratch, converting design mockups into efficient, responsive, and pixel-perfect code.Integrated APIs for sliders and dynamic data display, ensuring seamless functionality and a smooth user experience.Conducted thorough testing using Postman, working with JWT tokens to implement secure authentication on both the client and server sides.Implemented robust error handling and optimized performance for reliability and scalability.`,
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap", "Reactjs"],
  },
];

export const PROJECTS = [
  {
    title: "News Aggregator Web Application",
    image: project1,
    description:
      "Built a dynamic news aggregator project that fetches live news data using the News API, showcasing top stories, trending news, and random features.The project aimed to deepen my understanding of API integration while honing skills in crafting modern, interactive user interfaces.",
    technologies: ["HTML", "CSS", "Reactjs", "News Api", "Bootstrap"],
  },
  {
    title: "Tic Tac Toe",
    image: project2,
    description:
      "Developed an interactive Tic Tac Toe game using React for logic,SweetAlert to display winning messages dynamically and a 'Play Again' feature.This project enhanced my understanding of React state management and UI interactivity, while showcasing the ability to build fun and functional applications.",
    technologies: ["HTML", "CSS", "Reactjs", "Bootstrap"],
  },
  {
    title: "Coffee Shop Website",
    image: project3,
    description:
      "Designed a responsive coffee shop website featuring custom sliders for the hero banner, item listings, and testimonials to enhance user engagement. Integrated Formik and Yup for a seamless form experience with validation and used SweetAlert for success messages.Added an interactive map for location display and ensured responsiveness across all devices for a smooth user experience.",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Reactjs",
      "React slick",
      "Formik",
      "Yup",
    ],
  },
];

export const CONTACT = {
  address: "Gulberg,Lahore,Punjab,Pakistan ",
  phoneNo: "+92 3356994535 ",
  email: "humnaramzan1@gmail.com",
};
