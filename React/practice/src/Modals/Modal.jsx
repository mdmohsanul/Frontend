import React from 'react'

const Modal = ({setOpenModal}) => {
  return (
    <div className='modal'>
        <h1>Modal</h1>
        <button onClick={() => setOpenModal(false)}>❌</button>
    </div>
  )
}

export default Modal