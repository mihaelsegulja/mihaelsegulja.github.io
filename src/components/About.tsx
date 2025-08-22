import { Typewriter } from 'react-simple-typewriter'

export default function About
() {
  return (
    <>
      <div>
        <b><span style={{ color: "var(--accent)"}}>{"> "}</span></b>
        <Typewriter
          key="about"
          cursor
          cursorStyle="█"
          words={["whoami"]}
          typeSpeed={50}
          />
      </div>
      <div className="about-container">
        ...coming soon...
      </div>
    </>
  )
}
