import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrangeBtn.module.css';

const OrangeBtn = ({ className, setModalWindow, nameBtn }) => {
  return (
    <button
      type="button"
      className={`${styles.orangeBtn} ${className}`}
      onClick={() => setModalWindow((modal) => !modal)}
    >
      {nameBtn}
    </button>
  );
};

OrangeBtn.propTypes = {
  className: PropTypes.string.isRequired,
  setModalWindow: PropTypes.func.isRequired,
  nameBtn: PropTypes.string.isRequired
};

export default OrangeBtn;
