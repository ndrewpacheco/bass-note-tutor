import logo from "./logo.svg";
import * as Tone from "tone";
import BassNeck from "./components/BassNeck";
import "./App.css";

// const bassStrings = [
//   ["E1", "F1", "F#1", "G1", "G#1"],
//   ["A1", "A#1", "B1", "C2", "C#2"],
//   ["D2", "D#2", "E2", "F2", "F#2"],
//   ["G2", "G#2", "A2", "A#2", "B2"],
// ];

function App() {
  return <BassNeck />;
}

// function App() {
//   const synth = new Tone.Synth().toDestination();
//   const bassNeck = <div className='bassNeck'></div>;

//   bassStrings.forEach((bassString) => {
//     const fret = <div className='fret'></div>;

//     console.log(fret);
//     bassString.forEach((letter) => {
//       const note = <div className='note'>{letter}</div>;

//       // note.addEventListener("mousedown", (evt) => {
//       //   // showStaffNote(letter);
//       //   Tone.start();
//       //   synth.triggerAttackRelease(letter, "16n");

//       //   // const now = Tone.now();
//       //   // synth.triggerAttackRelease(letter, tune.duration, now);
//       //   evt.preventDefault();
//       // });
//       fret.appendChild(note);
//       console.log(fret);
//     });

//     bassNeck.appendChild(fret);
//   });

//   return bassNeck;
// }

export default App;
