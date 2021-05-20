import React, { useEffect, useState } from 'react';
import CocktailService from './components/CocktailService';
import MakeCocktailView from './MakeCocktailView';

const MakeCocktail = () => {
  const [cocktailList, setCocktailList] = useState([]);
  const [currentCocktail, setCurrentCocktail] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const showError = () => {
    setError(true);
    setLoading(false);
  };

  const addCocktail = (name) => {
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

        setCocktailList(cocktailArr);
        setLoading(loading);
        console.log(cocktailArr);
        console.log(cocktailList);
      })
      .catch(showError);
  };

  function activatedCocktail(order) {
    const before = cocktailList.slice(0, order);
    const after = cocktailList.slice(order + 1);
    const elem = cocktailList[order];
    elem.active = !elem.active;

    const newArr = [...before, elem, ...after];

    setCocktailList(newArr);
  }

  useEffect(() => {
    document.addEventListener('keypress', (e) => {
      if (e.code === 'KeyQ' && e.ctrlKey === true) {
        activatedCocktail(0);
      }
    });
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

    setCocktailList(newArr);
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  return (
    <MakeCocktailView
      cocktailList={cocktailList}
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

export default MakeCocktail;
