import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiZap,
  FiArrowUpRight,
} from "react-icons/fi";

import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.container}`}>

        {/* SECTION HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>
            // about.suurix
          </span>

          <h2 className={styles.title}>
            More Than Just
            <span> Code.</span>
          </h2>

          <p className={styles.intro}>
            I build digital experiences that combine clean
            development, thoughtful design and real business value.
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className={styles.content}>

          {/* CODE CARD */}
          <motion.div
            className={styles.codeCard}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.codeHeader}>
              <div className={styles.windowDots}>
                <span />
                <span />
                <span />
              </div>

              <span>about.js</span>
            </div>

            <div className={styles.codeBody}>
              <p>
                <span className={styles.keyword}>const</span>{" "}
                <span className={styles.variable}>developer</span>{" "}
                = {"{"}
              </p>

              <p>
                &nbsp;&nbsp;name:{" "}
                <span className={styles.string}>"Umar"</span>,
              </p>

              <p>
                &nbsp;&nbsp;role:{" "}
                <span className={styles.string}>
                  "Full Stack Developer"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;focus:{" "}
                <span className={styles.string}>
                  "Business Growth"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;mindset:{" "}
                <span className={styles.string}>
                  "Build. Learn. Improve."
                </span>
              </p>

              <p>{"};"}</p>
            </div>

            <div className={styles.codeFooter}>
              <FiCode />
              <span>Always building something.</span>
            </div>
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className={styles.smallLabel}>
              WHO I AM
            </span>

            <h3>
              A developer who cares about the
              <span> result.</span>
            </h3>

            <p>
              I'm Umar, a full stack web developer and the
              founder of SUURIX. I enjoy turning ideas and
              business problems into useful digital products.
            </p>

            <p>
              My approach is simple: understand the problem,
              build the right solution and keep improving it.
              Every project should be fast, responsive,
              maintainable and built with the people using it
              in mind.
            </p>

            <div className={styles.values}>

              <div className={styles.value}>
                <div className={styles.icon}>
                  <FiLayers />
                </div>

                <div>
                  <h4>Built Properly</h4>
                  <p>
                    Clean architecture and scalable foundations.
                  </p>
                </div>
              </div>

              <div className={styles.value}>
                <div className={styles.icon}>
                  <FiZap />
                </div>

                <div>
                  <h4>Built for Growth</h4>
                  <p>
                    Solutions designed around real business goals.
                  </p>
                </div>
              </div>

              <div className={styles.value}>
                <div className={styles.icon}>
                  <FiCode />
                </div>

                <div>
                  <h4>Developer Mindset</h4>
                  <p>
                    Learn, build, test and continuously improve.
                  </p>
                </div>
              </div>

            </div>

            <a href="#contact" className={styles.aboutLink}>
              Let's work together
              <FiArrowUpRight />
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;