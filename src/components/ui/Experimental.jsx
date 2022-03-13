import React from 'react'
import { VscChevronDown } from "react-icons/vsc";

export default function Experimental() {
  function ToggleExperimentalDropdown() {
    const experimental = document.querySelector('.experimental-dropdown__list')
    experimental.classList.toggle('active')
  }

  return (
    <div className='experimental--wrapper'>
      <h1 className='experimental__title'>Feeling experimental?</h1>
      <p className='experimental__para'>Try our Public Test Build and test new features before they launch.</p>
      <div className="experimental-dropdown">
        <button href="" className="device__btn btn--with-arrow" onClick={() => ToggleExperimentalDropdown()}>Download Public Test Build<VscChevronDown /></button>
        <div className='experimental-dropdown__list'>
          <a className='experimental__link' href="" onClick={() => ToggleExperimentalDropdown()}>Windows</a>
          <a className='experimental__link' href="" onClick={() => ToggleExperimentalDropdown()}>Linux deb</a>
          <a className='experimental__link' href="" onClick={() => ToggleExperimentalDropdown()}>Linux tar.gz</a>
          <a className='experimental__link' href="" onClick={() => ToggleExperimentalDropdown()}>Mac</a>
        </div>
      </div>
    </div>
  )
}
