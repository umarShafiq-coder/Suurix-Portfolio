import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  FiArrowUpRight,
  FiCalendar,
  FiMessageCircle,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiX,
} from "react-icons/fi";

import styles from "./Contact.module.css";

function Contact() {
    const [showContactDetails, setShowContactDetails] = useState(false);
  const [showMeetingModal, setShowMeetingModal] = useState(false);

  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.container}`}>

        {/* HEADER */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 25 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className={styles.eyebrow}>
            // contact.suurix
          </span>

          <h2 className={styles.title}>
            Let's Build Something
            <span> Useful.</span>
          </h2>

          <p className={styles.intro}>
            Have a project in mind? Start a direct conversation
            and let's discuss what you're looking to build.
          </p>
        </motion.div>

        {/* CONTACT OPTIONS */}
        <div className={styles.options}>

          {/* DIRECT CONVERSATION */}
          <motion.article
            className={styles.conversationCard}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.cardIcon}>
              <FiMessageCircle />
            </div>

            <span className={styles.cardLabel}>
              START A DIRECT CONVERSATION
            </span>

            <h3>
              Let's talk about
              <span> your project.</span>
            </h3>

            <p>
              Tell us what you're looking to build,
              improve or launch. We'll discuss your
              requirements and figure out the best
              way forward.
            </p>

            <div className={styles.cardActions}>
              <a
                href="https://scheduler.zoom.us/umar-shafiq-wmm3qy"
          target="_blank"
          rel="noreferrer"
          className={styles.primaryLink}
              >
                Start Conversation
                <FiArrowUpRight />
              </a>

              <button
  type="button"
  className={styles.secondaryLink}
  onClick={() => setShowContactDetails(true)}
>
  View Contact Details
  <FiArrowUpRight />
</button>
            </div>
          </motion.article>

          {/* SCHEDULE MEETING */}
<motion.article
  className={styles.meetingCard}
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
>
  <div className={styles.cardIcon}>
    <FiCalendar />
  </div>

  <span className={styles.cardLabel}>
    NEED A CALL?
  </span>

  <h3>
    Schedule a
    <span> meeting.</span>
  </h3>

  <p>
    Prefer a direct discussion? Schedule a
    meeting to discuss your project, goals
    and requirements face-to-face.
  </p>

  <button
    type="button"
    className={styles.primaryLink}
    onClick={() => setShowMeetingModal(true)}
  >
    Schedule a Meeting
    <FiCalendar />
  </button>
</motion.article>

        </div>

        {/* PROJECT TYPES */}
        <motion.div
          className={styles.projectTypes}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionLabel}>
            WHAT CAN WE BUILD?
          </span>

          <div className={styles.typeList}>
            <span>Business Website</span>
            <span>Web Application</span>
            <span>Ecommerce</span>
            <span>Portfolio</span>
            <span>Maintenance</span>
            <span>Custom Project</span>
          </div>
        </motion.div>

        <AnimatePresence>
  {showContactDetails && (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowContactDetails(false)}
    >
      <motion.div
        className={styles.contactModal}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setShowContactDetails(false)}
          aria-label="Close contact details"
        >
          <FiX />
        </button>

        <span className={styles.modalLabel}>
          CONTACT DETAILS
        </span>

        <h3>
          Choose how you'd like to
          <span> connect.</span>
        </h3>

        <div className={styles.contactLinks}>
          <a href="https://wa.me/923327012007" className={styles.contactLink}>
            <FiMessageCircle />

            <div>
              <strong>WhatsApp</strong>
              <a href="https://wa.me/923327012007" target="_blank" rel="noreferrer">
                <span>Start a direct conversation on +92 332 701 2007</span>
              </a>
            </div>

            <FiArrowUpRight />
          </a>

          <a href="https://gmail.com" className={styles.contactLink}>
            <FiMail />

            <div>
              <strong>Email</strong>
              <a href="https://gmail.com" target="_blank" rel="noreferrer">
                <span>Send a project message on Suurix@gmail.com</span>
              </a>
            </div>

            <FiArrowUpRight />
          </a>

          <a href="https://www.linkedin.com/in/muhammad-umar-86a42a42b/" className={styles.contactLink}>
            <FiLinkedin />

            <div>
              <strong>LinkedIn</strong>
              <a href="https://www.linkedin.com/in/muhammad-umar-86a42a42b/" target="_blank" rel="noreferrer">
                <span>Connect professionally on LinkedIn</span>
              </a>
            </div>

            <FiArrowUpRight />
          </a>

          <a href="https://github.com/umarShafiq-coder" className={styles.contactLink}>
            <FiGithub />

            <div>
              <strong>GitHub</strong>
              <a href="https://github.com/umarShafiq-coder" target="_blank" rel="noreferrer">
                <span>Explore our work on GitHub</span>
              </a>
            </div>

            <FiArrowUpRight />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

<AnimatePresence>
  {showMeetingModal && (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowMeetingModal(false)}
    >
      <motion.div
        className={styles.contactModal}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setShowMeetingModal(false)}
          aria-label="Close meeting scheduler"
        >
          <FiX />
        </button>

        <span className={styles.modalLabel}>
          SCHEDULE A MEETING
        </span>

        <h3>
          Let's discuss your
          <span> project.</span>
        </h3>

        <p className={styles.modalDescription}>
          Choose a convenient time for a direct project
          discussion. We'll use the meeting to understand
          your goals, requirements and expectations.
        </p>

        <div className={styles.meetingInfo}>
          <div>
            <FiCalendar />

            <div>
              <strong>Project Discussion</strong>
              <span>Online meeting</span>
            </div>
          </div>

          <div>
            <FiMessageCircle />

            <div>
              <strong>Direct Conversation</strong>
              <span>Discuss your requirements</span>
            </div>
          </div>
        </div>

        <a
          href="https://scheduler.zoom.us/umar-shafiq-wmm3qy"
          target="_blank"
          rel="noreferrer"
          className={styles.scheduleLink}
        >
          Continue to Scheduling
          <FiArrowUpRight />
        </a>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

        {/* PROCESS */}
        <motion.div
          className={styles.process}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.processStep}>
            <span>01</span>
            <strong>Conversation</strong>
          </div>

          <div className={styles.processLine} />

          <div className={styles.processStep}>
            <span>02</span>
            <strong>Requirements</strong>
          </div>

          <div className={styles.processLine} />

          <div className={styles.processStep}>
            <span>03</span>
            <strong>Proposal</strong>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;