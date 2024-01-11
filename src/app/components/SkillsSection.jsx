"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../style.css";

function SkillsSection() {
  const [areSkillsVisible, setAreSkillsVisible] = useState(true);

  const toggleSkillsVisibility = () => {
    setAreSkillsVisible((prevVisibility) => !prevVisibility);
  };

  const variants = {
    active: { width: "100%" },
    default: { width: "0%" },
  };

  return (
    <div className="container">
      <h1 className="title-text text-4xl font-bold">My Experience coding</h1>
      <div className="text-lg">
        {/* Toggle button */}
        <button onClick={toggleSkillsVisibility} className="toggle-button">
          {areSkillsVisible ? "Hide Skills" : "Show Skills"}
          <motion.div
            animate={areSkillsVisible ? "active" : "default"}
            variants={variants}
            className="h-1 bg-primary-500 mt-2 mr-3"
          ></motion.div>
        </button>
      </div>
      {/* Skill boxes */}
      {areSkillsVisible && (
        <div>
          {/* HTML, CSS, JavaScript */}
          <div className="skill-box">
            <span className="title">
              HTML,&nbsp;&nbsp;CSS,&nbsp;&nbsp;JavaScript
            </span>
            <div className="skill-bar">
              <span className="skill-per html css javascript">
                <span className="tooltip">35%</span>
              </span>
            </div>
          </div>

          {/* NodeJS */}
          <div className="skill-box">
            <span className="title">NodeJS</span>
            <div className="skill-bar">
              <span className="skill-per nodejs">
                <span className="tooltip">25%</span>
              </span>
            </div>
          </div>

          {/* ReactJS */}
          <div className="skill-box">
            <span className="title">ReactJS</span>
            <div className="skill-bar">
              <span className="skill-per reactjs">
                <span className="tooltip">25%</span>
              </span>
            </div>
          </div>

          {/* Python */}
          <div className="skill-box">
            <span className="title">Python</span>
            <div className="skill-bar">
              <span className="skill-per python">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>

          {/* Lua */}
          <div className="skill-box">
            <span className="title">Lua</span>
            <div className="skill-bar">
              <span className="skill-per lua">
                <span className="tooltip">80%</span>
              </span>
            </div>
          </div>

          {/* Java */}
          <div className="skill-box">
            <span className="title">Java</span>
            <div className="skill-bar">
              <span className="skill-per java">
                <span className="tooltip">25%</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SkillsSection;
