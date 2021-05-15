import React from 'react';
import PropTypes from 'prop-types';
import * as shortid from 'shortid';
import styles from '../scss/ImgList.module.css';

const ImgList = ({ imgListLinks }) => {
  const element = imgListLinks.map((item) => {
    const { img, alt } = item;

    return (
      <div
        key={shortid.generate()}
        className={styles.testimonyListImg}
      >
        <img src={img} alt={alt} />
      </div>
    );
  });

  return (
    <>
      {element}
    </>
  );
};

ImgList.propTypes = {
  imgListLinks: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ImgList;
