import Container from "../components/Container";

function ProjectsPage(){
    return(
        <Container>
            <div className="text-center p-4 gap-4 flex flex-col">
                <h1 className="text-4xl font-bold mt-12 text-primary-accent">PROJECTS</h1>
                <p className="text-muted-labels">A collection of projects I've built using modern web technologies, focusing on usability, performance and clean design.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 my-10">
                <div className="project-card rounded-lg p-4">
                    Projects will be listed here soon.
                </div> 
            </div>
        </Container>
    )
}

export default ProjectsPage;