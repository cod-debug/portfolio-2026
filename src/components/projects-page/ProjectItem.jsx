import { FadeInUp } from "../animations/Animations";
import Button from "../Button";

function ProjectItem({ project, animationDelay = 0.2, openPreviewImagesModal = null }) {
    const handleOpenPreviewImagesModal = () => {
        if (openPreviewImagesModal) {
            openPreviewImagesModal(project);
        }
    }

    return (
        <FadeInUp delay={animationDelay}>
            <div
                key={project?.title}
                className="project-card rounded-lg p-4 flex flex-col gap-4 h-full"
            >
                <div className="project-card-img-holder p-2 rounded-lg">
                    <img
                        alt={project?.title}
                        src={project?.imgSrc}
                        className="rounded-lg"
                    />
                </div>
                <div className="font-medium tracking-wide text-accent-dark-blue text-lg">
                    {project?.title}
                </div>
                <div className="grow text-secondary-text line-clamp-5">
                    {project?.description && (
                        <p
                            dangerouslySetInnerHTML={{
                                __html: project?.description,
                            }}
                        ></p>
                    )}
                </div>
                {project?.link && (
                    <div className="flex justify-end">
                        <Button
                            className="rounded-4xl"
                            btnType="light-lighter"
                            target="_blank"
                            href={project?.link}
                        >
                            Visit Site
                        </Button>
                    </div>
                )}
                {project?.previewImages && project?.previewImages.length > 0 && (
                    <div className="flex justify-end">
                        <Button
                            className="rounded-4xl"
                            btnType="light-lighter"
                            onClick={() => handleOpenPreviewImagesModal(project)}

                        >
                            View Screenshots
                        </Button>
                    </div>
                )}
            </div>
        </FadeInUp>
    );
}

export default ProjectItem;
