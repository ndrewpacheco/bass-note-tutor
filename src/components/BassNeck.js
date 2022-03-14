import React from "react";
import Fret from "./Fret";
import String from "./String";

export default function BassNeck() {
  const fretNotes = [
    ["E1", "A1", "D2", "G2"],
    ["F1", "A#1", "D#2", "G#2"],
    ["F#1", "B1", "E2", "A2"],
    ["G1", "C2", "F2", "A#2"],
    ["G#1", "C#2", "F#2", "B2"],
  ];

  const bassStrings = [
    ["E1", "F1", "F#1", "G1", "G#1"],
    ["A1", "A#1", "B1", "C2", "C#2"],
    ["D2", "D#2", "E2", "F2", "F#2"],
    ["G2", "G#2", "A2", "A#2", "B2"],
  ];

  return (
    <div className='bassNeck'>
      {bassStrings.map((string) => {
        return <String notes={string.reverse()} />;
      })}
    </div>
  );
}
// export default function BassNeck() {
//   const fretNotes = [
//     ["E1", "A1", "D2", "G2"],
//     ["F1", "A#1", "D#2", "G#2"],
//     ["F#1", "B1", "E2", "A2"],
//     ["G1", "C2", "F2", "A#2"],
//     ["G#1", "C#2", "F#2", "B2"],
//   ];
//   return (
//     <div className='bassNeck'>
//       {fretNotes.map((notes) => {
//         return <Fret notes={notes} />;
//       })}
//     </div>
//   );
// }
