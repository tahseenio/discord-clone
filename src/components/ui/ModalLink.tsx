import React from 'react'

interface Props {
  toggleModal: () => void;
  name: string;
  cursor?: boolean;
}

export default function ModalLink({ toggleModal, name, cursor }: Props) {
  return (
    <li className={cursor ? 'modal_link no-cursor' : 'modal_link'} onClick={toggleModal}>{name}</li>
  )
}
