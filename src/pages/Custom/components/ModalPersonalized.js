import React from 'react';
import PropTypes from 'prop-types';
import '../scss/modalPersonalized.css';

const ModalPersonalized = ({ modalState }) => {
  let clazz = 'modal';

  if (modalState) {
    clazz = `${clazz} open`;
  }

  return (
    <div className={clazz}>
      <h3>Explore Furniture</h3>
    </div>
  );
};

ModalPersonalized.propTypes = {
  modalState: PropTypes.bool.isRequired
};

export default ModalPersonalized;