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
  const [showDAF_FAF, setShowDAF_FAF] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [randomSentences, setRandomSentences] = useState([]);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);
  const audioRef = useRef(null);

  const startRecording = async () => {
    try {
      setAudioURL(null);
      audioChunks.current = [];
      setShowExercise(false);
      setShowDAF_FAF(false);
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
        setShowDAF_FAF(true);
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

  return (
    <div className="recorder-container">
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
        </div>
      )}

      {showDAF_FAF && (
        <div className="daf-faf-wrapper">
          <h2>DAF & FAF Speech Training</h2>
         
          <div className="daf-faf-center">
            <div className="daf">
              <h3 className="label">DAF:</h3>
              <button className="minus-btn">-</button>
              <input
                type="range"
                min="50"
                max="200"
                step="10"
                value={playbackRate * 100}
                onChange={(e) => setPlaybackRate(parseFloat(e.target.value) / 100)}
              />
              <span>{(playbackRate * 100).toFixed(0)} ms</span>
              <button className="plus-btn">+</button>
            </div>
            <div className="faf">
              <h3 className="label">FAF:</h3>
              <button className="minus-btn">-</button>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={pitch}
                onChange={(e) => setPitch(parseFloat(e.target.value))}
              />
              <span>{pitch.toFixed(1)}x</span>
              <button className="plus-btn">+</button>
            </div>
          </div>
          <button className="exercise-btn">Start Exercise</button>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
