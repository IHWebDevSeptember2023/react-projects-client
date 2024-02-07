import { useState } from "react";

function ProjectForm(props) {
    /*  const [title, setTitle] = useState("");
     const [description, setDescription] = useState(""); */

    const [formData, setFormData] = useState({
        title: "",
        description: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:5005/api/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((jsonres) => {
                console.log(jsonres)
                setFormData({
                    title: "",
                    description: ""
                })
                props.fetchProjects()
            })
            .catch((err) => console.error(err))
    }

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="title">Title:</label>
            <input name="title" value={formData.title} onChange={(e) => handleChange(e)} type="text" />
            <label htmlFor="description">Description:</label>
            <textarea name="description" value={formData.description} onChange={(e) => handleChange(e)} />
            <button type="submit">Create project</button>
        </form>
    )
}

export default ProjectForm;