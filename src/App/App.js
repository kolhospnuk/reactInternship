import React, { Component } from 'react';
import './scss/app.css';
import './scss/mediaApp.css';

import Header from '../pages/Header/Header';
import About from '../pages/About/About';
import Custom from '../pages/Custom/Custom';
import Categories from '../pages/Categories/Categories';
import Testimony from '../pages/Testimony/Testimony';
import Footer from '../pages/Footer/Footer';
import DataTable from '../pages/DataTable/DataTable';
import MakeCocktail from '../pages/MakeCocktail/MakeCocktail';

export default class App extends Component {
  state = {
    tittleData: [
      {
        id: 'about',
        flowerTittle: 'Who we are',
        tittle: 'ABOUT US',
        classSmallFlower: 'small-flower-item',
        classBigFlower: 'big-flower big-flower-about'
      },
      {
        id: 'custom', flowerTittle: 'How to Custom', tittle: 'HOW IT WORKS', classSmallFlower: 'small-flower-item'
      },
      {
        id: 'categories', flowerTittle: 'What we have', tittle: 'CATEGORIES', classSmallFlower: 'small-flower-item'
      },
      {
        id: 'Testimony', flowerTittle: 'What they say', tittle: 'TESTIMONY', classSmallFlower: 'small-flower-item'
      },
      {
        id: 'header', flowerTittle: 'WOODIES', classSmallFlower: 'small-flower-item', classBigFlower: 'big-flower'
      },
      {
        id: 'footer', flowerTittle: 'WOODIES', classSmallFlower: 'small-flower-item'
      }
    ]
  }

  render() {
    const { tittleData } = this.state;

    return (
      <div className="container-global">
        <header>
          <h1>Woodies</h1>
        </header>
        <section id="describe">
          <h2>My project is a family business to make wooden furniture</h2>
        </section>
        <DataTable />
        <MakeCocktail />
        <div className="work-area">
          <Header tittleData={tittleData} />
          <div className="container">
            <About tittleData={tittleData} />
            <Custom tittleData={tittleData} />
            <Categories tittleData={tittleData} />
            <Testimony tittleData={tittleData} />
          </div>
          <Footer tittleData={tittleData} />
        </div>
        <footer>
          <ul className="data">
            <li className="data-item">Anton Momot</li>
            <li className="data-item">
              <a
                href="https://github.com/kolhospnuk"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li className="data-item">
              <a
                href="https://dribbble.com/shots/11018704-Woodies-Furniture-Online-Shop-Landing-Page"
                rel="noreferrer"
                target="_blank"
              >
                Template
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
