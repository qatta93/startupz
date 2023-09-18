import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/index'
import './style.css';

const HomeMain = () => (
  <section className='home__main'>
    <div className='home__main--tittle'>
      <h1>We Create Startups.</h1>
      <h3>We are startup studio that develops and launches new companies.</h3>
      <Link className="" to="/">
        <Button
          variant={'primary'}
          size={'s'}
          name={'See our works'}
          >
          Work with us!
        </Button>        
      </Link>
    </div>
    <img className="home__main--bg" src="/images/home-bg-main.png" alt="background image" />
  </section>
);

export default HomeMain;