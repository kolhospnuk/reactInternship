import React, { Component } from 'react';
import './scss/app.css';
import './scss/mediaApp.css';
import { ThemeProvider } from '../components/Context/ThemeContext';

import Header from '../layout/Header/Header';
import About from '../pages/About/About';
import Custom from '../pages/Custom/Custom';
import Categories from '../pages/Categories/Categories';
import Testimony from '../pages/Testimony/Testimony';
import Footer from '../layout/Footer/Footer';
import Tasks from '../pages/Tasks/Tasks';
import FooterData from '../layout/FooterData/FooterData';

export default class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
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
        id: 'header',
        flowerTittle: 'WOODIES',
        classSmallFlower: 'small-flower-item',
        classBigFlower: 'big-flower big-flower-header'
      },
      {
        id: 'footer', flowerTittle: 'WOODIES', classSmallFlower: 'small-flower-item'
      }
    ],
    themeClass: 'light',
    // eslint-disable-next-line react/no-unused-state
    themeNameBtn: 'Dark theme',
    // eslint-disable-next-line react/no-unused-state
    toggleTheme: () => {
      this.setState(({ themeClass, themeNameBtn }) => {
        return {
          themeClass: themeClass !== 'dark' ? 'dark' : 'light',
          // eslint-disable-next-line react/no-unused-state
          themeNameBtn: themeNameBtn !== 'Dark theme' ? 'Dark theme' : 'Light theme'
        };
      });
    }
  }

  render() {
    const { tittleData, themeClass } = this.state;

    return (
      <ThemeProvider value={this.state}>
        <div className={`app ${themeClass}`}>
          <Tasks />
          <Header tittleData={tittleData} />
          <div className="container">
            <About tittleData={tittleData} />
            <Custom tittleData={tittleData} />
            <Categories tittleData={tittleData} />
            <Testimony tittleData={tittleData} />
          </div>
          <Footer tittleData={tittleData} />
          <FooterData />
        </div>
      </ThemeProvider>
    );
  }
}
