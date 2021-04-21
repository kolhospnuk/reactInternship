import React from 'react';
import PropTypes from 'prop-types';
import '../scss/modalFurniture.css';

const ModalFurniture = ({ modalState }) => {
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

ModalFurniture.propTypes = {
  modalState: PropTypes.string.isRequired
};

export default ModalFurniture;
