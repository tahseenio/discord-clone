import React from 'react'
import { VscChevronDown } from "react-icons/vsc";

interface Props {
  grid: string;
}

export default function Experimental({ grid }: Props) {
  function ToggleExperimentalDropdown() {
    const experimental = document.querySelector('.experimental-dropdown__list')
    experimental?.classList.toggle('active')
  }

  return (
    <div className={grid}>
      <div className='experimental--wrapper'>
        <h1 className='experimental__title'>Feeling experimental?</h1>
        <p className='experimental__para'>Try our Public Test Build and test new features before they launch.</p>
        <div className="experimental-dropdown">
          <button className="device__btn btn--with-arrow" onClick={() => ToggleExperimentalDropdown()}>Download Public Test Build<VscChevronDown /></button>
          <div className='experimental-dropdown__list'>
            <a className='experimental__link no-cursor' href="/" onClick={() => ToggleExperimentalDropdown()}>Windows</a>
            <a className='experimental__link no-cursor' href="/" onClick={() => ToggleExperimentalDropdown()}>Linux deb</a>
            <a className='experimental__link no-cursor' href="/" onClick={() => ToggleExperimentalDropdown()}>Linux tar.gz</a>
            <a className='experimental__link no-cursor' href="/" onClick={() => ToggleExperimentalDropdown()}>Mac</a>
          </div>
        </div>
      </div>
    </div>
  )
}
