import TypewriterEffect from "../components/TypewriterEffect";
import { Link } from "react-router-dom";

const asciiArt = `\
░▒█░░▒█░▒█▀▀▀░▒█░░░░▒█▀▀▄░▒█▀▀▀█░▒█▀▄▀█░▒█▀▀▀░░░░▒█▀▀▀█░▒█░▒█
░▒█▒█▒█░▒█▀▀▀░▒█░░░░▒█░░░░▒█░░▒█░▒█▒█▒█░▒█▀▀▀░▄▄░░▀▀▀▄▄░▒█▀▀█
░▒▀▄▀▄▀░▒█▄▄▄░▒█▄▄█░▒█▄▄▀░▒█▄▄▄█░▒█░░▒█░▒█▄▄▄░▀▀░▒█▄▄▄█░▒█░▒█
`;

export default function Hero() {
  return (
    <>
      <TypewriterEffect uniqueKey="home" words={["./welcome.sh"]}/>
      <div className="content-container">
        <pre className="ascii-art">{asciiArt}</pre>
        <h4>
          Read more about me, my skills and achievements{" "}
          <Link to="/about" style={{textDecoration: "underline"}}>here {"->"}</Link>
        </h4>
        <h4>
          Take a look at projects I made{" "}
          <Link to="/projects" style={{textDecoration: "underline"}}>here {"->"}</Link>
        </h4>
        <div className="hero-contact">
          <a href="https://github.com/mihaelsegulja" target="_blank" rel="noreferrer">[github]</a>
          <a href="https://linkedin.com/in/mihael-segulja" target="_blank" rel="noreferrer">[linkedin]</a>
          <a href="mailto:mihael.segulja@gmail.com">[email]</a>
        </div>
      </div>
    </>
  )
}
