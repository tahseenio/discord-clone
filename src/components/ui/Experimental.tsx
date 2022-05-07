import React, { useState } from 'react';
import { VscChevronDown } from 'react-icons/vsc';

interface Props {
  grid: string;
}

export default function Experimental({ grid }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsModalOpen((state) => !state);
  };

  return (
    <div className={grid}>
      <div className='experimental--wrapper'>
        <h1 className='experimental__title'>Feeling experimental?</h1>
        <p className='experimental__para'>
          Try our Public Test Build and test new features before they launch.
        </p>
        <div className='experimental-dropdown'>
          <button
            className='device__btn btn--with-arrow'
            onClick={(e) => handleClick(e)}
          >
            Download Public Test Build
            <VscChevronDown />
          </button>
          <div
            className={`experimental-dropdown__list ${isModalOpen && 'active'}`}
          >
            <a
              className='experimental__link no-cursor'
              href='/download'
              onClick={(e) => handleClick(e)}
            >
              Windows
            </a>
            <a
              className='experimental__link no-cursor'
              href='/download'
              onClick={(e) => handleClick(e)}
            >
              Linux deb
            </a>
            <a
              className='experimental__link no-cursor'
              href='/download'
              onClick={(e) => handleClick(e)}
            >
              Linux tar.gz
            </a>
            <a
              className='experimental__link no-cursor'
              href='/download'
              onClick={(e) => handleClick(e)}
            >
              Mac
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
