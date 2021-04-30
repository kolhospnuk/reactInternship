import React from 'react';
import PropTypes from 'prop-types';
import './scss/footer.css';
import './scss/meadiaFooter.css';
import Form from './components/Form';
import MenuList from './components/MenuList';

const Footer = ({ tittleData }) => (
  <div id="footer">
    <Form />
    <div className="footer-line" />
    <MenuList tittleData={tittleData} />
    <h4>© 2020 WOODIES</h4>
  </div>
);

Footer.propTypes = {
  tittleData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Footer;
