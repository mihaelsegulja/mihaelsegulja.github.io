import { Typewriter } from "react-simple-typewriter";
import { TextScrambler } from "./TextScrambler";
import type { Tab } from "../types";
import { useRef } from "react";

type HeroProps = {
  onNavClick: (tab: Tab) => void;
};

const phrases = [
  "~ Hello, I'm Mihael - software developer & hobbyist tinkerer. ~",
  "~ I build, break, and learn by doing - coding my way through ideas. ~",
  "~ Explorer of code. Learning by doing. ~",
];

export default function Hero({ onNavClick }: HeroProps) {
  const scramblerRef = useRef(<TextScrambler phrases={phrases} />);
  return (
    <>
      <div>
        <b><span style={{ color: "var(--accent)"}}>{"> "}</span></b>
        <Typewriter
          key="home"
          cursor
          cursorStyle="█"
          words={["./welcome.sh"]}
          typeSpeed={50}
        />
      </div>

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
          Read more about me, my skills and achievements <a href="#about" onClick={() => onNavClick("about")}>here {"->"}</a>
        </h4>
        <h4>
          Take a look at projects I made <a href="#projects" onClick={() => onNavClick("projects")}> here {"->"}</a>
        </h4>
        <div className="hero-contact">
          <a href="https://github.com/mihaelsegulja" target="_blank" rel="noreferrer"><i className="nf nf-dev-github"></i></a>
          <a href="mailto:mihael.segulja@gmail.com"><i className="nf nf-oct-mail"></i></a>
          <a href="https://linkedin.com/in/mihael-segulja" target="_blank" rel="noreferrer"><i className="nf nf-dev-linkedin"></i></a>
        </div>
      </div>
    </>
  )
}
