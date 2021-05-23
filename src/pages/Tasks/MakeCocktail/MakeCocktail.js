import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CocktailService from './components/CocktailService';
import MakeCocktailView from './MakeCocktailView';
import CREATE_COCKTAIL_LIST from '../../../store/makeCocktail/types';

const MakeCocktail = ({ cocktailCreate, cocktailList }) => {
  const [currentCocktail, setCurrentCocktail] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const showError = () => {
    setError(true);
    setLoading(false);
  };

  const addCocktail = (name = 'Sex on the Beach') => {
    const cocktailArr = [];

    const service = new CocktailService();
    service.getCocktail(name)
      .then((cocktail) => {
        cocktail.drinks.map((item, i) => {
          const cocktailObj = {
            key: cocktail.drinks[i].strDrink,
            id: i,
            order: i,
            name: cocktail.drinks[i].strDrink,
            img: cocktail.drinks[i].strDrinkThumb,
            active: false
          };
          cocktailArr.push(cocktailObj);
          return null;
        });

        cocktailCreate(cocktailArr);
        setLoading(loading);
      })
      .catch(showError);
  };

  function activatedCocktail(order) {
    const before = cocktailList.slice(0, order);
    const after = cocktailList.slice(order + 1);
    const elem = cocktailList[order];
    elem.active = !elem.active;

    const newArr = [...before, elem, ...after];

    cocktailCreate(newArr);
  }

  useEffect(() => {
    document.addEventListener('keypress', (e) => {
      if (e.code === 'KeyQ' && e.ctrlKey === true) {
        activatedCocktail(0);
      }
    });
    addCocktail();
  }, []);

  const spinnerLoading = (res) => {
    setError(!res);
    setLoading(res);
  };

  const sortLi = (a, b) => {
    return (
      a.order > b.order ? 1 : -1
    );
  };

  const dragStartHandler = (item) => {
    setCurrentCocktail(item);
  };

  const dropHandler = (e, item) => {
    e.preventDefault();

    const newArr = cocktailList.map((li) => {
      if (li.id === item.id) {
        return (
          { ...li, order: currentCocktail.order }
        );
      }
      if (li.id === currentCocktail.id) {
        return (
          { ...li, order: item.order }
        );
      }

      return li;
    });

    cocktailCreate(newArr);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  return (
    <MakeCocktailView
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
  );
};

const mapStateToProps = (state) => {
  return {
    cocktailList: state.makeCocktail.cocktailList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cocktailCreate: (newCocktailList) => {
      dispatch({
        type: CREATE_COCKTAIL_LIST,
        payload: newCocktailList
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MakeCocktail);

MakeCocktail.propTypes = {
  cocktailCreate: PropTypes.func.isRequired,
  cocktailList: PropTypes.arrayOf(PropTypes.object).isRequired
};
