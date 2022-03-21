import React from "react";
import * as Tone from "tone";

export default function Note(props) {
  let note;

  const sampler = new Tone.Sampler({
    urls: {
      E1: "e2.wav",
      E2: "e3.wav",
    },
    baseUrl: "bass-samples/",
  }).toDestination();

  const handleMouseDown = (event) => {
    event.preventDefault();
    note = event.target.innerText;
    console.log(note);

    sampler.triggerAttackRelease(note, 0.4);
  };

  return (
    <div className={`note string-number-${props.stringNumber}`}>
      <div className='letter' onMouseDown={handleMouseDown}>
        {props.letter}
      </div>
    </div>
  );
}
