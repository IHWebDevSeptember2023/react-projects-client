import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProjectFormUpdate(props) {
    const [title, setTitle] = useState(props.project.title);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [description, setDescription] = useState(props.project.description);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5005/api/projects/${props.project._id}`, { title, description })
            .then((res) => {
                console.log("todo OK", res.data)
                props.setProject(res.data) // OPTIMIZANDO llamadas. 
            })
            .catch((err) => console.error(err))
    }

    const handleDelete = () => {
        axios.delete(`http://localhost:5005/api/projects/${props.project._id}`)
            .then((res) => {
                console.log("todo OK, proyecto borrado", res.data)
                navigate("/projects")
                //props.setProject(res.data) // OPTIMIZANDO llamadas. 
            })
            .catch((err) => console.error(err))
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <label htmlFor="title">Title:</label>
                <input name="title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                <label htmlFor="description">Description:</label>
                <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">UPDATE project</button>
            </form>
            <button onClick={() => setShowConfirmation(true)} >🗑️</button>
            {
                showConfirmation && <>
                    <p>Seguro que quieres borrar?</p>
                    <button onClick={handleDelete}>SI</button>
                    <button onClick={() => setShowConfirmation(false)}>NO</button>
                </>
            }
        </>
    )
}

export default ProjectFormUpdate;