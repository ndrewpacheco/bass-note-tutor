import React, { useState, useEffect } from "react";
import BassNeck from "./components/BassNeck";
import Accidentals from "./components/Accidentals";
import Quiz from "./components/Quiz";
import "./App.css";
import constants from "./constants";
import { Sampler } from "tone";
import E2 from "./assets/bass-samples/e3.wav";
import E1 from "./assets/bass-samples/e2.wav";

function App() {
  // Default to flat bass notes when page is first visited
  const [isFlat, setIsFlat] = useState(true);
  const { FLAT_BASS_STRINGS, SHARP_BASS_STRINGS } = constants;

  // Determines which set of notes (flats/sharps) to use according to the isFlat state
  const allNotes = [].concat.apply(
    [],
    isFlat ? FLAT_BASS_STRINGS : SHARP_BASS_STRINGS
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
    <div className="wrapper">
      <h1 className="title">Note Tutor - Bass Guitar</h1>

      <Quiz
        currentNote={currentNote}
        bassStrings={isFlat ? FLAT_BASS_STRINGS : SHARP_BASS_STRINGS}
        newNoteHandler={newNoteHandler}
        quizNote={quizNote}
      />

      <Accidentals isFlat={isFlat} changeAccidental={changeAccidental} />

      <BassNeck
        handleClick={handleClick}
        isFlat={isFlat}
        bassStrings={isFlat ? FLAT_BASS_STRINGS : SHARP_BASS_STRINGS}
      />
    </div>
  );
}

export default App;
