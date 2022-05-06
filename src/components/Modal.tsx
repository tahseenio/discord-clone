import React from 'react';
import { GrClose } from 'react-icons/gr';
import { BsDownload } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import logo from '../assets/discord-logo.svg';
import ModalLink from './ui/ModalLink';

interface Props {
  toggleModal: () => void;
}

export default function Modal({ toggleModal }: Props) {
  return (
    <section className='modal'>
      <div className='modal__upper--wrapper'>
        <GrClose className='close-btn' onClick={toggleModal} />
        <img src={logo} className='modal-logo' alt='' />
      </div>
      <div className='border'></div>
      <ul className='modal__list'>
        <Link to={'/'}>
          <ModalLink {...{ toggleModal }} name={'Home'} />
        </Link>
        <Link to={'/download'}>
          <ModalLink {...{ toggleModal }} name={'Download'} />
        </Link>
        <ModalLink {...{ toggleModal }} cursor={true} name={'Nitro'} />
        <ModalLink {...{ toggleModal }} cursor={true} name={'Safety'} />
        <ModalLink {...{ toggleModal }} cursor={true} name={'Mod Academy'} />
        <ModalLink {...{ toggleModal }} cursor={true} name={'Support'} />
        <ModalLink {...{ toggleModal }} cursor={true} name={'Blog'} />
        <ModalLink {...{ toggleModal }} cursor={true} name={'Careers'} />
      </ul>
      <a
        href='/#'
        className='btn__generic btn--download btn--purple no-cursor btn-modal'
      >
        <BsDownload />{' '}
        <span className='download__btn-title'>Download for Windows</span>
      </a>
    </section>
  );
}
