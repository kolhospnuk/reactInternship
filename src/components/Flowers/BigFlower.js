import React from 'react';
import PropTypes from 'prop-types';
import './scss/big.css';

const BigFlower = ({ classBigFlower }) => (
  <div className={classBigFlower}>
    <div className="big-flower-item" />
    <div className="big-flower-item" />
    <div className="big-flower-item" />
    <div className="big-flower-item" />
  </div>
);

BigFlower.propTypes = {
  classBigFlower: PropTypes.string.isRequired
};

export default BigFlower;
