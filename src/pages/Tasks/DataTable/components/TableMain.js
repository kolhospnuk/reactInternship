import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../scss/TableMain.module.css';

const TableMain = () => {
  const { t } = useTranslation();
  const eventsArr = (t('task.eventsArr', { returnObjects: true }));
  const { date, events } = (t('task.tableHeader', { returnObjects: true }));
  const { tableMain, tableMainSecond } = styles;

  const headerTable = (
    <thead key={events.name}>
      <tr>
        <th>{date}</th>
        <th>{events.name}</th>
        <th>{events.firstFact}</th>
      </tr>
    </thead>
  );

  const table = eventsArr.map((item) => {
    const { name, firstFact, secondFact } = item.events;

    return (
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
    );
  });

  return (
    <table className={tableMain}>
      {headerTable}
      {table}
    </table>
  );
};

export default TableMain;
