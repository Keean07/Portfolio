import React from 'react';

const Intro: React.FC = () => {
  return (
    <section id="top" className="one dark cover">
      <div className="container">
        <header>
          <div id="welcomeContainer">
            <div id="welcomeText">
              <h2 className="alt">
                Hi! I'm <strong>Keean</strong>, a Computer Science graduate
              </h2>
              <p>
                If you've come here, it likely means that you are interested in some of my work. 
                If so, please know that although my work may not be the latest and greatest, 
                I am dedicated to broadening my horizons by learning everything I can, and loving every step of the way!
              </p>
              <a href="#portfolio" className="button scrolly">Portfolio</a>
              <a href="#about" className="button scrolly">About Me</a>
              <a href="#contact" className="button scrolly">Contact Me</a>
            </div>
            <img src="/images/CV Cover Photo.jpg" id="welcomeImage" alt="Keean Ferreira" />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Intro;