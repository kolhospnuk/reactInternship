import React, { useState } from 'react';
import './scss/app.css';
import './scss/mediaApp.css';
import MyContext from '../сontext/ThemeContext';

import Header from '../layout/Header/Header';
import About from '../pages/About/About';
import Custom from '../pages/Custom/Custom';
import Categories from '../pages/Categories/Categories';
import Testimony from '../pages/Testimony/Testimony';
import Footer from '../layout/Footer/Footer';
import Tasks from '../pages/Tasks/Tasks';
import FooterData from '../layout/FooterData/FooterData';

const App = () => {
  const tittleData = [
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
  ];
  const [themeClass, setThemeClass] = useState('light');
  const [themeNameBtn, setThemeNameBtn] = useState('Dark theme');

  const changeThemeClass = () => setThemeClass((themeClazz) => (
    themeClazz !== 'dark' ? 'dark' : 'light'));
  const changeThemeNameBtn = () => setThemeNameBtn((themeBtn) => (
    themeBtn !== 'Dark theme' ? 'Dark theme' : 'Light theme'));

  const themeData = {
    themeClass,
    themeNameBtn,
    toggleTheme: () => {
      changeThemeClass();
      changeThemeNameBtn();
    }
  };

  return (
    <MyContext.Provider value={themeData}>
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
    </MyContext.Provider>
  );
};

export default App;
