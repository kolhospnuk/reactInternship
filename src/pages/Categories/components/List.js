import React from 'react';
import * as shortid from 'shortid';
import styles from '../scss/List.module.css';

import ListItem from './ListItem';

const List = () => {
  return (
    <div className={styles.categoriesList}>
      <ListItem key={shortid.generate()} />
    </div>
  );
};

export default List;
