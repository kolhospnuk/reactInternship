import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './scss/DataTable.module.css';
import TableBtns from './components/TableBtns';
import TableMain from './components/TableMain';

const DataTable = () => {
  const { t } = useTranslation();
  const eventsArr = (t('task.eventsArr', { returnObjects: true }));

  function getResult(btn, copyEventsArr) {
    switch (btn) {
      case 'add': {
        const speakEvent = {
          date: copyEventsArr[1].date,
          events: {
            ...copyEventsArr.events,
            name: 'First words',
            firstFact: 'Mom',
            secondFact: 'Dad'
          }
        };
        copyEventsArr.push(speakEvent);
        break;
      }

      case 'delete':
        copyEventsArr.pop();
        break;

      case 'sort': {
        const sort = () => {
          copyEventsArr.forEach((item, i, arr) => {
            if (i + 1 < arr.length && arr[i].date > arr[i + 1].date) {
              arr.push(item);
              arr.splice(i, 1);
              sort(copyEventsArr);
            }
          });
        };

        sort();
        break;
      }

      case 'sortM':
        copyEventsArr.sort((a, b) => (a.date > b.date ? 1 : -1));
        break;

      default:
        console.log('error');
    }

    console.log(eventsArr);
    console.log(copyEventsArr);
  }

  return (
    <div className={styles.table}>
      <TableMain />
      <TableBtns getResult={getResult} />
    </div>
  );
};

export default DataTable;
