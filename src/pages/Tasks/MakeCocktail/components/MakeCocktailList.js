import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CocktailError from '../../../../components/ErrorsPlace/CocktailError';
import Spinner from '../../../../components/spinner/spinner';
import styles from '../scss/MakeCocktailList.module.css';
import MakeCocktailListItem from './MakeCocktailListItem';

const MakeCocktailList = (props) => {
  const {
    cocktailList, loading, error, activatedCocktail,
    dragStartHandler, dragOverHandler, dropHandler, sortLi,
  } = props;
  const { list, listItem } = styles;
  const cocktails = cocktailList.sort(sortLi).map((item) => {
    const {
      name, active, order, img
    } = item;
    return (
      <li
        key={name}
        className={listItem}
        role="presentation"
        onClick={() => activatedCocktail(order)}
        draggable // draggable={true}
        onDragStart={() => dragStartHandler(item)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, item)}
      >
        <MakeCocktailListItem
          name={name}
          active={active}
          img={img}
        />
      </li>
    );
  });

  const errorMessage = error ? <CocktailError /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <>{cocktails}</> : null;

  return (
    <ul className={list}>
      {errorMessage}
      {spinner}
      {content}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    cocktailList: state.makeCocktail.cocktailList
  };
};

export default connect(mapStateToProps)(MakeCocktailList);

MakeCocktailList.propTypes = {
  cocktailList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  activatedCocktail: PropTypes.func.isRequired,
  dragStartHandler: PropTypes.func.isRequired,
  dragOverHandler: PropTypes.func.isRequired,
  dropHandler: PropTypes.func.isRequired,
  sortLi: PropTypes.func.isRequired
};
