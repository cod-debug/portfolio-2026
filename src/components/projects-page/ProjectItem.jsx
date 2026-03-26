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
                className="bg-linear-to-b from-primary-background to-secondary-background rounded-lg overflow-hidden flex flex-col gap-4 h-full"
            >
                <div className="project-card-img-holder">
                    <img
                        alt={project?.title}
                        src={project?.imgSrc}
                    />
                </div>
                <div className="font-medium tracking-wide text-secondary-accent text-lg px-4">
                    {project?.title}
                </div>
                <div className="text-light line-clamp-5 px-4">
                    {project?.description && (
                        <p
                            dangerouslySetInnerHTML={{
                                __html: project?.description,
                            }}
                        ></p>
                    )}
                </div>
                <div className="grow"></div>
                {project?.link && (
                    <div className="flex justify-end p-4 pt-0">
                        <a
                            className="bg-[#212637] text-light px-4 py-1 rounded shadow-2xl tracking-wider font-medium border-2 border-[#39405b] cursor-pointer transition-colors duration-300 hover:bg-[#39405b] hover:border-[#212637]"
                            target="_blank"
                            href={project?.link}
                        >
                            View Project
                        </a>
                    </div>
                )}
                {project?.previewImages && project?.previewImages.length > 0 && (
                    <div className="flex justify-end p-4 pt-0">
                        <button
                            className="bg-[#212637] text-light px-4 py-1 rounded shadow-2xl tracking-wider font-medium border-2 border-[#39405b] cursor-pointer transition-colors duration-300 hover:bg-[#39405b] hover:border-[#212637]"
                            onClick={() => handleOpenPreviewImagesModal(project)}

                        >
                            View Screenshots
                        </button>
                    </div>
                )}
            </div>
        </FadeInUp>
    );
}

export default ProjectItem;
