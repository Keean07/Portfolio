import React, { useEffect } from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Load original JavaScript functionality
    const loadScripts = () => {
      const scripts = [
        '/assets/js/jquery.min.js',
        '/assets/js/jquery.scrolly.min.js',
        '/assets/js/jquery.scrollex.min.js',
        '/assets/js/browser.min.js',
        '/assets/js/breakpoints.min.js',
        '/assets/js/util.js',
        '/assets/js/main.js'
      ];

      scripts.forEach((src, index) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = () => {
          console.log(`Loaded script: ${src}`);
        };
        document.head.appendChild(script);
      });
    };

    // Add body class for original styling
    document.body.className = 'is-preload';

    loadScripts();

    // Cleanup function
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <>
      <Header />
      <div id="main">
        <Intro />
        <Portfolio />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;