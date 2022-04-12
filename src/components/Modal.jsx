import React from 'react'
import { GrClose } from "react-icons/gr";
import { Link } from 'react-router-dom'

export default function Modal({ toggleModal }) {
  return (
    <section className='modal'>
      <GrClose className='close-btn' onClick={toggleModal} />
      <h1>
        Not completed yet...
      </h1>
    </section>
  )
}
