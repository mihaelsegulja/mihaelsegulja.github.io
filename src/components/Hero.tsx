import { Typewriter } from "react-simple-typewriter";
import { TextScrambler } from "./TextScrambler";

export default function Hero() {
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
        <h3>
        <TextScrambler
          phrases={[
            "~ Hello, I'm Mihael - a software developer & hobbyist tinkerer. ~",
            "~ I build, break, and learn by doing - coding my way through ideas. ~",
            "~ Explorer of code. Learning by doing. ~",
          ]}
        />
        </h3>
      </div>
    </>
  )
}
