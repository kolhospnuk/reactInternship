import React from 'react';
import styles from './scss/Testimony.module.css';

import room from '../../assets/img/testimony/room.png';
import kitchen from '../../assets/img/testimony/kitchen.png';

import ImgList from './components/ImgList';
import CommentList from './components/CommentList';
import Points from './components/Points';
import SectionTittle from '../../components/sectionTittle/SectionTittle';

const Testimony = () => {
  const tittleId = 3;
  const { testimonyList, testimony } = styles;
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

  return (
    <section
      className={testimony}
      key={tittleId}
    >
      <SectionTittle tittleId={tittleId} />
      <div className={testimonyList}>
        <ImgList imgListLinks={imgListLinks} />
        <CommentList />
      </div>
      <Points />
    </section>
  );
};

export default Testimony;
