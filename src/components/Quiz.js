import React, { useEffect, useState } from "react";
import findBassClefNote from "../findBassClefNote";
import Staff from "./Staff";

const Quiz = ({ currentNote, quizNote, newNoteHandler }) => {
  const [isCorrect, setIsCorrect] = useState(false);

  let answer = "....waiting....";

  // Determines whether the note inputted by the user is correct
  useEffect(() => {
    findBassClefNote(quizNote, "quiz");
    setIsCorrect(currentNote === quizNote);

    return () => {
      document.getElementById("quiz").firstChild.remove();
    };
  }, [quizNote, currentNote]);

  if (currentNote) {
    answer = isCorrect ? (
      <div style={{ color: "green" }}>Correct, it's {currentNote}</div>
    ) : (
      <div style={{ color: "red" }}>{currentNote} is the wrong note</div>
    );
  }

  return (
    <div className='quiz-section'>
      <div className='notes'>
        <div className='quiz-note'>
          <h2>Question:</h2>
          <div id='quiz'></div>
        </div>
        <Staff currentNote={currentNote} isCorrect={isCorrect} />
      </div>
      <div className='answer-section'>
        <h3>{answer}</h3>

        <button
          onClick={newNoteHandler}
          type='button'
          disabled={currentNote !== quizNote}
        >
          New Note
        </button>
      </div>
    </div>
  );
};

export default Quiz;
