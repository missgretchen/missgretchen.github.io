import { NavBar, ProjectCard } from '@components';
import { projects } from '@assets';

function Projects() {
    return (
        <>
        <NavBar />
        {projects.map((project) => (
            <ProjectCard title={project.title} subtitle={project.subtitle} path={project.path} key={project.path} />
        ))}
        </>
    )
}
export default Projects;