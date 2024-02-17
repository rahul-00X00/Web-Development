import Header from "./Header.jsx";
import Note from "./Note.jsx";
import Footer from "./Footer.jsx";
import keeper_data from "../data.js";
import "./styles.css";

const data = keeper_data;

function App() {
  return (
    <div>
      <Header />
      <div className="card">
        {data.map((item) => {
          return (
            <Note
              key={item.id}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
