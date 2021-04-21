import React from 'react';
import PropTypes from 'prop-types';
import './scss/makeCocktail.css';

import { withCocktail } from '../../components/hoc-helpers/withCocktail';
import Form from './components/AddForm';
import Spinner from '../../components/spinner/spinner';
import CocktailError from '../../components/ErrorsPlace/cocktailError';

const MakeCocktail = (props) => {
  const {
    cocktailList, spinnerLoading, loading, error, activatedCocktail,
    dragStartHandler, dragOverHandler, dropHandler, sortLi, addCocktail
  } = props;

  const cocktails = cocktailList.sort(sortLi).map((item) => {
    let activeCockClass = 'cocktail-item';

    if (item.active) {
      activeCockClass = `${activeCockClass} active`;
    }

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        className={activeCockClass}
        onClick={() => activatedCocktail(item.order)}
        onKeyDown={() => activatedCocktail(item.order)}
        draggable
        // draggable={true}
        onDragStart={() => dragStartHandler(item)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, item)}
      >
        {item.name}
        <div className="cocktail-img">
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
    <div className="cocktail">
      <div className="cocktail-header">
        Enter one ingredient of alcoholic cocktail(for example: martini)
      </div>
      <Form
        addCocktail={addCocktail}
        spinnerLoading={spinnerLoading}
      />
      <ul>
        <li>
          <h3>Ctrl+q, if you want select first cocktail</h3>
        </li>
        {errorMessage}
        {spinner}
        {content}
      </ul>
    </div>
  );
};

MakeCocktail.propTypes = {
  cocktailList: PropTypes.arrayOf(PropTypes.string).isRequired,
  spinnerLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  activatedCocktail: PropTypes.func.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dropHandler: PropTypes.func.isRequired,
  sortLi: PropTypes.func.isRequired,
  addCocktail: PropTypes.func.isRequired
};

export default withCocktail(MakeCocktail);
