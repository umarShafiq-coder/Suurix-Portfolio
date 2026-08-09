import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiLayers,
  FiMonitor,
} from "react-icons/fi";

import styles from "./Hero.module.css";
import Button from "../../components/Button/Button";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundGlow} />

      <div className={`container ${styles.heroContainer}`}>

        {/* LEFT CONTENT */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.greeting}>
            👋 Hello, I'm Umar
          </span>

          <h1 className={styles.title}>
            Growing People
            <br />
            with <span>Digital &nbsp; Solutions.</span>
          </h1>

          <h2 className={styles.subtitle}>
            Full Stack Web Developer
            <br />
            Founder of <span>SUURIX</span>
          </h2>

          <p className={styles.description}>
            I design and develop modern, fast and scalable
            websites that help businesses build trust,
            generate leads and grow online.
          </p>

          <div className={styles.buttons}>
            <a href="#projects" aria-label="View Projects">
            <Button variant="primary">
              View Projects
            </Button>
            </a>

            <a href="#contact" aria-label="Contact Me">
            <Button variant="secondary">
              Let's Talk
              <FiArrowRight />
            </Button>
            </a>
          </div>

          <div className={styles.trust}>
            <FiCheckCircle />
            <span>Client-focused development</span>
          </div>

          <div className={styles.stats}>
            <div>
              <h3>2+</h3>
              <p>Major Projects</p>
            </div>

            <div>
              <h3>5+</h3>
              <p>Minor Projects</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Client Focused</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          className={styles.right}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className={styles.visual}>

  <div className={styles.editorHeader}>
    <div className={styles.windowDots}>
      <span />
      <span />
      <span />
    </div>

    <span className={styles.fileName}>
      suurix.dev
    </span>

    <span className={styles.editorStatus}>
      ● online
    </span>
  </div>

  <div className={styles.codeArea}>

    <div className={styles.codeLine}>
      <span className={styles.lineNumber}>01</span>
      <span className={styles.codeKeyword}>const</span>
      <span className={styles.codeVariable}>developer</span>
      <span className={styles.codeSymbol}> = </span>
      <span className={styles.codeBracket}>{"{"}</span>
    </div>

    <div className={styles.codeLine}>
      <span className={styles.lineNumber}>02</span>
      <span className={styles.codeProperty}>name:</span>
      <span className={styles.codeString}>"Umar"</span>
    </div>

    <div className={styles.codeLine}>
      <span className={styles.lineNumber}>03</span>
      <span className={styles.codeProperty}>role:</span>
      <span className={styles.codeString}>
        "Full Stack Developer"
      </span>
    </div>

    <div className={styles.codeLine}>
      <span className={styles.lineNumber}>04</span>
      <span className={styles.codeProperty}>company:</span>
      <span className={styles.codeString}>"SUURIX"</span>
    </div>

    <div className={styles.codeLine}>
      <span className={styles.lineNumber}>05</span>
      <span className={styles.codeProperty}>stack:</span>
      <span className={styles.codeBracket}>[</span>
      <span className={styles.codeString}>"MERN"</span>
      <span className={styles.codeBracket}>]</span>
    </div>

    <div className={styles.codeLine}>
      <span className={styles.lineNumber}>06</span>
      <span className={styles.codeBracket}>{"}"}</span>
    </div>

  </div>

  <div className={styles.terminalPrompt}>
    <span>$</span>
    <span>npm run build</span>
    <span className={styles.cursor}>_</span>
  </div>

  <div className={styles.visualBadge}>
    <FiCheckCircle />
    <span>Ready to build</span>
  </div>

</div>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <a
        href="#about"
        className={styles.scrollIndicator}
        aria-label="Scroll to About section"
      >
        <span>Scroll</span>
        <span className={styles.scrollLine} />
      </a>
    </section>
  );
}

export default Hero;