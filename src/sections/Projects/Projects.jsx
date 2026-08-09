import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiExternalLink,
  FiCheck,
} from "react-icons/fi";

import styles from "./Projects.module.css";

import edenNatureImg from "../../assets/Edennature-Screenshot.jpg";
import wanderlustImg from "../../assets/Wanderlust-Screenshot.jpg";
import climatixImg from "../../assets/Climatix-Screenshot.jpg";
import taskoraImg from "../../assets/Taskora-Screenshot.jpg";
import zenlyImg from "../../assets/Zenly-Screenshot.jpg";
import suurixPortfolioImg from "../../assets/Suurix-Portfolio-Screenshot.jpg";

const projects = [
  {
    number: "01",
    title: "EdenNature",
    category: "Full-Stack E-commerce",
    description:
      "A full-stack ecommerce platform built for an organic products brand, combining a modern shopping experience with a powerful backend and admin system.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    features: [
      "Product management",
      "Shopping cart & orders",
      "Authentication",
      "Admin dashboard",
      "Search & filtering",
      "Responsive design",
    ],
    featured: true,
    liveUrl: "https://edennature.onrender.com",
    githubUrl: "https://github.com/umarShafiq-coder/EdenNature",
    imgUrl: edenNatureImg,
  },

  {
    number: "02",
    title: "WanderLust",
    category: "Full-Stack Web Application",
    description:
      "A full-stack travel listing platform where users can explore, create and manage property listings through a responsive web experience.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    features: [
      "User authentication",
      "Property listings",
      "Listing management",
      "Database integration",
      "Responsive interface",
    ],
    featured: true,
    liveUrl: "https://wanderlust-8483.onrender.com/listings",
    githubUrl: "https://github.com/umarShafiq-coder/Wanderlust",
    imgUrl: wanderlustImg,
  },

  {
    number: "03",
    title: "Climatix",
    category: "Weather Application",
    description:
      "A weather application designed to provide users with real-time weather information through a clean and responsive interface.",
    technologies: [
      "React",
      "JavaScript",
      "Weather API",
      "CSS",
    ],
    features: [
      "Real-time weather data",
      "API integration",
      "Responsive interface",
      "Location-based weather",
    ],
    featured: false,
    liveUrl: "https://umarshafiq-coder.github.io/Climatix/",
    githubUrl: "https://github.com/umarShafiq-coder/Climatix",
    imgUrl: climatixImg,
  },

  {
    number: "04",
    title: "Taskora",
    category: "Task Management Application",
    description:
      "A focused task management application designed to help users organize, track and manage their daily tasks efficiently.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    features: [
      "Task creation",
      "Task completion",
      "Task management",
      "Responsive interface",
    ],
    featured: false,
    liveUrl: "https://umarshafiq-coder.github.io/Taskora/",
    githubUrl: "https://github.com/umarShafiq-coder/Taskora",
    imgUrl: taskoraImg,
  },

  {
    number: "05",
    title: "Zenly",
    category: "Habit Tracker",
    description:
      "A habit tracking application inspired by the principles of the 7 Habits, designed to encourage consistency and personal growth.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
    ],
    features: [
      "Habit tracking",
      "Progress monitoring",
      "Daily habits",
      "Responsive interface",
    ],
    featured: false,
    liveUrl: "https://umarshafiq-coder.github.io/Zenly/",
    githubUrl: "https://github.com/umarShafiq-coder/Zenly",
    imgUrl: zenlyImg,
  },

  {
    number: "06",
    title: "SUURIX Portfolio",
    category: "React Portfolio",
    description:
      "The portfolio website you're currently exploring, designed and developed to present SUURIX, its services, projects and development approach.",
    technologies: [
      "React",
      "Vite",
      "Framer Motion",
      "CSS",
    ],
    features: [
      "Responsive design",
      "Dark & light mode",
      "Reusable components",
      "Modern UI",
      "Project showcase",
      "Interactive sections",
    ],
    featured: false,
    liveUrl: "https://umarShafiq-coder.github.io/Suurix-Portfolio/",
    githubUrl: "https://github.com/umarShafiq-coder/Suurix-Portfolio",
    current: true,
    imgUrl: suurixPortfolioImg,
  },
];

import { useState, useEffect, useRef } from "react";
import { img } from "framer-motion/client";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const modalContentRef = useRef(null);
const [scrollProgress, setScrollProgress] = useState(0);
const [showScrollbar, setShowScrollbar] = useState(false);
const [isDragging, setIsDragging] = useState(false);

useEffect(() => {
  if (!selectedProject) return;

  const element = modalContentRef.current;

  if (!element) return;

  const updateScrollbar = () => {
    const maxScroll =
      element.scrollHeight - element.clientHeight;

    setShowScrollbar(maxScroll > 0);

    if (maxScroll > 0) {
      setScrollProgress(element.scrollTop / maxScroll);
    } else {
      setScrollProgress(0);
    }
  };

  updateScrollbar();

  element.addEventListener("scroll", updateScrollbar);

  window.addEventListener("resize", updateScrollbar);

  return () => {
    element.removeEventListener("scroll", updateScrollbar);
    window.removeEventListener("resize", updateScrollbar);
  };
}, [selectedProject]);

