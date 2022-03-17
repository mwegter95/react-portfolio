import React from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Home(props) {
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      {currentCategory === "Portfolio" ?
      
        <ProjectList />
        : <div>this div supposed to show if not portfolio is selected</div>}
        
      </section>
  );
}
export default Home;
