import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginForm/Patient.css";

const DoctorRegisterForm = () => {
  const [formData, setFormData] = useState({
    doctorName: "",
    licenseId: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Registered:", formData);
    alert("Doctor registered successfully!");
  };

  return (
    <div className="Doctor_Register-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Doctor Registration</h1>
        <div className="input-box">
          <input type="text" name="doctorName" placeholder="Doctor Name" required onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="text" name="licenseId" placeholder="License ID" required onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        </div>
        <div className="input-box">
          <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
        <div className="register-link">
          <p>Already have an account? <button type="button" onClick={() => navigate("/login")}>Login</button></p>
        </div>
      </form>
    </div>
  );
};

export default DoctorRegisterForm;
