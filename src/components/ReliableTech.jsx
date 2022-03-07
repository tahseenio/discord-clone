import React from 'react'
import { BsDownload } from 'react-icons/bs';
import justChillin from '../assets/just-chillin.svg'

export default function ReliableTech() {
  return (
    <div className="container reliable-tech__container">
      <div className="row">
        <div className="reliable-tech--wrapper">
          <h1 className="reliable-tech__title">
            Reliable Tech For Staying Close
          </h1>
          <p className='reliable-tech__para'>
          Low-latency voice and video feels like you're in the same room. 
          Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
          </p>
          <figure>
            <img src={justChillin} alt="" />
          </figure>
          <h2 className='reliable-tech__sub-title'>Ready to start your journey?</h2>
          <a href="" className="btn__generic btn--download btn--purple">
              <BsDownload /> <span className="download__btn-title">Download for Windows</span> 
          </a>
        </div>
      </div>  
    </div>
  )
}
