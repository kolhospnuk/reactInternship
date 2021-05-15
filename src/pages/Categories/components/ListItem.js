import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../scss/ListItem.module.css';
import desk from '../../../assets/img/categories/desk.png';
import chair from '../../../assets/img/categories/chair.png';
import kitchenware from '../../../assets/img/categories/kitchenware.png';
import shelf from '../../../assets/img/categories/shelf.png';
import electronics from '../../../assets/img/categories/electronics.png';

const ListItem = () => {
  const imgArr = [desk, chair, kitchenware, shelf, electronics];
  const { t } = useTranslation();
  const categoriesData = (t('categories.cartData', { returnObjects: true }));
  const { categoriesListItem, categoriesListItemImg, categoriesListItemBtn } = styles;

  const elem = categoriesData.map(({ name }, i) => (
    <div className={categoriesListItem}>
      <span>{name}</span>
      <img className={categoriesListItemImg} src={imgArr[i]} alt={name} />
      <button
        type="button"
        className={categoriesListItemBtn}
      >
        {t('categories.shopBtn')}
      </button>
    </div>
  ));

  return (
    <>
      {elem}
    </>
  );
};

export default ListItem;
