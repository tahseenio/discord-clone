import React from 'react'
import { BsDownload } from 'react-icons/bs';

import clouds from '../assets/clouds.svg'
import leftAlien from '../assets/left-alien.svg'
import rightAlien from '../assets/right-alien.svg'

export default function Download() {
  return (
    <div className='download__container'>
      <div className="download--wrapper">
        <h1 className='download__title'>IMAGINE A PLACE...</h1>
        <p className='download__para'>...where you can belong to a school club, a gaming group, or a worldwide art community.
          Where just you and a handful of friends can spend time together. A place that makes it easy
          to talk every day and hang out more often.
        </p>
        <div className='btn--wrapper'>
          <a href="" className="btn__generic btn--white btn--download no-cursor">
            <BsDownload /> <span className="download__btn-title">Download for Windows</span>
          </a>
          <a href="" className='btn__generic btn--black no-cursor'>Open Discord in your browser</a>
        </div>
      </div>
      {/* <img src={clouds} className="download__clouds" alt="" /> */}
      <img src={leftAlien} className="download__left-alien" alt="" />
      <img src={rightAlien} className="download__right-alien" alt="" />
    </div>
  )
}