const handleScrollbarMouseDown = (event) => {
  event.preventDefault();
  setIsDragging(true);

  const scrollbar = event.currentTarget;
  const element = modalContentRef.current;

  if (!element) return;

  const rect = scrollbar.getBoundingClientRect();

  const updateScroll = (clientY) => {
    const position = clientY - rect.top;
    const percentage = Math.max(
      0,
      Math.min(1, position / rect.height)
    );

    element.scrollTop =
      percentage *
      (element.scrollHeight - element.clientHeight);
  };

  updateScroll(event.clientY);

  const handleMouseMove = (moveEvent) => {
    updateScroll(moveEvent.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
};

  return (
    <section id="projects" className={styles.projects}>
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
            // projects.suurix
          </span>

          <h2 className={styles.title}>
            Things I've
            <span> Built.</span>
          </h2>

          <p className={styles.intro}>
            A selection of projects built to solve real problems,
            explore modern technologies and turn ideas into working
            digital experiences.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className={`${styles.card} ${
                project.featured ? styles.featured : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              {/* PROJECT PREVIEW */}
              <div className={styles.preview}>
                <div className={styles.previewTop}>
                  <span className={styles.projectNumber}>
                    {project.number}
                  </span>

                  <span className={styles.category}>
                    {project.category}
                  </span>
                </div>

                <div className={styles.previewContent}>
                  <img
                    src={project.imgUrl}
                    alt={project.title}
                  />
                </div>
              </div>

              {/* PROJECT INFORMATION */}
              <div className={styles.content}>
                <div className={styles.contentHeader}>
                  <div>
                    <span className={styles.number}>
                      {project.number}
                    </span>

                    <h3>{project.title}</h3>
                  </div>

                  <FiArrowUpRight className={styles.arrow} />
                </div>

                <p className={styles.description}>
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className={styles.technologies}>
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* ACTIONS */}
                <div className={styles.actions}>
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noreferrer"
    className={styles.primaryLink}
  >
    Live Project
    <FiExternalLink />
  </a>

  <a
    href={project.githubUrl}
    target="_blank"
    rel="noreferrer"
    className={styles.secondaryLink}
  >
    GitHub
    <FiGithub />
  </a>

  <button
    type="button"
    className={styles.detailsButton}
    onClick={() => setSelectedProject(project)}
  >
    View Details
    <FiArrowUpRight />
  </button>
</div>
              </div>
            </motion.article>
          ))}
        </div>

        {selectedProject && (
  <div
    className={styles.modalOverlay}
    onClick={() => setSelectedProject(null)}
  >
    <motion.div
      className={styles.modal}
      ref={modalContentRef}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.25 }}
      onClick={(event) => event.stopPropagation()}
    >

        {showScrollbar && (
  <div
    className={styles.customScrollbar}
    onMouseDown={handleScrollbarMouseDown}
  >
    <div
      className={`${styles.customScrollbarThumb} ${
        isDragging ? styles.dragging : ""
      }`}
      style={{
        top: `${scrollProgress * 70}%`,
      }}
    />
  </div>
)}

      <button
        type="button"
        className={styles.closeButton}
        onClick={() => setSelectedProject(null)}
        aria-label="Close project details"
      >
        ×
      </button>

      <div className={styles.modalHeader}>
        <span className={styles.modalNumber}>
          {selectedProject.number}
        </span>

        <span className={styles.modalCategory}>
          {selectedProject.category}
        </span>
      </div>

      <h3>{selectedProject.title}</h3>

      {selectedProject.current && (
        <span className={styles.currentBadge}>
          CURRENTLY VIEWING
        </span>
      )}

      <p className={styles.modalDescription}>
        {selectedProject.description}
      </p>

      <div className={styles.modalSection}>
        <span className={styles.modalLabel}>
          TECHNOLOGIES
        </span>

        <div className={styles.modalTags}>
          {selectedProject.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.modalSection}>
        <span className={styles.modalLabel}>
          KEY FEATURES
        </span>

        <ul className={styles.modalFeatures}>
          {selectedProject.features.map((feature) => (
            <li key={feature}>
              <FiCheck />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.modalActions}>
        <a
          href={selectedProject.liveUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.primaryLink}
        >
          Live Project
          <FiExternalLink />
        </a>

        <a
          href={selectedProject.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.secondaryLink}
        >
          GitHub
          <FiGithub />
        </a>
      </div>
    </motion.div>
  </div>
)}

        {/* FOOTER NOTE */}
        <motion.div
          className={styles.bottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>
            More projects are continuously being built.
          </span>

          <a href="#contact">
            Start a project
            <FiArrowUpRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;