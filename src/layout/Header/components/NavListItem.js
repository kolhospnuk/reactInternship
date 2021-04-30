import React from 'react';
import PropTypes from 'prop-types';
import '../scss/navListItem.css';

/* Header navigation */
const NavListItem = ({ setModalWindow }) => {
  const tittles = [
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
  ];

  const contentList = tittles.map((item, i) => (
    i === tittles.length - 1 ? (
      <button
        type="button"
        key={tittles[tittles.length - 1].name}
        className="header-nav-menu-btn orange-btn"
        onClick={setModalWindow}
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
};

NavListItem.propTypes = {
  setModalWindow: PropTypes.func.isRequired
};

export default NavListItem;
