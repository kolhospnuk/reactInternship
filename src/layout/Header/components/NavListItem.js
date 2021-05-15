import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../scss/NavListItem.module.css';

/* Header navigation */
const NavListItem = () => {
  const { t } = useTranslation();
  const tittles = (t('header.navListTittles', { returnObjects: true }));
  const { headerNavMenuItem } = styles;

  const contentList = tittles.map((item) => (
    <li className={headerNavMenuItem}>
      <a key={item.name} href={item.link}>{item.name}</a>
    </li>
  ));

  return (
    <>
      { contentList }
    </>
  );
};

export default NavListItem;
