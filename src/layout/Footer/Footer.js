import React from 'react';
import styles from './scss/Footer.module.css';
import Form from './components/Form';
import MenuList from './components/MenuList';

const Footer = () => (
  <div className={styles.footer}>
    <Form />
    <div className={styles.footerLine} />
    <MenuList />
    <h4>© 2020 WOODIES</h4>
  </div>
);

export default Footer;
