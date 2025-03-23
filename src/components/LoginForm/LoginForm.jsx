import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    if (selectedRole === "patient") {
      navigate("/patient-login");
    } else if (selectedRole === "doctor") {
      navigate("/doctor-login");
    }
  };

  return (
    <form>
      <h1>Login</h1>
      <p className="role-selection">If you have an account, select your role to login</p>
      <div className="input-box">
        <select className="dropdown" value={role} onChange={handleRoleChange}>
          <option value="">Select your role</option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
      </div>
      <div className="register-link">
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </form>
  );
};

export default LoginForm;
