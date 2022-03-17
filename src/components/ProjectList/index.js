import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = () => {


  const [projects] = useState([
    {
      name: 'BuzzStock',
      category: 'coding',
      description:
        'BuzzStock is an app that combines information from a news api and a stock info api, so it can show news and pricing for a searched ticker symbol'
    },
    {
      name: 'My Wedding',
      category: 'coding',
      description:
        'My Wedding allows users to keep a day-of schedule for their wedding; it uses MySQL, Sequelize, and Handlebars'
    },
    {
      name: 'Deep Thoughts',
      category: 'coding',
      description:
        'Deep Thoughts is a backend-only MongoDB project for a social app where users can share thoughts, and comment on other thoughts from different users'
    }
  ]);



  return (
    <div>
      <div className="flex-row">
        {projects.map((project, i) => (
          <article key={project.name}>
            ${project.name}
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
