import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../scss/BtnLng.module.css';

const BtnLng = () => {
  const { i18n, t } = useTranslation();
  const btnLng = (t('btnLng', { returnObjects: true }));
  const {
    btnClass, ukr
  } = styles;

  const changeLng = (lang) => {
    i18n.changeLanguage(lang);
  };

  const btn = btnLng.map((item, i) => (
    <button
      className={i === 0 ? btnClass : `${btnClass} ${ukr}`}
      type="button"
      onClick={() => changeLng(item.lng)}
    >
      {item.lng}
    </button>
  ));

  return (
    <>
      {btn}
    </>
  );
};

export default BtnLng;
