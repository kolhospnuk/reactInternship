import React from 'react';
import '../scss/modalSignUp.css';
import PropTypes from 'prop-types';

const ModalSignUp = ({ modalState }) => {
  let clazz = 'modal';

  if (modalState) {
    clazz = `${clazz} open`;
  }

  return (
    <div className={clazz}>
      <h3>Sign Up</h3>
    </div>
  );
};

ModalSignUp.propTypes = {
  modalState: PropTypes.string.isRequired
};

export default ModalSignUp;
