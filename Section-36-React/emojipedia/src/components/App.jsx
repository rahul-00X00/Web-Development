import Card from "./Card.jsx";
import emojipedia from "../emoji_data.js";

function createCard(emoji) {
    return <Card 
        key={emoji.id}
        img={emoji.emoji}
        text={emoji.name}
        description={emoji.meaning}
    />
}

function App() {
    return (
        <div>
            <h1>Emoji List Rendered using React</h1>
            {emojipedia.map(createCard)}
        </div>
    )
}

export default App;
