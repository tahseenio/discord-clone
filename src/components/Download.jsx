import React from 'react'
import { BsDownload } from 'react-icons/bs';

export default function Download() {
  return (
    <div className='download--wrapper'>
      <h1 className='download__title'>IMAGINE A PLACE...</h1>
      <p className='download__para'>...where you can belong to a school club, a gaming group, or a worldwide art community. 
        Where just you and a handful of friends can spend time together. A place that makes it easy 
        to talk every day and hang out more often.
      </p>
      <div className='btn--wrapper'>
        {/* <a className='btn__download btn--white' href="">
          <span className="download--fix">
            <BsDownload /> Download for Windows
          </span>
        </a> */}
        <a href="" className="btn__generic btn--white btn--download">
            <BsDownload /> <span className="download__btn-title">Download for Windows</span> 
        </a>
        <a href="" className='btn__generic btn--black'>Open Discord in your browser</a>
        {/* <a className='btn__download btn--black' href="">Open Discord in your browser</a> */}
      </div>
    </div>
  )
}
