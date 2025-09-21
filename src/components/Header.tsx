import { useState } from "react";
import type { Tab } from "../types";
import ThemeSwitcher from "./ThemeSwitcher";

export interface HeaderProps {
  onNavClick: (tab: Tab) => void;
  onContactClick: () => void;
}

export default function Header({ onNavClick, onContactClick }: HeaderProps) {  
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
        <a href="#" onClick={() => onNavClick("home")}>
          Home
        </a>
        <a href="#projects" onClick={() => onNavClick("projects")}>
          Projects
        </a>
        <a href="#about" onClick={() => onNavClick("about")}>
          About
        </a>
        <a href="#" onClick={onContactClick}>
          Contact
        </a>
        <span>
          Theme: <ThemeSwitcher/>
        </span>
      </nav>
    </header>
  );
}
