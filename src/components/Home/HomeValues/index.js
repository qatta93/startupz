import React from 'react';
import './style.css';

const HomeValues = () => (
  <section className='home__values global-padding'>
    <div className='home__values--header'>
      <article>
        <h2>Our core values</h2>
      </article>
      <img src="/images/idea.png" alt="idea" />
    </div>
    <div className='home__values--info'>
      <div>
        <p>01. Innovation</p>
        <p>Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.</p>
      </div>
      <div>
        <p>02. People</p>
        <p>Talent is what enable us to create great companies.</p>
      </div>
    </div>
  </section>
);

export default HomeValues;