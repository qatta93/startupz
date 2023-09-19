import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/index'
import BackgroundImage from './BackgroundImage';
import './style.css';

const HomeMain = () => (
  <section className='home__main global-padding'>
    <div className='home__main--tittle'>
      <h1>We Create Startups.</h1>
      <h3>We are startup studio that develops and launches new companies.</h3>
      <Link to="#">
        <Button
          variant={'primary'}
          size={'s'}
          name={'See our works'}
          >
          Work with us!
        </Button>        
      </Link>
    </div>
    <BackgroundImage />
  </section>
);

export default HomeMain;