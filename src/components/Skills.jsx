import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
} from "react-icons/fi";

import "../styles/Skills.css";

const iconMap = {
  Frontend: <FiCode />,
  Backend: <FiServer />,
  Database: <FiDatabase />,
  Tools: <FiTool />,
};

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/skills"
      );

      setSkills(response.data);
    } catch (error) {
      console.error("Unable to load skills:", error);
    } finally {
      setLoading(false);
    }
  };

  const groupedSkills = useMemo(() => {
    return skills.reduce((groups, skill) => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }

      groups[skill.category].push(skill);

      return groups;
    }, {});
  }, [skills]);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-grid-bg"></div>

      <div className="skills-container">
        <div className="skills-heading">
          <p className="skills-eyebrow">
            MY TOOLKIT
          </p>

          <h2>
            Technologies I use to
            <span> build real products.</span>
          </h2>

          <p>
            A practical stack focused on full-stack
            applications, business systems and
            production-ready backend solutions.
          </p>
        </div>

        {loading ? (
          <div className="skills-loading">
            Loading skills...
          </div>
        ) : (
          <div className="skills-category-grid">
            {Object.entries(groupedSkills).map(
              ([category, items], index) => (
                <motion.article
                  className="skill-category"
                  key={category}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                >
                  <div className="skill-category-top">
                    <div className="skill-category-icon">
                      {iconMap[category] || <FiCode />}
                    </div>

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{category}</h3>

                  <div className="skill-list">
                    {items.map((skill) => (
                      <span key={skill.id}>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.article>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;