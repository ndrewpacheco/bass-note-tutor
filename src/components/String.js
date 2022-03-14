import React from "react";
import Note from "./Note";

const String = (props) => {
  // console.log(props.notes);
  const lastNote = props.notes[props.notes.length - 1];
  return (
    <div className='string'>
      {props.notes.map((note) => {
        return (
          <div className='fret'>
            <div
              className={note === lastNote ? "fret-marker nut" : "fret-marker"}
            />
            <Note letter={note} />
          </div>
        );
      })}
    </div>
  );
};

export default String;
