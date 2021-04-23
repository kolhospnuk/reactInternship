import React from 'react';
import PropTypes from 'prop-types';
import './scss/header.css';
import './scss/mediaHeader.css';

import SmallFlower from '../../components/Flowers/SmallFlower';
import NavList from './components/NavList';
import Promo from './components/Promo';

const Header = ({ tittleData }) => {
  const elem = tittleData.map((item) => {
    const {
      id,
      flowerTittle,
      classSmallFlower,
      classBigFlower
    } = item;

    return (
      id === 'header' ? (
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
      ) : null
    );
  });

  return (
    <>
      {elem}
    </>
  );
};

Header.propTypes = {
  tittleData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Header;
