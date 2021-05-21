import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from '../scss/NavListItem.module.css';

/* Header navigation */
const NavListItem = () => {
  const { t } = useTranslation();
  const tittles = (t('header.navListTittles', { returnObjects: true }));
  const { headerNavMenuItem } = styles;

  const contentList = tittles.map(({ name, link }) => (
    <li className={headerNavMenuItem} key={name}>
      <Link to={link}>{name}</Link>
    </li>
  ));

  return (
    <>
      { contentList }
    </>
  );
};

export default NavListItem;
