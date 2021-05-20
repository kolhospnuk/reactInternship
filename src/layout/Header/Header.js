import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './scss/Header.module.css';

import NavList from './components/NavList';

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
          <span>{t('woodies')}</span>
        </div>
        <NavList />
      </nav>
    </div>
  );
};

export default Header;
