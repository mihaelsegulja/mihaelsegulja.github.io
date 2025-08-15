import { Typewriter } from 'react-simple-typewriter'

export default function About
() {
  return (
    <div>
      {"> "}
      <Typewriter
        key="about"
        cursor
        cursorStyle="█"
        words={["whoami"]}
        typeSpeed={50}
      />
    </div>
  )
}
