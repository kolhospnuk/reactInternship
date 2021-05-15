import React from 'react';
import * as shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from '../scss/List.module.css';

import ListItem from './ListItem';

const List = ({ categoriesData }) => {
  const elements = categoriesData.map((item, i) => (
    <ListItem
      key={shortid.generate()}
      categoriesData={categoriesData}
      i={i}
    />
  ));

  return (
    <div className={styles.categoriesList}>
      {elements}
    </div>
  );
};

List.propTypes = {
  categoriesData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default List;
