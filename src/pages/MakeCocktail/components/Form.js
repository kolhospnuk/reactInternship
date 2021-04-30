import React, { useState } from 'react';
import PropTypes from 'prop-types';

/* Cocktail form */
const Form = ({ addCocktail, spinnerLoading }) => {
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addCocktail(name);
    spinnerLoading(true);
  };

  return (
    <form
      className="cocktail-form"
      onSubmit={onSubmit}
    >
      <input
        className="cocktail-form-input"
        type="text"
        onChange={(e) => setName(e.target.value)}
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
};

Form.propTypes = {
  addCocktail: PropTypes.func.isRequired,
  spinnerLoading: PropTypes.func.isRequired
};

export default Form;
