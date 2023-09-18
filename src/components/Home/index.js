import React from 'react';
import HomeMain from './HomeMain/index.js';
import HomeAbout from './HomeAbout/index.js';
import './style.css';

const Home = () => (
  <main className="home">
    <HomeMain />
    <HomeAbout />
  </main>
);

export default Home;