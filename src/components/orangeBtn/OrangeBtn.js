import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrangeBtn.module.css';

const OrangeBtn = ({ setModalWindow, nameBtn }) => {
  return (
    <button
      type="button"
      className={`${styles.headerPromoTxtBtn} ${styles.orangeBtn}`}
      onClick={() => setModalWindow((modal) => !modal)}
    >
      {nameBtn}
    </button>
  );
};

OrangeBtn.propTypes = {
  setModalWindow: PropTypes.func.isRequired,
  nameBtn: PropTypes.string.isRequired
};

export default OrangeBtn;
