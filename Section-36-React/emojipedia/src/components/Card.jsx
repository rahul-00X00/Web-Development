function Card(props) {
    return (
        <div>
            <img src={props.img} alt={props.text} />
            <span> {props.description}</span>
        </div>
    )
}

export default Card;
