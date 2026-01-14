import Button from "../Button";
import "./ProjectSampleItem.css";

function ProjectSampleItem({title, imageSrc, link, linkDisplay}){
    return(
        // add hover effect when hovering the whole div the image should not be grayscale
        <a href={link} target="_blank" referrerPolicy="no-referrer" className="sample-project p-0.5 w-full group">
            <div className="sample-project-inner flex flex-col text-center text-primary-text">
                <div className="py-4 px-2">{title}</div>
                <div className="overflow-hidden">
                    <img src={imageSrc} alt={title} className="w-full md:grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-125" />
                </div>
                <p className="py-4 text-muted-labels">{ linkDisplay }</p>
                <div className="self-center p-4">
                    <Button btnType="primary" target="_blank" rel="noopener noreferrer">
                        VIEW PROJECT
                    </Button>
                </div>
            </div>
        </a>
    )
}

export default ProjectSampleItem;