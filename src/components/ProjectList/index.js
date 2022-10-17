import React, { useState } from 'react';
import projects from '../../db/projects';
import Card from '../Card';
import Masonry from 'react-masonry-css';

let numberOfColumns;

console.log(window);
console.log(window.innerWidth)
if(window.innerWidth) {
  window.innerWidth < 400 && window.innerWidth < 821 ? numberOfColumns = 1 : numberOfColumns = 3;
  window.innerWidth < 821 && window.innerWidth >= 400 ? numberOfColumns = 2 : numberOfColumns = 3;
}


const ProjectList = () => {
  let screenWidth = useState()

  return (
      <Masonry breakpointCols={numberOfColumns} className="my-masonry-grid" columnClassName="my-masonry-grid_column" data-testid="projectList-1">
        {projects.map((project, i) => (
          <Card key={i} item={project} />
        ))}
      </Masonry>
  );
};

export default ProjectList;
