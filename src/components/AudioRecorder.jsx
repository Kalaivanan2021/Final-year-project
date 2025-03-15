import React, { useState, useRef } from "react";
import "./DAF_FAF/DAF_FAF.css";

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Artificial intelligence is shaping the future of technology.",
  "Speaking clearly and confidently improves communication skills.",
  "Practice makes perfect when it comes to speech training.",
  "Reading aloud enhances pronunciation and fluency.",
  "A good speaker engages the audience with clarity and tone.",
  "Listening to your own voice helps identify areas for improvement.",
  "Public speaking is an art that improves with practice."
];

const getRandomSentence = () => {
  const selected = [];
  while (selected.length < 4) {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    if (!selected.includes(sentences[randomIndex])) {
      selected.push(sentences[randomIndex]);
    }
  }
  return selected;
};

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [showExercise, setShowExercise] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1); // DAF
  const [pitch, setPitch] = useState(1); // FAF
  const [randomSentences, setRandomSentences] = useState([]);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);
  const audioRef = useRef(null);

  const startRecording = async () => {
    try {
      setAudioURL(null);
      setShowExercise(false);
      audioChunks.current = [];
      setRandomSentences(getRandomSentence());

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);

      mediaRecorder.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      };

      mediaRecorder.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        setShowExercise(true);
        setRandomSentences([]);
      };

      mediaRecorder.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      setRecording(false);
    }
  };

  const handleSpeedChange = (event) => {
    const speed = parseFloat(event.target.value);
    setPlaybackRate(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  };

  const handlePitchChange = (event) => {
    const pitchValue = parseFloat(event.target.value);
    setPitch(pitchValue);
    if (audioRef.current) {
      audioRef.current.preservesPitch = false;
      audioRef.current.playbackRate = pitchValue;
    }
  };

  return (
    <div className="recorder-container">
      {/* ✅ Show Random Sentences While Recording */}
      {recording && randomSentences.length > 0 && (
        <div className="sentence-box">
          {randomSentences.map((sentence, index) => (
            <p key={index} className="sentence">{sentence}</p>
          ))}
        </div>
      )}

      <button 
        className={`record-btn ${recording ? "stop" : "start"}`} 
        onClick={recording ? stopRecording : startRecording}
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>

      {audioURL && (
        <div className="audio-controls">
          <audio ref={audioRef} controls src={audioURL}></audio>
          <a href={audioURL} download="recording.wav" className="download-btn">Download</a>

          {/* ✅ DAF Adjustment (Delays Playback) */}
          <div className="control-group">
            <label>DAF:</label>
            <button className="round-btn" onClick={() => setPlaybackRate(Math.max(0.5, playbackRate - 0.1))}>-</button>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={playbackRate}
              onChange={handleSpeedChange}
            />
            <button className="round-btn" onClick={() => setPlaybackRate(Math.min(2, playbackRate + 0.1))}>+</button>
            <span className="value-display">{(playbackRate * 100).toFixed(0)} ms</span>
          </div>

          {/* ✅ FAF Adjustment (Alters Pitch) */}
          <div className="control-group">
            <label>FAF:</label>
            <button className="round-btn" onClick={() => setPitch(Math.max(0.5, pitch - 0.1))}>-</button>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={pitch}
              onChange={handlePitchChange}
            />
            <button className="round-btn" onClick={() => setPitch(Math.min(2, pitch + 0.1))}>+</button>
            <span className="value-display">{pitch.toFixed(1)}x</span>
          </div>
        </div>
      )}

      {/* ✅ Show Exercise Button After Recording Stops */}
      {showExercise && <button className="exercise-btn">Start Exercise</button>}
    </div>
  );
};

export default AudioRecorder;
