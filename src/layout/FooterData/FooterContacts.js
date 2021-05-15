import React from 'react';
import styles from './FooterData.module.css';

const FooterContacts = () => (
  <div className={styles.footer}>
    <ul className={styles.data}>
      <li className={styles.dataItem}>Anton Momot</li>
      <li className={styles.dataItem}>
        <a
          href="https://github.com/kolhospnuk"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </li>
      <li className={styles.dataItem}>
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

export default FooterContacts;
