import React from 'react';
import styles from '../scss/PlanList.module.css';
import PlanListItem from './PlanListItem';

const PlanList = () => {
  return (
    <div className={styles.plan}>
      <ul>
        <PlanListItem />
      </ul>
    </div>
  );
};

export default PlanList;
