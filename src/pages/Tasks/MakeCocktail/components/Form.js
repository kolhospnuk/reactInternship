import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from '../scss/Form.module.css';

/* Cocktail form */
const Form = ({ addCocktail, spinnerLoading }) => {
  const { t } = useTranslation();
  const {
    cocktailForm, cocktailFormInput, cocktailFormBtn
  } = styles;
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addCocktail(name);
    spinnerLoading(true);
  };

  return (
    <form
      className={cocktailForm}
      onSubmit={onSubmit}
    >
      <input
        className={cocktailFormInput}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder={t('task.EnterCocktail')}
        value={name}
      />
      <button
        type="button"
        className={cocktailFormBtn}
      >
        {t('task.Enter')}
      </button>
    </form>
  );
};

Form.propTypes = {
  addCocktail: PropTypes.func.isRequired,
  spinnerLoading: PropTypes.func.isRequired
};

export default Form;
