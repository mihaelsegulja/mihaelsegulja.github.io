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
          home
        </Link>
        <Link to="/projects" onClick={() => setOpen(false)}>
          projects
        </Link>
        <Link to="/about" onClick={() => setOpen(false)}>
          about
        </Link>
        <Link to="/blog" onClick={() => setOpen(false)}>
          blog
        </Link>
        <Link to="#" onClick={() => { onContactClick(); setOpen(false); }}>
          contact
        </Link>
        <span>
          theme: <ThemeSwitcher/>
        </span>
      </nav>
    </header>
  );
}
