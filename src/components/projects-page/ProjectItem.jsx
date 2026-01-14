import Button from "../Button";

function ProjectItem({ project }) {
    return (
        <div
            key={project.title}
            className="project-card rounded-lg p-4 flex flex-col gap-4 h-full"
        >
            <div className="project-card-img-holder p-2 rounded-lg">
                <img
                    alt={project.title}
                    src={project.imgSrc}
                    className="rounded-lg"
                />
            </div>
            <div className="font-medium tracking-wide text-accent-dark-blue text-lg">{project.title}</div>
            <div className="grow text-secondary-text">
                {project.description && <p dangerouslySetInnerHTML={{__html: project.description}}></p>}
            </div>
            {project.link && (
                <div className="flex justify-end">
                    <Button
                        className="rounded-4xl"
                        btnType="light-lighter"
                        target="_blank"
                        href={project.link}
                    >
                        Visit Site
                    </Button>
                </div>
            )}
        </div>
    );
}

export default ProjectItem;
