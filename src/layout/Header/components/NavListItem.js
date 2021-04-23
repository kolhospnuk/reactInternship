import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/navListItem.css';

export default class NavListItem extends Component {
  constructor() {
    super();
    this.state = {
      tittles: [
        {
          name: 'Home',
          link: '#Header'
        },
        {
          name: 'About Us',
          link: '#About'
        },
        {
          name: 'How it works',
          link: '#Custom'
        },
        {
          name: 'Categories',
          link: '#Categories'
        },
        {
          name: 'Testimony',
          link: '#Testimony'
        },
        {
          name: 'SIGN UP',
          link: '#Header'
        }
      ]
    };
  }

  render() {
    const { tittles } = this.state;
    const { openModal } = this.props;

    const contentList = tittles.map((item, i) => (
      i === tittles.length - 1 ? (
        <button
          type="button"
          key={tittles[tittles.length - 1].name}
          className="header-nav-menu-btn orange-btn"
          onClick={openModal}
        >
          {tittles[tittles.length - 1].name}
        </button>
      )
        : <a key={item.name} href={item.link}>{item.name}</a>
    ));

    return (
      <li className="header-nav-menu-item">
        {contentList}
      </li>
    );
  }
}

NavListItem.propTypes = {
  openModal: PropTypes.func.isRequired
};
