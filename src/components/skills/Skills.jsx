import Container from "../Container";
import "./Skills.css";
import SkillItem from "./SkillItem";
import Separator from "../Separator";
import { FadeInLeft, FadeInRight } from "../animations/Animations";
import { technicalSkillsProgrammingLanguages, technicalSkillsDatabases, technicalSkillsServers, technicalSkillsDevEnv, softSkills } from "../../data/skills/skills-data";

function Skills() {
    return (
        <Container className="my-12 text-primary-accent" id="skills">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FadeInRight>
                    <div className="skills-container p-px rounded-lg h-fit bg-linear-to-br from-primary-background via-secondary-accent to-primary-background">
                        <div className="rounded-lg group bg-primary-background">
                            <div className="translate-x-4 -translate-y-[.9rem] w-fit flex items-center  gap-2 bg-transparent">
                                <div className="skills-bullet"></div>
                                <div className="font-bold text-light bg-primary-background px-2">
                                    TECHNICAL SKILLS
                                </div>
                            </div>

                            <div className="skills-list pt-2 px-8 pb-8">
                                <div className="text-sm text-light mb-2">
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
                                <div className="text-sm text-light mb-2">
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
                    <div className="skills-container p-px rounded-lg h-fit bg-linear-to-br from-primary-background via-secondary-accent to-primary-background">
                        <div className="rounded-lg group bg-primary-background">
                            <div className="translate-x-4 -translate-y-[.9rem] w-fit flex items-center  gap-2 bg-transparent">
                                <div className="skills-bullet"></div>
                                <div className="font-bold text-light">
                                    TOOLS
                                </div>
                            </div>

                            <div className="skills-list pt-2 px-8 pb-8">
                                <div className="text-sm text-light mb-2">
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
                                <div className="text-sm text-light mb-2">
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
                    <div className="skills-container p-px rounded-lg h-fit bg-linear-to-br from-primary-background via-secondary-accent to-primary-background">
                        <div className="rounded-lg group bg-primary-background">
                            <div className="translate-x-4 -translate-y-[.9rem] w-fit flex items-center  gap-2 bg-transparent">
                                <div className="skills-bullet"></div>
                                <div className="font-bold text-light">
                                    SOFT SKILLS
                                </div>
                            </div>

                            <div className="skills-list pt-2 px-8 pb-8">
                                <div className="text-sm text-light mb-2">
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
