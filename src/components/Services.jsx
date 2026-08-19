import { useEffect, useState } from "react";
import api from "../api/api";
import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiRadio,
  FiArrowUpRight,
} from "react-icons/fi";

import "../styles/Services.css";

const iconMap = {
  code: <FiCode />,
  server: <FiServer />,
  database: <FiDatabase />,
  radio: <FiRadio />,
};

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const response = await api.get("/api/services");

      setServices(response.data);
    } catch (error) {
      console.error("Failed to load services:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="section services-section"
      id="services"
    >
      <div className="services-header">
        <div>
          <p className="section-subtitle">
            What I Do
          </p>

          <h2 className="services-title">
            Turning ideas into
            <span> working software.</span>
          </h2>
        </div>

        <p className="services-intro">
          From business applications to RFID-enabled
          systems, I develop practical software solutions
          focused on solving real operational problems.
        </p>
      </div>

      {loading ? (
        <div className="services-loading">
          Loading services...
        </div>
      ) : (
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.id}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="service-card-top">
                <span className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="service-icon">
                  {iconMap[service.iconName] || <FiCode />}
                </div>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              {service.skills && (
                <div className="service-skills">
                  {service.skills
                    .split(",")
                    .map((skill) => (
                      <span key={skill.trim()}>
                        {skill.trim()}
                      </span>
                    ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      )}

      <div className="services-cta">
        <div>
          <span>Have a project in mind?</span>

          <h3>
            Let's build something useful.
          </h3>
        </div>

        <a href="#contact">
          Discuss Your Project
          <FiArrowUpRight />
        </a>
      </div>
    </section>
  );
}

export default Services;