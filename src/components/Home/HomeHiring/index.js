import React, {useState, useLayoutEffect, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/index'
import PersonImageRight from './PersonImageRight';
import PersonImageLeft from './PersonImageLeft';
import './style.css';

const HomeHiring = () => {
  const [size, setSize] = useState([0, 0]);

  const initialSvgPosition = () => {
    if(size[0] < 500){
      return 350
    } else if(size[0] < 900){
      return 180
    } else if(size[0] < 1100) {
      return 90
    } 
    return 0
  }

  const [svgPosition, setSvgPosition] = useState(initialSvgPosition())

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if(size[0] < 500){
      return setSvgPosition(350)
    } else if(size[0] < 900){
      return setSvgPosition(180)
    } else if(size[0] < 1100) {
      return setSvgPosition(90)
    } else {
      setSvgPosition(0)
    }
  }, [size])

  return (
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
    <PersonImageLeft transform={`-${svgPosition}`}/>
    <PersonImageRight transform={svgPosition}/>
  </section>
)};

export default HomeHiring;