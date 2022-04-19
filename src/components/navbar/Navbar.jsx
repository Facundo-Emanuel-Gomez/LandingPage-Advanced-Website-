import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/logo.svg'

//Bem -> Block Element Modifier like react_navbar-Links
const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wreact">What is React</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='react_navbar'>
      <div className='react_navbar-links'>
        <div className='react_navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='react_navbar-links_container'>
         <Menu/>
        </div>
      </div>
      <div className='react_navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='react_navbar-menu'>
          {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
            <div className='react_navbar-menu_container scale-up-center'>
              <div className='react_navbar-menu_container-links'>
                <Menu/>
                <div className='react_navbar-menu_container-links-sign'>
                  <p>Sign in</p>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  )
}

export default Navbar
