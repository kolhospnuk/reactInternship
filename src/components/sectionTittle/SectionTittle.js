import React from 'react';
import PropTypes from 'prop-types';
import styles from './scss/SectionTittle.module.css';
import flower from '../../assets/icons/flower.png';

const SectionTittle = ({ flowerTittle, tittle }) => {
  const { sectionTittle, sectionTittleSubtitle, sectionTittleLine } = styles;

  return (
    <div className={sectionTittle}>
      <div className={sectionTittleSubtitle}>
        <img src={flower} alt="flower" />
        <span>{flowerTittle}</span>
      </div>
      <div className={sectionTittleLine}>
        <h2>{tittle}</h2>
      </div>
    </div>
  );
};

SectionTittle.propTypes = {
  flowerTittle: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired
};

export default SectionTittle;
