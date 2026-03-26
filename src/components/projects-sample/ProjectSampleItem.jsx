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
                className="p-px rounded-lg block h-full bg-linear-to-r from-secondary-background via-amber-500 to-secondary-background group"
            >
                <div className="sample-project-inner flex flex-col text-center text-light rounded-lg">
                    <div className="py-4 px-2">{title}</div>
                    <div className="overflow-hidden">
                        <img
                            src={imageSrc}
                            alt={title}
                            className="w-full transition-all duration-300 group-hover:grayscale-0 group-hover:scale-125"
                        />
                    </div>
                    <p className="py-4 text-light">{linkDisplay}</p>
                    <div className="self-center p-4">
                        <button
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#212637] text-light px-4 py-1 rounded shadow-2xl tracking-wider font-medium border-2 border-[#39405b] cursor-pointer transition-colors duration-300 hover:bg-[#39405b] hover:border-[#212637]"
                        >
                            VIEW PROJECT
                        </button>
                    </div>
                </div>
            </a>
        </FadeInUp>
    );
}

export default ProjectSampleItem;
