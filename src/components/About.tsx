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
        <h2>Hi, I'm Mihael</h2>
        <p className="about-text">
          some lorem ipsum text
        </p>
        <h3>Skills</h3>
        <p className="about-skills">
          skills go here
        </p>
        <h3>Achievements</h3>
        <p className="about-achievements">
          achievements go here
        </p>
      </div>
    </>
  )
}
