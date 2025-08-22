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
        <h2 className="about-heading">Hi, I’m Mihael</h2>
        <p className="about-text">
          some lorem ipsum text
        </p>
        <p className="about-text">
          more lorem ipsum
        </p>
      </div>
    </>
  )
}
