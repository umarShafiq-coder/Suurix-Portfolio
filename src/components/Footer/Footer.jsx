import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

import styles from "./Footer.module.css";

function Footer() {
  const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Business Websites",
    "Web Applications",
    "Ecommerce",
    "Portfolio Websites",
    "Website Maintenance",
    "SaaS Applications",
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>

        {/* MAIN FOOTER */}
        <div className={styles.main}>

          {/* BRAND */}
          <motion.div
            className={styles.brand}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className={styles.logo}>
              SUURIX
            </a>

            <span className={styles.tagline}>
              <ul className={styles.motto}>
  <li>Build</li>
  <li>Scale</li>
  <li>Succeed</li>
</ul>
            </span>

            <p>
              We build digital solutions that solve real
              problems and create real value.
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className={styles.columnTitle}>
              NAVIGATION
            </span>

            <nav className={styles.links}>
              {navigationLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                  <FiArrowUpRight />
                </a>
              ))}
            </nav>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={styles.columnTitle}>
              SERVICES
            </span>

            <div className={styles.serviceLinks}>
              {services.map((service) => (
                <span key={service}>
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CONNECT */}
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className={styles.columnTitle}>
              CONNECT
            </span>

            <div className={styles.socialLinks}>

              <a href="https://wa.me/923327012007" aria-label="WhatsApp" target="_blank" rel="noreferrer">
                <FiMessageCircle />
                <span>WhatsApp</span>
              </a>

              <a href="https://gmail.com" aria-label="Email" target="_blank" rel="noreferrer">
                <FiMail />
                <span>Email</span>
              </a>

              <a href="https://www.linkedin.com/in/muhammad-umar-86a42a42b/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>

              <a href="https://github.com/umarShafiq-coder" aria-label="GitHub" target="_blank" rel="noreferrer">
                <FiGithub />
                <span>GitHub</span>
              </a>

            </div>
          </motion.div>

        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>

          <span>
            © {new Date().getFullYear()} SUURIX. All rights reserved.
          </span>

          <span className={styles.builtWith}>
            Built with React + Vite
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;