import React from 'react';
import './style.css';
import FormComponent from '../../FormComponent/index';

const HomeContact = () => (
  <section className="home__contact global-padding">
    <h2>Are you ready<br /> to board this rocket ship?</h2>
    <p>Share your excitement with us.</p>
    <div>
      <FormComponent />
      <img src="/images/rocket.png" alt="rocket"/> 
    </div>
  </section>
);

export default HomeContact;