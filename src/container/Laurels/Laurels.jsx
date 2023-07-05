import React,{useEffect} from 'react';

import { SubHeading } from '../../components';
import { data } from '../../constants';
import './Laurels.css';
import AOS from 'aos'

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  useEffect(()=>{
    AOS.init({
      offset: 400,
      duration: 1400,
      easing: 'ease'
    });
  })
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info" data-aos="fade-right">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app__wrapper_img" data-aos="fade-left">
      <img src="https://images.pexels.com/photos/3296587/pexels-photo-3296587.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="laurels_img" />
    </div>
  </div>
  )
  
};

export default Laurels;