import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../scss/PlanListItem.module.css';

import design from '../../../assets/icons/design.svg';
import area from '../../../assets/icons/area.svg';
import budget from '../../../assets/icons/budget.svg';
import product from '../../../assets/icons/product.svg';

const PlanListItem = () => {
  const imgArr = [design, area, budget, product];
  const { t } = useTranslation();
  const planData = (t('custom.planData', { returnObjects: true }));
  const { planItem, planItemTxt } = styles;

  const elem = planData.map((item, i) => {
    const { alt, name } = item;

    return (
      <li
        className={planItem}
        key={name}
      >
        <img src={imgArr[i]} alt={alt} />
        <div className={planItemTxt}>{name}</div>
      </li>
    );
  });

  return (
    <>
      {elem}
    </>
  );
};

export default PlanListItem;
