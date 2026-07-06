import { useState } from "react";
import { useCliCursor } from "../hooks/useCliCursor";

interface TypewriterEffectProps {
  words: string[];
  uniqueKey: string;
}

const PREFIXES = [
  { symbol: ">", label: "arrow" },
  { symbol: "\u03BB", label: "lambda" },
  { symbol: "#", label: "hash" },
  { symbol: "$", label: "dollar" },
  { symbol: "~", label: "tilde" },
  { symbol: "@", label: "at" },
  { symbol: "%", label: "percent" },
];

export default function TypewriterEffect({ words }: TypewriterEffectProps) {
  const [prefixIdx, setPrefixIdx] = useState(0);
  const { displayLines } = useCliCursor({ lines: words, speed: 40 });

  const cyclePrefix = () => {
    setPrefixIdx((i) => (i + 1) % PREFIXES.length);
  };

  return (
    <div>
      {displayLines.map((line, i) => (
        <div key={i}>
          <b>
            <span
              style={{ color: "var(--accent)", cursor: "pointer" }}
              onClick={cyclePrefix}
              title={PREFIXES[prefixIdx].label}
            >
              {PREFIXES[prefixIdx].symbol}{" "}
            </span>
          </b>
          {line}
          {i === displayLines.length - 1 && <span className="cli-cursor">&#9608;</span>}
        </div>
      ))}
    </div>
  );
}