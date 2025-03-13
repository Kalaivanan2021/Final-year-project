import React from "react";
import { useNavigate } from "react-router-dom";
import "./HowToUse.css";

import { motion } from "framer-motion";

const HowToUse = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="how-to-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: "800px", padding: "40px", borderRadius: "15px", background: "rgba(255, 255, 255, 0.2)", backdropFilter: "blur(15px)" }}
    >
      <motion.h1 
        initial={{ y: -20, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.6 }}
      >
        How to Use Fluent Flow
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7 }}
        style={{ fontSize: "18px", lineHeight: "1.6" }}
      >
        1. Click "Start Recording" to begin speech practice.<br />
        2. Adjust DAF (Delayed Auditory Feedback) and FAF (Frequency Altered Feedback) using the sliders.<br />
        3. Play back your recorded speech and analyze improvements.<br />
        4. Use the "Start Exercise" button for guided speech exercises.
      </motion.p>
      <motion.button 
        onClick={() => navigate("/DAF_FAF")}
        whileHover={{ scale: 1.1, backgroundColor: "#ff6f61" }}
        whileTap={{ scale: 0.9 }}
        className="proceed-btn"
        style={{ padding: "12px 25px", fontSize: "18px", borderRadius: "10px", background: "linear-gradient(135deg, #ff6f61, #ff8a80)", color: "white", border: "none", cursor: "pointer" }}
      >
        Proceed to Practice
      </motion.button>
    </motion.div>
  );
};

export default HowToUse;
