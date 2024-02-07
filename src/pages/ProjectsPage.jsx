import { useEffect, useState } from "react";
import axios from "axios";
import ProjectForm from "../components/ProjectForm";
import { Link } from "react-router-dom";
function ProjectsPage() {
    const [projects, setProjects] = useState(null);

    const fetchProjects = () => {
        axios.get("http://localhost:5005/api/projects")
            .then((response) => setProjects(response.data))
            .catch((error) => console.error(error))
    }

    useEffect(() => {
        // aqui va la llamada a la API, y solo se ejecuta al inicio
        fetchProjects()
    }, [])

    return (
        <>
            <ProjectForm fetchProjects={fetchProjects} />

            {!projects ? <h3>Loading projects...</h3>
                : <>
                    {
                        projects.length > 0 ? projects.map((project) => {
                            return (
                                <div key={project._id}>
                                    <Link to={`/projects/${project._id}`}>
                                        <h4>{project.title}</h4>
                                    </Link>
                                    <p>{project.description}</p>
                                </div>
                            )
                        }
                        ) : <>
                            <h2>No projects available</h2>
                        </>
                    }
                </>}
        </>
    )
}

export default ProjectsPage;