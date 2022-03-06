import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

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

  const currentProjects = projects.filter(project => project.category === category);

  const toggleModal = (project, i) => {
    setCurrentProject({ ...project, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
