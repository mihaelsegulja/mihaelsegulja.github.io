import { Typewriter } from "react-simple-typewriter";
import { TextScrambler } from "./TextScrambler";
import type { Tab } from "../types";

type HeroProps = {
  onNavClick: (tab: Tab) => void;
};

export default function Hero({ onNavClick }: HeroProps) {
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
        <pre style={{fontSize: "0.6rem"}}>
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
        <TextScrambler
          phrases={[
            "~ Hello, I'm Mihael - software developer & hobbyist tinkerer. ~",
            "~ I build, break, and learn by doing - coding my way through ideas. ~",
            "~ Explorer of code. Learning by doing. ~",
          ]}
        />
        </h3>
        <h4>
          Read more about me, my skills and achievements <a href="#about" onClick={() => onNavClick("about")}>here {"->"}</a>
        </h4>
        <h4>
          Take a look at projects I made <a href="#projects" onClick={() => onNavClick("projects")}> here {"->"}</a>
        </h4>
      </div>
    </>
  )
}
