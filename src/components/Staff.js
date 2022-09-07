import React, { useEffect } from "react";
import findBassClefNote from "../findBassClefNote";

const Staff = ({ currentNote, isCorrect }) => {
  // Determines and displays the answer by the user
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
