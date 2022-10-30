import React, { useEffect, useState } from 'react';
import projects from '../../db/projects';
import Card from '../Card';
import Masonry from 'react-masonry-css';

let calcedNumberOfColumns;

const calculateColumns = (screenWidth) => {
  if(screenWidth) {
    screenWidth < 625 && screenWidth < 821 ? calcedNumberOfColumns = 1 : calcedNumberOfColumns = 3;
    if (screenWidth < 821 && screenWidth >= 625) calcedNumberOfColumns = 2;
  }
  return calcedNumberOfColumns;
}

const ProjectList = () => {
  let [numberOfColumns, setNumberOfColumns] = useState()

  useEffect(() => {
    setNumberOfColumns(calculateColumns(window.innerWidth))
    
    function handleResize() {
      setNumberOfColumns(calculateColumns(window.innerWidth))
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (  
      <Masonry breakpointCols={numberOfColumns} className="my-masonry-grid" columnClassName="my-masonry-grid_column" data-testid="projectList-1">
        {projects.map((project, i) => (
          <Card key={i} item={project} />
        ))}
      </Masonry>
  );
};

export default ProjectList;
