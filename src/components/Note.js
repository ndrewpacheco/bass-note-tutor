import React from "react";

export default function Note(props) {
  return (
    <div className='note'>
      <div className='letter'>{props.letter}</div>
    </div>
  );
}
