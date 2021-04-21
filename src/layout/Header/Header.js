import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './scss/header.css';
import './scss/mediaHeader.css';

import SmallFlower from '../../components/Flowers/SmallFlower';
import NavList from './components/NavList';
import Promo from './components/Promo';

export default class Header extends Component {
  render() {
    const { tittleData } = this.props;

    const elem = tittleData.map((item) => {
      const {
        id,
        flowerTittle,
        classSmallFlower,
        classBigFlower
      } = item;

      if (id === 'header') {
        return (
          <div
            id="header"
            key={id}
          >
            <div className="header-pink-bg" />
            <nav className="header-nav">
              <div className="header-nav-woodies">
                <SmallFlower
                  flowerTittle={flowerTittle}
                  classSmallFlower={classSmallFlower}
                />
              </div>
              <NavList />
            </nav>
            <Promo
              classBigFlower={classBigFlower}
            />
          </div>
        );
      }
      return null;
    });

    return (
      <>
        {elem}
      </>
    );
  }
}

Header.propTypes = {
  tittleData: PropTypes.arrayOf(PropTypes.string).isRequired
};
