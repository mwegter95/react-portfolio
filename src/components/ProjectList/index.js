import React, { useState } from 'react';
import projects from '../../db/projects';
import Card from '../Card'



const ProjectList = () => {

  return (
      <div className="flex-row">
        {projects.map((project, i) => (
          <Card key={i} item={project}/>
        ))}
      </div>
  );
};

export default ProjectList;
