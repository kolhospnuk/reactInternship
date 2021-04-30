import React from 'react';
import PropTypes from 'prop-types';
import './scss/testimony.css';
import './scss/meadiaTestimony.css';

import room from '../../assets/img/testimony/room.png';
import kitchen from '../../assets/img/testimony/kitchen.png';

import SmallFlower from '../../components/Flowers/SmallFlower';
import ImgList from './components/ImgList';
import CommentList from './components/CommentList';
import Points from './components/Points';

const Testimony = ({ tittleData }) => {
  const imgListLinks = [
    {
      img: room,
      alt: 'room'
    },
    {
      img: kitchen,
      alt: 'kitchen'
    }
  ];

  const elem = tittleData.map((item) => {
    const {
      id,
      flowerTittle,
      tittle,
      classSmallFlower
    } = item;

    return (
      id === 'Testimony' ? (
        <section
          id="testimony"
          key={id}
        >
          <div className="section-tittle">
            <div className="section-tittle-subtitle">
              <SmallFlower
                flowerTittle={flowerTittle}
                classSmallFlower={classSmallFlower}
              />
            </div>
            <div className="section-tittle-line testimony-line">
              <h2>{tittle}</h2>
            </div>
          </div>
          <div className="testimony-list">
            <ImgList imgListLinks={imgListLinks} />
            <CommentList />
          </div>
          <Points />
        </section>
      ) : null
    );
  });

  return (
    <>
      {elem}
    </>
  );
};

Testimony.propTypes = {
  tittleData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Testimony;
