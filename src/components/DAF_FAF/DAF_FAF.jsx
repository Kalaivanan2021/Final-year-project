import React from "react";
import AudioRecorder from "../AudioRecorder"; // ✅ Import the correct component
import "./DAF_FAF.css";

const DAF_FAF = () => {
  return (
    <div className="daf-faf-container">
      <center><h1>DAF & FAF Speech Training</h1></center>
      <AudioRecorder /> {/* ✅ Use AudioRecorder here */}
    </div>
  );
};

export default DAF_FAF;
