import { Typewriter } from 'react-simple-typewriter'

export default function About
() {
  return (
    <div>About
      <Typewriter key="about" words={["> About me..."]} typeSpeed={50} />
    </div>
  )
}
