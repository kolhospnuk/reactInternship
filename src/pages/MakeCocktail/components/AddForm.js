import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  cocktailChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  onSubmit = (e) => {
    const { name } = this.state;
    const { addCocktail, spinnerLoading } = this.props;

    e.preventDefault();
    addCocktail(name);
    spinnerLoading(true);
  }

  render() {
    const { name } = this.state;
    const inputClass = 'cocktail-form-input';

    return (
      <form
        className="cocktail-form"
        onSubmit={this.onSubmit}
      >
        <input
          className={inputClass}
          type="text"
          onChange={this.cocktailChange}
          placeholder="Enter cocktail..."
          value={name}
        />
        <button
          type="button"
          className="cocktail-form-btn"
        >
          Enter
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  addCocktail: PropTypes.func.isRequired,
  spinnerLoading: PropTypes.func.isRequired
};
