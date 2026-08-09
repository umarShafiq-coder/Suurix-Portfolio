import { motion } from "framer-motion";
import {
  FiSearch,
  FiMap,
  FiCode,
  FiCheckCircle,
  FiSend,
} from "react-icons/fi";

import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    icon: FiSearch,
    title: "Discover",
    subtitle: "Understand the problem",
    description:
      "We discuss your goals, requirements, target users and what the project actually needs.",
  },
  {
    number: "02",
    icon: FiMap,
    title: "Plan",
    subtitle: "Turn the idea into a roadmap",
    description:
      "We define the features, structure, technology and overall direction before development begins.",
  },
  {
    number: "03",
    icon: FiCode,
    title: "Build",
    subtitle: "Turn the plan into reality",
    description:
      "The project is developed with a focus on functionality, responsive design and clean architecture.",
  },
  {
    number: "04",
    icon: FiCheckCircle,
    title: "Test",
    subtitle: "Make sure everything works",
    description:
      "The project is tested across different screen sizes and workflows to identify and fix issues.",
  },
  {
    number: "05",
    icon: FiSend,
    title: "Deliver",
    subtitle: "Launch and move forward",
    description:
      "The finished project is delivered, deployed when required and prepared for continued support.",
  },
];

function Process() {
  return (
    <section id="process" className={styles.section}>
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
            // process.suurix
          </span>

          <h2 className={styles.title}>
            How I
            <span> Build.</span>
          </h2>

          <p className={styles.intro}>
            From the first conversation to the final product,
            every project follows a clear and practical process.
          </p>
        </motion.div>

        {/* PROCESS */}
        <div className={styles.process}>
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                className={styles.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className={styles.stepTop}>
                  <div className={styles.icon}>
                    <Icon />
                  </div>

                  <span className={styles.number}>
                    {step.number}
                  </span>
                </div>

                <h3>{step.title}</h3>

                <h4>{step.subtitle}</h4>

                <p>{step.description}</p>

                {index < steps.length - 1 && (
                  <span className={styles.connector} />
                )}
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Process;