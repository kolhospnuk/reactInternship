import React from 'react';
import './scss/dataTable.css';
import TableBtns from './components/tableBtns';
import TableMain from './components/tableMain';

const DataTable = () => {
  const eventsArr = [
    {
      date: 'Date',
      events: {
        name: 'Events name',
        firstFact: 'Facts'
      }
    },
    {
      date: 1993,
      events: {
        name: 'Birth in Kropyvnytsky',
        firstFact: 'Name - Anton',
        secondFact: 'Surname - Momot'
      }
    },
    {
      date: 2000,
      events: {
        name: 'Study at school №26',
        firstFact: 'Study at junior school',
        secondFact: 'Study at high school'
      }
    },
    {
      date: 2015,
      events: {
        name: 'Passed the military department',
        firstFact: 'Very hard',
        secondFact: 'I am a strong man'
      }
    },
    {
      date: 2010,
      events: {
        name: 'Enter the flight academy',
        firstFact: 'Faculty - Search and rescue',
        secondFact: 'Football students team'
      }
    },
    {
      date: 2017,
      events: {
        name: 'Get marry',
        firstFact: "Wife's name Anna",
        secondFact: 'I am happy'
      }
    }
  ];

  const btnArr = [
    {
      key: 'add',
      name: 'Add Item'
    },
    {
      key: 'delete',
      name: 'Delete item'
    },
    {
      key: 'sort',
      name: 'Sort'
    },
    {
      key: 'sortM',
      name: ' Sort method'
    }
  ];

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
    <div className="table">
      <TableMain
        eventsArr={eventsArr}
      />
      <TableBtns
        btnArr={btnArr}
        getResult={getResult}
        eventsArr={eventsArr}
      />
    </div>
  );
};

export default DataTable;
