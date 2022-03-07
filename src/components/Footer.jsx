import React from 'react'

import { BsTwitter, BsInstagram, BsYoutube, BsFacebook } from 'react-icons/bs';
import Logo from '../assets/discord-logo.svg'

export default function Footer() {
  return (
    <div className="container container--Footer">
      <div className="row footer--row">
        <footer>
          <div className='footer__upper'>
            <div className="footer__left-side">
              <h2 className='left-side__title'>Imagine a place</h2>
              <select className='footer__select' value="">
                <option name="" id="">English, USA</option>
              </select>
              <div className="footer__social--list">
                <a href=""><BsTwitter /></a>
                <a href=""><BsInstagram /></a>
                <a href=""><BsFacebook /></a>
                <a href=""><BsYoutube /></a>
              </div>
            </div>
            <div className="footer__right-side">
              <div className="footer__list">
                <span className='footer__list-title'>Product</span>
                <a className='list__link no-cursor' href="">Download</a>
                <a className='list__link no-cursor' href="">Nitro</a>
                <a className='list__link no-cursor' href="">Status</a>
              </div>
              <div className="footer__list">
                <span className='footer__list-title'>Company</span>
                <a className='list__link no-cursor' href="">About</a>
                <a className='list__link no-cursor' href="">Jobs</a>
                <a className='list__link no-cursor' href="">Branding</a>
                <a className='list__link no-cursor' href="">Newsroom</a>
              </div>
              <div className="footer__list">
                <span className='footer__list-title'>Resources</span>
                <a className='list__link no-cursor' href="">College</a>
                <a className='list__link no-cursor' href="">Support</a>
                <a className='list__link no-cursor' href="">Safety</a>
                <a className='list__link no-cursor' href="">Blog</a>
                <a className='list__link no-cursor' href="">Feedback</a>
                <a className='list__link no-cursor' href="">Developers</a>
                <a className='list__link no-cursor' href="">StreamKit</a>
              </div>
              <div className="footer__list">
                <span className='footer__list-title'>Policies</span>
                <a className='list__link no-cursor' href="">Terms</a>
                <a className='list__link no-cursor' href="">Privacy</a>
                <a className='list__link no-cursor' href="">Cookie Settings</a>
                <a className='list__link no-cursor' href="">Guidelines</a>
                <a className='list__link no-cursor' href="">Acknowledgements</a>
                <a className='list__link no-cursor' href="">Licenses</a>
                <a className='list__link no-cursor' href="">Moderation</a>
              </div>
            </div>
          </div>
          <div className="footer__lower">
            <a href="#">
              <img className='footer-logo' src={Logo} alt="" />
            </a>
            <a className="btn__signup--purple no-cursor" href="#">Sign up</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
