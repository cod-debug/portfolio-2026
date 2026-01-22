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
