import React, { useEffect } from "react";
import findBassClefNote from "../findBassClefNote";

const Staff = ({ currentNote, isCorrect }) => {
  useEffect(() => {
    findBassClefNote(currentNote, "staff", isCorrect);

    return () => {
      document.getElementById("staff").innerText = "";
    };
  });

  return (
    <div className='quiz-note'>
      <h2>Answer:</h2>

      <div id='staff'></div>
    </div>
  );
};

export default Staff;
