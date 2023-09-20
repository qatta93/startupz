import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Icons/Logo'
import './style.css';
import TwitterIcon from '../Icons/SocialMedia/Twitter';
import LinkedinIcon from '../Icons/SocialMedia/Linkedin';
import InstagramIcon from '../Icons/SocialMedia/Instagram';

const Footer = () => (
  <footer className="footer global-padding">
    <div className='footer__logo'>
      <Link to="#"><Logo width={179} height={43}/></Link>
      <div>
        <p>@2020 Startupz.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
    <div className='footer__companies'>
      <p>Companies</p>
      <Link to="#">Tolq</Link>
      <Link to="#">LegalSite</Link>
      <Link to="#">Codekeeper</Link>
      <Link to="#">Feedback Labs</Link>
    </div>
    <div className='footer__contact'>
      <p>Contact</p>
      <p>World Trade Center - The Hague<br />Prinses Margrietplantsoen 33<br />2595 AM The Hague<br />The Netherlands</p>
      <Link to="#">Send us an email</Link>
    </div>
    <div className='footer__follow'>
      <p>Follow us</p>
      <Link to="#"><TwitterIcon /></Link>
      <Link to="#"><LinkedinIcon /></Link>
      <Link to="#"><InstagramIcon /></Link>
      {/* <Link to="#"><img src="/images/twitter.png" alt="twitter"/></Link>
      <Link to="#"><img src="/images/linkedin.png" alt="linkedin"/></Link>
      <Link to="#"><img src="/images/instagram.png" alt="instagram"/></Link> */}
    </div>
  </footer>
);

export default Footer;