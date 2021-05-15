import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './SectionTittle.module.css';
import flower from '../../assets/icons/flower.png';

const SectionTittle = ({ tittleId }) => {
  const { t } = useTranslation();
  const { flowerTittle, tittle } = (t('sectionsTittles', { returnObjects: true }))[tittleId];
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
  tittleId: PropTypes.string.isRequired
};

export default SectionTittle;
