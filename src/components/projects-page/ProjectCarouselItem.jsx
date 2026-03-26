import Button from "../Button";

export default function ProjectCarouselItem({ project, openPreviewImagesModal = null }) {
    return (
        <div>
            <div className="grid grid-cols-5 p-8">
                <div className="col-span-2 p-4 content-center">
                    <div className="flex gap-6 flex-col">
                        <div className="font-medium tracking-wide text-blue-300 text-lg">
                            {project?.title}
                        </div>
                        <div className="text-light line-clamp-7">
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
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#212637] text-light px-4 py-1 rounded shadow-2xl tracking-wider font-medium border-2 border-[#39405b] cursor-pointer transition-colors duration-300 hover:bg-[#39405b] hover:border-[#212637]"
                                        href={project?.link}
                                    >
                                        LIVE DEMO
                                    </a>
                                </div>
                            )}
                            {project?.previewImages && project?.previewImages.length > 0 && (
                                <div className="flex">
                                    <button
                                        className="bg-[#212637] text-light px-4 py-1 rounded shadow-2xl tracking-wider font-medium border-2 border-[#39405b] cursor-pointer transition-colors duration-300 hover:bg-[#39405b] hover:border-[#212637]"
                                        btnType="dark"
                                        onClick={() => openPreviewImagesModal(project)}

                                    >
                                        View Screenshots
                                    </button>
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