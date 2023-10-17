import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'password-generator',
      description: 'HTML/CSS/JS',
      link: "https://github.com/willisnoah/Random-Password_Gen",
      repo: "https://github.com/willisnoah/Random-Password_Gen"
    },
    {
      name: 'work-scheduler',
      description: 'HTML/CSS/JS',
      link: "https://github.com/willisnoah/Work-Scheduler",
      repo: "https://github.com/willisnoah/Work-Scheduler"
    },
    {
      name: 'bueche-business-coaching',
      description: 'REACT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'logo-creator',
      description: 'JS',
      link: "https://github.com/willisnoah/Logo-creator",
      repo: "https://github.com/willisnoah/Logo-creator"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
