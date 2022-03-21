import React from 'react';
import ProjectList from '../ProjectList'
import { capitalizeFirstLetter } from '../../utils/helpers';

function Home(props) {
  const { currentCategory } = props;
  console.log(currentCategory);
  return (
    <section>
      <h1 id="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      {currentCategory.name === "Portfolio" ? (
        <div>
      
        <ProjectList />
        </div>
      ): currentCategory.name === "Resume" ? ( 
      <div>this is Resume</div>
      ): currentCategory.name === "About Me" ? (
      <div>this is about me</div>
    ):(
      <div>{currentCategory.name}</div>
    )}
       
      </section>
  );
}
export default Home;
