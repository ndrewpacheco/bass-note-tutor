import React, { useEffect } from "react";
import findBassClefNote from "../findBassClefNote";

const Quiz = ({ currentNote }) => {
  let quizNote = "E1";
  let answer = "....";

  useEffect(() => {
    findBassClefNote(quizNote, "quiz");

    return () => {
      document.getElementById("quiz").innerHTML = "";
    };
  }, [currentNote, quizNote]);

  const nopes = ["nope", "not yet", "nah"];

  if (currentNote) {
    answer =
      currentNote === quizNote ? (
        <p>yep</p>
      ) : (
        <p>{nopes[Math.floor(Math.random() * nopes.length)]}</p>
      );
  }
  return (
    <div className='quiz'>
      <h2>play this note:</h2>
      <p>{answer}</p>
      <div id='quiz'></div>
    </div>
  );
};

export default Quiz;
