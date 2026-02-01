import React, { useEffect, useRef } from "react";

class TextScramble {
  private el: HTMLElement;
  private chars: string;
  private frameRequest: number | null = null;
  private frame: number = 0;
  private queue: {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
  }[] = [];
  private resolve?: () => void;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = "!$%,.<>-_\\/[]{}()~=+*^?#0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    this.update = this.update.bind(this);
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 60);
      this.queue.push({ from, to, start, end });
    }

    if (this.frameRequest) cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();

    return promise;
  }

  private update() {
    let output = "";
    let complete = 0;

    for (let i = 0; i < this.queue.length; i++) {
      const { from, to, start, end } = this.queue[i];
      let char = this.queue[i].char;
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span style='color: var(--accent)'>${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve?.();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  private randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }

  stop() {
    if (this.frameRequest) {
      cancelAnimationFrame(this.frameRequest);
      this.frameRequest = null;
    }
  }
}

export const TextScrambler: React.FC<{ phrases: string[] }> = ({ phrases }) => {
  const ref = useRef<HTMLDivElement>(null);
  const fxRef = useRef<TextScramble | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (!fxRef.current) {
      fxRef.current = new TextScramble(ref.current);
    }
    let counter = 0;

    const next = () => {
      fxRef.current?.setText(phrases[counter]).then(() => {
        timeoutRef.current = window.setTimeout(next, 4000);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();

    return () => {
      fxRef.current?.stop();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [phrases]);

  return <div ref={ref} className="text text-accent" />;
};
