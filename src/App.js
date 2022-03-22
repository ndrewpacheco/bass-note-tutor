import React, { useState } from "react";
import BassNeck from "./components/BassNeck";
import "./App.css";
import Staff from "./components/Staff";
import { Sampler } from "tone";
import E2 from "./assets/bass-samples/e3.wav";
import E1 from "./assets/bass-samples/e2.wav";
import Quiz from "./components/Quiz";
function App() {
  const [currentNote, setCurrentNote] = useState("");

  const bassStrings = [
    ["E1", "F1", "F#1", "G1", "G#1"].reverse(),
    ["A1", "A#1", "B1", "C2", "C#2"].reverse(),
    ["D2", "D#2", "E2", "F2", "F#2"].reverse(),
    ["G2", "G#2", "A2", "A#2", "B2"].reverse(),
  ];

  const sampler = new Sampler(
    { E2, E1 },
    {
      onload: () => {
        this.setState({ isLoaded: true });
      },
    }
  ).toDestination();

  const handleMouseDown = (event) => {
    event.preventDefault();
    setCurrentNote(event.target.innerText);

    sampler.triggerAttackRelease(event.target.innerText, 0.4);
  };

  return (
    <div className='wrapper'>
      <div className='top-part'>
        <Quiz currentNote={currentNote} bassStrings={bassStrings} />
        <Staff currentNote={currentNote} />
      </div>
      <BassNeck handleMouseDown={handleMouseDown} bassStrings={bassStrings} />
    </div>
  );
}

export default App;

// todo:
// match keydown on keyboard to notes
// create lesson
