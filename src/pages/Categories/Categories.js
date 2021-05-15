import React from 'react';
import styles from './scss/Categories.module.css';

import List from './components/List';
import SectionTittle from '../../components/sectionTittle/SectionTittle';

const Categories = () => {
  const tittleId = 2;

  return (
    <div
      className={styles.categories}
      key={tittleId}
    >
      <SectionTittle tittleId={tittleId} />
      <List />
    </div>
  );
};

export default Categories;
