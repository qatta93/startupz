import React from 'react';
import HomeMain from './HomeMain/index.js';
import HomeAbout from './HomeAbout/index.js';
import HomeAssistant from './HomeAssistant/index.js';
import './style.css';

const Home = () => (
  <main className="home">
    <HomeMain />
    <HomeAbout />
    <HomeAssistant />
  </main>
);

export default Home;