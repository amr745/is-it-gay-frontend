import React from 'react';
import { useState } from "react"
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom"

function Create(props) {
    const navigate = useNavigate();
    const [newForm, setNewForm] = useState({
        name: "",
        description: "",
        reason: "",
        url: "",
      })
      
    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }
    
    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createCulture(newForm)
        setNewForm({
            name: "",
            description: "",
            reason: "",
            url: "",
        })
        navigate('/');
    }
    
    // loaded function
    const loaded = () => {
        return props.culture.map((cult) => (
        <div key={cult._id} className="cult">
            <Link to={`/culture/${cult._id}`}>
                <h1>{cult.name}</h1>
            </Link>
                <img src={cult.url} alt={cult.name} />
        </div>
        ))
    }
            
    const loading = () => {
        return <h1>Loading...</h1>
    }
            
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.description}
                    name="description"
                    placeholder="description"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.reason}
                    name="reason"
                    placeholder="reason"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.url}
                    name="url"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input type="submit" value="Add Content" />
            </form>
            {props.culture ? loaded() : loading()}
        </section>
    )
}
  
export default Create