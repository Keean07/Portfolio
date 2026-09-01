import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="four">
      <div className="container">
        <header>
          <h2>Contact</h2>
        </header>

        <p>
          I will gladly answer any questions regarding my work and my availability for employment.
          Please reach out to me using the contact details below. I look forward to hearing from you!
        </p>

        <div className="listDiv">
          <p>Contact details are as follows:</p>
          <ul>
            <li>Email: <a href="mailto:keeanferreira07@gmail.com">keeanferreira07@gmail.com</a></li>
            <li>Cell number: +27 (79) 9258 026</li>
          </ul>
          <p>Some links:</p>
          <ul>
            <li>GitHub: <a href="https://github.com/Keean07">https://github.com/Keean07</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/keeanferreira/">https://www.linkedin.com/in/keeanferreira/</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
