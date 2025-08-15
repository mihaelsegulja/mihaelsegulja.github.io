import React, { useEffect, useRef, useState } from 'react'

export default function ContactPopup({ onClose }: { onClose: () => void }) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState<{ x: number; y: number }>({ x: 100, y: 100 });
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const startDrag = (e: React.MouseEvent) => {
    setDragging(true);
    setOffset({ x: e.clientX - drag.x, y: e.clientY - drag.y });
  };

  useEffect(() => {
    const onDrag = (e: MouseEvent) => {
      if (!dragging) return;
      setDrag({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    };

    const stopDrag = () => setDragging(false);

    if (dragging) {
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", stopDrag);
    }

    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, [dragging, offset]);

  return (
    <div
      ref={windowRef}
      style={{
        position: "absolute",
        top: drag.y,
        left: drag.x,
        width: "350px",
        border: "1px solid var(--accent)",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        boxShadow: "8px 8px var(--accent-dark)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.5rem",
          backgroundColor: "black",
          cursor: "move",
          borderBottom: "1px solid var(--accent)",
        }}
        onMouseDown={startDrag}
      >
        Contact <button onClick={onClose} style={{
          cursor: "pointer",
          border: "1px solid var(--accent)",
          color: "var(--accent)",
          backgroundColor: "var(--bg)",
          padding: "1px 8px",
          fontSize: "1.1rem"
          }}>X</button>
      </div>
      <div style={{ padding: "1rem", textAlign: "start" }}>
        <p>Email: <a href="mailto:mihael.segulja@gmail.com">mihael.segulja@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/mihaelsegulja" target="_blank" rel="noreferrer">mihaelsegulja</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/mihael-šegulja-692745377" target="_blank" rel="noreferrer">mihael-šegulja</a></p>
      </div>
    </div>
  );
}
