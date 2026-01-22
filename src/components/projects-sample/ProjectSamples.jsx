import Button from "../Button";
import Separator from "../Separator";
import ProjectSampleItem from "./ProjectSampleItem";
import { FadeInLeft, FadeInRight } from "../animations/Animations";
import { sample_projects } from "../../data/projects-sample/project-sample-data";

export default function ProjectSamples() {
    return (
        <div>
            <FadeInLeft>
                <div className="flex py-2 px-4 items-center gap-4">
                    <div className="w-10">
                        <Separator />
                    </div>
                    <div className="font-bold text-secondary-accent text-xl tracking-widest">
                        PROJECTS
                    </div>
                    <div className="grow">
                        <Separator />
                    </div>
                </div>
            </FadeInLeft>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-4">
                {sample_projects.map((project, index) => (
                    <ProjectSampleItem
                        key={project.title}
                        title={project.title}
                        imageSrc={project.imgSrc}
                        link={project.link}
                        linkDisplay={project.linkDisplay}
                        animationDelay={((index % 3) + 1) * 0.2}
                    />
                ))}
            </div>
            <FadeInRight>
                <div className="p-4">
                    <Button link="/projects">SEE MORE</Button>
                </div>
            </FadeInRight>
        </div>
    );
}
