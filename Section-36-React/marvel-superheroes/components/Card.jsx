import "../styles.css";
import Avatar from "./Avatar.jsx";

function Card(props) {
    return (
        <div className="cards">
            <div>
                <h1>{props.name}</h1>
                <Avatar img={props.img} text={props.text} />
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;
