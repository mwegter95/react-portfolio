import buzzStockImage from '../assets/images/buzzstock_screenshot.png';
import myWeddingImage from '../assets/images/my_wedding_login_page.jpg';


const projects = [
    {
      name: 'BuzzStock',
      category: 'coding',
      description: 'BuzzStock is an app that combines information from a news api and a stock info api, so it can show news and pricing for a searched ticker symbol',
      image: buzzStockImage,
      alt: "screenshot of BuzzStock app",
      link: "https://github.com/TavianJD/BuzzStock-Group-Project/"
    },
    {
      name: 'My Wedding',
      category: 'coding',
      description:
        'My Wedding allows users to keep a day-of schedule for their wedding; it uses MySQL, Sequelize, and Handlebars',
      image: myWeddingImage,
      alt: "screenshot of My Wedding login page",
      link: "https://github.com/GitAndrewCoffee/wedding_planner"
    },
    {
      name: 'Deep Thoughts',
      category: 'coding',
      description:
        'Deep Thoughts is a backend-only MongoDB project for a social app where users can share thoughts, and comment on other thoughts from different users',
      image: {},
      alt: "screenshot of Deep Thoughts api requests and responses",
      link: "https://github.com/mwegter95/deep-thoughts"
    }
  ];


  export default projects;