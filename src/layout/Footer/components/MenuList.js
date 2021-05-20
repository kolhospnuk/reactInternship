import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../scss/MenuList.module.css';
import MenuListItem from './MenuListItem';

/* Footer component */
const MenuList = () => {
  const { t } = useTranslation();
  const { menuList, menu } = styles;
  const listItemArr = (t('footer.listItemArr', { returnObjects: true }));

  const elements = listItemArr.map((item, i) => (
    <ul
      key={item}
      className={menuList}
    >
      <MenuListItem
        listItemArr={listItemArr}
        i={i}
      />
    </ul>
  ));

  return (
    <div className={menu}>
      {elements}
    </div>
  );
};

export default MenuList;
