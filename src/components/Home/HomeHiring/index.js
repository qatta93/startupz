import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/index'
import PersonImageRight from './PersonImageRight';
import PersonImageLeft from './PersonImageLeft';
import './style.css';

const HomeHiring = () => (
  <section className="home__hiring global-padding">
    <div className='home__hiring--text'>
      <h2>We are hiring!</h2>
      <h3>We're always looking for talented people to join and help build our startups. Check out our current openings</h3>
      <Link to="#">
        <Button
          variant={'primary'}
          size={'lg'}
          name={'See current openings'}
          >
          See current openings
        </Button>        
      </Link>
    </div>
    {/* <img className='home__hiring--img-left' src="/images/hiring-bg-left.png" alt="hiring"/>
    <img className='home__hiring--img-right' src="/images/hiring-bg-right.png" alt="hiring"/> */}
    <PersonImageLeft className='home__hiring--img-left'/>
    <PersonImageRight className='home__hiring--img-right'/>
  </section>
);

export default HomeHiring;