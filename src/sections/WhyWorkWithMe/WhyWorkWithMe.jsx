import { motion } from "framer-motion";
import {
  FiTarget,
  FiMessageCircle,
  FiCode,
  FiCheckCircle,
} from "react-icons/fi";

import styles from "./WhyWorkWithMe.module.css";

const reasons = [
  {
    number: "01",
    icon: FiTarget,
    title: "Problem First",
    description:
      "I focus on understanding the actual problem before writing unnecessary code or adding unnecessary complexity.",
  },
  {
    number: "02",
    icon: FiMessageCircle,
    title: "Direct Developer Communication",
    description:
      "You work directly with the developer building your project, keeping communication clear, simple and efficient.",
  },
  {
    number: "03",
    icon: FiCode,
    title: "Modern Development",
    description:
      "Projects are built with modern technologies, responsive interfaces and maintainable development practices.",
  },
  {
    number: "04",
    icon: FiCheckCircle,
    title: "Built for Real Use",
    description:
      "The goal is not just to make something look good, but to build something useful, reliable and practical.",
  },
];

function WhyWorkWithMe() {
  return (
    <section id="why-me" className={styles.section}>
      <div className={`container ${styles.container}`}>

        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.eyebrow}>
            // why.suurix
          </span>

          <h2 className={styles.title}>
            Why Work
            <span> With Me.</span>
          </h2>

          <p className={styles.intro}>
            I don't just build websites. I build digital
            solutions around real problems and real goals.
          </p>
        </motion.div>

        {/* REASONS */}
        <div className={styles.grid}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.title}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.icon}>
                    <Icon />
                  </div>

                  <span className={styles.number}>
                    {reason.number}
                  </span>
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyWorkWithMe;