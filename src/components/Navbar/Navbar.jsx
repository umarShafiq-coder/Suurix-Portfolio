import { useState, useEffect } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import styles from "./Navbar.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Button from "../Button/Button";
import suurixLogo from "../../assets/suurix-logo.png";
import { NAV_LINKS } from "./NavbarData";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled,setScrolled]=useState(false);

useEffect(()=>{

    const handleScroll=()=>{

        setScrolled(window.scrollY>10);

    };

    window.addEventListener("scroll",handleScroll);

    return ()=>window.removeEventListener("scroll",handleScroll);

},[]);

  return (
    <header
className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
>
      <div className={`container ${styles.wrapper}`}>

        {/* Logo */}
        <a href="/" className={styles.logo}>
  <img
    src={suurixLogo}
    alt="SUURIX"
  />
</a>

        {/* Navigation */}
        <nav aria-label="Primary Navigation"
          className={`${styles.navMenu} ${
            menuOpen ? styles.active : ""
          }`}
        >
          <ul className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
  href={`#${link.id}`}
  className={link.id === "home" ? styles.activeLink : ""}
  onClick={() => setMenuOpen(false)}
>
  {link.label}
</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side */}
        <div className={styles.actions}>
          <ThemeToggle />

          <div className={styles.desktopButton}>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
            <Button variant="primary">
              Let's Talk
            </Button>
            </a>
          </div>

          <button
    aria-label="Toggle Navigation Menu"
    aria-expanded={menuOpen}
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <HiOutlineXMark />
            ) : (
              <HiOutlineBars3 />
            )}
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;