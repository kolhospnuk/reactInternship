import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './scss/Custom.module.css';

import ModalWindow from '../../components/modalWindow/ModalWindow';
import SectionTittle from '../../components/sectionTittle/SectionTittle';
import OrangeBtn from '../../components/orangeBtn/OrangeBtn';
import PlanList from './components/PlanList';

const Custom = () => {
  const [modalWindow, setModalWindow] = useState(false);
  const { t } = useTranslation();
  const { flowerTittle, tittle } = (t('custom', { returnObjects: true }));

  return (
    <div
      className={styles.custom}
      key={flowerTittle}
    >
      <SectionTittle
        flowerTittle={flowerTittle}
        tittle={tittle}
      />
      <PlanList />
      <OrangeBtn
        classBtn="customBtn"
        setModalWindow={setModalWindow}
        nameBtn="Get Personalized Now"
      />
      <ModalWindow
        modalWindowName={t('modalWindowName')}
        modalWindow={modalWindow}
      />
    </div>
  );
};

export default Custom;
