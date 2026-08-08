import { motion } from "framer-motion";
import {
  FiMonitor,
  FiServer,
  FiDatabase,
  FiTool,
} from "react-icons/fi";

import styles from "./Skills.module.css";

const skillGroups = [
  {
    icon: FiMonitor,
    number: "01",
    title: "Frontend",
    description:
      "Building responsive and interactive interfaces with modern frontend technologies.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Responsive Web Design",
      "Bootstrap",
      "Tailwind CSS",
      "EJS",
    ],
  },
  {
    icon: FiServer,
    number: "02",
    title: "Backend",
    description:
      "Creating reliable server-side applications, APIs and business logic.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MVC Architecture",
      "Authentication",
    ],
  },
  {
    icon: FiDatabase,
    number: "03",
    title: "Database",
    description:
      "Working with data models and databases to build complete full-stack applications.",
    skills: [
      "MongoDB",
      "Mongoose",
      "MongoDB Atlas",
      "MongoDB Compass",
      "MySQL",
    ],
  },
  {
    icon: FiTool,
    number: "04",
    title: "Tools & Deployment",
    description:
      "Using modern development tools to manage, deploy and maintain projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Cloudinary",
      "Render",
      "Ngrok",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
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
            // tech.suurix
          </span>

          <h2 className={styles.title}>
            The Stack Behind
            <span> The Work.</span>
          </h2>

          <p className={styles.intro}>
            The technologies and tools I use to turn ideas into
            reliable, responsive and scalable digital products.
          </p>
        </motion.div>

        {/* SKILL GRID */}
        <div className={styles.grid}>
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.icon}>
                    <Icon />
                  </div>

                  <span className={styles.number}>
                    {group.number}
                  </span>
                </div>

                <h3>{group.title}</h3>

                <p className={styles.description}>
                  {group.description}
                </p>

                <div className={styles.skillList}>
                  {group.skills.map((skill) => (
                    <span key={skill} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM CODE LINE */}
        <motion.div
          className={styles.codeLine}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span>$</span>
          <span>stack --status</span>
          <strong>ready_to_build</strong>
          <span className={styles.cursor}>_</span>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;