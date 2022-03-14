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
          <Device name={'iOS'} img={iPhone} grid={"device__grid-1"}/>
          <Device name={'Android'} img={Android} grid={"device__grid-2"}/>
          <Device name={'Mac'} img={Mac} grid={"device__grid-3"}/>
          <Device name={'Linux'} img={Linux} grid={"device__grid-4"}/>
          <Experimental className="device__grid-5" grid={"device__grid-5"}/>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}
