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
      <div>This is my Resume. Notice the well-done group projects, good education, and experience working effectively in a corporate setting.
        <iframe title="resume" src="https://drive.google.com/file/d/1iCy7a3TzraxLrjEDzoASztCBI5gwueqO/preview" width="100%" height="960" allow="autoplay"></iframe>
      </div>
      ): currentCategory.name === "About Me" ? (
      <div>this is about me</div>
    ):(
      <div>{currentCategory.name}</div>
    )}
       
      </section>
  );
}
export default Home;
