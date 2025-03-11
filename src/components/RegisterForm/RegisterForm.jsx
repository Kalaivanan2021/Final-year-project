
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"; // Same CSS file for styling

const RegisterForm = () => {
    console.log("RegisterForm Loaded");
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Registered:", formData);
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="input-box">
                    <input type="text" name="Username" placeholder="username" required onChange={handleChange} />
                </div>
                <div className="input-box">
                    <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                </div>
                <div className="input-box">
                    <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
                </div>
                <button type="submit">Sign Up</button>
                <div className="register-link">
                    <p>Already have an account?  
                        <button type="button" onClick={() => navigate("/login")}>Login</button>
                    </p>
                </div>
                
            </form>
        </div>
    );
};

export default RegisterForm;
