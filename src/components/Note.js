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
    onload: () => {
      sampler.triggerAttackRelease(note, 0.4);
    },
  }).toDestination();

  const handleMouseDown = (event) => {
    event.preventDefault();
    note = event.target.innerText;
    console.log(note);

    // const player = new Tone.Player(
    //   "bass-samples/bb2_vl1_rr1.wav"
    // ).toDestination();
    // // play as soon as the buffer is loaded
    // console.log(player);

    // player.autostart = true;

    sampler.triggerAttackRelease(note, 0.4);
    // showStaffNote(letter);
    // const synth = new Tone.Synth().toDestination();

    // synth.triggerAttackRelease(note, "16n");

    //       //   // const now = Tone.now();
    //       //   // synth.triggerAttackRelease(letter, tune.duration, now);
    //       //   evt.preventDefault();
    //       // });
    //       fret.appendChild(note);
    //       console.log(fret);
  };

  return (
    <div className='note'>
      <div className='letter' onMouseDown={handleMouseDown}>
        {props.letter}
      </div>
    </div>
  );
}

// "bass-electric": {
//   "A#2": "As2.[mp3|ogg]",
//   "A#3": "As3.[mp3|ogg]",
//   "A#4": "As4.[mp3|ogg]",
//   "A#5": "As5.[mp3|ogg]",
//   "C#2": "Cs2.[mp3|ogg]",
//   "C#3": "Cs3.[mp3|ogg]",
//   "C#4": "Cs4.[mp3|ogg]",
//   "C#5": "Cs5.[mp3|ogg]",
//   E2: "E2.[mp3|ogg]",
//   E3: "E3.[mp3|ogg]",
//   E4: "E4.[mp3|ogg]",
//   E5: "E5.[mp3|ogg]",
//   G2: "G2.[mp3|ogg]",
//   G3: "G3.[mp3|ogg]",
//   G4: "G4.[mp3|ogg]",
//   G5: "G5.[mp3|ogg]",
// },
