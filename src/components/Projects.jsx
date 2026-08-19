import { useEffect, useState } from "react";
import api from "../api/api";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiRefreshCw,
  FiArrowRight,
} from "react-icons/fi";

import "../styles/Project.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError("");

     const response = await api.get("/api/projects");

      setProjects(response.data);
    } catch (err) {
      console.error("Project loading error:", err);

      setError(
        "Unable to load projects. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-bg-grid"></div>
      <div className="projects-glow"></div>

      <div className="projects-container">
        <div className="projects-heading">
          <div>
            <p className="projects-eyebrow">
              SELECTED WORK
            </p>

            <h2 className="projects-main-title">
              Real applications.
              <span> Real business problems.</span>
            </h2>
          </div>

          <p className="projects-intro">
            I focus on building practical software —
            from RFID-enabled systems and business
            applications to full-stack platforms and
            backend services.
          </p>
        </div>

        {loading && (
          <div className="projects-loading">
            <div className="loading-spinner"></div>
            <p>Loading projects...</p>
          </div>
        )}

        {!loading && error && (
          <div className="projects-error">
            <p>{error}</p>

            <button onClick={loadProjects}>
              <FiRefreshCw />
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && projects.length > 0 && (
          <div className="projects-list">
            {projects.map((project, index) => (
              <motion.article
                className={`project-showcase ${
                  index % 2 !== 0 ? "reverse" : ""
                }`}
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
              >
                <div className="project-visual">
                  <div className="project-visual-top">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      {project.projectType || "Full Stack Project"}
                    </span>
                  </div>

                  <div className="project-terminal">
                    <div className="project-terminal-header">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="project-terminal-body">
                      <p>
                        <span>&gt;</span> project
                      </p>

                      <h4>{project.title}</h4>

                      <p>
                        <span>&gt;</span> status
                      </p>

                      <h4>Production-ready solution</h4>

                      <p>
                        <span>&gt;</span> stack
                      </p>

                      <h4>
                        {project.technologies
                          ? project.technologies
                              .split(",")
                              .slice(0, 4)
                              .join(" + ")
                          : "Java + Spring Boot + React"}
                      </h4>
                    </div>
                  </div>

                  <div className="project-visual-glow"></div>
                </div>

                <div className="project-details">
                  <div className="project-meta">
                    <span>
                      {project.projectType || "Software Application"}
                    </span>

                    <span>
                      PROJECT{" "}
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  {project.features && (
                    <div className="project-features">
                      {project.features
                        .split(",")
                        .filter(
                          (feature) =>
                            feature.trim() !== ""
                        )
                        .map((feature, featureIndex) => (
                          <span key={featureIndex}>
                            {feature.trim()}
                          </span>
                        ))}
                    </div>
                  )}

                  {project.technologies && (
                    <div className="project-tech">
                      {project.technologies
                        .split(",")
                        .filter(
                          (tech) => tech.trim() !== ""
                        )
                        .map((tech, techIndex) => (
                          <span key={techIndex}>
                            {tech.trim()}
                          </span>
                        ))}
                    </div>
                  )}

                  <div className="project-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-primary-link"
                      >
                        View Project
                        <FiArrowUpRight />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-icon-link"
                        title="View GitHub"
                      >
                        <FiGithub />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {!loading &&
          !error &&
          projects.length === 0 && (
            <div className="no-projects">
              <h3>No projects available yet</h3>

              <p>
                Projects added from the backend will
                automatically appear here.
              </p>
            </div>
          )}

        {!loading && !error && projects.length > 0 && (
          <motion.div
            className="projects-cta"
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div>
              <span>
                HAVE A SIMILAR REQUIREMENT?
              </span>

              <h3>
                Let’s build the right solution
                for your business.
              </h3>
            </div>

            <a href="#contact">
              Discuss Your Project
              <FiArrowRight />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;