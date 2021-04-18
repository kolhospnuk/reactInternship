import React, { Component } from 'react';

export default class ListItem extends Component {

  render() {
    const { categoriesData, i } = this.props;

    const { name, img, btn } = categoriesData[i];

    return (
      <div className="categories-list-item">
        <span>{name}</span>
        <img className="categories-list-item-img" src={img} alt={name} />
        <button
          type="button"
          className="categories-list-item-btn"
        >
          {btn}
        </button>
      </div>
    );
  }
}
