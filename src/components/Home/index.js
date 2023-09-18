import React from 'react';
import HomeMain from './HomeMain/index.js';
import HomeAbout from './HomeAbout/index.js';
import HomeAssistant from './HomeAssistant/index.js';
import HomeValues from './HomeValues/index.js';
import HomeWorks from './HomeWorks/index.js';
import HomeHiring from './HomeHiring/index.js';
import HomeContact from './HomeContact/index.js';
import './style.css';

const Home = () => (
  <main className="home">
    <HomeMain />
    <HomeAbout />
    <HomeAssistant />
    <HomeValues />
    <HomeWorks />
    <section className="home__info global-padding">
      <div>
        <img src="/images/thumb-left.png" alt="thumb" />
        <p>Startups create a world that actually is better. Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.</p>
        <img src="/images/thumb-right.png" alt="thumb" />
      </div>
    </section>
    <HomeHiring />
    <HomeContact />
  </main>
);

export default Home;