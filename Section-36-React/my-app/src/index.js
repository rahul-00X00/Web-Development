import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from "./App.jsx";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import "./styles.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <App /> */}
    <Header />
    <Note />
    <Footer />
  </StrictMode>
)
