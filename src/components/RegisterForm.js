import React from "react"
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/register";


function RegisterForm({ updateMessage, handleRegisterOrLogin }) {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        passwordConf: "",
    });

    let navigate = useNavigate();

    function handleChange(e) {
        updateMessage("");
        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await register(formState);
            handleRegisterOrLogin();
            navigate("/", { replace: true });
        } catch (err) {
            updateMessage(err.message);
        }
    }

    function validForm() {
        return (
            formState.name &&
            formState.email &&
            formState.password === formState.passwordConf
        );
    }

    return (
        <Container id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" onSubmit={handleSubmit}>
            <img className="mb-4 bootstrap-logo" 
              src="https://imgur.com/1vfKBtj.png" 
              alt="Is it Gay Logo" />
                <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Signup</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" defaultValue={formState.name} name="name" onChange={handleChange} />

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter Email" defaultValue={formState.email} name="email" onChange={handleChange} required/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Enter Password" defaultValue={formState.password} name="password" onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirm Password" defaultValue={formState.passwordConf} name="passwordConf" onChange={handleChange} required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone.
            </Form.Text><br/>

            <Form.Text className="forgot-password text-right">
            Already registered? <Link to="/login">Login</Link>
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={validForm()}>
            Login
          </Button>
        </Form>
        </Container>
    )
        
        
        
        
        
        
        
        
        
        
    //     <div className="auth-form">
    //         <form onSubmit={handleSubmit}>
    //             <h3>Sign Up</h3>
    //             <div className="mb-3">
    //                 <label>Name</label>
    //                 <input
    //                     type="text"
    //                     className="form-control"
    //                     placeholder="Enter Name"
    //                     value={formState.name}
    //                     name="name"
    //                     onChange={handleChange}
    //                 />
    //             </div>
    //             <div className="mb-3">
    //                 <label>Email address</label>
    //                 <input
    //                     type="email"
    //                     className="form-control"
    //                     placeholder="Enter email"
    //                     value={formState.email}
    //                     name="email"
    //                     onChange={handleChange}
    //                     required
    //                 />
    //             </div>
    //             <div className="mb-3">
    //                 <label>Password</label>
    //                 <input
    //                     type="password"
    //                     className="form-control"
    //                     placeholder="Enter password"
    //                     value={formState.password}
    //                     name="password"
    //                     onChange={handleChange}
    //                     required
    //                 />
    //             </div>
    //             <div className="mb-3">
    //                 <input
    //                     type="password"
    //                     className="form-control"
    //                     placeholder="Confirm password"
    //                     value={formState.passwordConf}
    //                     name="passwordConf"
    //                     onChange={handleChange}
    //                     required
    //                 />
    //             </div>
    //             <div className="d-grid">
    //                 <button type="submit" className="btn btn-primary" disabled={validForm()}>
    //                     Sign Up
    //                 </button>
    //             </div>
    //             <p className="forgot-password text-right">
    //                 Already registered? <a href="/login">Signin</a>
    //             </p>
    //         </form>

    //     </div>
    // );
}

export default RegisterForm;