import { useEffect, useState } from "react";
import ProjectItem from "../components/projects-page/ProjectItem";
import Separator from "../components/Separator";
import { FadeInLeft, FadeInRight } from "../components/animations/Animations";
import Container from "../components/Container";
import sample_projects from "../data/projects/sample-projects";
import PreviewImagesModal from "../components/projects-page/PreviewImagesModal";

function ProjectsPage() {
    const screenSize = window.innerWidth;
    const mdSize = 768;
    const isLessThanMd = screenSize < mdSize;
    const [isOpenPreviewImagesModal, setIsOpenPreviewImagesModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openPreviewImagesModal = (project) => {
        // Implement modal opening logic here
        setSelectedProject(project);
        setIsOpenPreviewImagesModal(true);
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container>
            <div className="text-center p-4 gap-4 flex flex-col">
                <FadeInRight>
                    <h1 className="text-4xl font-bold mt-12 text-steal-blue">
                        PROJECTS
                    </h1>
                </FadeInRight>
                <FadeInLeft>
                    <p className="text-muted-labels">
                        A collection of projects I've built using modern web
                        technologies, focusing on usability, performance and
                        clean design.
                    </p>
                </FadeInLeft>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 my-10 text-primary-text gap-8">
                {sample_projects.map((project, index) => (
                    <ProjectItem
                        project={project}
                        animationDelay={((index % (isLessThanMd ? 1 : 3)) + 1) * 0.2}
                        key={project.title}
                        openPreviewImagesModal={openPreviewImagesModal}
                    />
                ))}
            </div>
            <Separator className="my-8" />
            <p className="text-muted-labels mb-8">
                More web application projects will be posted soon...
            </p>
            <PreviewImagesModal
                project={selectedProject}
                isOpenPreviewImagesModal={isOpenPreviewImagesModal}
                setIsOpenPreviewImagesModal={setIsOpenPreviewImagesModal}
            />
        </Container>
    );
}

export default ProjectsPage;
