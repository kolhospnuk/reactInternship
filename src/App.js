import React, { useState } from 'react';
import styles from './styles/App.module.css';
import MyContext from './сontext/ThemeContext';

import Header from './layout/Header/Header';
import About from './pages/About/About';
import Custom from './pages/Custom/Custom';
import Categories from './pages/Categories/Categories';
import Testimony from './pages/Testimony/Testimony';
import Footer from './layout/Footer/Footer';
import Tasks from './pages/Tasks/Tasks';
import FooterContacts from './layout/FooterData/FooterContacts';

const App = () => {
  const {
    app, container, light, dark
  } = styles;

  const [themeClass, setThemeClass] = useState(light);
  const [themeNameBtn, setThemeNameBtn] = useState('Dark theme');

  const changeThemeClass = () => setThemeClass((themeClazz) => (
    themeClazz !== dark ? dark : light));
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
    <>
      <MyContext.Provider value={themeData}>
        <div className={`${app} ${themeData.themeClass}`}>
          <Tasks />
          <Header />
          <div className={container}>
            <About />
            <Custom />
            <Categories />
            <Testimony />
          </div>
          <Footer />
          <FooterContacts />
        </div>
      </MyContext.Provider>
    </>
  );
};

export default App;
