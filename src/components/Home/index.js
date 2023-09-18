import React from 'react';
import HomeMain from './HomeMain/index.js';
import HomeAbout from './HomeAbout/index.js';
import HomeAssistant from './HomeAssistant/index.js';
import HomeValues from './HomeValues/index.js';
import HomeWorks from './HomeWorks/index.js';
import './style.css';

const Home = () => (
  <main className="home">
    <HomeMain />
    <HomeAbout />
    <HomeAssistant />
    <HomeValues />
    <HomeWorks />
  </main>
);

export default Home;