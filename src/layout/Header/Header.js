import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './scss/Header.module.css';
import flowerOrange from '../../assets/icons/flowerOrange.png';

import NavList from './components/NavList';
import Promo from './components/Promo';

const Header = () => {
  const { t } = useTranslation();
  const {
    header, headerPinkBg, headerNav, headerNavWoodies
  } = styles;

  return (
    <div
      className={header}
      key={header}
    >
      <div className={headerPinkBg} />
      <nav className={headerNav}>
        <div className={headerNavWoodies}>
          <img src={flowerOrange} alt="flowerOrange" />
          <span>{t('woodies')}</span>
        </div>
        <NavList />
      </nav>
      <Promo />
    </div>
  );
};

export default Header;
