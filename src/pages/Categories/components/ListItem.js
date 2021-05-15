import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/ListItem.module.css';

const ListItem = ({ categoriesData, i }) => {
  const { categoriesListItem, categoriesListItemImg, categoriesListItemBtn } = styles;
  const { name, img, btn } = categoriesData[i];

  return (
    <div className={categoriesListItem}>
      <span>{name}</span>
      <img className={categoriesListItemImg} src={img} alt={name} />
      <button
        type="button"
        className={categoriesListItemBtn}
      >
        {btn}
      </button>
    </div>
  );
};

ListItem.propTypes = {
  categoriesData: PropTypes.arrayOf(PropTypes.object).isRequired,
  i: PropTypes.number.isRequired
};

export default ListItem;
