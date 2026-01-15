import Container from "../components/Container";
import captchaImg from "../assets/projects/captcha.PNG";
import upversionImg from "../assets/projects/upversion.PNG";
import everglowImg from "../assets/projects/everglow.PNG";
import optekPayImg from "../assets/projects/optekpay.PNG";
import jkWeddingImg from "../assets/projects/jkwedding.PNG";
import digicashImg from "../assets/projects/digicash.PNG";
import Button from "../components/Button";
import { useEffect } from "react";
import ProjectItem from "../components/projects-page/ProjectItem";
import Separator from "../components/Separator";

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
        description: "A wedding invitation website built with <strong>React.js</strong>, providing event details, RSVP functionality, entourage, preferred gifts, and a gallery to celebrate the couple's special day.",
    },
    {
        title: "Digicash Website",
        imgSrc: digicashImg,
        link: "https://digicash.gldrp.com/",
        description: "A digital wallet service website built with <strong>Next.js</strong>, showcasing features, security measures, and user benefits through a modern and user-friendly interface.",
    }
];

function ProjectsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container>
            <div className="text-center p-4 gap-4 flex flex-col">
                <h1 className="text-4xl font-bold mt-12 text-steal-blue">
                    PROJECTS
                </h1>
                <p className="text-muted-labels">
                    A collection of projects I've built using modern web
                    technologies, focusing on usability, performance and clean
                    design.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 my-10 text-primary-text gap-8">
                {sample_projects.map((project) => (
                    <ProjectItem project={project} key={project.title} />
                ))}
            </div>
            <Separator className="my-8" />
            <p className="text-muted-labels mb-8">More web application projects will be posted soon...</p>
        </Container>
    );
}

export default ProjectsPage;
