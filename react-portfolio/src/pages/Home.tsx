import React, { useEffect } from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { asset } from '../lib/asset';

// Original "Prologue" theme scripts, loaded in order after the DOM is ready.
const THEME_SCRIPTS = [
  'assets/js/jquery.min.js',
  'assets/js/jquery.scrolly.min.js',
  'assets/js/jquery.scrollex.min.js',
  'assets/js/browser.min.js',
  'assets/js/breakpoints.min.js',
  'assets/js/util.js',
  'assets/js/main.js',
];

const Home: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('is-preload');

    const injected: HTMLScriptElement[] = [];
    for (const path of THEME_SCRIPTS) {
      const src = asset(path);
      if (document.querySelector(`script[data-theme-script="${src}"]`)) continue;
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.dataset.themeScript = src;
      document.body.appendChild(script);
      injected.push(script);
    }

    return () => {
      injected.forEach((s) => s.remove());
      document.body.classList.remove('is-preload');
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
