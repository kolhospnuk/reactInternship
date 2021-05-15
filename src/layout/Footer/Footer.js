import React from 'react';
import PropTypes from 'prop-types';
import styles from './scss/Footer.module.css';
import Form from './components/Form';
import MenuList from './components/MenuList';

const Footer = ({ tittleData }) => (
  <div className={styles.footer}>
    <Form />
    <div className={styles.footerLine} />
    <MenuList tittleData={tittleData} />
    <h4>© 2020 WOODIES</h4>
  </div>
);

Footer.propTypes = {
  tittleData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Footer;
