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
          Please reach out to me using the contact form below. I look forward to hearing from you!
        </p>

        <p>
          Contact details are as follows:
          <div className="listDiv">
            <ul>
              <li>Email: keeanferreira07@gmail.com</li>
              <li>Cell number: +27 (79) 9258 026</li>
            </ul>
            Some links:
            <ul>
              <li>GitHub: <a href="https://github.com/Keean07">https://github.com/Keean07</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/keeanferreira/">https://www.linkedin.com/in/keeanferreira/</a></li>
            </ul>
          </div>
        </p>
      </div>
    </section>
  );
};

export default Contact;