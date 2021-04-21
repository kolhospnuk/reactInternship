import React, { Component } from 'react';
import CocktailService from '../../pages/MakeCocktail/components/CocktailService';

// eslint-disable-next-line import/prefer-default-export
export const withCocktail = (View) => {
  return class extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      cocktailList: [],
      currentCocktail: null,
      loading: false,
      error: false
    }

    componentDidMount() {
      document.addEventListener('keypress', (e) => {
        if (e.code === 'KeyQ' && e.ctrlKey === true) {
          this.activatedCocktail(0);
        }
      });
    }

    showError = () => {
      this.setState({
        error: true,
        loading: false
      });
    }

    spinnerLoading = (res) => {
      this.setState({
        loading: res,
        error: !res
      });
    }

    addCocktail = (name) => {
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

          this.setState({
            cocktailList: cocktailArr,
            loading: false
          });
        })
        .catch(this.showError);
    }

    activatedCocktail = (order) => {
      this.setState(({ cocktailList }) => {
        const before = cocktailList.slice(0, order);
        const after = cocktailList.slice(order + 1);
        const elem = cocktailList[order];
        elem.active = !elem.active;

        const newArr = [...before, elem, ...after];

        return {
          cocktailList: newArr
        };
      });
    }

    sortLi = (a, b) => {
      return (
        a.order > b.order ? 1 : -1
      );
    }

    dragStartHandler = (item) => {
      this.setState({
        currentCocktail: item
      });
    }

    dropHandler = (e, item) => {
      const { cocktailList, currentCocktail } = this.state;
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

      this.setState({
        cocktailList: newArr
      });
    }

    dragOverHandler(e) {
      e.preventDefault();
    }

    render() {
      const { cocktailList, loading, error } = this.state;

      return (
        <View
          cocktailList={cocktailList}
          loading={loading}
          activatedCocktail={this.activatedCocktail}
          dragStartHandler={this.dragStartHandler}
          dragOverHandler={this.dragOverHandler}
          dropHandler={this.dropHandler}
          sortLi={this.sortLi}
          addCocktail={this.addCocktail}
          spinnerLoading={this.spinnerLoading}
          error={error}
        />
      );
    }
  };
};
