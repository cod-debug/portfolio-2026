import Separator from "../Separator";
import ProjectSampleItem from "./ProjectSampleItem";
import { FadeInLeft, FadeInRight } from "../animations/Animations";
import { sample_projects } from "../../data/projects-sample/project-sample-data";
import { RxCaretRight } from "react-icons/rx";

export default function ProjectSamples() {
    return (
        <div>
            <FadeInLeft>
                <div className="flex py-2 px-4 items-center gap-4">
                    <div>
                        <div className="font-bold rounded-full w-fit flex">
                            <RxCaretRight className="text-3xl text-amber-600 -ml-3" />
                            <RxCaretRight className="-ml-5 text-3xl -mr-3 text-amber-500" />
                        </div>
                    </div>
                    <div className="font-bold text-light text-xl tracking-widest">
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
        </div>
    );
}
