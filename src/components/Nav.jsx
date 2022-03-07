import React from 'react'
import Logo from '../assets/discord-logo.svg'


export default function Nav() {
  return (
    <>
    <nav>
      <a href="#">
        <img className='nav-logo' src={Logo} alt="" />
      </a>
      <div className="nav__links">
        <a className="nav__link" href="#">Download</a>
        <a className="nav__link" href="#">Nitro</a>
        <a className="nav__link" href="#">Safety</a>
        <a className="nav__link" href="#">Support</a>
        <a className="nav__link" href="#">Blog</a>
        <a className="nav__link" href="#">Careers</a>
      </div>
      <a className="btn--login no-cursor" href="#">Login</a>
    </nav>
    
    </>

  )
}
