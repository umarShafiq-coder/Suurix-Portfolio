import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

import styles from "./Pricing.module.css";

const pricingData = {
  business: {
    name: "Business Websites",
    plans: [
      {
        name: "Starter",
        price: "Rs. 25,000",
        description:
          "A professional foundation for businesses establishing their online presence.",
        features: [
          "Responsive & mobile-first design",
          "Modern UI",
          "SEO-friendly structure",
          "Contact integration",
        ],
      },
      {
        name: "Business",
        price: "Rs. 45,000",
        description:
          "A complete business website built for growing businesses.",
        features: [
          "Everything in Starter",
          "Custom page structure",
          "Advanced UI sections",
          "Enhanced functionality",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: "Rs. 75,000",
        description:
          "A premium website with advanced customization and functionality.",
        features: [
          "Everything in Business",
          "Advanced interactive features",
          "Custom functionality",
          "Performance optimization",
        ],
      },
    ],
  },

  "web-applications": {
    name: "Web Applications",
    plans: [
      {
        name: "Starter",
        price: "Rs. 55,000",
        description:
          "A focused web application built around a specific business need.",
        features: [
          "Custom functionality",
          "Responsive interface",
          "Database integration",
          "Core application logic",
        ],
      },
      {
        name: "Business",
        price: "Rs. 85,000",
        description:
          "A powerful web application designed for real business workflows.",
        features: [
          "Everything in Starter",
          "Authentication",
          "Advanced functionality",
          "Interactive dashboard",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: "Rs. 130,000",
        description:
          "A comprehensive application with advanced systems and functionality.",
        features: [
          "Everything in Business",
          "Advanced dashboards",
          "Authorization systems",
          "Third-party integrations",
        ],
      },
    ],
  },

  ecommerce: {
    name: "Ecommerce Websites",
    plans: [
      {
        name: "Starter",
        price: "Rs. 70,000",
        description:
          "A complete online store for businesses ready to sell online.",
        features: [
          "Product management",
          "Shopping cart",
          "Checkout system",
          "Responsive design",
        ],
      },
      {
        name: "Business",
        price: "Rs. 100,000",
        description:
          "A powerful ecommerce experience for growing online businesses.",
        features: [
          "Everything in Starter",
          "Authentication",
          "Order management",
          "Search & filtering",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: "Rs. 145,000",
        description:
          "A highly customized ecommerce platform for advanced requirements.",
        features: [
          "Everything in Business",
          "Advanced ecommerce features",
          "Custom dashboards",
          "Third-party integrations",
        ],
      },
    ],
  },

  portfolio: {
    name: "Portfolio Websites",
    plans: [
      {
        name: "Starter",
        price: "Rs. 12,000",
        description:
          "A clean professional portfolio for showcasing your work online.",
        features: [
          "Responsive design",
          "About section",
          "Projects section",
          "Contact integration",
        ],
      },
      {
        name: "Professional",
        price: "Rs. 22,000",
        description:
          "A polished portfolio designed around your personal brand.",
        features: [
          "Everything in Starter",
          "Custom branding",
          "Advanced project showcase",
          "Interactive sections",
        ],
        popular: true,
      },
      {
        name: "Premium",
        price: "Rs. 30,000",
        description:
          "A highly customized portfolio with advanced presentation.",
        features: [
          "Everything in Professional",
          "Advanced animations",
          "Interactive experiences",
          "Performance optimization",
        ],
      },
    ],
  },

  maintenance: {
    name: "Website Maintenance",
    plans: [
      {
        name: "Basic Care",
        price: "Rs. 5,000",
        suffix: "/month",
        description:
          "Essential maintenance to keep your website healthy and functional.",
        features: [
          "Bug fixes",
          "Content updates",
          "Basic troubleshooting",
          "Security updates",
        ],
      },
      {
        name: "Growth Care",
        price: "Rs. 10,000",
        suffix: "/month",
        description:
          "Ongoing support for businesses that regularly update their website.",
        features: [
          "Everything in Basic",
          "Performance improvements",
          "UI updates",
          "Regular support",
        ],
        popular: true,
      },
      {
        name: "Dedicated Support",
        price: "Rs. 20,000",
        suffix: "/month",
        description:
          "Dedicated technical support for business-critical websites.",
        features: [
          "Everything in Growth",
          "Priority maintenance",
          "Advanced troubleshooting",
          "Regular optimization",
        ],
      },
    ],
  },
};

const services = [
  {
    id: "business",
    name: "Business Websites",
  },
  {
    id: "web-applications",
    name: "Web Applications",
  },
  {
    id: "ecommerce",
    name: "Ecommerce Websites",
  },
  {
    id: "portfolio",
    name: "Portfolio Websites",
  },
  {
    id: "maintenance",
    name: "Website Maintenance",
  },
];

function Pricing() {
  const [activeService, setActiveService] = useState("business");

  const selectedPricing = pricingData[activeService];

  return (
    <section id="pricing" className={styles.pricing}>
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
            // pricing.suurix
          </span>

          <h2 className={styles.title}>
            Simple Pricing.
            <span> Clear Expectations.</span>
          </h2>

          <p className={styles.intro}>
            Transparent starting prices for every service,
            with flexible options for different project needs.
          </p>
        </motion.div>

        {/* SERVICE SELECTOR */}
        <div className={styles.serviceSelector}>
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              className={`${styles.serviceButton} ${
                activeService === service.id
                  ? styles.active
                  : ""
              }`}
              onClick={() => setActiveService(service.id)}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* PRICING CARDS */}
        <motion.div
          className={styles.pricingGrid}
          key={activeService}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {selectedPricing.plans.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.pricingCard} ${
                plan.popular ? styles.recommended : ""
              }`}
            >
              {plan.popular && (
                <span className={styles.popularBadge}>
                  RECOMMENDED
                </span>
              )}

              <span className={styles.planName}>
                {plan.name}
              </span>

              <div className={styles.price}>
                {plan.price}
                {plan.suffix && (
                  <span>{plan.suffix}</span>
                )}
              </div>

              <p className={styles.planDescription}>
                {plan.description}
              </p>

              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <FiCheck />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={styles.planLink}
              >
                Discuss a project
                <FiArrowUpRight />
              </a>
            </article>
          ))}
        </motion.div>

        {/* CUSTOM PROJECT CTA */}
<motion.div
  className={styles.customCta}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className={styles.customCtaContent}>
    <span className={styles.customCtaLabel}>
      NEED SOMETHING DIFFERENT?
    </span>

    <h3>
      Have a project that doesn't
      <span> fit a package?</span>
    </h3>

    <p>
      Every project is different. Tell us what you're
      building and we'll discuss your requirements and
      provide a custom quote.
    </p>
  </div>

  <a
    href="#contact"
    className={styles.customCtaLink}
  >
    Discuss a Project
    <FiArrowUpRight />
  </a>
</motion.div>

      </div>
    </section>
  );
}

export default Pricing;