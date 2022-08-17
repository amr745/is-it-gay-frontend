import React from "react"
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/register";

function LoginPage({ handleRegisterOrLogin, updateMessage }) {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });

    let navigate = useNavigate();

    function handleChange(e) {
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await login(formState);
            // Let <App> know a user has signed up!
            handleRegisterOrLogin();
            navigate("/", { replace: true });
        } catch (err) {
            // Change this to a modal or toast in deployed apps
            alert(err.message);
        }
    }

    return (
        <Container id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" onSubmit={handleSubmit}>
            <img className="mb-4 bootstrap-logo" 
              src="https://imgur.com/1vfKBtj.png" 
              alt="Is it Gay Logo" />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Login</Form.Label>
            <Form.Control type="email" placeholder="Enter email" defaultValue={formState.email} name="email" onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" defaultValue={formState.password} name="password" onChange={handleChange} />
            <Form.Text className="forgot-password text-right">
               Not a member? <Link to="/register">Sign-up now!</Link>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        </Container>
      );
}

export default LoginPage;