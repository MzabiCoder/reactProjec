import React,{useEffect} from 'react';
import { SubHeading } from '../../components';
import AOS from 'aos'

const FindUs = () => {
  useEffect(()=>{
    AOS.init({
      offset: 400,
      duration: 1200,
      easing: 'ease'
    });
  })
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info" data-aos="fade-up">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">123 First Street, San Francisco CA 94158</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img" data-aos="fade-up">
      <img src="https://images.pexels.com/photos/8112984/pexels-photo-8112984.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="finus_img" />
    </div>
  </div>
  )
  
  };

export default FindUs;