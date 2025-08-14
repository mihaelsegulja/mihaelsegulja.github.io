import { Typewriter } from "react-simple-typewriter";

export default function Projects() {
  return (
    <div>Projects
      <Typewriter key="projects" cursor cursorStyle="|" cursorBlinking words={["> Listing projects..."]} typeSpeed={50} />
    </div>
  )
}
