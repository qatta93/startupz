import React from 'react';
import './style.css';
import Card from './Card/index'
import worksData from './data.json'

const HomeWorks = () => (
  <section className='home__works global-padding'>
    <h2>Our works</h2>
    <div>
      {worksData.map(data => (
        <Card key={data.id} title={data.title} description={data.description} image={data.image} link={data.link}/>
      ))
      }
    </div>
  </section>
);

export default HomeWorks;