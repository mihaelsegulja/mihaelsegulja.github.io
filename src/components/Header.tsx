import type { Tab } from "../types";

export interface HeaderProps {
  onNavClick: (tab: Tab) => void;
  onContactClick: () => void;
}

export default function Header({ onNavClick, onContactClick }: HeaderProps) {
  return (
    <header>
      <nav>
        {"[ "}
        <a
          href="#"
          onClick={() => onNavClick("home")}
        >
          Home
        </a>
        {" | "}
        <a
          href="#projects"
          onClick={() => onNavClick("projects")}
        >
          Projects
        </a>
        {" | "}
        <a
          href="#about"
          onClick={() => onNavClick("about")}
        >
          About
        </a>
        {" | "}
        <a
          href="#"
          onClick={onContactClick}
        >
          Contact
        </a>
        {" ]"}
      </nav>
    </header>
  );
}
