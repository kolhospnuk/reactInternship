import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/promo.css';

import BigFlower from '../../../components/Flowers/BigFlower';
import ModalFurniture from './ModalFurniture';
import table from '../../../assets/img/header/table.png';

export default class Promo extends Component {
  state = {
    modalState: false
  }

  openModal = () => {
    this.setState(({ modalState }) => ({ modalState: !modalState }));
  }

  render() {
    const { modalState } = this.state;
    const { classBigFlower } = this.props;

    return (
      <div className="header-promo">
        <div className="header-promo-txt">
          <h3 className="header-promo-txt-furniture">
            Are you looking for
            <span>
              wooden
              <br />
              furniture
            </span>
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
            onClick={this.openModal}
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
        <ModalFurniture modalState={modalState} />
      </div>
    );
  }
}

Promo.propTypes = {
  classBigFlower: PropTypes.string.isRequired
};
