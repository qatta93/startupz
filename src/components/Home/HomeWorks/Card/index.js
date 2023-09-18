import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Button from '../../../Button/index'


const Card = ({title, description, image, link}) => (
  <article className='home__card'>
    <p className={`home__card--title home__card--${title.split(' ')[0].toLowerCase()}`}>{title}</p>
    <p className='home__card--desc'>{description}</p>
    <img src={`/images/${image}.png` } alt={title}/>
    <Link to={link}>
      <Button
        variant={'secondary'}
        size={'xs'}
        name={'more'}
        >
        More
      </Button>
    </Link>

  </article>
);

export default Card;