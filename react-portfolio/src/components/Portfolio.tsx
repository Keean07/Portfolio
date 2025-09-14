import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Local Community Website',
      image: '/images/braaimasters.png',
      link: '/LocalCommunityWebsite'
    },
    {
      title: 'P5.JS Programming Assignments',
      image: '/images/sinewave.png',
      link: '/p5Assignments'
    },
    {
      title: 'Drawing App',
      image: '/images/drawingApp.png',
      link: '/drawingApp'
    },
    {
      title: 'Digit Classification with TensorFlow',
      image: '/images/DigitClassification.png',
      link: '/DigitClassification'
    },
    {
      title: 'CoinHop Game',
      image: '/images/Coinhop.png',
      link: '/coinhop'
    },
    {
      title: 'CyberSpider Game',
      image: '/images/CyberSpider.png',
      link: '/CyberSpider'
    }
  ];

  return (
    <section id="portfolio" className="two">
      <div className="container">
        <header>
          <h2>Portfolio</h2>
        </header>

        <p>
          My journey with computer science has been filled with various projects 
          and passions, below are some of the works I've done for projects, 
          exams, and fun!
        </p>
        <p>
          To view the code for each of these projects, go to the portfolio repository page on GitHub here: {' '}
          <a href="https://github.com/Keean07/Portfolio">Portfolio</a><br />
          In the project repository you will find a folder for each project featured below, 
          besides the CoinHop and CyberSpider projects, which are in separate repositories here: {' '}
          <a href="https://github.com/Keean07/BSc-Final-Project">CoinHop</a> and {' '}
          <a href="https://github.com/GameDevTeam6/CyberSpider">CyberSpider</a>
        </p>

        <div className="row">
          {[0, 2, 4].map((startIndex) => (
            <div key={startIndex} className="col-4 col-12-mobile">
              {projects.slice(startIndex, startIndex + 2).map((project, index) => (
                <article key={index} className="item">
                  <Link to={project.link} className="image fit">
                    <img src={project.image} alt={project.title} />
                  </Link>
                  <header>
                    <h3>{project.title}</h3>
                  </header>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;