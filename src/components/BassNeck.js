import React from "react";
// import String from "./String";
import Notes from "./Notes";

export default function BassNeck(props) {
  return (
    <div className='bassNeck'>
      {props.bassStrings.map((bassString, idx) => {
        return (
          <Notes
            notes={bassString}
            stringNumber={idx + 1}
            handleClick={props.handleClick}
          />
        );
      })}
    </div>
  );
}
