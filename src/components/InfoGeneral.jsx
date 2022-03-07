import React from 'react'

export default function InfoGeneral({ title, para, image, bgColor, row }) {
  return (
      <div className="container" style={{backgroundColor: bgColor}}>
        <div className='row'>
          <div className="InfoGeneral--wrapper" style={{flexDirection: row}}>
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

