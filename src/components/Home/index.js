import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/index'
import './style.css';

const Home = () => (
  <main className="home">
    <div className='home__wrapper'>
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
    <section className='home__about'>
      <div className='home__about--header'>
        <article>
          <h2>Who we are</h2>
          <h3>We create products that have innovation and technology at their core.</h3>
          <h3>We value working with talented people that understand the possibilities of today.</h3>
        </article>
        <img src="/images/question-mark.png" alt="question mark" />
      </div>
      <div className='home__about--info'>
        <div>
          <p>01</p>
          <p>We develop innovative products, systems and services</p>
        </div>
        <div>
          <p>02</p>
          <p>Next we build teams to scale them into companies</p>
        </div>
        <div>
          <p>03</p>
          <p>Each startup solving one problem at a time</p>
        </div>
      </div>
    </section>
    </div>
  </main>
);

export default Home;