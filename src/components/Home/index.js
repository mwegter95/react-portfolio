import { React } from 'react';
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
        <>
        <div className='about-me'>Hi I'm Michael Wegter, internet-age-born digital native who's done everything from coding lego robotics sets to hacking androids to writing full stack MERN apps. I like to code javascript and solve problems. I'm looking for my first job as a full stack software engineer coding in javascript.
        </div> <br/><br/>
        <div className='about-me'>I'm from Buffalo, Minnesota, now live in St. Paul, and I went to St. Olaf College. I graduated with a double major in music and economics, and I recently received a certificate after a 6-month full stack coding bootcamp from the University of Minnesota. I'm eager to start my career in full stack software engineering.</div>
      </>      
    ):(
      <div>{currentCategory.name}</div>
    )}
       
      </section>
  );
}
export default Home;
