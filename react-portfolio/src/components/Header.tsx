import React from 'react';

const Header: React.FC = () => {
  return (
    <div id="header">
      <div className="top">
        {/* Logo */}
        <div id="logo">
          <span className="image avatar48">
            <img src="/images/AvatarPhoto.jpg" alt="" />
          </span>
          <h1 id="title">Keean Ferreira</h1>
          <p>BSc Computer Science Graduate</p>
        </div>

        {/* Nav */}
        <nav id="nav">
          <ul>
            <li>
              <a href="#top" id="top-link">
                <span className="icon solid fa-home">Intro</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" id="portfolio-link">
                <span className="icon solid fa-th">Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#about" id="about-link">
                <span className="icon solid fa-user">About Me</span>
              </a>
            </li>
            <li>
              <a href="#contact" id="contact-link">
                <span className="icon solid fa-envelope">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bottom">
        {/* Social Icons */}
        <ul className="icons">
          <li>
            <a href="https://twitter.com/KeeanFerreira" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/Keean07" className="icon brands fa-github">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="mailto:keeanferreira07@gmail.com" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;