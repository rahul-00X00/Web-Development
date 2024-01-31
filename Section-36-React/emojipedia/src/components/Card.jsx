import "./styles.css";

function Card(props) {
  return (
    <div class="card">
      <span role="img" aria-label={props.text} className="emoji-size">
        {props.img}
      </span>
      <h2>{props.name}</h2>
      <span> {props.description}</span>
    </div>
  );
}

export default Card;
