import React from 'react';

import './Header.css';
import { useEffect } from 'react';
import { SubHeading } from '../../components';
import AOS from 'aos';

const Header = () => {
  useEffect(()=>{
    AOS.init({
      offset: 400,
      duration: 1400,
      easing: 'ease'
    });
  })
   return (
    <div className='app__header app__wrapper secttion__padding' id="header">
    <div className="app__wrapper_info" data-aos="fade-right">
      <SubHeading title="Haunting unique flavors"/>
      <h1 className="app__header-h1">The Secret behind a Fine Dining</h1>
       <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img" data-aos="fade-left">
    <img src="https://images.pexels.com/photos/3298180/pexels-photo-3298180.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="header img" />
    </div>
  </div>
   )
  
};

export default Header;
