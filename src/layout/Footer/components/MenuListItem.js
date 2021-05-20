import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/MenuListItem.module.css';

/* Footer component */
const MenuListItem = ({ listItemArr, i }) => {
  const openLink = () => {
    alert('Open link');
  };

  const elements = listItemArr[i].map((item) => (
    <li
      key={item}
      className={styles.menuListItem}
      role="presentation"
      onClick={openLink}
    >
      {item}
    </li>
  ));

  return (
    <>
      {elements}
    </>
  );
};

MenuListItem.propTypes = {
  listItemArr: PropTypes.arrayOf(PropTypes.array).isRequired,
  i: PropTypes.number.isRequired
};

export default MenuListItem;
