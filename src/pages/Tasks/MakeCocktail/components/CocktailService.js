export default class CocktailService {
  apiBase = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  async getResource(url) {
    const data = await fetch(`${this.apiBase}${url}`);
    const res = await data.json();

    return res;
  }

  getCocktail(name) {
    return this.getResource(`${name}`);
  }
}
