import React, { useState, useEffect } from "react";
import BassNeck from "./components/BassNeck";
import Accidentals from "./components/Accidentals";
import Quiz from "./components/Quiz";
import "./App.css";

import { Sampler } from "tone";
import E2 from "./assets/bass-samples/e3.wav";
import E1 from "./assets/bass-samples/e2.wav";

function App() {
  // Names of each sharp bass note
  const sharpBassStrings = [
    ["G#1", "G1", "F#1", "F1", "E1"],
    ["C#2", "C2", "B1", "A#1", "A1"],
    ["F#2", "F2", "E2", "D#2", "D2"],
    ["B2", "A#2", "A2", "G#2", "G2"],
  ];

  // Names of each flat bass note
  const flatBassStrings = [
    ["Ab1", "G1", "Gb1", "F1", "E1"],
    ["Db2", "C2", "B1", "Bb1", "A1"],
    ["Gb2", "F2", "E2", "Eb2", "D2"],
    ["B2", "Bb2", "A2", "Ab2", "G2"],
  ];

  // Default to flat bass notes when page is first visited
  const [isFlat, setIsFlat] = useState(true);

  // Determines which set of notes (flats/sharps) to use according to the isFlat state
  const allNotes = [].concat.apply(
    [],
    isFlat ? flatBassStrings : sharpBassStrings
  );

  // Determines the random quiz note
  const [quizNote, setQuizNote] = useState(
    allNotes[Math.floor(Math.random() * allNotes.length)]
  );

  const [currentNote, setCurrentNote] = useState("");

  // Sampler instrument that produces audio
  // - via Tone.js
  const sampler = new Sampler(
    { E2, E1 },
    {
      onload: () => {
        this.setState({ isLoaded: true });
      },
    }
  ).toDestination();

  // When a note is clicked on the neck, this event handler creates the desired audio
  const handleClick = (event) => {
    event.preventDefault();
    setCurrentNote(event.target.innerText);
    sampler.triggerAttackRelease(event.target.innerText, 0.4);
  };

  // Determines a new note for questioning, and clears the user's current note choice.
  const newNoteHandler = () => {
    setQuizNote(allNotes[Math.floor(Math.random() * allNotes.length)]);
    setCurrentNote("");
  };

  useEffect(() => {
    newNoteHandler();
    setCurrentNote("");
  }, [isFlat]);

  // Toggler for flats/sharps
  const changeAccidental = () => setIsFlat((accidental) => !accidental);

  return (
    <div className='wrapper'>
      <h1 className='title'>Note Tutor - Bass Guitar</h1>

      <Quiz
        currentNote={currentNote}
        bassStrings={isFlat ? flatBassStrings : sharpBassStrings}
        newNoteHandler={newNoteHandler}
        quizNote={quizNote}
      />

      <Accidentals isFlat={isFlat} changeAccidental={changeAccidental} />
      <BassNeck
        handleClick={handleClick}
        isFlat={isFlat}
        bassStrings={isFlat ? flatBassStrings : sharpBassStrings}
      />
    </div>
  );
}

export default App;
