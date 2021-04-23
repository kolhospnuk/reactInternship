import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SmallFlower from '../../../components/Flowers/SmallFlower';

export default class MenuListItem extends Component {
  constructor() {
    super();
    this.state = {
      flowerTittle: 'WOODIES'
    };
  }

  openLink = () => {
    alert('Open link');
  }

  render() {
    const { listItemArr, i, tittleData } = this.props;
    const { flowerTittle } = this.state;

    const elements = listItemArr[i].map((item, iter) => (
      i === 0 && iter === 0 ? (
        <SmallFlower
          key={item}
          classSmallFlower={tittleData[iter].classSmallFlower}
          flowerTittle={flowerTittle}
        />
      ) : (
        <li
          key={item}
          className="footer-menu-list-item"
          role="presentation"
          onClick={this.openLink}
        >
          {item}
        </li>
      )
    ));

    return (
      <>
        {elements}
      </>
    );
  }
}

MenuListItem.propTypes = {
  listItemArr: PropTypes.arrayOf(PropTypes.array).isRequired,
  tittleData: PropTypes.arrayOf(PropTypes.object).isRequired,
  i: PropTypes.number.isRequired
};
