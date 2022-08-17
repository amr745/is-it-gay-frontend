import React from "react"
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

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
        <Container id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" onSubmit={handleSubmit}>
            <img className="mb-4 bootstrap-logo" 
              src="https://imgur.com/1vfKBtj.png" 
              alt="Is it Gay Logo" />
                <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Add New Content</Form.Label>
            <Form.Control type="text" placeholder={cult.name} defaultValue={editForm.name} name="name" onChange={handleChange} />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Control as="textarea" rows="5" placeholder={cult.description} defaultValue={editForm.description} name="description" onChange={handleChange} />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicReason">
            <Form.Control as="textarea" rows="5" placeholder={cult.reason} defaultValue={editForm.reason} name="reason" onChange={handleChange}  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicURL">
            <Form.Control type="text" placeholder={cult.url} defaultValue={editForm.url} name="url" onChange={handleChange}  />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
        </Container>
    )

    
    
    
    
    
    
    
    
    
    
    // return (
    //     <div className="cult">
    //         <form onSubmit={handleSubmit}>
    //             <input 
    //                 type="text" 
    //                 name="name"
    //                 placeholder={cult.name}
    //                 value={editForm.name || ''}
    //                 onChange={handleChange}
    //             />
    //             <input 
    //                 type="text" 
    //                 name="description"
    //                 placeholder={cult.description}
    //                 value={editForm.description || ''}
    //                 onChange={handleChange}
    //             />
    //             <input 
    //                 type="text" 
    //                 name="reason"
    //                 placeholder={cult.reason}
    //                 value={editForm.reason || ''}
    //                 onChange={handleChange}
    //             />
    //             <input 
    //                 type="text" 
    //                 name="url"
    //                 placeholder={cult.url}
    //                 value={editForm.url || ''}
    //                 onChange={handleChange}
    //             />
    //             <button type="submit">Update</button>
    //         </form>
    //     </div>
    // )
}