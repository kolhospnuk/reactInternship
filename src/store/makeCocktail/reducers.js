import CREATE_COCKTAIL_LIST from './types';

const initialState = {
  cocktailList: []
};

const makeCocktail = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COCKTAIL_LIST:
      return {
        cocktailList: action.payload
      };
    default:
      return state;
  }
};

export default makeCocktail;
