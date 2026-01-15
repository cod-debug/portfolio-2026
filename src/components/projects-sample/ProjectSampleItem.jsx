import { FadeInUp } from "../animations/Animations";
import Button from "../Button";
import "./ProjectSampleItem.css";

function ProjectSampleItem({
    title,
    imageSrc,
    link,
    linkDisplay,
    animationDelay = 0.2,
}) {
    return (
        // add hover effect when hovering the whole div the image should not be grayscale
        <FadeInUp delay={animationDelay} className="sample-project p-2 w-full group rounded-lg">
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
            >
                <div className="sample-project-inner flex flex-col text-center text-primary-text rounded-lg">
                    <div className="py-4 px-2">{title}</div>
                    <div className="overflow-hidden">
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full transition-all duration-300 group-hover:grayscale-0 group-hover:scale-125"
                        />
                    </div>
                    <p className="py-4 text-primary-accent">{linkDisplay}</p>
                    <div className="self-center p-4">
                        <Button
                            btnType="primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            VIEW PROJECT
                        </Button>
                    </div>
                </div>
            </a>
        </FadeInUp>
    );
}

export default ProjectSampleItem;
