import React, { Component } from 'react';
import * as shortid from 'shortid';

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
