
import captchaImg from "../../assets/projects/captcha.PNG";
import upversionImg from "../../assets/projects/upversion.PNG";
import everglowImg from "../../assets/projects/everglow.PNG";
import optekPayImg from "../../assets/projects/optekpay.PNG";
import jkWeddingImg from "../../assets/projects/jkwedding.PNG";
import digicashImg from "../../assets/projects/digicash.PNG";
import pickleballScoreboardImg from "../../assets/projects/pickleball-scoreboard.PNG";
import posData from "./pos";
import ascData from "./asc";
import alumniData from "./alumni";
import paceData from "./pace";
import ticketingData from "./ticketing";
import fileTracingData from './file-tracking';

const sample_projects = [
    {
        title: "10Captcha Website",
        imgSrc: captchaImg,
        link: "https://gldrp.com/10captcha/",
        linkDisplay: "gldrp.com/10captcha/",
        description:
            "A web-based captcha solving platform built with <strong>React.js</strong>, focused on speed, usability, and a clean user interface for efficient task handling.",
    },
    {
        title: "Up Version Website",
        imgSrc: upversionImg,
        link: "https://gldrp.com/upversion/#/",
        linkDisplay: "gldrp.com/upversion/",
        description:
            "A modern website for a graphics design school built using <strong>React.js</strong>, showcasing programs, services, and creative works with a visually engaging layout.",
    },
    {
        title: "Interactive Event Website",
        imgSrc: everglowImg,
        link: "https://yfceverglow.gldrp.com/",
        linkDisplay: "yfceverglow.gldrp.com",
        description:
            "An interactive conference website for an NGO, featuring dynamic buttons and participant experience uploads, built with <strong>React.js</strong> on the frontend and <strong>Laravel</strong> on the backend.",
    },
    {
        title: "Optekpay Website",
        imgSrc: optekPayImg,
        link: "https://optekpay.com/",
        linkDisplay: "optekpay.com",
        description:
            "A fintech company website built with <strong>React.js</strong>, highlighting services, features, and user testimonials through a sleek and professional design.",
    },
    {
        title: "Jhonna & Kerwin Wedding Website",
        imgSrc: jkWeddingImg,
        link: "https://wedding.gldrp.com/",
        description:
            "A wedding invitation website built with <strong>React.js</strong>, providing event details, RSVP functionality, entourage, preferred gifts, and a gallery to celebrate the couple's special day.",
    },
    {
        title: "Digicash Website",
        imgSrc: digicashImg,
        link: "https://digicash.gldrp.com/",
        description:
            "A digital wallet service website built with <strong>Next.js</strong>, showcasing features, security measures, and user benefits through a modern and user-friendly interface.",
    },
    {
        
        title: "Pickleball Scoreboard",
        imgSrc: pickleballScoreboardImg,
        link: "https://gldrp.com/pickleball",
        description: "A web-based pickleball scoreboard application built with <strong>React.js</strong>, designed for easy score tracking and game management during pickleball matches.",
    },
    posData,
    ascData,
    fileTracingData,
    alumniData,
    paceData,
    ticketingData,
];

export default sample_projects;