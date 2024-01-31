import Card from "./Card.jsx";
import emojipedia from "../emoji_data.js";
import "./styles.css";

function createCard(emoji) {
  return (
    <Card
      key={emoji.id}
      name={emoji.name}
      img={emoji.emoji}
      text={emoji.name}
      description={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Emojipedia</h1>
      <div className="card-container">{emojipedia.map(createCard)}</div>
    </div>
  );
}

export default App;
