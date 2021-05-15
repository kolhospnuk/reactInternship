import React from 'react';
import PropTypes from 'prop-types';
import styles from '../scss/PlanList.module.css';

const PlanList = ({ planData }) => {
  const {
    plan, planItem, planItemTxt
  } = styles;
  const itemList = planData.map((item, i) => {
    const {
      src,
      alt,
      name
    } = item;

    return (
      <li
        className={planItem}
        key={name}
      >
        <div className={`${planItem}${i + 1}`}>
          <img src={src} alt={alt} />
        </div>
        <div className={planItemTxt}>{name}</div>
      </li>
    );
  });

  return (
    <div className={plan}>
      <ul>
        {itemList}
      </ul>
    </div>
  );
};

PlanList.propTypes = {
  planData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PlanList;
