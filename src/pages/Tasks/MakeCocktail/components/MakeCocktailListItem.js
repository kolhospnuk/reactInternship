import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/MakeCocktailListItem.module.css';

const MakeCocktailListItem = ({ name, active, img }) => {
  const { listItemImg, cocktailTittleActive, cocktailTittle } = styles;
  return (
    <>
      <h3 className={active ? cocktailTittleActive : cocktailTittle}>{name}</h3>
      <div className={listItemImg}>
        <img
          src={img}
          alt="img"
        />
      </div>
    </>
  );
};

export default MakeCocktailListItem;

MakeCocktailListItem.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};
