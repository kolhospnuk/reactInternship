import React, { Component } from 'react';
import * as shortid from 'shortid';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

export default class List extends Component {
  render() {
    const { categoriesData } = this.props;

    const elements = categoriesData.map((item, i) => {
      return (
        <ListItem
          key={shortid.generate()}
          categoriesData={categoriesData}
          i={i}
        />
      );
    });

    return (
      <div className="categories-list">
        {elements}
      </div>
    );
  }
}

List.propTypes = {
  categoriesData: PropTypes.arrayOf(PropTypes.string).isRequired
};
