import buzzstockimage from '../assets/images/buzzstock_screenshot.png'
import tempoimage from '../assets/images/Tempo_screenshot.png'

const projects = [
    {
      name: 'Tempo',
      category: 'coding',
      description: 'Tempo is an app for musicians to connect with other musicians through sharing their music. Tempo is built with React, GraphQL, and MongoDB.',
      image: tempoimage,
      alt: "screenshot of Tempo homepage",
      link: "https://tempo-musician-search.herokuapp.com/"
    },
    {
      name: 'BuzzStock',
      category: 'coding',
      description: 'BuzzStock is an app that combines information from a news api and a stock info api, so it can show news and pricing for a searched ticker symbol',
      image: buzzstockimage,
      alt: "screenshot of BuzzStock app"
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
  ];


  export default projects;