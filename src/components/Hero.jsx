import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
} from "react-icons/fi";

import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-container">
        <div className="hero-left">
          <motion.div
            className="hero-status"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="hero-status-dot"></span>
            Available for freelance & development projects
          </motion.div>

          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            JAVA FULL STACK DEVELOPER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I build software that helps
            <span> businesses work smarter.</span>
          </motion.h1>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Custom web applications, business software, RFID solutions and
            backend systems built with Java, Spring Boot, React and MySQL.
          </motion.p>

          <motion.div
            className="hero-tech-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>MySQL</span>
            <span>RFID</span>
            <span>REST API</span>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#contact" className="hero-primary-btn">
              Start Your Project
              <FiArrowRight />
            </a>

            <a href="#projects" className="hero-secondary-btn">
              Explore My Work
            </a>

            <a href="/resume.pdf" className="hero-resume-btn" download>
              <FiDownload />
              Resume
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FiGithub />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>

            <a href="mailto:your-email@gmail.com">
              <FiMail />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div className="terminal-card">
            <div className="terminal-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-content">
              <p>
                <span className="terminal-symbol">&gt;</span> whoami
              </p>
              <h3>Jyoti Gawai</h3>

              <p>
                <span className="terminal-symbol">&gt;</span> role
              </p>
              <h3>Software Developer</h3>

              <p>
                <span className="terminal-symbol">&gt;</span> stack
              </p>
              <h3>Java + Spring Boot + React</h3>

              <p>
                <span className="terminal-symbol">&gt;</span> building
              </p>
              <h3>Business Software + RFID Solutions</h3>

              <div className="terminal-cursor-row">
                <span className="terminal-symbol">&gt;</span>
                <span className="terminal-cursor"></span>
              </div>
            </div>
          </div>

          <motion.div
            className="hero-floating-card hero-floating-one"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
            }}
          >
            REST API
          </motion.div>

          <motion.div
            className="hero-floating-card hero-floating-two"
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            RFID
          </motion.div>

          <motion.div
            className="hero-floating-card hero-floating-three"
            animate={{ x: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4.3,
              ease: "easeInOut",
            }}
          >
            Spring Boot
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-marquee">
        <div className="hero-marquee-track">
          <span>JAVA</span>
          <span>SPRING BOOT</span>
          <span>REACT</span>
          <span>MYSQL</span>
          <span>RFID</span>
          <span>REST API</span>
          <span>DOCKER</span>
          <span>WEBRTC</span>

          <span>JAVA</span>
          <span>SPRING BOOT</span>
          <span>REACT</span>
          <span>MYSQL</span>
          <span>RFID</span>
          <span>REST API</span>
          <span>DOCKER</span>
          <span>WEBRTC</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;