import React from 'react';
import * as shortid from 'shortid';
import '../scss/stars.css';

import star from '../../../assets/icons/star.svg';

const Stars = () => {
  const getContent = Array.from({ length: 5 }, (v, k) => k).map(() => (
    <img
      src={star}
      alt="star"
      key={shortid.generate()}
    />
  ));

  return (
    <>
      {getContent}
    </>
  );
};

export default Stars;
