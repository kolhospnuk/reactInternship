import React from 'react';
import PropTypes from 'prop-types';
import SmallFlower from '../../../components/Flowers/SmallFlower';

/* Footer component */
const MenuListItem = ({ listItemArr, i, tittleData }) => {
  const openLink = () => {
    alert('Open link');
  };

  const elements = listItemArr[i].map((item, iter) => (
    i === 0 && iter === 0 ? (
      <SmallFlower
        key={item}
        classSmallFlower={tittleData[iter].classSmallFlower}
        flowerTittle={item}
      />
    ) : (
      <li
        key={item}
        className="footer-menu-list-item"
        role="presentation"
        onClick={openLink}
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
};

MenuListItem.propTypes = {
  listItemArr: PropTypes.arrayOf(PropTypes.array).isRequired,
  tittleData: PropTypes.arrayOf(PropTypes.object).isRequired,
  i: PropTypes.number.isRequired
};

export default MenuListItem;
