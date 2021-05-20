import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './scss/About.module.css';

import plates from '../../assets/img/custom/plates.png';
import spoons from '../../assets/img/custom/spoons.png';
import SectionTittle from '../../components/sectionTittle/SectionTittle';

const About = () => {
  const { t } = useTranslation();
  const { flowerTittle, tittle } = (t('about', { returnObjects: true }));
  const {
    woodies, isHome, modern, theAnswer, withShapes,
    customizedFurn, made, getItEasy, dwelling
  } = (t('about', { returnObjects: true }));
  const {
    about, customized, customizedImg, dishes, dishesImg, dishesImgBg, dishesTxt
  } = styles;

  return (
    <div
      className={about}
      key={flowerTittle}
    >
      <SectionTittle
        flowerTittle={flowerTittle}
        tittle={tittle}
      />
      <div className={dishes}>
        <div className={dishesImg}>
          <div className={dishesImgBg} />
          <img src={plates} alt="plates" />
        </div>
        <div className={dishesTxt}>
          <h3>
            {woodies}
            &nbsp;
            <span>
              {isHome}
              <br />
              {modern}
            </span>
          </h3>
          <h4>
            {theAnswer}
            <br />
            {withShapes}
          </h4>
        </div>
      </div>
      <div className={customized}>
        <h3>
          {customizedFurn}
          &nbsp;
          <span>
            {made}
            <br />
          </span>
        </h3>
        <h4>
          {getItEasy}
          <br />
          {dwelling}
        </h4>
        <div className={customizedImg}>
          <img src={spoons} alt="spoons" />
        </div>
      </div>
    </div>
  );
};

export default About;
