import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../scss/promo.css';

import BigFlower from '../../../components/Flowers/BigFlower';
import table from '../../../assets/img/header/table.png';
import ModalWindow from '../../../components/modalWindow/ModalWindow';

const Promo = ({ classBigFlower }) => {
  const modalWindowName = 'Promo';
  const [modalWindow, setModalWindow] = useState(false);

  return (
    <div className="header-promo">
      <div className="header-promo-txt">
        <h3 className="header-promo-txt-furniture">
          Are you looking for
          <br />
          <span>
            wooden furniture
          </span>
          <br />
          for your place?
        </h3>
        <h2 className="header-promo-txt-place">
          This is the
          <br />
          Right Place
        </h2>
        <button
          type="button"
          className="header-promo-txt-btn orange-btn"
          onClick={() => setModalWindow((modal) => !modal)}
        >
          Explore Furniture
        </button>
      </div>
      <div className="header-promo-img">
        <BigFlower
          classBigFlower={classBigFlower}
        />
        <div className="header-promo-img-table">
          <img src={table} alt={table} />
        </div>
      </div>
      <ModalWindow
        modalWindowName={modalWindowName}
        modalWindow={modalWindow}
      />
    </div>
  );
};

Promo.propTypes = {
  classBigFlower: PropTypes.string.isRequired
};

export default Promo;
