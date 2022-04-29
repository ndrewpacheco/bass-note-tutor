import React, { useState, useEffect } from "react";
import BassNeck from "./components/BassNeck";
import Accidentals from "./components/Accidentals";
import Quiz from "./components/Quiz";
import "./App.css";

import { Sampler } from "tone";
import E2 from "./assets/bass-samples/e3.wav";
import E1 from "./assets/bass-samples/e2.wav";

function App() {
  const bassStrings = [
    ["G#1", "G1", "F#1", "F1", "E1"],
    ["C#2", "C2", "B1", "A#1", "A1"],
    ["F#2", "F2", "E2", "D#2", "D2"],
    ["B2", "A#2", "A2", "G#2", "G2"],
  ];

  const flatBassStrings = [
    ["Ab1", "G1", "Gb1", "F1", "E1"],
    ["Db2", "C2", "B1", "Bb1", "A1"],
    ["Gb2", "F2", "E2", "Eb2", "D2"],
    ["B2", "Bb2", "A2", "Ab2", "G2"],
  ];
  const [isFlat, setIsFlat] = useState(true);

  const allNotes = [].concat.apply([], isFlat ? flatBassStrings : bassStrings);

  const [quizNote, setQuizNote] = useState(
    allNotes[Math.floor(Math.random() * allNotes.length)]
  );

  const [currentNote, setCurrentNote] = useState("");

  const sampler = new Sampler(
    { E2, E1 },
    {
      onload: () => {
        this.setState({ isLoaded: true });
      },
    }
  ).toDestination();

  const handleClick = (event) => {
    event.preventDefault();

    setCurrentNote(event.target.innerText);

    sampler.triggerAttackRelease(event.target.innerText, 0.4);
  };

  const newNoteHandler = () => {
    setQuizNote(allNotes[Math.floor(Math.random() * allNotes.length)]);

    setCurrentNote("");
  };

  useEffect(() => {
    newNoteHandler();
    setCurrentNote("");
  }, [isFlat]);

  const changeAccidental = () => setIsFlat((accidental) => !accidental);

  return (
    <div className='wrapper'>
      <h1 className='title'>Note Tutor - Bass Guitar</h1>

      <Quiz
        currentNote={currentNote}
        bassStrings={isFlat ? flatBassStrings : bassStrings}
        newNoteHandler={newNoteHandler}
        quizNote={quizNote}
      />

      <Accidentals
        // className='accidentals'
        // onChange={() => setIsFlat((accidental) => !accidental)}
        isFlat={isFlat}
        changeAccidental={changeAccidental}
      />
      {/* <div
        className='accidentals'
        onChange={() => setIsFlat((accidental) => !accidental)}
      >
        <h4>
          <span id='flats' className={isFlat ? "is-flat" : ""}>
            Flats
          </span>{" "}
          /{" "}
          <span id='sharps' className={!isFlat ? "is-sharp" : ""}>
            Sharps
          </span>
        </h4>
        <label className='switch '>
          <input type='checkbox' />
          <span className='slider round'></span>
        </label>
      </div> */}
      <BassNeck
        handleClick={handleClick}
        isFlat={isFlat}
        bassStrings={isFlat ? flatBassStrings : bassStrings}
      />
    </div>
  );
}

export default App;
