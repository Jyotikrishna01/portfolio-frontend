import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiCpu,
  FiArrowDownRight,
} from "react-icons/fi";

import "../styles/About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid-bg"></div>
      <div className="about-glow"></div>

      <div className="about-container">

        {/* SECTION HEADER */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="about-eyebrow">
            ABOUT ME
          </p>

          <h2>
            Developer by profession.
            <span> Problem solver by mindset.</span>
          </h2>
        </motion.div>

        <div className="about-content">

          {/* LEFT */}
          <motion.div
            className="about-profile"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-profile-top">
              <div className="about-avatar">
                JG
              </div>

              <div>
                <span className="about-status">
                  <i></i>
                  Available for projects
                </span>

                <h3>Jyoti Krishna Gawai</h3>

                <p>Java Full Stack Developer</p>
              </div>
            </div>

            <div className="about-location">
              Pune, Maharashtra, India
            </div>

            <a
              href="#contact"
              className="about-contact-link"
            >
              Work with me
              <FiArrowDownRight />
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="about-story"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="about-large-text">
              I build full-stack applications that turn
              <strong> real business requirements </strong>
              into reliable software.
            </p>

            <p className="about-description">
              My work combines Java, Spring Boot, React,
              databases and REST APIs to build practical
              applications for business operations,
              automation, billing, inventory and online
              platforms.
            </p>

            <p className="about-description">
              I also have hands-on experience developing
              RFID-enabled solutions, connecting software
              with real-world processes such as item
              labelling, inventory tracking and billing.
            </p>

            {/* EXPERTISE */}
            <div className="about-expertise">

              <div className="expertise-item">
                <div className="expertise-icon">
                  <FiCode />
                </div>

                <div>
                  <span>01</span>
                  <h4>Full Stack</h4>
                  <p>React + Java + Spring Boot</p>
                </div>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">
                  <FiDatabase />
                </div>

                <div>
                  <span>02</span>
                  <h4>Business Systems</h4>
                  <p>Billing • Inventory • ERP</p>
                </div>
              </div>

              <div className="expertise-item">
                <div className="expertise-icon">
                  <FiCpu />
                </div>

                <div>
                  <span>03</span>
                  <h4>RFID Solutions</h4>
                  <p>Tracking • Labelling • Automation</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          className="about-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>MY APPROACH</span>

          <p>
            Understand the problem
            <i>→</i>
            Design the solution
            <i>→</i>
            Build
            <i>→</i>
            Test
            <i>→</i>
            Deploy
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;