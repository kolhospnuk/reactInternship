import React from 'react';
import styles from './scss/Categories.module.css';

import desk from '../../assets/img/categories/desk.png';
import chair from '../../assets/img/categories/chair.png';
import kitchenware from '../../assets/img/categories/kitchenware.png';
import shelf from '../../assets/img/categories/shelf.png';
import electronics from '../../assets/img/categories/electronics.png';

import List from './components/List';
import SectionTittle from '../../components/sectionTittle/SectionTittle';

const Categories = () => {
  const tittleId = 2;
  const { categories } = styles;
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

  return (
    <div
      className={categories}
      key={tittleId}
    >
      <SectionTittle tittleId={tittleId} />
      <List categoriesData={categoriesData} />
    </div>
  );
};

export default Categories;
