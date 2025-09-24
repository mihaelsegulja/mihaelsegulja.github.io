import { Typewriter } from "react-simple-typewriter";

interface TypewriterEffectProps {
  words: string[];
  uniqueKey: string;
}

export default function TypewriterEffect({ words, uniqueKey }: TypewriterEffectProps) {
  return (
    <div>
      <b><span style={{ color: "var(--accent)"}}>{"> "}</span></b>
      <Typewriter
        key={uniqueKey}
        cursor
        cursorStyle="█"
        words={words}
        typeSpeed={50}
        />
    </div>
  );
}