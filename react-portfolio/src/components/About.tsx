import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="three">
      <div className="container">
        <header>
          <h2>About Me</h2>
        </header>

        <p>
          I started my degree in October 2019, and finished in October 2023. 
          The degree covered various languages like JavaScript, Python, HTML, CSS, C++, and C#. 
          It also covered a vast range of topics such as <strong>
            graphics programming, data science, 
            web development, computer security, 
            databases, artificial intelligence, 
            machine learning, games development, 
            3D graphics and animation, and 
            discrete/computational mathematics.
          </strong>{' '}
          I feel that the broad coverage of the degree thoroughly prepared me to add value to any company.
        </p>
        <p>
          Currently, my target career is working in Games Development to create 
          vast, interesting worlds for players to explore. I love the idea of putting 
          thought and effort into something that people will enjoy for years to come. 
        </p>
        <p>
          The entirety of my course was done online because I live in South Africa 
          and the University is located in London. With that being said, I feel myself an ideal
          candidate for a remote work position anywhere in the world!
        </p>
      </div>
    </section>
  );
};

export default About;