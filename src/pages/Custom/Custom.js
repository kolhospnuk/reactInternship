import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './scss/custom.css';
import './scss/mediaCustom.css';

import design from '../../assets/icons/design.svg';
import product from '../../assets/icons/product.svg';
import budget from '../../assets/icons/budget.svg';
import area from '../../assets/icons/area.svg';
import SmallFlower from '../../components/Flowers/SmallFlower';
import ModalWindow from '../../components/modalWindow/ModalWindow';

const Custom = ({ tittleData }) => {
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

  const planItem = planData.map((item) => {
    const {
      clazz,
      src,
      alt,
      name
    } = item;

    return (
      <div
        className="plan-item"
        key={name}
      >
        <div className={`plan-item-img ${clazz}`}>
          <img src={src} alt={alt} />
        </div>
        <div className="plan-item-txt">{name}</div>
      </div>
    );
  });

  const elem = tittleData.map((item) => {
    const {
      id,
      flowerTittle,
      tittle,
      classSmallFlower
    } = item;

    return (
      id === 'custom' ? (
        <div
          id="custom"
          key={id}
        >
          <div className="section-tittle">
            <div className="section-tittle-subtitle">
              <SmallFlower
                flowerTittle={flowerTittle}
                classSmallFlower={classSmallFlower}
              />
            </div>
            <div className="section-tittle-line custom-line">
              <h2>{tittle}</h2>
            </div>
          </div>
          <div className="plan">
            {planItem}
          </div>
          <button
            type="button"
            className="custom-btn orange-btn"
            onClick={() => setModalWindow((modal) => !modal)}
          >
            Get Personalized Now
          </button>
          <ModalWindow
            modalWindowName={modalWindowName}
            modalWindow={modalWindow}
          />
        </div>
      ) : null
    );
  });

  return (
    <>
      {elem}
    </>
  );
};

Custom.propTypes = {
  tittleData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Custom;
