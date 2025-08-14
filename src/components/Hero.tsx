import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div>Hero
      <Typewriter key="home" words={["> Welcome."]} typeSpeed={50} />
    </div>
  )
}
