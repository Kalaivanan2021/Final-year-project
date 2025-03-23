import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Patient.css";

const PatientLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [patientId, setPatientId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !patientId || !email || !password) {
      alert("All fields are required. Please fill in all details.");
      return;
    }
    setError(""); 
    navigate("/how-to-use"); 
  };

  return (
    <div className="patient-wrapper">
      <form>
        <h1>Patient Login</h1>
        {error && <p className="error">{error}</p>}
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            placeholder="Enter your Patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn" onClick={handleLogin}>Login</button>
        
      </form>
    </div>
  );
};

export default PatientLogin;
