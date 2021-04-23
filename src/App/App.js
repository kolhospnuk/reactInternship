import React, { Component } from 'react';
import './scss/app.css';
import './scss/mediaApp.css';
import { ThemeProvider } from '../сontext/ThemeContext';

import Header from '../layout/Header/Header';
import About from '../pages/About/About';
import Custom from '../pages/Custom/Custom';
import Categories from '../pages/Categories/Categories';
import Testimony from '../pages/Testimony/Testimony';
import Footer from '../layout/Footer/Footer';
import Tasks from '../pages/Tasks/Tasks';
import FooterData from '../layout/FooterData/FooterData';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
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
          classBigFlower: 'big-flower'
        },
        {
          id: 'footer', flowerTittle: 'WOODIES', classSmallFlower: 'small-flower-item'
        }
      ],
      themeData: {
        themeClass: 'light',
        themeNameBtn: 'Dark theme',
        toggleTheme: () => {
          this.setState((state) => ({
            themeData: {
              ...state.themeData,
              themeClass: state.themeData.themeClass !== 'dark' ? 'dark' : 'light',
              themeNameBtn: state.themeData.themeNameBtn !== 'Dark theme' ? 'Dark theme' : 'Light theme'
            }
          }));
        }
      }
    };
  }

  render() {
    const { tittleData, themeData } = this.state;

    return (
      <ThemeProvider value={themeData}>
        <div className={`app ${themeData.themeClass}`}>
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

// themeData: {
//   themeClass: 'light',
//     themeNameBtn: 'Dark theme',
//     // eslint-disable-next-line react/no-unused-state
//     toggleTheme: () => {
//     this.setState(({ themeClass, themeNameBtn }) => {
//       return {
//         themeClass: themeClass !== 'dark' ? 'dark' : 'light',
//         themeNameBtn: themeNameBtn !== 'Dark theme' ? 'Dark theme' : 'Light theme'
//       };
//     });
//   }
// }
