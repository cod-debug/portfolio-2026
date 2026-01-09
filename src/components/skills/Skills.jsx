import Container from "../Container";
import "./Skills.css";
import SkillItem from "./SkillItem";

import htmlLogoImg from "../../assets/skills/html.webp";
import cssLogoImg from "../../assets/skills/css.png";
import javascriptLogoImg from "../../assets/skills/js.avif";
import reactLogoImg from "../../assets/skills/react.svg";
import vueJsLogoImg from "../../assets/skills/vuejs.png";
import phpLogoImg from "../../assets/skills/php.png";
import laravelLogoImg from "../../assets/skills/laravel.webp";
import pythonLogoImg from "../../assets/skills/python.png";
import Separator from "../Separator";

const technicalSkillsProgrammingLanguages = [
    {
        logo: phpLogoImg,
        skillName: "PHP"
    },
    {
        logo: laravelLogoImg,
        skillName: "Laravel"
    },
    {
        logo: htmlLogoImg,
        skillName: "HTML5"
    },
    {
        logo: cssLogoImg,
        skillName: "CSS3"
    },
    {
        logo: javascriptLogoImg,
        skillName: "JavaScript"
    },
    {
        logo: reactLogoImg,
        skillName: "React"
    },
    {
        logo: vueJsLogoImg,
        skillName: "Vue.js"
    },
    {
        logo: pythonLogoImg,
        skillName: "Python"
    }
]

function Skills() {
    return (
        <Container className="my-16 text-primary-accent" id="skills">
            <div className="grid grid-cols-2 gap-8">
                <div className="skills-container p-0.5 rounded-lg h-fit">
                    <div className="skills-inner rounded-lg">
                        <div className="translate-x-4 -translate-y-1/2 w-fit flex items-center  gap-2 bg-transparent">
                            <div className="skills-bullet"></div>
                            <div className="font-bold">TECHNICAL SKILLS</div>
                        </div>

                        <div className="skills-list pt-2 px-8 pb-8">
                            <div>Programming Langues / Frameworks</div>
                            <Separator className="my-2" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2">
                                {
                                    technicalSkillsProgrammingLanguages.map((skill) => (
                                        <SkillItem key={skill.skillName} logo={skill.logo} skillName={skill.skillName} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-container p-0.5 rounded-lg h-fit">
                    <div className="skills-inner rounded-lg">
                        <div className="translate-x-4 -translate-y-1/2 w-fit flex items-center  gap-2 bg-transparent">
                            <div className="skills-bullet"></div>
                            <div className="font-bold">SOFT SKILLS</div>
                        </div>

                        <div className="skills-list pt-2 px-8 pb-8">
                            <div>Programming Langues / Frameworks</div>
                            <Separator className="my-2" />
                            <div className="grid grid-cols-1 gap-2">
                                {
                                    technicalSkillsProgrammingLanguages.map((skill) => (
                                        <SkillItem key={skill.skillName} logo={skill.logo} skillName={skill.skillName} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
export default Skills;
