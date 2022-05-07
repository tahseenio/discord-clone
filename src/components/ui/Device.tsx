import React, { useState } from 'react';
import { VscChevronDown } from 'react-icons/vsc';

interface Props {
  name: string;
  img: string;
  grid: string;
}

export default function Device({ name, img, grid }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={grid}>
      <div className='device--wrapper'>
        <h1 className='device__title'>{name}</h1>
        {name !== 'Linux' ? (
          <a href='/#' className='device__btn no-cursor'>
            Download
          </a>
        ) : (
          <>
            <div className={`linux-dropdown `}>
              <button
                className='device__btn btn--with-arrow'
                onClick={() => setIsModalOpen((state) => !state)}
              >
                Download <VscChevronDown />
              </button>
              <div
                className={`linux-dropdown__list ${isModalOpen && 'active'}`}
              >
                <a
                  className='linux__link no-cursor'
                  href='/#'
                  onClick={() => setIsModalOpen((state) => !state)}
                >
                  deb
                </a>
                <a
                  className='linux__link no-cursor'
                  href='/#'
                  onClick={() => setIsModalOpen((state) => !state)}
                >
                  tar.gz
                </a>
              </div>
            </div>
          </>
        )}
        <img className='device__img' src={img} alt='' />
      </div>
    </div>
  );
}
