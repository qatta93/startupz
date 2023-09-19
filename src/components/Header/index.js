import React, { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import CloseIcon from './CloseIcon';
import { Link, NavLink } from 'react-router-dom';
import Button from '../Button/index'
import './style.css';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);


  const toggleNav = () => {
    window.scrollTo(0, 0);
    setIsNavExpanded((currentState) => !currentState);
  };

  const handleLink = () => {
    setIsNavExpanded(false);
  };

  return (
    <>
    <div className={`placeholder ${isNavExpanded ? 'placeholder--visible' : ''}`} />
    <header className={`header ${isNavExpanded ? 'header--fixed' : ''}`}>
      <nav className="header__nav global-padding">
        <Link className="header__logo-container" to="/#" onClick={handleLink}>
          <img className="header__logo" src="/images/logo.png" alt="startupz logo" />
        </Link>
        <div className="header__menu-container">
          <button type="button" className="header__button" onClick={toggleNav} aria-label="toggle-nav">
            { isNavExpanded ? <CloseIcon /> : <HamburgerIcon />}
          </button>
          <ul className={`header__links-container ${isNavExpanded ? 'header__links-container--visible' : ''}`}>
            <li><NavLink className="header__link" to="/#" onClick={handleLink}>Startups</NavLink></li>
            <li><NavLink className="header__link" to="/#" onClick={handleLink}>Contact</NavLink></li>
            <li><NavLink className="header__link" to="/#" onClick={handleLink}>
              <Button
                variant={'secondary'}
                size={'md'}
                name={'Work with us'}
                >
                Work with us!
              </Button>
            </NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  </>
  );
};

export default Header;
