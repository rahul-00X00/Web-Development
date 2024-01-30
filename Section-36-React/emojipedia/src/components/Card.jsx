function Card(props) {
  return (
    <div>
      <span role="img" aria-label={props.text}>
        {props.img}
      </span>
      <span> {props.description}</span>
    </div>
  );
}

export default Card;
