import React from "react";

const Accidentals = ({ changeAccidental, isFlat }) => {
  return (
    <div
      className='accidentals'
      onChange={() => changeAccidental((accidental) => !accidental)}
    >
      <h4>
        <span id='flats' className={isFlat ? "is-flat" : ""}>
          Flats
        </span>{" "}
        /{" "}
        <span id='sharps' className={!isFlat ? "is-sharp" : ""}>
          Sharps
        </span>
      </h4>
      <label className='switch '>
        <input type='checkbox' />
        <span className='slider round'></span>
      </label>
    </div>
  );
};

export default Accidentals;
