import Card from "./Card.jsx";
import emoji_data from ".././emoji_data.js";

function createCard(emoji) {
    return <Card 
        key={emoji.index}
        img={emoji.emoji}
        text={emoji.name}
        description={emoji.name}
    />
}

function App() {
    return (
        <div>
            <h1>Emoji List Rendered using React</h1>
            {emoji_data.map(createCard)}
        </div>
    )
}

export default App;
