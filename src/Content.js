// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import ai from "./assets/images/Skills/ai.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import dotnet from "./assets/images/Skills/dotnet.png";
import csharp from "./assets/images/Skills/csharp.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/project1.png";
import img2 from "./assets/images/Projects/img2.png";
import img3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsBehance } from "react-icons/bs"
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
    nav: [{
            link: "#skills",
            icon: BiUser,
        },
        {
            link: "#services",
            icon: RiServiceLine,
        },
        {
            link: "#projects",
            icon: RiProjectorLine,
        },
        {
            link: "#contact",
            icon: MdOutlinePermContactCalendar,
        },
    ],
    hero: {
        title: "Web Developer & Designer",
        firstName: "MICHELLE",
        LastName: "CADAVID",
        btnText: "Hire Me",
        image: Hero_person,
        hero_content: [{
                count: "2",
                text: "Years of Experience in Design",
            },
            {
                count: "10+",
                text: "Projects I Worked throughout my career",
            },
        ],
    },
    skills: {
        title: "Skills",
        subtitle: "MY TOP SKILLS",
        skills_content: [{
                name: "Figma",
                para: "UI/UX & Web design",
                list: {
                    1: "As a web developer, I have the expertise to create functional prototypes that prioritize a seamless and enjoyable user experience.",
                    2: "2. I believe that Figma is a valuable tool in the web design process, offering a speedy solution for crafting visually appealing designs.",
                },
                logo: figma,
            },
            {
                name: ".NET core",
                para: "Backend technology",
                list: {
                    1: "1. I am proficient in designing and integrating APIs using the ASP.NET Core framework.",
                    2: "2. With my knowledge in ASP.NET Core, I am able to incorporate real-time technologies such as WebSockets to enhance the functionality of applications",
                },
                logo: dotnet,
            },
            {
                name: "Adobe Photoshop",
                para: "Image edition",
                list: {
                    1: "1. I am skilled in enhancing images through adjustments to lighting, color, and other key elements.",
                    2: "2. My capabilities extend to removing or altering the background of photos to achieve desired effects.",
                    3: "3. I can produce realistic product mockups to showcase designs in a tangible way.",
                    4: "4. I have a strong artistic background and can create visually appealing drawings and digital designs.",
                },
                logo: ps,
            },
            {
                name: "React js",
                para: "Web applications",
                list: {
                    1: "1. I have experience in building dynamic single-page web applications with visually stunning user interfaces using React.",
                    2: "2. I am proficient in crafting single-page websites using React, delivering a seamless user experience.",
                    3: "3. I can integrate external plugins and tools into React projects to improve productivity and streamline development processes.",
                },
                logo: reactjs,
            },
            {
                name: "Illustrator",
                para: "Logo design and vector illustrations",
                list: {
                    1: "1. I am skilled in designing custom icons and graphic elements",
                    2: "2. My expertise in Illustrator includes logo creation, ensuring the visual representation of a brand is both unique and impactful.",
                    3: "3. I am capable of creating dynamic 2D characters, bringing illustrations to life.",
                    4: "4. I can generate repeating patterns in Illustrator, adding texture and depth to designs.",
                },
                logo: ai,
            },
            {
                name: "C#",
                para: "the programming language that I know the best",
                list: {
                    1: "1. With C# and .NET Core, I have experience in developing robust and scalable backend systems, including APIs.",
                    2: "2. My knowledge of C# also extends to the realm of video game development, where I have utilized the language to create engaging gaming experiences.",
                },
                logo: csharp,
            },
        ],
        icon: MdArrowForward,
    },
    services: {
        title: "Services",
        subtitle: "WHAT I OFFER",
        service_content: [{
                title: "Web Development",
                para: "Combining technical proficiency with an eye for design, as full-stack developer, I can go from creating custom websites from the ground up to developing sophisticated web applications.",
                logo: services_logo1,
            },
            {
                title: "UI/ UX Design",
                para: "I excel in translating user experience insights into engaging user interfaces that deliver a satisfying end-user experience.",
                logo: services_logo2,
            },
            {
                title: "Vector illustration and design",
                para: "When creating unique icons and logos, my aim is to craft visually appealing graphics that effectively communicate brand messages and identities.",
                logo: services_logo3,
            },
        ],
    },
    Projects: {
        title: "Projects",
        subtitle: "MY CREATION",
        image: person_project,
        project_content: [{
                title: "Gym Website",
                image: project1,
            },
            {
                title: "Social Media web",
                image: img2,
            },
            {
                title: "Creative Website",
                image: img3,
            },
        ],
    },
    Testimonials: {
        title: "Testimonials",
        subtitle: "MY CLIENT REVIEWS",
        testimonials_content: [{
                review: "“Jineth is the best artist for me, she is hard worker, she designed my project very beautifully. Recommended 1000%. If you want your project professionally just hire her.”",
                img: avatar1,
                name: "Blur frame studio",
            },
            {
                review: "“Great to work with, very responsive and great artist.”",
                img: avatar2,
                name: "BEN C.",
            },
            {
                review: "“Very professional, knowledgeable and easy to deal with. Highly recommended.”",
                img: avatar3,
                name: "NENO S.",
            },
            {
                review: "“Simple communication and excellent results.”",
                img: avatar4,
                name: "MANUEL SCHWARZ.",
            },
        ],
    },
    Hireme: {
        title: "Hire Me",
        subtitle: "FOR YOUR PROJECTS",
        image1: Hireme_person,
        para: "As a proactive person with a passion for continuous learning and improvement, I approach each project with a focus on capturing its unique essence and communicating it effectively through design. I strive to leave a lasting impression on those who interact with my work.",
        btnText: "Hire Me",
    },
    Contact: {
        title: "Contact Me",
        subtitle: "GET IN TOUCH",
        social_media: [{
                text: "cadavidcarmona1@gmail.com",
                icon: GrMail,
                link: "mailto:cadavidcarmona1@gmail.com",
            },
            {
                text: "+57 3196029105",
                icon: MdCall,
                link: "https://wa.link/xd9s7a",
            },
            {
                text: "_Mushun",
                icon: BsInstagram,
                link: "https://www.instagram.com/mushun_/",
            },
            {
                text: "cadavidMich",
                icon: BsBehance,
                link: "https://www.behance.net/cadavidMich",
            },
        ],
    },
    Footer: {
        text: "All © Copy Right Reserved 2022",
    }

};