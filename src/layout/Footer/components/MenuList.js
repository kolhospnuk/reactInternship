import React from 'react';
import PropTypes from 'prop-types';
import '../scss/menuList.css';
import MenuListItem from './MenuListItem';

/* Footer component */
const MenuList = ({ tittleData }) => {
  const listItemArr = [
    ['WOODIES', '(012) 8967453', 'woodies@gmail.com', 'Jakarta, Indonesia'],
    ['Product', 'Furnitures', 'Packages', 'Services'],
    ['Resources', 'Blog', 'FAQs', 'Contact Us'],
    ['Company', 'About Us', 'Jobs', 'Our Team'],
    ['Follow Us', 'Facebook', 'Instagram', 'Twitter']
  ];

  const elements = listItemArr.map((item, i) => (
    <ul
      key={item}
      className="footer-menu-list"
    >
      <MenuListItem
        listItemArr={listItemArr}
        i={i}
        tittleData={tittleData}
      />
    </ul>
  ));

  return (
    <div className="footer-menu">
      {elements}
    </div>
  );
};

MenuList.propTypes = {
  tittleData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MenuList;
