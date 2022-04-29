import React from "react";

export default function Notes(props) {
  const lastNote = props.notes[props.notes.length - 1];
  return (
    <div className='string'>
      {props.notes.map((note) => {
        return (
          <div className='fret' key={note}>
            <div
              className={note === lastNote ? "fret-marker nut" : "fret-marker"}
            />
            <div className={`note string-number-${props.stringNumber}`}>
              <div className='letter' onMouseDown={props.handleClick}>
                <div
                  className={`letter-circle ${
                    props.isFlat ? "is-flat" : "is-sharp"
                  }`}
                >
                  {" "}
                  {note}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
