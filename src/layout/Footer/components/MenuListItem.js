import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from '../scss/MenuListItem.module.css';
import flowerOrange from '../../../assets/icons/flowerOrange.png';

/* Footer component */
const MenuListItem = ({ listItemArr, i }) => {
  const { t } = useTranslation();

  const openLink = () => {
    alert('Open link');
  };

  const elements = listItemArr[i].map((item) => (
    <li
      key={item}
      className={styles.footerMenuListItem}
      role="presentation"
      onClick={openLink}
    >
      {item}
    </li>
  ));

  return (
    <>
      <img src={flowerOrange} alt="flowerOrange" />
      <span>{t('woodies')}</span>
      {elements}
    </>
  );
};

MenuListItem.propTypes = {
  listItemArr: PropTypes.arrayOf(PropTypes.array).isRequired,
  i: PropTypes.number.isRequired
};

export default MenuListItem;
