import React, { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import CloseIcon from './CloseIcon';
import { Link, NavLink } from 'react-router-dom';
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
      <nav className="header__nav">
        <Link className="header__logo-container" to="/" onClick={handleLink}>
          <img className="header__logo" src="/images/logo.png" alt="startupz" />
        </Link>
        <div className="header__menu-container">
          <button type="button" className="header__button" onClick={toggleNav} aria-label="toggle-nav">
            { isNavExpanded ? <CloseIcon /> : <HamburgerIcon />}
          </button>
          <ul className={`header__links-container ${isNavExpanded ? 'header__links-container--visible' : ''}`}>
            <NavLink className="header__link" to="/" onClick={handleLink}>Startups</NavLink>
            <NavLink className="header__link" to="/" onClick={handleLink}>Contact</NavLink>
            <NavLink className="header__link" to="/" onClick={handleLink}>Work with us!</NavLink>
          </ul>
        </div>
      </nav>
    </header>
  </>
  );
};

export default Header;
