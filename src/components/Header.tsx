import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

export interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {  
  const [open, setOpen] = useState(false);
  return (
    <header>
        <button
          className="hamburger"
          onClick={() => setOpen((prev) => !prev)}
        >
          {">>"}
        </button>
      <nav className={open ? "open" : ""}>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/projects" onClick={() => setOpen(false)}>
          Projects
        </Link>
        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link to="#" onClick={() => { onContactClick(); setOpen(false); }}>
          Contact
        </Link>
        <span>
          Theme: <ThemeSwitcher/>
        </span>
      </nav>
    </header>
  );
}
