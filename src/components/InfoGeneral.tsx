import React from 'react'

interface Props {
  title: string;
  para: string;
  image: string;
  bgColor: string;
  identifier: string;
}

export default function InfoGeneral({ title, para, image, bgColor, identifier }: Props) {
  return (
      <div className="container" style={{backgroundColor: bgColor}}>
        <div className='row'>
          <div className={`InfoGeneral--wrapper InfoGeneral--${identifier}`}>
            <div className="InfoGeneral__info--wrapper">
              <h1 className='InfoGeneral__title'>
                {title}
              </h1>
              <p className='InfoGeneral__para'>
                {para}
              </p>
            </div>
            <figure className='InfoGeneral__img'>
              <img src={image} alt="" />
            </figure>
          </div>
        </div>
      </div>  
  )
}

