import { TextScrambler } from "../components/TextScrambler";
import { useRef } from "react";
import TypewriterEffect from "../components/TypewriterEffect";
import { Link } from "react-router-dom";

const phrases = [
  "~ Hello, I'm Mihael - software developer & hobbyist tinkerer. ~",
  "~ I build, break, and learn by doing - coding my way through ideas. ~",
  "~ Explorer of code. Learning by doing. ~",
];

export default function Hero() {
  const scramblerRef = useRef(<TextScrambler phrases={phrases} />);
  return (
    <>
      <TypewriterEffect uniqueKey="home" words={["./welcome.sh"]}/>
      <div className="hero-container">
        <pre className="hero-ascii-art" style={{fontSize: "0.6rem"}}>
{`
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗   ███████╗██╗  ██╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝   ██╔════╝██║  ██║
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗     ███████╗███████║
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝     ╚════██║██╔══██║
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗██╗███████║██║  ██║
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝╚══════╝╚═╝  ╚═╝
---------------------------------------------------------------------------------
---------------------------------------------------------------------------------
`}
        </pre>
        <h3 style={{ padding: "2rem 0" }}>
          {scramblerRef.current}
        </h3>
        <h4>
          Read more about me, my skills and achievements{" "}
          <Link to="/about" style={{textDecoration: "underline"}}>here {"->"}</Link>
        </h4>
        <h4>
          Take a look at projects I made{" "}
          <Link to="/projects" style={{textDecoration: "underline"}}>here {"->"}</Link>
        </h4>
        <div className="hero-contact">
          <a href="https://github.com/mihaelsegulja" target="_blank" rel="noreferrer"><i className="nf nf-dev-github"></i></a>
          <a href="https://linkedin.com/in/mihael-segulja" target="_blank" rel="noreferrer"><i className="nf nf-dev-linkedin"></i></a>
          <a href="mailto:mihael.segulja@gmail.com"><i className="nf nf-oct-mail"></i></a>
        </div>
      </div>
    </>
  )
}
