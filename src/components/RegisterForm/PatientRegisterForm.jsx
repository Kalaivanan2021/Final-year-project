import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../LoginForm/Patient.css";

const RegisterForm = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    doctorName: "",
    licenseId: "",
    name: "",
    dob: "",
    contact: "",
    email: "",
    diagnosis: "",
    severity: "",
    therapyHistory: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelection = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      alert("Please select a role to proceed.");
      return;
    }

    if (role === "patient") {
      console.log("Patient Registered:", formData);
      alert("Patient registered successfully!");
      navigate("/patient-login");
    } else if (role === "doctor") {
      console.log("Doctor Registered:", formData);
      alert("Doctor registered successfully!");
      navigate("/doctor-login");
    }
  };

  return (
    <div className="Patient-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        
        {/* Show Role Selection Only If No Role is Selected */}
        {!role && (
          <div className="input-box">
            <select className="dropdown" value={role} onChange={handleRoleSelection} required>
              <option value="">Select your role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
        )}

        {/* Doctor Form */}
        {role === "doctor" && (
          <>
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
          </>
        )}

        {/* Patient Form */}
        {role === "patient" && (
          <>
            <div className="form-container">
              <div className="column">
                <div className="input-box">
                  <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
                </div>
                <div className="input-box">
                  <input type="date" name="dob" placeholder="Date of Birth" required onChange={handleChange} />
                </div>
                <div className="input-box">
                  <input type="tel" name="contact" placeholder="Contact Number" required onChange={handleChange} />
                </div>
                <div className="input-box">
                  <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                </div>
              </div>

              <div className="column">
                <div className="input-box">
                  <input type="text" name="diagnosis" placeholder="Diagnosis" required onChange={handleChange} />
                </div>
                <div className="input-box">
                  <select name="severity" value={formData.severity} onChange={handleChange} required>
                    <option value="">Select Severity Level</option>
                    <option value="mild">Mild</option>
                    <option value="moderate">Moderate</option>
                    <option value="severe">Severe</option>
                  </select>
                </div>
                <div className="input-box">
                  <select name="therapyHistory" value={formData.therapyHistory} onChange={handleChange} required>
                    <option value="">Select Speech Therapy History</option>
                    <option value="previous">Previous</option>
                    <option value="ongoing">Ongoing</option>
                  </select>
                </div>
                <div className="input-box">
                  <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
                </div>
              </div>
            </div>
          </>
        )}
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default RegisterForm;
