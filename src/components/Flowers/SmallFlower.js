import React from 'react';
import PropTypes from 'prop-types';
import './scss/small.css';

const SmallFlower = ({ classSmallFlower, flowerTittle }) => {
  return (
    <>
      <div className="small-flower">
        <div className={classSmallFlower} />
        <div className={classSmallFlower} />
        <div className={classSmallFlower} />
        <div className={classSmallFlower} />
      </div>
      <span>{flowerTittle}</span>
    </>
  );
};

SmallFlower.propTypes = {
  classSmallFlower: PropTypes.string.isRequired,
  flowerTittle: PropTypes.string.isRequired
};

export default SmallFlower;
