import React from 'react';
import './footerData.css';

const FooterData = () => {
  return (
    <div className="footer">
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
    </div>
  );
};

export default FooterData;
