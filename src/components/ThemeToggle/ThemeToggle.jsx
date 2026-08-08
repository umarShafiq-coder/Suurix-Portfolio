import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import styles from "./ThemeToggle.module.css";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={
        theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
      title={
        theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
    >
      {theme === "light" ? (
  <Moon size={20} strokeWidth={2} />
) : (
  <Sun size={20} strokeWidth={2} />
)}
    </button>
  );
}

export default ThemeToggle;