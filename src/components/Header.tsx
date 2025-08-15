
export type Tab = 'projects' | 'about' | 'home';

export interface HeaderProps {
  onNavClick: (tab: Tab) => void;
  onContactClick: () => void;
}

export default function Header({ onNavClick, onContactClick }: HeaderProps) {
  return (
    <header>
      <a href="#" onClick={() => onNavClick("home")}>{"[ "}Mihael Šegulja{" ]"}</a>
      <nav>
        {"[ "}
        <a href="#projects" onClick={() => onNavClick("projects")}>Projects</a>{" | "}
        <a href="#about" onClick={() => onNavClick("about")}>About</a>{" | "}
        <a href="#" onClick={onContactClick}>Contact</a>
        {" ]"}
      </nav>
    </header>
  )
}
