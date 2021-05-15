import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from '../scss/TableBtns.module.css';

const TableBtns = ({ getResult }) => {
  const { t } = useTranslation();
  const btnArr = (t('task.btnArr', { returnObjects: true }));
  const eventsArr = (t('task.eventsArr', { returnObjects: true }));
  const { tableBtn, tableBtnItem } = styles;
  const btnKeys = ['add', 'delete', 'sort', 'sortM'];

  const btn = btnArr.map((item, i) => {
    const { name } = item;
    return (
      <button
        type="button"
        key={name}
        className={tableBtnItem}
        onClick={() => getResult(btnKeys[i], [...eventsArr])}
      >
        {name}
      </button>
    );
  });

  return (
    <div className={tableBtn}>
      {btn}
    </div>
  );
};

TableBtns.propTypes = {
  getResult: PropTypes.func.isRequired
};

export default TableBtns;
