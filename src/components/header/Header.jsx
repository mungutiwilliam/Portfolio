import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/IMG_3994 copy.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
        <div className="container header_container">
            <h5>Hello Stranger</h5>
            <h1>I am William Munguti</h1>
            <h5 className="text-light">Software Engineer & Data Scientist</h5>
            <CTA/>
            <HeaderSocials/>


            <div className="me">
                <img src={Me} alt="me" />
            </div>
            <a href="#contact" className="scroll_down">Scroll Down</a>

        </div>
    </header>
  )
}

export default Header