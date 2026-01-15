import Container from "../Container";
import "./Skills.css";
import SkillItem from "./SkillItem";
import Separator from "../Separator";

import htmlLogoImg from "../../assets/skills/html.webp";
import cssLogoImg from "../../assets/skills/css.png";
import javascriptLogoImg from "../../assets/skills/js.avif";
import reactLogoImg from "../../assets/skills/react.svg";
import vueJsLogoImg from "../../assets/skills/vuejs.png";
import phpLogoImg from "../../assets/skills/php.png";
import laravelLogoImg from "../../assets/skills/laravel.webp";
import pythonLogoImg from "../../assets/skills/python.png";
import problemSolvingImg from "../../assets/skills/problem-solving.png";
import teamworkImg from "../../assets/skills/teamwork.png";
import communicationImg from "../../assets/skills/communication.jpg";
import timeManagementImg from "../../assets/skills/time-management.png";
import mysqlLogoImg from "../../assets/skills/mysql.png";
import postgresqlLogoImg from "../../assets/skills/postgre.svg";
import mongodbLogoImg from "../../assets/skills/mongodb.svg";
import firebaseLogoImg from "../../assets/skills/firebase.png";
import dockerLogoImg from "../../assets/skills/docker.png";
import apacheLogoImg from "../../assets/skills/apache.png";
import nginxLogoImg from "../../assets/skills/nginx.png";
import awsLogoImg from "../../assets/skills/aws.webp";
import digitaloceanLogoImg from "../../assets/skills/digitalocean.png";
import hostingerLogoImg from "../../assets/skills/hostinger.png";
import githubLogoImg from "../../assets/skills/github.png";
import jiraLogoImg from "../../assets/skills/jira.webp";
import viteLogoImg from "../../assets/skills/vite.jpeg";
import restApiLogoImg from "../../assets/skills/api.jpg";
import linuxLogoImg from "../../assets/skills/linux.png";
import cicdLogoImg from "../../assets/skills/cicd.png";
import { FadeInLeft, FadeInRight } from "../animations/Animations";

const technicalSkillsProgrammingLanguages = [
    {
        logo: phpLogoImg,
        skillName: "PHP",
    },
    {
        logo: laravelLogoImg,
        skillName: "Laravel",
    },
    {
        logo: htmlLogoImg,
        skillName: "HTML5",
    },
    {
        logo: cssLogoImg,
        skillName: "CSS3",
    },
    {
        logo: javascriptLogoImg,
        skillName: "JavaScript",
    },
    {
        logo: reactLogoImg,
        skillName: "React",
    },
    {
        logo: vueJsLogoImg,
        skillName: "Vue.js",
    },
    {
        logo: pythonLogoImg,
        skillName: "Python",
    },
];

const technicalSkillsDatabases = [
    {
        logo: mysqlLogoImg,
        skillName: "MySQL",
    },
    {
        logo: postgresqlLogoImg,
        skillName: "PostgreSQL",
    },
    {
        logo: mongodbLogoImg,
        skillName: "MongoDB",
    },
    {
        logo: firebaseLogoImg,
        skillName: "Firebase",
    },
];

const technicalSkillsServers = [
    {
        logo: dockerLogoImg,
        skillName: "Docker",
    },
    {
        logo: apacheLogoImg,
        skillName: "Apache",
    },
    {
        logo: nginxLogoImg,
        skillName: "Nginx",
    },
    {
        logo: awsLogoImg,
        skillName: "AWS",
    },
    {
        logo: digitaloceanLogoImg,
        skillName: "DigitalOcean",
    },
    {
        logo: hostingerLogoImg,
        skillName: "Hostinger",
    },
];

const technicalSkillsDevEnv = [
    {
        logo: githubLogoImg,
        skillName: "Github / Bitbucket",
    },
    {
        logo: jiraLogoImg,
        skillName: "Jira / Shortcut",
    },
    {
        logo: viteLogoImg,
        skillName: "Vite / Webpack",
    },
    {
        logo: restApiLogoImg,
        skillName: "REST APIs",
    },
    {
        logo: linuxLogoImg,
        skillName: "Linux Server Management",
    },
    {
        logo: cicdLogoImg,
        skillName: "CI/CD",
    },
];

