import Button from "../Button";
import "./ProjectSampleItem.css";

function ProjectSampleItem({title, imageSrc, link, linkDisplay}){
    return(
        <div className="sample-project p-0.5 w-full">
            <div className="sample-project-inner flex flex-col text-center text-primary-text">
                <div className="py-4 px-2">{title}</div>
                <div>
                    <img src={imageSrc} alt={title} className="w-full" />
                </div>
                <p className="py-4 text-muted-labels">{ linkDisplay }</p>
                <div className="self-center p-4">
                    <Button btnType="primary" href={link} target="_blank" rel="noopener noreferrer">
                        VIEW PROJECT
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProjectSampleItem;