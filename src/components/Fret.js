import Note from "./Note";

export default function Fret(props) {
  console.log(props.notes);
  return (
    <div className='fret'>
      {props.notes.map((note) => {
        return <Note letter={note} />;
      })}
    </div>
  );
}
