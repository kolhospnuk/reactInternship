import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/menuList.css';
import MenuListItem from './MenuListItem';

export default class MenuList extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    listItemArr: [
      ['Product', '(012) 8967453', 'woodies@gmail.com', 'Jakarta, Indonesia'],
      ['Product', 'Furnitures', 'Packages', 'Services'],
      ['Resources', 'Blog', 'FAQs', 'Contact Us'],
      ['Company', 'About Us', 'Jobs', 'Our Team'],
      ['Follow Us', 'Facebook', 'Instagram', 'Twitter']
    ]
  }

  render() {
    const { listItemArr } = this.state;
    const { tittleData } = this.props;

    const elements = listItemArr.map((item, i) => {
      return (
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
      );
    });

    return (
      <div className="footer-menu">
        {elements}
      </div>
    );
  }
}

MenuList.propTypes = {
  tittleData: PropTypes.arrayOf(PropTypes.string).isRequired
};
