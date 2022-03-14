import React from "react";

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
            <div className='note'>{note}</div>
          </div>
        );
      })}
    </div>
  );
};

export default String;
