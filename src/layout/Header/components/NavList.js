import React, { useState } from 'react';
import '../scss/navList.css';
import NavListItem from './NavListItem';
import ModalWindow from '../../../components/modalWindow/ModalWindow';

/* Header navigation */
const NavList = () => {
  const modalWindowName = 'Sing up';
  const [modalWindow, setModalWindow] = useState(false);

  return (
    <>
      <ul className="header-nav-menu">
        <NavListItem setModalWindow={() => setModalWindow((modal) => !modal)} />
      </ul>
      <ModalWindow
        modalWindowName={modalWindowName}
        modalWindow={modalWindow}
      />
    </>
  );
};

export default NavList;
