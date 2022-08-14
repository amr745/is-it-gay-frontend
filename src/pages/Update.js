import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Update({culture, updateCulture}) {

    const { id } = useParams();
    const cult = culture.find(cult => cult._id === id);
    const navigate = useNavigate();

    const [editForm, setEditForm] = useState([cult]);

    const handleChange = event => {
        setEditForm({
            ...editForm,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        updateCulture(editForm, id);
        navigate('/');
    };

    return (
        <div className="cult">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name"
                    placeholder={cult.name}
                    value={editForm.name || ''}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="description"
                    placeholder={cult.description}
                    value={editForm.description || ''}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="reason"
                    placeholder={cult.reason}
                    value={editForm.reason || ''}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="url"
                    placeholder={cult.url}
                    value={editForm.url || ''}
                    onChange={handleChange}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    )
}