import React, { useState } from "react";
import "./Patient.css";

const DoctorLogin = () => {
  const [username, setUsername] = useState("");
  const [licenseId, setLicenseId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !licenseId || !email || !password) {
      setError("All fields are required. Please fill in all details.");
      return;
    }
    setError(""); 
    alert("Login successful!");
  };

  return (
    <div className="doctor-wrapper">
      <form>
        <h1>Doctor Login</h1>
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
            placeholder="Enter your License ID"
            value={licenseId}
            onChange={(e) => setLicenseId(e.target.value)}
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

export default DoctorLogin;
