import React from 'react'
import Logo from '../assets/discord-logo.svg'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to="/discord-clone">
        <a href="#">
          <img className='nav-logo' src={Logo} alt="" />
        </a>
      </Link>
      <ul className="nav__links">
        <Link to="/discord-clone/download" className="nav__link">
          Download
        </Link>
        <Link to="/discord-clone/nitro" className="nav__link">
          Nitro
        </Link>
        <Link to="/discord-clone/safety" className="nav__link">
          Safety
        </Link>
        <Link to="/discord-clone/support" className="nav__link">
          Support
        </Link>
        <Link to="/discord-clone/blog" className="nav__link">
          Blog
        </Link>
        <Link to="/discord-clone/careers" className="nav__link">
          Careers
        </Link>
      </ul>
      <a className="btn--login no-cursor" href="#">Login</a>
    </nav>
  )
}
