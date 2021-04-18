import React, { Component } from 'react';
import './scss/categories.css';
import './scss/mediaCategories.css';

import desk from '../../assets/img/categories/desk.png';
import chair from '../../assets/img/categories/chair.png';
import kitchenware from '../../assets/img/categories/kitchenware.png';
import shelf from '../../assets/img/categories/shelf.png';
import electronics from '../../assets/img/categories/electronics.png';

import SmallFlower from '../../components/Flowers/SmallFlower';
import List from './components/List';

export default class Categories extends Component {
  state = {
    categoriesData: [
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
    ]
  }

  render() {
    const { categoriesData } = this.state;
    const { tittleData } = this.props;

    const elem = tittleData.map((item) => {
      const { id, flowerTittle, tittle, classSmallFlower } = item;

      if (id === 'categories') {
        return (
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
        );
      }
      return null;
    });

    return (
      <>
        {elem}
      </>
    );
  }
}
