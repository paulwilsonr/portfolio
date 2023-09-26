import Project from "./Project";
import projectData from "../util/projects.json"
import "../styles/projectsCard.css"

interface Project {
    id: number,
    name: string,
    img: string,
    techUsed: string[],
    live: string,
    github: string,
    description: string
}

function ProjectsCard () {
    return (
        <section id="projects" className="projectsCard">
            <h2>Projects</h2>
            <div className="projectsContainer" >
                {projectData.map((project: Project) => {
                    return <Project key={project.id} project={project} />
                })}
            </div>
        </section>
    )
}

export default ProjectsCard;