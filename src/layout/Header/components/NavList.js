import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../scss/NavList.module.css';

import NavListItem from './NavListItem';
import ModalWindow from '../../../components/modalWindow/ModalWindow';

/* Header navigation */
const NavList = () => {
  const [modalWindow, setModalWindow] = useState(false);
  const { t } = useTranslation();
  const signUpBtn = t('header.signUp');
  const { headerNavMenu, headerNavMenuBtn } = styles;

  return (
    <>
      <ul className={headerNavMenu}>
        <NavListItem />
      </ul>
      <button
        type="button"
        key={signUpBtn}
        className={headerNavMenuBtn}
        onClick={() => setModalWindow((modal) => !modal)}
      >
        {signUpBtn}
      </button>
      <ModalWindow
        modalWindowName={signUpBtn}
        modalWindow={modalWindow}
      />
    </>
  );
};

export default NavList;
