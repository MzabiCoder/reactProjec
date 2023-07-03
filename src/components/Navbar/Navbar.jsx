import {useState} from 'react';
import {BsFillMenuButtonFill} from 'react-icons/bs'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images'
// import Hamburger from 'hamburger-react'

import './Navbar.css';

const Navbar = () => {

  const [toggle,setToggle]=useState(false)
  
  return (
    <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="app logo" />
    </div>
    <ul className='app__navbar-links '>
      <li className='p__cormorant'> <a href="#home">Home</a></li>
      <li className='p__cormorant'> <a href="#home">About</a></li>
      <li className='p__cormorant'> <a href="#home">Menu</a></li>
      <li className='p__cormorant'> <a href="#home">Awards</a></li>
      <li className='p__cormorant'> <a href="#home">Contact</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__cormorant">Log In / Register</a>
      <div/>
      <a className="p__cormorant">Book Table</a>
    </div>
    <div className="app__navbar-smallscreen">
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
