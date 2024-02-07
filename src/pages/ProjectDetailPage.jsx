import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProjectFormUpdate from "../components/ProjectFormUpdate";

function ProjectDetailPage() {
    const { id } = useParams();
    const [project, setProject] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:5005/api/projects/${id}`)
            .then((res) => setProject(res.data))
    }, [])

    return (

        project ? <>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <h5>EDIT PROJECT</h5>
            <ProjectFormUpdate project={project} setProject={setProject}/>
        </> : <h3>Loading project...</h3>

    )
}

export default ProjectDetailPage;