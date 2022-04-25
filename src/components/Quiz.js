import React, { useEffect } from "react";
import findBassClefNote from "../findBassClefNote";

const Quiz = ({ currentNote, quizNote, newNoteHandler }) => {
  let answer = "....waiting....";

  useEffect(() => {
    findBassClefNote(quizNote, "quiz");

    return () => {
      document.getElementById("quiz").firstChild.remove();
    };
  }, [quizNote, currentNote]);

  if (currentNote) {
    answer =
      currentNote === quizNote ? (
        <div>yep, it's {currentNote}</div>
      ) : (
        <div>{currentNote} is the wrong note</div>
      );
  }

  return (
    <div className='quiz-note'>
      <h2>guess this note:</h2>
      <div id='quiz'></div>
      <p>{answer}</p>
      <button
        onClick={newNoteHandler}
        type='button'
        disabled={currentNote !== quizNote}
      >
        New Note
      </button>
    </div>
  );
};

export default Quiz;
