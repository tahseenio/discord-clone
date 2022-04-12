import React from 'react';
import { VscChevronDown } from "react-icons/vsc";

export default function Device({ name, img, grid }) {
  function ToggleLinuxDropdown() {
    const linux = document.querySelector('.linux-dropdown__list')
    linux.classList.toggle('active')
  }

  return (
    <div className={grid}>
      <div className='device--wrapper'>
        <h1 className='device__title'>{name}</h1>
        {(name !== 'Linux')
          ? <a href="" className="device__btn no-cursor">Download</a>
          : <>
            <div className="linux-dropdown">
              <button href="" className="device__btn btn--with-arrow" onClick={() => ToggleLinuxDropdown()}>Download <VscChevronDown /></button>
              <div className='linux-dropdown__list'>
                <a className='linux__link no-cursor' href="" onClick={() => ToggleLinuxDropdown()}>deb</a>
                <a className='linux__link no-cursor' href="" onClick={() => ToggleLinuxDropdown()}>tar.gz</a>
              </div>
            </div>
          </>
        }
        <img className='device__img' src={img} alt="" />
      </div>
    </div>
  )
}
