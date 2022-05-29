import React, { useEffect, useRef, useState } from 'react';
import { VscChevronDown } from 'react-icons/vsc';

interface Props {
  name: string;
  img: string;
  grid: string;
}

export default function Device({ name, img, grid }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!isModalOpen || dropdown.current?.contains(target)) return;
      setIsModalOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!isModalOpen || keyCode !== 27) return;
      setIsModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

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
            <div className={`linux-dropdown `} ref={dropdown}>
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
