import Button from "../Button";

export default function ProjectCarouselItem({ project, openPreviewImagesModal = null }) {
    return (
        <div>
            <div className="grid grid-cols-5 p-8">
                <div className="col-span-2 p-4 content-center">
                    <div className="flex gap-4 flex-col">
                        <div className="font-medium tracking-wide text-accent-dark-blue text-lg">
                            {project?.title}
                        </div>
                        <div className="text-secondary-text line-clamp-7">
                            {project?.description && (
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: project?.description,
                                    }}
                                ></p>
                            )}
                        </div>
                        <div>
                            {project?.link && (
                                <div className="flex">
                                    <Button
                                        className="rounded-4xl"
                                        btnType="primary"
                                        target="_blank"
                                        href={project?.link}
                                    >
                                        Live Demo
                                    </Button>
                                </div>
                            )}
                            {project?.previewImages && project?.previewImages.length > 0 && (
                                <div className="flex">
                                    <Button
                                        className="rounded-4xl"
                                        btnType="primary"
                                        onClick={() => openPreviewImagesModal(project)}

                                    >
                                        View Screenshots
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-span-3 p-4">
                    <img
                        alt={project?.title}
                        src={project?.imgSrc}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}