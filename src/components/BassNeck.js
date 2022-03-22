import React from "react";
// import String from "./String";
import Notes from "./Notes";

export default function BassNeck(props) {
  // const fretNotes = [
  //   ["E1", "A1", "D2", "G2"],
  //   ["F1", "A#1", "D#2", "G#2"],
  //   ["F#1", "B1", "E2", "A2"],
  //   ["G1", "C2", "F2", "A#2"],
  //   ["G#1", "C#2", "F#2", "B2"],
  // ];

  return (
    <div className='bassNeck'>
      {props.bassStrings.map((bassString, idx) => {
        return (
          <Notes
            notes={bassString.reverse()}
            stringNumber={idx + 1}
            handleMouseDown={props.handleMouseDown}
          />
        );
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
