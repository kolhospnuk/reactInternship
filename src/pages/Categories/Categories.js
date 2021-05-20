import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './scss/Categories.module.css';

import List from './components/List';
import SectionTittle from '../../components/sectionTittle/SectionTittle';

const Categories = () => {
  const { t } = useTranslation();
  const { flowerTittle, tittle } = (t('categories', { returnObjects: true }));

  return (
    <div
      className={styles.categories}
      key={flowerTittle}
    >
      <SectionTittle
        flowerTittle={flowerTittle}
        tittle={tittle}
      />
      <List />
    </div>
  );
};

export default Categories;
