import React, { useEffect } from "react";
import Vex from "vexflow";

const Staff = (props) => {
  useEffect(() => {
    function findVexNote(val) {
      const VF = Vex.Flow;
      // Create an SVG renderer and attach it to the DIV element named "boo".
      const div = document.getElementById("test");
      const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

      // Size our SVG:
      renderer.resize(500, 500);

      // And get a drawing context:
      const context = renderer.getContext();
      // Create a stave at position 10, 40 of width 400 on the canvas.
      const stave = new VF.Stave(150, 60, 140);

      // Add a clef and time signature.
      stave.addClef("bass");

      const note = new VF.StaveNote({
        clef: "bass",
        keys: [val],
        duration: "w",
      });
      if (val[1] === "#") {
        note.addAccidental(0, new VF.Accidental("#"));
      }

      // Create a voice in 4/4 and add the fotes from above
      const voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
      voice.addTickables([note]);

      // Format and justify the notes to 350 pixels (50 pixels left for key and time signatures).
      new VF.Formatter().joinVoices([voice]).format([voice]);

      // Render voice
      voice.draw(context, stave);

      // Connect it to the rendering context and draw!
      stave.setContext(context).draw();
      return div;
    }

    function showStaffNote(letter) {
      let num = letter.slice(-1);
      num = parseInt(num) + 1;
      letter = letter.slice(0, -1);
      return findVexNote(letter + "/" + num);
    }

    showStaffNote(props.letter);
  }, []);
  return <div id='test'></div>;
};

export default Staff;
