import "./styles.css";

function Note(props) {
  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Note;
