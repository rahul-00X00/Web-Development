import "../styles.css";

function Avatar(props) {
  return <img src={props.img} alt={props.text} className="profile-image" />;
}

export default Avatar;
