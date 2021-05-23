import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../scss/BtnLng.module.css';

const BtnLng = () => {
  const { i18n, t } = useTranslation();
  const btnLng = (t('btnLng', { returnObjects: true }));
  const { btnClass, ukr } = styles;

  const changeLng = (lng) => {
    i18n.changeLanguage(lng);
  };

  const btn = btnLng.map(({ lng }, i) => (
    <button
      key={lng}
      className={i === 0 ? btnClass : `${btnClass} ${ukr}`}
      type="button"
      onClick={() => changeLng(lng)}
    >
      {lng}
    </button>
  ));

  return (
    <>
      {btn}
    </>
  );
};

export default BtnLng;
