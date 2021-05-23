import React from 'react';
import PropTypes from 'prop-types';
import styles from './scss/MakeCocktailView.module.css';

import Form from './components/Form';
import MakeCocktailList from './components/MakeCocktailList';

const MakeCocktailView = (props) => {
  const { cocktail } = styles;
  const {
    loading, error, activatedCocktail, dragStartHandler, sortLi,
    dragOverHandler, dropHandler, addCocktail, spinnerLoading
  } = props;

  return (
    <div className={cocktail}>
      <Form
        addCocktail={addCocktail}
        spinnerLoading={spinnerLoading}
      />
      <MakeCocktailList
        loading={loading}
        activatedCocktail={activatedCocktail}
        dragStartHandler={dragStartHandler}
        dragOverHandler={dragOverHandler}
        dropHandler={dropHandler}
        sortLi={sortLi}
        addCocktail={addCocktail}
        spinnerLoading={spinnerLoading}
        error={error}
      />
    </div>
  );
};

export default MakeCocktailView;

MakeCocktailView.propTypes = {
  addCocktail: PropTypes.func.isRequired,
  spinnerLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  activatedCocktail: PropTypes.func.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dropHandler: PropTypes.func.isRequired,
  sortLi: PropTypes.func.isRequired
};
