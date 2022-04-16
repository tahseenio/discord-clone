import React from 'react'

export default function ModalLink({ toggleModal, name, cursor }) {
  return (
    <li className={cursor ? 'modal_link no-cursor' : 'modal_link'} onClick={toggleModal}>{name}</li>
  )
}
