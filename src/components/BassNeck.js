import React from "react";
import Fret from "./Fret";

export default function BassNeck() {
  const bassNotes = [
    ["E1", "A1", "D2", "G2"],
    ["F1", "A#1", "D#2", "G#2"],
    ["F#1", "B1", "E2", "A2"],
    ["G1", "C2", "F2", "A#2"],
    ["G#1", "C#2", "F#2", "B2"],
  ];
  return (
    <div className='bassNeck'>
      {bassNotes.map((notes) => {
        return <Fret notes={notes} />;
      })}
    </div>
  );
}
