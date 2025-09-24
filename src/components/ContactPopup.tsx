import React, { useEffect, useRef, useState } from 'react'

const defaultWidth = 350;
const defaultHeight = 200;

const getInitialCenter = () => {
  const x = (window.innerWidth - defaultWidth) / 2;
  const y = (window.innerHeight - defaultHeight) / 2;
  return { x, y };
};

export default function ContactPopup({ onClose }: { onClose: () => void }) {
  const windowRef = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState<{ x: number; y: number }>(getInitialCenter());
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const centerPopup = () => {
      const width = windowRef.current?.offsetWidth || defaultWidth;
      const height = windowRef.current?.offsetHeight || defaultHeight;
      const x = (window.innerWidth - width) / 2;
      const y = (window.innerHeight - height) / 2;
      setDrag({ x, y });
    };

    centerPopup();
    window.addEventListener("resize", centerPopup);
    return () => window.removeEventListener("resize", centerPopup);
  }, []);

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
        width: "400px",
        maxWidth: "95vw",
        border: "1px solid var(--accent)",
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        boxShadow: "8px 8px var(--accent-dark)"
      }}
    >
      <div className="contact-titlebar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0.4rem",
          cursor: "move",
          borderBottom: "1px solid var(--accent)",
        }}
        onMouseDown={startDrag}
      >
        Contact <button className="contact-btn-close" onClick={onClose} style={{
          cursor: "pointer",
          border: "1px solid var(--accent)",
          color: "var(--accent)",
          backgroundColor: "var(--bg)",
          padding: "1px 8px",
          fontSize: "1.1rem"
          }}>X</button>
      </div>
      <div className="contact-content" style={{ padding: "0.8rem", textAlign: "start", wordBreak: "break-all" }}>
        <div>{`{`}</div>
        <div style={{ paddingLeft: "0.7rem" }}>
         <span style={{color:"var(--accent)"}}>"email":</span> "<a href="mailto:mihael.segulja@gmail.com">mihael.segulja@gmail.com</a>",
        </div>
        <div style={{ paddingLeft: "0.7rem" }}>
          <span style={{color:"var(--accent)"}}>"github":</span> "<a href="https://github.com/mihaelsegulja" target="_blank" rel="noreferrer">mihaelsegulja</a>",
        </div>
        <div style={{ paddingLeft: "0.7rem" }}>
          <span style={{color:"var(--accent)"}}>"linkedin":</span> "<a href="https://linkedin.com/in/mihael-segulja" target="_blank" rel="noreferrer">in/mihael-segulja</a>"
        </div>
        <div>{`}`}</div>
      </div>
    </div>
  );
}
