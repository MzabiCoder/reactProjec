import {useState,useEffect} from 'react';
import {BsFillMenuButtonFill} from 'react-icons/bs'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import './Navbar.css';

const Navbar = () => {
  useEffect(()=>{
    AOS.init({
      offset: 400,
      duration: 1200,
      easing: 'ease'
    });
  })
  const [toggle,setToggle]=useState(false)
  
  return (
    <nav className='app__navbar'>
    <div className="app__navbar-logo" data-aos="fade-down">
      <img src="https://static1.squarespace.com/static/600627b33a7365382a86665e/t/600629afe996e1572906e20d/1611016634169/Big-Easy-logo.png?format=1500w" alt="app logo" />
    </div>
    <ul className='app__navbar-links' data-aos="fade-down">
      <li className='p__cormorant'> <a href="#header">Main</a></li>
      <li className='p__cormorant'> <a href="#about">About Us</a></li>
      <li className='p__cormorant'> <a href="#specialItem">Options</a></li>
      <li className='p__cormorant'> <a href="#awards">Awards</a></li>
      <li className='p__cormorant'> <a href="#contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login" data-aos="fade-down">
      <a className="p__cormorant">Log In / Register</a>
      <div/>
      <a className="p__cormorant">Book Table</a>
    </div>
    <div className="app__navbar-smallscreen" data-aos="fade-down">
      <BsFillMenuButtonFill color="#fff" fontSize={27} onClick={()=>setToggle(true)}/>
      {toggle && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggle(false)}/>
        <ul className='app__navbar-smallscreen_links'>
          <li className='p__opensans'> <a href="#home">Home</a></li>
          <li className='p__opensans'> <a href="#home">About</a></li>
          <li className='p__opensans'> <a href="#home">Menu</a></li>
          <li className='p__opensans'> <a href="#home">Awards</a></li>
          <li className='p__opensans'> <a href="#home">Contact</a></li>
        </ul>
        </div>
      )}
    </div>
  </nav>
  )
}
 
;

export default Navbar;
