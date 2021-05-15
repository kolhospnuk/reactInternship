import React from 'react';
import styles from './scss/About.module.css';

import plates from '../../assets/img/custom/plates.png';
import spoons from '../../assets/img/custom/spoons.png';
import SectionTittle from '../../components/sectionTittle/SectionTittle';

const About = () => {
  const tittleId = 0;
  const {
    about, customized, customizedImg, dishes, dishesImg, dishesImgBg, dishesTxt
  } = styles;

  return (
    <div
      className={about}
      key={tittleId}
    >
      <SectionTittle tittleId={tittleId} />
      <div className={dishes}>
        <div className={dishesImg}>
          <div className={dishesImgBg} />
          <img src={plates} alt="plates" />
        </div>
        <div className={dishesTxt}>
          <h3>
            WOODIES is the&nbsp;
            <span>
              home of
              <br />
              modern wooden furniture
            </span>
          </h3>
          <h4>
            the answer to your need for furniture
            <br />
            with shapes, sizes and colors.
          </h4>
        </div>
      </div>
      <div className={customized}>
        <h3>
          Customized furniture&nbsp;
          <span>
            made just for you
            <br />
          </span>
        </h3>
        <h4>
          Get it easy to adjust furniture to the shape and size of your
          <br />
          dwelling or business.
        </h4>
        <div className={customizedImg}>
          <img src={spoons} alt="spoons" />
        </div>
      </div>
    </div>
  );
};

export default About;
