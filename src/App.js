import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
import Promo from './pages/Promo/Promo';

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
    <Router>
      <>
        <MyContext.Provider value={themeData}>
          <div className={`${app} ${themeData.themeClass}`}>
            <Header />
            <Route path="/promo" exact component={Promo} />
            <div className={container}>
              <Route path="/tasks" component={Tasks} />
              <Route path="/about" component={About} />
              <Route path="/custom" component={Custom} />
              <Route path="/categories" component={Categories} />
              <Route path="/testimony" component={Testimony} />
            </div>
            <Footer />
            <FooterContacts />
          </div>
        </MyContext.Provider>
      </>
    </Router>
  );
};

export default App;
