import React from 'react'
import Device from './ui/Device'
import Experimental from './ui/Experimental'

import iPhone from '../assets/iPhone.svg'
import Android from '../assets/Android.svg'
import Mac from '../assets/Mac.svg'
import Linux from '../assets/Linux.svg'


export default function Devices() {
  return (
    <div className="container" style={{backgroundColor: 'white'}}>
      <div className="row">
        <div className="devices__wrapper">
          <Device name={'iOS'} img={iPhone} />
          <Device name={'Android'} img={Android} />
          <Device name={'Mac'} img={Mac} />
          <Device name={'Linux'} img={Linux} />
          <Experimental />
        </div>
      </div>
    </div>
  )
}
