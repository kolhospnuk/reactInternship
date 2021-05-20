import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from '../scss/Form.module.css';

/* Cocktail form */
const Form = ({ addCocktail, spinnerLoading }) => {
  const { t } = useTranslation();
  const {
    cocktailForm, cocktailFormLabel, cocktailFormInput, cocktailFormBtn, cocktailFormSmall
  } = styles;
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addCocktail(name);
    spinnerLoading(true);
  };

  return (
    <form
      onSubmit={onSubmit}
    >
      <div className={cocktailForm}>
        <label
          className={cocktailFormLabel}
          htmlFor={t('task.EnterOne')}
        >
          {t('task.EnterOne')}
        </label>
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
        <small className={cocktailFormSmall}>
          {t('task.Ctrl')}
        </small>
      </div>
    </form>
  );
};

Form.propTypes = {
  addCocktail: PropTypes.func.isRequired,
  spinnerLoading: PropTypes.func.isRequired
};

export default Form;
