import React,{useEffect} from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';
import AOS from 'aos'

const Footer = () => {
  useEffect(()=>{
    AOS.init({
      offset: 400,
      duration: 1200,
      easing: 'ease'
    });
  })
 return (
  <div className="app__footer section__padding" id="login">
  <FooterOverlay />
  <Newsletter />

  <div className="app__footer-links" id="contact">
    <div className="app__footer-links_contact" data-aos="fade-right">
      <h1 className="app__footer-headtext">Contact Us</h1>
      <p className="p__cormorant">123 First street, San Francisco CA 94158</p>
      <p className="p__cormorant">+1 212-344-1230</p>
      <p className="p__cormorant">+1 212-555-1230</p>
    </div>

    <div className="app__footer-links_logo" data-aos="fade-up">
      <img src="https://static1.squarespace.com/static/600627b33a7365382a86665e/t/600629afe996e1572906e20d/1611016634169/Big-Easy-logo.png?format=1500w" alt="footer_logo" />
      <p className="p__cormorant">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
      <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
      <div className="app__footer-links_icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
    </div>

    <div className="app__footer-links_work" data-aos="fade-left">
      <h1 className="app__footer-headtext">Working Hours</h1>
      <p className="p__cormorant">Monday-Friday:</p>
      <p className="p__cormorant">08:00 am - 12:00 am</p>
      <p className="p__cormorant">Saturday-Sunday:</p>
      <p className="p__cormorant">07:00 am - 11:00 pm</p>
    </div>
  </div>

  <div className="footer__copyright">
    <p className="p__cormorant">2023 Restaurant. All Rights reserved.</p>
  </div>

</div>
 )
};

export default Footer;