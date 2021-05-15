import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './scss/MakeCocktail.module.css';

import withCocktail from '../../../hoc-helpers/withCocktail';
import Form from './components/Form';
import Spinner from '../../../components/spinner/spinner';
import CocktailError from '../../../components/ErrorsPlace/CocktailError';

const MakeCocktail = (props) => {
  const { t } = useTranslation();
  const {
    active, cocktailImg, cocktail, cocktailHeader
  } = styles;
  const {
    cocktailList, spinnerLoading, loading, error, activatedCocktail,
    dragStartHandler, dragOverHandler, dropHandler, sortLi, addCocktail
  } = props;

  const cocktails = cocktailList.sort(sortLi).map((item) => {
    let activeCockClass = 'cocktail-item';

    if (item.active) {
      activeCockClass = `${activeCockClass} ${active}`;
    }

    return (
      <li
        key={item.name}
        className={activeCockClass}
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
      <div className={cocktailHeader}>
        {t('task.EnterOne')}
      </div>
      <Form
        addCocktail={addCocktail}
        spinnerLoading={spinnerLoading}
      />
      <ul>
        <li>
          <h3>{t('task.Ctrl')}</h3>
        </li>
        {errorMessage}
        {spinner}
        {content}
      </ul>
    </div>
  );
};

MakeCocktail.propTypes = {
  cocktailList: PropTypes.arrayOf(PropTypes.object).isRequired,
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
