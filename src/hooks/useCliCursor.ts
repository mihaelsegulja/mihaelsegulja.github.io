import { useState, useEffect, useRef, useCallback } from "react";

interface UseCliCursorOptions {
  lines: string[];
  speed?: number;
}

interface UseCliCursorReturn {
  displayLines: string[];
  done: boolean;
  skip: () => void;
}

function jitter(base: number): number {
  const min = Math.max(8, base - 12);
  const max = base + 20;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function useCliCursor({
  lines,
  speed = 40,
}: UseCliCursorOptions): UseCliCursorReturn {
  const [displayLines, setDisplayLines] = useState<string[]>([""]);
  const [done, setDone] = useState(false);
  const skipRef = useRef(false);
  const linesRef = useRef(lines);
  const speedRef = useRef(speed);

  linesRef.current = lines;
  speedRef.current = speed;

  const skip = useCallback(() => {
    skipRef.current = true;
  }, []);

  useEffect(() => {
    let cancelled = false;
    let lineIdx = 0;
    let charIdx = 0;

    const result: string[] = [];

    const tick = () => {
      if (cancelled || skipRef.current) {
        if (!cancelled) {
          setDisplayLines([...linesRef.current]);
          setDone(true);
        }
        return;
      }

      const line = linesRef.current[lineIdx];

      if (charIdx < line.length) {
        charIdx++;
        result[result.length - 1] = line.slice(0, charIdx);
        setDisplayLines([...result]);
      }

      if (charIdx >= line.length) {
        lineIdx++;
        charIdx = 0;
        if (lineIdx < linesRef.current.length) {
          result.push("");
        }
      }

      if (lineIdx >= linesRef.current.length) {
        setDone(true);
        return;
      }

      setTimeout(tick, jitter(speedRef.current));
    };

    result.push("");
    const timeout = setTimeout(tick, 200);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, []);

  return { displayLines, done, skip };
}
