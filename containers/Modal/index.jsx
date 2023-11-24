import React from 'react';
import './styles.css';

function Modal({children}) {
  return (
    <div className='modal'>
      {children}
    </div>
  );
}

export default Modal;
