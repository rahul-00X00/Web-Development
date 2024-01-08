import "./styles.css";

function Footer() {
    var year = new Date().getFullYear();
    return <footer>Copyright {year}</footer>
};

export default Footer;