const softSkills = [
    {
        logo: problemSolvingImg,
        skillName: "Problem Solving",
    },
    {
        logo: teamworkImg,
        skillName: "Teamwork",
    },
    {
        logo: communicationImg,
        skillName: "Effective Communication",
    },
    {
        logo: timeManagementImg,
        skillName: "Time Management",
    },
];

function Skills() {
    return (
        <Container className="my-12 text-primary-accent" id="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FadeInRight>
                    <div className="skills-container p-0.5 rounded-lg h-fit border-t border-secondary-accent">
                        <div className="skills-inner rounded-lg group">
                            <div className="translate-x-4 -translate-y-[.9rem] w-fit flex items-center  gap-2 bg-transparent">
                                <div className="skills-bullet"></div>
                                <div className="font-bold text-secondary-accent">
                                    TECHNICAL SKILLS
                                </div>
                            </div>

                            <div className="skills-list pt-2 px-8 pb-8">
                                <div className="text-sm text-muted-labels mb-2">
                                    Programming Langues / Frameworks
                                </div>
                                <Separator className="my-2" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
                                    {technicalSkillsProgrammingLanguages.map(
                                        (skill) => (
                                            <SkillItem
                                                key={skill.skillName}
                                                logo={skill.logo}
                                                skillName={skill.skillName}
                                            />
                                        ),
                                    )}
                                </div>
                            </div>

                            <div className="skills-list pt-2 px-8 pb-8">
                                <div className="text-sm text-muted-labels mb-2">
                                    Databases
                                </div>
                                <Separator className="my-2" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
                                    {technicalSkillsDatabases.map((skill) => (
                                        <SkillItem
                                            key={skill.skillName}
                                            logo={skill.logo}
                                            skillName={skill.skillName}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInRight>

                <FadeInLeft>
                    <div className="skills-container p-0.5 rounded-lg h-fit border-t border-secondary-accent">
                        <div className="skills-inner rounded-lg group">
                            <div className="translate-x-4 -translate-y-[.9rem] w-fit flex items-center  gap-2 bg-transparent">
                                <div className="skills-bullet"></div>
                                <div className="font-bold text-secondary-accent">
                                    TOOLS
                                </div>
                            </div>

                            <div className="skills-list pt-2 px-8 pb-8">
                                <div className="text-sm text-muted-labels mb-2">
                                    DevOps, Servers & Infrastructure
                                </div>
                                <Separator className="my-2" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
                                    {technicalSkillsServers.map((skill) => (
                                        <SkillItem
                                            key={skill.skillName}
                                            logo={skill.logo}
                                            skillName={skill.skillName}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="skills-list pt-2 px-8 pb-8">
                                <div className="text-sm text-muted-labels mb-2">
                                    Tools & Development Environment
                                </div>
                                <Separator className="my-2" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
                                    {technicalSkillsDevEnv.map((skill) => (
                                        <SkillItem
                                            key={skill.skillName}
                                            logo={skill.logo}
                                            skillName={skill.skillName}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInLeft>
                <FadeInRight>
                    <div className="skills-container p-0.5 rounded-lg h-fit border-t border-secondary-accent">
                        <div className="skills-inner rounded-lg group">
                            <div className="translate-x-4 -translate-y-[.9rem] w-fit flex items-center  gap-2 bg-transparent">
                                <div className="skills-bullet"></div>
                                <div className="font-bold text-secondary-accent">
                                    SOFT SKILLS
                                </div>
                            </div>

                            <div className="skills-list pt-2 px-8 pb-8">
                                <div className="text-sm text-muted-labels mb-2">
                                    Essential interpersonal abilities
                                </div>
                                <Separator className="my-2" />
                                <div className="grid grid-cols-1 gap-2">
                                    {softSkills.map((skill) => (
                                        <SkillItem
                                            key={skill.skillName}
                                            logo={skill.logo}
                                            skillName={skill.skillName}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeInRight>
            </div>
        </Container>
    );
}
export default Skills;
