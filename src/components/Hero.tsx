import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <>
      <div>
        {"> "}
        <Typewriter
          key="home"
          cursor
          cursorStyle="█"
          words={["./welcome.sh"]}
          typeSpeed={50}
        />
      </div>
    </>
  )
}
