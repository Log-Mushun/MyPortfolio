// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import unity from "./assets/images/Skills/unity.png";
import git from "./assets/images/Skills/git.png"
import ai from "./assets/images/Skills/ai.png";
import blender from "./assets/images/Skills/blender.png";
import maya from "./assets/images/Skills/maya.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/project1.png";
import project2 from "./assets/images/Projects/project2.png";
import project3 from "./assets/images/Projects/project3.png";
import project4 from "./assets/images/Projects/project4.png";
import person_project from "./assets/images/Projects/person.png";

import dproject1 from "./assets/images/Projects/dproject1.png";
import dproject2 from "./assets/images/Projects/dproject2.png";
import dproject3 from "./assets/images/Projects/dproject3.png";

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
        title: "Game Developer and Designer",
        firstName: "MICHELLE",
        LastName: "CADAVID",
        btnText: "Hire Me",
        image: Hero_person,
        hero_content: [
            {
                count: "10+",
                text: "Projects I Worked throughout my career",
            },
        ],
    },
    skills: {
        title: "Skills",
        subtitle: "MY TOP SKILLS",
        skills_content: [
            {
                name: "Unity Engine",
                para: "Bring to reality our games",
                list: {
                    1: "1. I am able to integrate APIs in C# Unity Scripts, making different requests.",
                    2: "2. I am able to create unity projects and incorporate 2D and 3D assets and apply animations",
                    3: "3. With my knowledge in C#, I am able integrate game mechanics and new features into existing apps",
                },
                logo: unity,
            },
            {
                name: "Figma",
                para: "UI/UX & Web design",
                list: {
                    1: "As a game developer, I have the expertise to create functional prototypes that prioritize a seamless and enjoyable user experience.",
                    2: "2. I believe that Figma is a valuable tool in the web design process, offering a speedy solution for crafting visually appealing designs.",
                },
                logo: figma,
            },
            {
                name: "Git",
                para: "Version control",
                list: {
                    1: "1. Initializing Git repositories: this allows me to start tracking changes and implementing version control from the beginning of a project.",
                    2: "2. Committing and pushing changes: This ensures that my code changes are securely saved and accessible to other team members.",
                    3: "3. I possess a strong understanding of creating branches, switching between them, and merging changes from one branch to another. "
                },
                logo: git,
            },
            {
                name: "Blender",
                para: "for 3D Assets and animations",
                list: {
                    1: "1. Texturing:  I have the ability to change textures, improve their quality, and apply them to models, enhancing the visual appeal of the game.",
                    2: "2. Blender allows me to animate characters and objects for games. I can create keyframe animations or define meaningful character poses to create game art.",
                    3: "3. Exporting Assets: I am skilled in exporting animations and 3D assets from Blender to game engines or other software platforms commonly used in game development.",
                },
                logo: blender,
            },
            {
                name: "Maya",
                para: "for 3D assets and animations",
                list: {
                    1: "1. I can define skeletal structures (rigging), and animate the models accordingly.",
                    2: "2. I can Edit Motion Capture animations and other existing animations, making use of animation layers.",
                    3: "3. Exporting Assets: I am skilled in exporting animations and 3D assets from Maya to game engines or other software platforms commonly used in game development."
                },
                logo: maya,
            },
            {
                name: "Illustrator",
                para: "Character design and vector illustrations",
                list: {
                    1: "1. I am skilled in designing custom icons and graphic elements",
                    2: "2. My expertise in Illustrator includes logo creation, ensuring the visual representation of a brand is both unique and impactful.",
                    3: "3. I am capable of creating dynamic 2D characters, bringing illustrations to life.",
                    4: "4. I can generate repeating patterns in Illustrator, adding texture and depth to designs.",
                },
                logo: ai,
            }
        ],
        icon: MdArrowForward,
    },
    services: {
        title: "Services",
        subtitle: "WHAT I OFFER",
        service_content: [{
                title: "Game Development",
                para: "Combining technical proficiency with an eye for design, as a Game Developer, I can provide inmersive interactive experiences and fun games",
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
        title: "Noten und Farben",
        subtitle: "German vocabulary for children",
        image: person_project,
        project_content: [{
                title: "CodeSense",
                image: project1,
                link: "https://codesense.netlify.app"
            }
        ],
    },
    DesignerProjects: {
        title: "Designer Projects",
        subtitle: "Icons, Logos and more",
        project_content: [{
                title: "App Icons",
                image: dproject1,
                link: "https://www.behance.net/gallery/116430363/Icons-for-an-app"
            },
            {
                title: "Content for marketing campaigns",
                image: dproject2,
                link: "https://www.behance.net/gallery/117426695/Some-adversiting-I-made-for-social-media"
            },
            {
                title: "Logos",
                image: dproject3,
                link: "https://www.behance.net/gallery/162788585/Logos-I-made-as-Freelancer"
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
                name: "MANUEL S.",
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