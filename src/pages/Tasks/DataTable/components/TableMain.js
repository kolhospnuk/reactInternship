import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../scss/TableMain.module.css';

const TableMain = () => {
  const { t } = useTranslation();
  const eventsArr = (t('task.eventsArr', { returnObjects: true }));
  const { tableMain, tableMainSecond } = styles;

  const table = eventsArr.map((item, i) => {
    const { name, firstFact, secondFact } = item.events;

    return (
      i === 0 ? (
        <thead key={name}>
          <tr>
            <th>{item.date}</th>
            <th>{name}</th>
            <th>{firstFact}</th>
          </tr>
        </thead>
      ) : (
        <tbody key={name}>
          <tr>
            <td>{item.date}</td>
            <td>{name}</td>
            <td>
              <table className={tableMainSecond}>
                <tbody>
                  <tr>
                    <td>{firstFact}</td>
                  </tr>
                  <tr>
                    <td>{secondFact}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      )
    );
  });

  return (
    <table className={tableMain}>
      {table}
    </table>
  );
};

export default TableMain;
