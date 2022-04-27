import React, { useState, useEffect } from "react";
import BassNeck from "./components/BassNeck";
import "./App.css";

import { Sampler } from "tone";
import E2 from "./assets/bass-samples/e3.wav";
import E1 from "./assets/bass-samples/e2.wav";
import Quiz from "./components/Quiz";

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
  const [isFlat, setIsFlat] = useState(false);

  const allNotes = [].concat.apply([], isFlat ? flatBassStrings : bassStrings);

  const [quizNote, setQuizNote] = useState(
    allNotes[Math.floor(Math.random() * allNotes.length)]
    // lesson1[Math.floor(Math.random() * lesson1.length)]
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
  return (
    <div className='wrapper'>
      <h1 className='title'>Note Tutor - Bass Guitar</h1>

      <Quiz
        currentNote={currentNote}
        bassStrings={isFlat ? flatBassStrings : bassStrings}
        newNoteHandler={newNoteHandler}
        quizNote={quizNote}
      />
      <div
        className='accidentals'
        onChange={() => setIsFlat((accidental) => !accidental)}
      >
        {/* <input
          type='radio'
          id='flat'
          name='accidentals'
          value='flat'
          defaultChecked
        />
        <label htmlFor='flat'>Flats</label>



        <input type='radio' id='sharp' name='accidentals' value='sharp' />
        <label htmlFor='dewey'>Sharps</label> */}
        <h4 style={{ display: "inline" }}>Flats / Sharps </h4>
        <label class='switch'>
          <input type='checkbox' />
          <span class='slider round'></span>
        </label>
      </div>
      <BassNeck
        handleClick={handleClick}
        isFlat={isFlat}
        bassStrings={isFlat ? flatBassStrings : bassStrings}
      />
    </div>
  );
}

export default App;

// features to add:
// match keydown on keyboard to notes
// create lessons & method
// switch from flats to sharps on neck
// play along to notes
