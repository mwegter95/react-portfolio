import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import ContactForm from './components/Contact';
import ProjectList from './components/ProjectList';

function App() {
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'Michael Wegter is a full stack developer',
    },
    { name: 'Portfolio', description: 'Tech projects' },
    { name: 'Resume', description: '' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Home currentCategory={currentCategory}></Home>
            
            
            
            
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;



