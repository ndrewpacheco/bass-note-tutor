import Vex from "vexflow";
import { NoteSubGroup } from "vexflow/src/notesubgroup";
import "./App.css";

export default function findBassClefNote(letter, id) {
  const VF = Vex.Flow;
  // Create an SVG renderer and attach it to the DIV element named "boo".
  const div = document.getElementById(id);
  console.log(div);
  const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

  // Size our SVG:
  renderer.resize(100, 100);

  // And get a drawing context:
  const context = renderer.getContext();

  // Create a stave at position 10, 40 of width 400 on the canvas.
  const stave = new VF.Stave(0, 0, 100);

  // Add a clef and time signature.
  stave.addClef("bass");

  if (letter.length > 0) {
    let num = letter.slice(-1);
    num = parseInt(num) + 1;
    letter = letter.slice(0, -1);
    letter = letter + "/" + num;

    const notes = new VF.StaveNote({
      clef: "bass",
      keys: [letter],
      duration: "w",
    });

    console.log(notes);

    if (letter[1] === "#") {
      notes.addAccidental(0, new VF.Accidental("#"));
    }

    // Create a voice in 4/4 and add the fotes from above
    const voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables([notes]);

    // Format and justify the notes to 350 pixels (50 pixels left for key and time signatures).
    new VF.Formatter().joinVoices([voice]).format([voice]);

    // Render voice
    voice.draw(context, stave);
  }

  // Connect it to the rendering context and draw!
  stave.setContext(context).draw();
}
