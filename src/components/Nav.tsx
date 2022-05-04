import React, { useState } from 'react'
import Logo from '../assets/discord-logo.svg'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from './Modal';

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


export default function Nav() {
  const [modal, setModal] = useState(false)

  function toggleModal() {
    setModal(!modal)
  }

  modal ? disableBodyScroll(document.body) : enableBodyScroll(document.body)

  return (
    <nav>
      <Link to="/discord-clone">
        <a href="/#">
          <img className='nav-logo' src={Logo} alt="" />
        </a>
      </Link>
      <ul className="nav__links">
        <Link to="/discord-clone/download" className="nav__link">
          Download
        </Link>
        <Link to="/discord-clone/nitro" className="nav__link no-cursor">
          Nitro
        </Link>
        <Link to="/discord-clone/safety" className="nav__link no-cursor">
          Safety
        </Link>
        <Link to="/discord-clone/support" className="nav__link no-cursor">
          Support
        </Link>
        <Link to="/discord-clone/blog" className="nav__link no-cursor">
          Blog
        </Link>
        <Link to="/discord-clone/careers" className="nav__link no-cursor">
          Careers
        </Link>
      </ul>
      <div className="nav__right--wrapper">
        <a className="btn--login no-cursor" href="/#">Login</a>
        <a href="/#" onClick={toggleModal}><GiHamburgerMenu className='modal-btn' /></a>
      </div>
      {modal && <Modal {...{ toggleModal }} />}
    </nav>
  )
}
