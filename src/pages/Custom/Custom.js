import React, { useState } from 'react';
import styles from './scss/Custom.module.css';

import design from '../../assets/icons/design.svg';
import product from '../../assets/icons/product.svg';
import budget from '../../assets/icons/budget.svg';
import area from '../../assets/icons/area.svg';
import ModalWindow from '../../components/modalWindow/ModalWindow';
import SectionTittle from '../../components/sectionTittle/SectionTittle';
import OrangeBtn from '../../components/orangeBtn/OrangeBtn';
import PlanList from './components/PlanList';

const Custom = () => {
  const tittleId = 1;
  const {
    custom
  } = styles;
  // PlanNum ???
  const modalWindowName = 'Custom';
  const planData = [
    {
      clazz: 'plan-num1',
      src: design,
      alt: 'design',
      name: 'Choose Design'
    },
    {
      clazz: 'plan-num2',
      src: area,
      alt: 'area',
      name: 'Area measuring'
    },
    {
      clazz: 'plan-num3',
      src: budget,
      alt: 'budget',
      name: 'Budgeting'
    },
    {
      clazz: 'plan-num4',
      src: product,
      alt: 'product',
      name: 'Production'
    }
  ];

  const [modalWindow, setModalWindow] = useState(false);

  return (
    <div
      className={custom}
      key={tittleId}
    >
      <SectionTittle
        tittleId={tittleId}
      />
      <PlanList planData={planData} />
      <OrangeBtn
        setModalWindow={setModalWindow}
        nameBtn="Get Personalized Now"
      />
      <ModalWindow
        modalWindowName={modalWindowName}
        modalWindow={modalWindow}
      />
    </div>
  );
};

export default Custom;
