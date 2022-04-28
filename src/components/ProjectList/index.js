import React, { useState } from 'react';
import projects from '../../db/projects';
import Card from '../Card';
import Masonry from 'react-masonry-css';




const ProjectList = () => {

  return (
      <Masonry breakpointCols={3} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {projects.map((project, i) => (
          <Card key={i} item={project} />
        ))}
      </Masonry>
  );
};

export default ProjectList;
