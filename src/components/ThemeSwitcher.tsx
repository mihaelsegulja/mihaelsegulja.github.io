import { useEffect, useState } from "react";

const themes = [
  { id: "default", name: "Hacker" },
  { id: "gruvbox-dark", name: "Gruvbox Dark" },
  { id: "gruvbox-light", name: "Gruvbox Light" },
  { id: "tokyo-night", name: "Tokyo Night" },
  { id: "nord-dark", name: "Nord Dark" },
  { id: "dracula", name: "Dracula" },
];

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "gruvbox-dark";
  });

  useEffect(() => {
    document.documentElement.classList.remove(
      ...themes.map((t) => `theme-${t.id}`)
    );
    document.documentElement.classList.add(`theme-${theme}`);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
        border: "1px solid var(--accent)",
        padding: "0.3rem",
      }}
    >
      {themes.map((t) => (
        <option key={t.id} value={t.id}>
          {t.name}
        </option>
      ))}
    </select>
  );
}