import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ categoriesData, i }) => {
  const { name, img, btn } = categoriesData[i];

  return (
    <div className="categories-list-item">
      <span>{name}</span>
      <img className="categories-list-item-img" src={img} alt={name} />
      <button
        type="button"
        className="categories-list-item-btn"
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
