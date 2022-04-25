import React, { useEffect } from "react";
import findBassClefNote from "../findBassClefNote";

const Staff = ({ currentNote }) => {
  useEffect(() => {
    findBassClefNote(currentNote, "staff");

    return () => {
      document.getElementById("staff").innerText = "";
    };
  });

  return (
    <div className='quiz-note'>
      <h2>your note:</h2>

      <div id='staff'></div>
    </div>
  );
};

export default Staff;
