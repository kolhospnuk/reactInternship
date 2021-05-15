import React from 'react';
import PropTypes from 'prop-types';
import './scss/SmallFlower.module.css';

const SmallFlower = ({ flowerTittle }) => (
  <>
    <div className="smallFlower">
      <div className="smallFlowerItem" />
      <div className="smallFlowerItem" />
      <div className="smallFlowerItem" />
      <div className="smallFlowerItem" />
    </div>
    <span>{flowerTittle}</span>
  </>
);

SmallFlower.propTypes = {
  flowerTittle: PropTypes.string.isRequired
};

export default SmallFlower;
