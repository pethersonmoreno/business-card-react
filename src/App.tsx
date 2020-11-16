/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Divider from './components/Divider';
import IconGithub from './components/IconGithub';
import IconLinkedin from './components/IconLinkedin';
import IconTwitter from './components/IconTwitter';
import Bubble from './components/Bubble';
import './App.css';

function App() {
  return (
    <div className="app">
      <Bubble />
      <h1>I'm Petherson Moreno</h1>
      <Divider />
      <p>
        Front-end developer. Parent of an one-year-old boy.
        {' '}
        Passionate about technologies, learning and teaching a little bit about a lot of things.
      </p>
      <Divider />
      <p>Campinas, São Paulo, Brazil</p>
      <Divider />
      <p>Find me on:</p>
      <div className="social-icons">
        <a href="http://github.com"><IconGithub /></a>
        <a href="http://twitter.com"><IconTwitter /></a>
        <a href="http://linkedin.com"><IconLinkedin /></a>
      </div>
    </div>
  );
}

export default App;
