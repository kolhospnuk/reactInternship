import React from 'react';
import PropTypes from 'prop-types';
import styles from './scss/MakeCocktailView.module.css';

import Spinner from '../../../components/spinner/spinner';
import CocktailError from '../../../components/ErrorsPlace/CocktailError';
import Form from './components/Form';

const MakeCocktailView = (props) => {
  const {
    active, cocktailImg, cocktail, cocktailListClass, cocktailListClassItem
  } = styles;
  const {
    cocktailList, loading, error, activatedCocktail, addCocktail,
    dragStartHandler, dragOverHandler, dropHandler, sortLi, spinnerLoading
  } = props;

  const cocktails = cocktailList.sort(sortLi).map((item) => {
    return (
      <li
        key={item.name}
        className={item.active ? `${cocktailListClassItem} ${active}` : cocktailListClassItem}
        role="presentation"
        onClick={() => activatedCocktail(item.order)}
        draggable // draggable={true}
        onDragStart={() => dragStartHandler(item)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, item)}
      >
        {item.name}
        <div className={cocktailImg}>
          <img
            src={item.img}
            alt="img"
          />
        </div>
      </li>
    );
  });

  const errorMessage = error ? <CocktailError /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <>{cocktails}</> : null;

  return (
    <div className={cocktail}>
      <Form
        addCocktail={addCocktail}
        spinnerLoading={spinnerLoading}
      />
      <ul className={cocktailListClass}>
        {errorMessage}
        {spinner}
        {content}
      </ul>
    </div>
  );
};

MakeCocktailView.propTypes = {
  cocktailList: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCocktail: PropTypes.func.isRequired,
  spinnerLoading: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  activatedCocktail: PropTypes.func.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dropHandler: PropTypes.func.isRequired,
  sortLi: PropTypes.func.isRequired
};

export default MakeCocktailView;
