import React from 'react';
import './style.css';
import FormComponent from '../../FormComponent/index';
import RocketImage from './RocketImage';

const HomeContact = () => (
  <section className="home__contact global-padding">
    <h2>Are you ready<br /> to board this rocket ship?</h2>
    <p>Share your excitement with us.</p>
    <div>
      <FormComponent />
      <RocketImage />
    </div>
  </section>
);

export default HomeContact;