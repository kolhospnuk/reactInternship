import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalWindow.module.css';

const ModalWindow = ({ modalWindowName, modalWindow }) => {
  const { modal, open } = styles;

  return (
    <div className={modalWindow ? `${modal} ${open}` : modal}>
      <h3>{modalWindowName}</h3>
    </div>
  );
};

ModalWindow.propTypes = {
  modalWindowName: PropTypes.string.isRequired,
  modalWindow: PropTypes.bool.isRequired
};

export default ModalWindow;
