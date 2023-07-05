import React,{useEffect} from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import AOS from 'aos'

const Chef = () => {
  useEffect(()=>{
    AOS.init({
      offset: 400,
      duration: 1200,
      easing: 'ease'
    });
  })
  return (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse" data-aos="fade-down">
      <img src="https://images.pexels.com/photos/8879620/pexels-photo-8879620.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content" data-aos="fade-down">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
      </div>

      <div className="app__chef-sign" data-aos="fade-down">
        <p>Kevin Lu</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
  )
  
  };

export default Chef;