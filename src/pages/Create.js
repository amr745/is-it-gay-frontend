import React from "react"
import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
        return (
        <Container id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" onSubmit={handleSubmit}>
            <img className="mb-4 bootstrap-logo" 
              src="https://imgur.com/1vfKBtj.png" 
              alt="Is it Gay Logo" />
                <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Add New Content</Form.Label>
            <Form.Control type="text" placeholder="Content Name" defaultValue={newForm.name} name="name" onChange={handleChange} required />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Control as="textarea" rows="5" placeholder="Description" defaultValue={newForm.description} name="description" onChange={handleChange} />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicReason">
            <Form.Control as="textarea" rows="5" placeholder="Tell Us Why It's Gay!" defaultValue={newForm.reason} name="reason" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicURL">
            <Form.Control type="text" placeholder="Image URL" defaultValue={newForm.url} name="url" onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Content
          </Button>
        </Form>
        </Container>
    )
}
  
export default Create