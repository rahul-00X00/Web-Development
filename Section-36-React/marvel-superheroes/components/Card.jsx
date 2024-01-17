import "../styles.css";

function Card(props) {
    return (
        <div className="cards">
            <div>
                <h1>{props.name}</h1>
                <img src={props.img} alt={props.text} className="profile-image"/>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;
