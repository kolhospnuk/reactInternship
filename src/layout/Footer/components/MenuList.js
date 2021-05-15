import React from 'react';
import styles from '../scss/MenuList.module.css';
import MenuListItem from './MenuListItem';

/* Footer component */
const MenuList = () => {
  const { footerMenuList, footerMenu } = styles;
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
      className={footerMenuList}
    >
      <MenuListItem
        listItemArr={listItemArr}
        i={i}
      />
    </ul>
  ));

  return (
    <div className={footerMenu}>
      {elements}
    </div>
  );
};

export default MenuList;
