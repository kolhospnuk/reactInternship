import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalWindow.module.css';

const ModalWindow = ({ modalWindowName, modalWindow }) => {
  let clazz = styles.modal;

  if (modalWindow) {
    clazz = `${clazz} open`;
  }

  return (
    <div className={clazz}>
      <h3>{modalWindowName}</h3>
    </div>
  );
};

ModalWindow.propTypes = {
  modalWindowName: PropTypes.string.isRequired,
  modalWindow: PropTypes.bool.isRequired
};

export default ModalWindow;
