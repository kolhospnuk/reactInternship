import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../scss/Promo.module.css';

import table from '../../../assets/img/header/table.png';
import ModalWindow from '../../../components/modalWindow/ModalWindow';
import OrangeBtn from '../../../components/orangeBtn/OrangeBtn';

const Promo = () => {
  const [modalWindow, setModalWindow] = useState(false);
  const { t } = useTranslation();
  const {
    areYou, wooden, forYour, thisIs, right, nameBtn, modalWindowName
  } = (t('header', { returnObjects: true }));
  const {
    headerPromo, headerPromoTxt, headerPromoTxtFurniture,
    headerPromoTxtPlace, headerPromoImg
  } = styles;

  return (
    <div className={headerPromo}>
      <div className={headerPromoTxt}>
        <h3 className={headerPromoTxtFurniture}>
          {areYou}
          &nbsp;
          <span>
            {wooden}
          </span>
          &nbsp;
          {forYour}
        </h3>
        <h2 className={headerPromoTxtPlace}>
          {thisIs}
          <br />
          {right}
        </h2>
        <OrangeBtn
          classBtn="headerBtn"
          setModalWindow={setModalWindow}
          nameBtn={nameBtn}
        />
      </div>
      <div className={headerPromoImg}>
        <img src={table} alt={table} />
      </div>
      <ModalWindow
        modalWindowName={modalWindowName}
        modalWindow={modalWindow}
      />
    </div>
  );
};

export default Promo;
