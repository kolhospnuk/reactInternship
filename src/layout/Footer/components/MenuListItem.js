import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SmallFlower from '../../../components/Flowers/SmallFlower';

export default class MenuListItem extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    flowerTittle: 'WOODIES'
  }

  openLink = () => {
    alert('Open link');
  }

  render() {
    const { listItemArr, i, tittleData } = this.props;
    const { flowerTittle } = this.state;

    const elements = listItemArr[i].map((item, iter) => {
      if (i === 0 && iter === 0) {
        return (
          <SmallFlower
            key={item}
            classSmallFlower={tittleData[iter].classSmallFlower}
            flowerTittle={flowerTittle}
          />
        );
      }
      return (
        <li
          key={item}
          className="footer-menu-list-item"
          role="presentation"
          onClick={this.openLink}
        >
          {item}
        </li>
      );
    });

    return (
      <>
        {elements}
      </>
    );
  }
}

MenuListItem.propTypes = {
  listItemArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  tittleData: PropTypes.arrayOf(PropTypes.string).isRequired,
  i: PropTypes.number.isRequired
};
