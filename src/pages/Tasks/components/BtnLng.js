import React from 'react';
import { useTranslation } from 'react-i18next';

const BtnLng = () => {
  const { i18n, t } = useTranslation();
  const btnsLng = (t('btnsLng', { returnObjects: true }));

  const changeLng = (lang) => {
    i18n.changeLanguage(lang);
  };

  const btn = btnsLng.map((item) => (
    <button
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
