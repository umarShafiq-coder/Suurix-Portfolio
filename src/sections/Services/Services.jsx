import { motion } from "framer-motion";
import {
  FiGlobe,
  FiMonitor,
  FiTool,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

import styles from "./Services.module.css";
import suurixLogo from "../../assets/suurix-logo.png";

const services = [
  {
    number: "01",
    icon: FiGlobe,
    title: "Business Websites",
    description:
      "Professional websites designed to help businesses build credibility, showcase their services and turn visitors into potential customers.",
    features: [
      "Responsive & mobile-first design",
      "Modern, conversion-focused UI",
      "SEO-friendly structure",
      "Contact & inquiry integration",
    ],
  },
  {
    number: "02",
    icon: FiMonitor,
    title: "Web Applications",
    description:
      "Custom web applications built to solve specific business needs, streamline workflows and deliver useful experiences to your users.",
    features: [
      "Custom functionality",
      "Responsive user interface",
      "Interactive features",
      "Scalable architecture",
    ],
  },
  {
    number: "03",
    icon: FiTool,
    title: "Ecommerce Websites",
    description:
      "Modern ecommerce websites built to showcase products, create smooth shopping experiences and help businesses sell online.",
    features: [
      "Product & category management",
      "Shopping cart & checkout",
      "Responsive design",
      "Order management integration",
    ],
  },
  {
    number: "04",
    icon: FiTool,
    title: "Website Maintenance",
    description:
      "Reliable ongoing maintenance that keeps your website secure, updated, functional and ready to support your business.",
    features: [
      "Bug fixes & troubleshooting",
      "Content & UI updates",
      "Performance improvements",
      "Regular website support",
    ],
  },
  {
    number: "05",
    icon: FiTool,
    title: "Portfolio Websites",
    description:
      "Personal portfolio websites designed to showcase your skills, projects and experience while creating a strong professional presence online.",
    features: [
      "Custom personal branding",
      "Project showcase",
      "Responsive design",
      "Contact integration",
    ],
  },
  {
    number: "06",
    icon: FiTool,
    title: "SaaS Applications",
    description:
      "Scalable SaaS products designed to turn ideas into reliable web-based platforms that users can access, use and grow with.",
    features: [
      "User authentication",
      "Subscription-ready architecture",
      "Dashboard & user portals",
      "Scalable backend systems",
    ],
  },
];

function Services() {
  return (
    <section id="services" className={styles.services}>
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
            // services.suurix
          </span>

          <h2 className={styles.title}>
            Let's Build Something
            <span> Useful.</span>
          </h2>

          <p className={styles.intro}>
            From business websites to custom web applications,
            I build digital solutions around real problems and
            real goals.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                className={`${styles.card} ${
  service.title === "SaaS Applications" ? styles.comingSoon : ""
}`}
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
                    {service.number}
                  </span>
                </div>

                {service.title === "SaaS Applications" && (
  <span className={styles.comingSoonBadge}>
    Coming Soon
  </span>
)}

                <h3>{service.title}</h3>

                <p className={styles.description}>
                  {service.description}
                </p>

                <ul className={styles.features}>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <FiCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className={styles.link}>
                  Discuss a project
                  <FiArrowUpRight />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* PERSONAL + AGENCY CONNECTION */}
        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className={styles.bottomLabel}>
              SUURIX // BUILT BY A DEVELOPER
            </span>

            <img
  src={suurixLogo}
  alt="SUURIX"
  className={styles.bottomLogo}
/>
          </div>

          <p>
            SUURIX combines an agency-style experience with
            a direct developer relationship—clear communication,
            thoughtful development and no unnecessary layers.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Services;