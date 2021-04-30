import React from 'react';
import PropTypes from 'prop-types';
import './scss/categories.css';
import './scss/mediaCategories.css';

import desk from '../../assets/img/categories/desk.png';
import chair from '../../assets/img/categories/chair.png';
import kitchenware from '../../assets/img/categories/kitchenware.png';
import shelf from '../../assets/img/categories/shelf.png';
import electronics from '../../assets/img/categories/electronics.png';

import SmallFlower from '../../components/Flowers/SmallFlower';
import List from './components/List';

const Categories = ({ tittleData }) => {
  const categoriesData = [
    {
      name: 'Desk',
      img: desk,
      btn: 'Shop now'
    },
    {
      name: 'Chair',
      img: chair,
      btn: 'Shop now'
    },
    {
      name: 'Kitchenware',
      img: kitchenware,
      btn: 'Shop now'
    },
    {
      name: 'Book Shelf',
      img: shelf,
      btn: 'Shop now'
    },
    {
      name: 'Electronics',
      img: electronics,
      btn: 'Shop now'
    }
  ];

  const elem = tittleData.map((item) => {
    const {
      id,
      flowerTittle,
      tittle,
      classSmallFlower
    } = item;

    return (
      id === 'categories' ? (
        <div
          id="categories"
          key={id}
        >
          <div className="section-tittle">
            <div className="section-tittle-subtitle">
              <SmallFlower
                flowerTittle={flowerTittle}
                classSmallFlower={classSmallFlower}
              />
            </div>
            <div className="section-tittle-line categories-line">
              <h2>{tittle}</h2>
            </div>
          </div>
          <List categoriesData={categoriesData} />
        </div>
      ) : null
    );
  });

  return (
    <>
      {elem}
    </>
  );
};

Categories.propTypes = {
  tittleData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Categories;
