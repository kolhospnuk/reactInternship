import CREATE_COCKTAIL_LIST from './types';

const createCocktail = (newCocktailList) => {
  return {
    type: CREATE_COCKTAIL_LIST,
    payload: newCocktailList
  };
};

export default createCocktail;
